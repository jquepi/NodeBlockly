/**
 * @license
 * Visual Blocks Editor
 *
 * Copyright 2011 Google Inc.
 * https://developers.google.com/blockly/
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverview Core JavaScript library for Blockly.
 * @author fraser@google.com (Neil Fraser)
 */
'use strict';

/**
 * The top level namespace used to access the Blockly library.
 * @namespace Blockly
 **/
goog.provide('Blockly');

goog.require('Blockly.BlockSvg.render');
goog.require('Blockly.Events');
goog.require('Blockly.FieldAngle');
goog.require('Blockly.FieldCheckbox');
goog.require('Blockly.FieldColour');
// Date picker commented out since it increases footprint by 60%.
// Add it only if you need it.
//goog.require('Blockly.FieldDate');
goog.require('Blockly.FieldDropdown');
goog.require('Blockly.FieldImage');
goog.require('Blockly.FieldTextInput');
goog.require('Blockly.FieldNumber');
goog.require('Blockly.FieldVariable');
goog.require('Blockly.Generator');
goog.require('Blockly.Msg');
goog.require('Blockly.Procedures');
goog.require('Blockly.Toolbox');
goog.require('Blockly.Touch');
goog.require('Blockly.WidgetDiv');
goog.require('Blockly.WorkspaceSvg');
goog.require('Blockly.constants');
goog.require('Blockly.inject');
goog.require('Blockly.utils');

goog.require('goog.color');


// Turn off debugging when compiled.
// Unused within the Blockly library, but used in Closure.
/* eslint-disable no-unused-vars */
var CLOSURE_DEFINES = { 'goog.DEBUG': false };
/* eslint-enable no-unused-vars */

/**
 * The main workspace most recently used.
 * Set by Blockly.WorkspaceSvg.prototype.markFocused
 * @type {Blockly.Workspace}
 */
Blockly.mainWorkspace = null;

/**
 * Currently selected block.
 * @type {Blockly.Block}
 */
Blockly.selected = null;

/**
 * All of the connections on blocks that are currently being dragged.
 * @type {!Array.<!Blockly.Connection>}
 * @private
 */
Blockly.draggingConnections_ = [];

/**
 * Contents of the local clipboard.
 * @type {Element}
 * @private
 */
Blockly.clipboardXml_ = null;

/**
 * Source of the local clipboard.
 * @type {Blockly.WorkspaceSvg}
 * @private
 */
Blockly.clipboardSource_ = null;

/**
 * Cached value for whether 3D is supported.
 * @type {!boolean}
 * @private
 */
Blockly.cache3dSupported_ = null;

/**
 * Convert a hue (HSV model) into an RGB hex triplet.
 * @param {number} hue Hue on a colour wheel (0-360).
 * @return {string} RGB code, e.g. '#5ba65b'.
 */
Blockly.hueToRgb = function (hue) {
    return goog.color.hsvToHex(hue, Blockly.HSV_SATURATION,
        Blockly.HSV_VALUE * 255);
};

/**
 * Returns the dimensions of the specified SVG image.
 * @param {!Element} svg SVG image.
 * @return {!Object} Contains width and height properties.
 */
Blockly.svgSize = function (svg) {
    return {
        width: svg.cachedWidth_,
        height: svg.cachedHeight_
    };
};

/**
 * Size the workspace when the contents change.  This also updates
 * scrollbars accordingly.
 * @param {!Blockly.WorkspaceSvg} workspace The workspace to resize.
 */
Blockly.resizeSvgContents = function (workspace) {
    workspace.resizeContents();
};

/**
 * Size the SVG image to completely fill its container. Call this when the view
 * actually changes sizes (e.g. on a window resize/device orientation change).
 * See Blockly.resizeSvgContents to resize the workspace when the contents
 * change (e.g. when a block is added or removed).
 * Record the height/width of the SVG image.
 * @param {!Blockly.WorkspaceSvg} workspace Any workspace in the SVG.
 */
Blockly.svgResize = function (workspace) {
    var mainWorkspace = workspace;
    while (mainWorkspace.options.parentWorkspace) {
        mainWorkspace = mainWorkspace.options.parentWorkspace;
    }
    var svg = mainWorkspace.getParentSvg();
    var div = svg.parentNode;
    if (!div) {
        // Workspace deleted, or something.
        return;
    }
    var width = div.offsetWidth;
    var height = div.offsetHeight;
    if (svg.cachedWidth_ != width) {
        svg.setAttribute('width', width + 'px');
        svg.cachedWidth_ = width;
    }
    if (svg.cachedHeight_ != height) {
        svg.setAttribute('height', height + 'px');
        svg.cachedHeight_ = height;
    }
    mainWorkspace.resize();
};

/**
 * Handle a key-down on SVG drawing surface.
 * @param {!Event} e Key down event.
 * @private
 */
Blockly.onKeyDown_ = function (e) {
    if (Blockly.mainWorkspace.options.readOnly || Blockly.utils.isTargetInput(e)) {
        // No key actions on readonly workspaces.
        // When focused on an HTML text input widget, don't trap any keys.
        return;
    }
    var deleteBlock = false;
    if (e.keyCode == 27) {
        // Pressing esc closes the context menu.
        Blockly.hideChaff();
    } else if (e.keyCode == 8 || e.keyCode == 46) {
        // Delete or backspace.
        // Stop the browser from going back to the previous page.
        // Do this first to prevent an error in the delete code from resulting in
        // data loss.
        e.preventDefault();
        // Don't delete while dragging.  Jeez.
        if (Blockly.mainWorkspace.isDragging()) {
            return;
        }
        if (Blockly.selected && Blockly.selected.isDeletable()) {
            deleteBlock = true;
        }
    } else if (e.altKey || e.ctrlKey || e.metaKey) {
        // Don't use meta keys during drags.
        if (Blockly.mainWorkspace.isDragging()) {
            return;
        }
        if (Blockly.selected &&
            Blockly.selected.isDeletable() && Blockly.selected.isMovable()) {
            // Don't allow copying immovable or undeletable blocks. The next step
            // would be to paste, which would create additional undeletable/immovable
            // blocks on the workspace.
            if (e.keyCode == 67) {
                // 'c' for copy.
                Blockly.hideChaff();
                Blockly.copy_(Blockly.selected);
            } else if (e.keyCode == 88 && !Blockly.selected.workspace.isFlyout) {
                // 'x' for cut, but not in a flyout.
                // Don't even copy the selected item in the flyout.
                Blockly.copy_(Blockly.selected);
                deleteBlock = true;
            }
        }
        if (e.keyCode == 86) {
            // 'v' for paste.
            if (Blockly.clipboardXml_) {
                Blockly.Events.setGroup(true);
                // Pasting always pastes to the main workspace, even if the copy started
                // in a flyout workspace.
                var workspace = Blockly.clipboardSource_;
                if (workspace.isFlyout) {
                    workspace = workspace.targetWorkspace;
                }
                workspace.paste(Blockly.clipboardXml_);
                Blockly.Events.setGroup(false);
            }
        } else if (e.keyCode == 90) {
            // 'z' for undo 'Z' is for redo.
            Blockly.hideChaff();
            Blockly.mainWorkspace.undo(e.shiftKey);
        }
    }
    // Common code for delete and cut.
    // Don't delete in the flyout.
    if (deleteBlock && !Blockly.selected.workspace.isFlyout) {
        Blockly.Events.setGroup(true);
        Blockly.hideChaff();
        Blockly.selected.dispose(/* heal */ true, true);
        Blockly.Events.setGroup(false);
    }
};

/**
 * Copy a block or workspace comment onto the local clipboard.
 * @param {!Blockly.Block | !Blockly.WorkspaceComment} toCopy Block or Workspace Comment
 *    to be copied.
 * @private
 */
Blockly.copy_ = function (toCopy) {
    if (toCopy.isComment) {
        var xml = toCopy.toXmlWithXY();
    } else {
        var xml = Blockly.Xml.blockToDom(toCopy);
        // Copy only the selected block and internal blocks.
        Blockly.Xml.deleteNext(xml);
        // Encode start position in XML.
        var xy = toCopy.getRelativeToSurfaceXY();
        xml.setAttribute('x', toCopy.RTL ? -xy.x : xy.x);
        xml.setAttribute('y', xy.y);
    }

    Blockly.clipboardXml_ = xml;
    Blockly.clipboardSource_ = toCopy.workspace;

    //removing the connection blocks from the structure
    this.removeConBlocks_();
};


/**
 * Remove connection blocks after copy_
 * @private
 */
Blockly.removeConBlocks_ = function () {
    var xmlBlock = Blockly.clipboardXml_;

    //First we need to check if the block itself isn't connection block
    var isConBlock = false;
    for (var i = 0, child; child = xmlBlock.childNodes[i]; i++) {
        if (child.nodeName.toLowerCase() == 'fromid' || child.nodeName.toLowerCase() == 'toid') {
            isConBlock = true;
            break;
        }
    }

    if (isConBlock) {
        Blockly.clipboardXml_ = null;
        Blockly.clipboardSource_ = null;
    }
    else {
        Blockly.Xml.deleteConBlocks(xmlBlock);
        Blockly.clipboardXml_ = xmlBlock;
    }
};




/**
 * Duplicate this block and its children, or a workspace comment.
 * @param {!Blockly.Block | !Blockly.WorkspaceComment} toDuplicate Block or
 *     Workspace Comment to be copied.
 * @private
 */
Blockly.duplicate_ = function (toDuplicate) {
    // Save the clipboard.
    var clipboardXml = Blockly.clipboardXml_;
    var clipboardSource = Blockly.clipboardSource_;

    // Create a duplicate via a copy/paste operation.
    Blockly.copy_(toDuplicate);
    toDuplicate.workspace.paste(Blockly.clipboardXml_);

    // Restore the clipboard.
    Blockly.clipboardXml_ = clipboardXml;
    Blockly.clipboardSource_ = clipboardSource;
};

/**
 * Cancel the native context menu, unless the focus is on an HTML input widget.
 * @param {!Event} e Mouse down event.
 * @private
 */
Blockly.onContextMenu_ = function (e) {
    if (!Blockly.utils.isTargetInput(e)) {
        // When focused on an HTML text input widget, don't cancel the context menu.
        e.preventDefault();
    }
};

/**
 * Close tooltips, context menus, dropdown selections, etc.
 * @param {boolean=} opt_allowToolbox If true, don't close the toolbox.
 */
Blockly.hideChaff = function (opt_allowToolbox) {
    Blockly.Tooltip.hide();
    Blockly.WidgetDiv.hide();
    if (!opt_allowToolbox) {
        var workspace = Blockly.getMainWorkspace();
        if (workspace.toolbox_ &&
            workspace.toolbox_.flyout_ &&
            workspace.toolbox_.flyout_.autoClose) {
            workspace.toolbox_.clearSelection();
        }
    }
};

/**
 * When something in Blockly's workspace changes, call a function.
 * @param {!Function} func Function to call.
 * @return {!Array.<!Array>} Opaque data that can be passed to
 *     removeChangeListener.
 * @deprecated April 2015
 */
Blockly.addChangeListener = function (func) {
    // Backwards compatibility from before there could be multiple workspaces.
    console.warn(
        'Deprecated call to Blockly.addChangeListener, ' +
        'use workspace.addChangeListener instead.');
    return Blockly.getMainWorkspace().addChangeListener(func);
};

/**
 * Returns the main workspace.  Returns the last used main workspace (based on
 * focus).  Try not to use this function, particularly if there are multiple
 * Blockly instances on a page.
 * @return {!Blockly.Workspace} The main workspace.
 */
Blockly.getMainWorkspace = function () {
    return Blockly.mainWorkspace;
};

/**
 * Wrapper to window.alert() that app developers may override to
 * provide alternatives to the modal browser window.
 * @param {string} message The message to display to the user.
 * @param {function()=} opt_callback The callback when the alert is dismissed.
 */
Blockly.alert = function (message, opt_callback) {
    window.alert(message);
    if (opt_callback) {
        opt_callback();
    }
};

/**
 * Wrapper to window.confirm() that app developers may override to
 * provide alternatives to the modal browser window.
 * @param {string} message The message to display to the user.
 * @param {!function(boolean)} callback The callback for handling user response.
 */
Blockly.confirm = function (message, callback) {
    callback(window.confirm(message));
};

/**
 * Wrapper to window.prompt() that app developers may override to provide
 * alternatives to the modal browser window. Built-in browser prompts are
 * often used for better text input experience on mobile device. We strongly
 * recommend testing mobile when overriding this.
 * @param {string} message The message to display to the user.
 * @param {string} defaultValue The value to initialize the prompt with.
 * @param {!function(string)} callback The callback for handling user response.
 */
Blockly.prompt = function (message, defaultValue, callback) {
    callback(window.prompt(message, defaultValue));
};

/**
 * Helper function for defining a block from JSON.  The resulting function has
 * the correct value of jsonDef at the point in code where jsonInit is called.
 * @param {!Object} jsonDef The JSON definition of a block.
 * @return {function()} A function that calls jsonInit with the correct value
 *     of jsonDef.
 * @private
 */
Blockly.jsonInitFactory_ = function (jsonDef) {
    /** @this Blockly.Block */
    return function () {
        this.jsonInit(jsonDef);
    };
};

/**
 * Define blocks from an array of JSON block definitions, as might be generated
 * by the Blockly Developer Tools.
 * @param {!Array.<!Object>} jsonArray An array of JSON block definitions.
 */
Blockly.defineBlocksWithJsonArray = function (jsonArray) {
    for (var i = 0; i < jsonArray.length; i++) {
        var elem = jsonArray[i];
        if (!elem) {
            console.warn(
                'Block definition #' + i + ' in JSON array is ' + elem + '. ' +
                'Skipping.');
        } else {
            var typename = elem.type;
            if (typename == null || typename === '') {
                console.warn(
                    'Block definition #' + i +
                    ' in JSON array is missing a type attribute. Skipping.');
            } else {
                if (Blockly.Blocks[typename]) {
                    console.warn(
                        'Block definition #' + i + ' in JSON array' +
                        ' overwrites prior definition of "' + typename + '".');
                }
                Blockly.Blocks[typename] = {
                    init: Blockly.jsonInitFactory_(elem)
                };
            }
        }
    }
};

/**
 * Bind an event to a function call.  When calling the function, verifies that
 * it belongs to the touch stream that is currently being processed, and splits
 * multitouch events into multiple events as needed.
 * @param {!EventTarget} node Node upon which to listen.
 * @param {string} name Event name to listen to (e.g. 'mousedown').
 * @param {Object} thisObject The value of 'this' in the function.
 * @param {!Function} func Function to call when event is triggered.
 * @param {boolean=} opt_noCaptureIdentifier True if triggering on this event
 *     should not block execution of other event handlers on this touch or other
 *     simultaneous touches.
 * @param {boolean=} opt_noPreventDefault True if triggering on this event
 *     should prevent the default handler.  False by default.  If
 *     opt_noPreventDefault is provided, opt_noCaptureIdentifier must also be
 *     provided.
 * @return {!Array.<!Array>} Opaque data that can be passed to unbindEvent_.
 */
Blockly.bindEventWithChecks_ = function (node, name, thisObject, func,
    opt_noCaptureIdentifier, opt_noPreventDefault) {

    var handled = false;
    var wrapFunc = function (e) {
        var captureIdentifier = !opt_noCaptureIdentifier;
        // Handle each touch point separately.  If the event was a mouse event, this
        // will hand back an array with one element, which we're fine handling.
        var events = Blockly.Touch.splitEventByTouches(e);
        for (var i = 0, event; event = events[i]; i++) {
            if (captureIdentifier && !Blockly.Touch.shouldHandleEvent(event)) {
                continue;
            }
            Blockly.Touch.setClientFromTouch(event);
            if (thisObject) {
                func.call(thisObject, event);
            } else {
                func(event);
            }
            handled = true;
        }
    };

    var bindData = [];
    if (goog.global.PointerEvent && (name in Blockly.Touch.TOUCH_MAP)) {
        for (var i = 0, type; type = Blockly.Touch.TOUCH_MAP[name][i]; i++) {
            node.addEventListener(type, wrapFunc, false);
            bindData.push([node, type, wrapFunc]);
        }
    } else {
        node.addEventListener(name, wrapFunc, false);
        bindData.push([node, name, wrapFunc]);

        // Add equivalent touch event.
        if (name in Blockly.Touch.TOUCH_MAP) {
            var touchWrapFunc = function (e) {
                wrapFunc(e);
                // Calling preventDefault stops the browser from scrolling/zooming the
                // page.
                var preventDef = !opt_noPreventDefault;
                if (handled && preventDef) {
                    e.preventDefault();
                }
            };
            for (var i = 0, type; type = Blockly.Touch.TOUCH_MAP[name][i]; i++) {
                node.addEventListener(type, touchWrapFunc, false);
                bindData.push([node, type, touchWrapFunc]);
            }
        }
    }
    return bindData;
};


/**
 * Bind an event to a function call.  Handles multitouch events by using the
 * coordinates of the first changed touch, and doesn't do any safety checks for
 * simultaneous event processing.
 * @deprecated in favor of bindEventWithChecks_, but preserved for external
 * users.
 * @param {!EventTarget} node Node upon which to listen.
 * @param {string} name Event name to listen to (e.g. 'mousedown').
 * @param {Object} thisObject The value of 'this' in the function.
 * @param {!Function} func Function to call when event is triggered.
 * @return {!Array.<!Array>} Opaque data that can be passed to unbindEvent_.
 */
Blockly.bindEvent_ = function (node, name, thisObject, func) {
    var wrapFunc = function (e) {
        if (thisObject) {
            func.call(thisObject, e);
        } else {
            func(e);
        }
    };

    var bindData = [];
    var window = goog.global['window'];
    if (window && window.PointerEvent && (name in Blockly.Touch.TOUCH_MAP)) {
        for (var i = 0, type; type = Blockly.Touch.TOUCH_MAP[name][i]; i++) {
            node.addEventListener(type, wrapFunc, false);
            bindData.push([node, type, wrapFunc]);
        }
    } else {
        node.addEventListener(name, wrapFunc, false);
        bindData.push([node, name, wrapFunc]);

        // Add equivalent touch event.
        if (name in Blockly.Touch.TOUCH_MAP) {
            var touchWrapFunc = function (e) {
                // Punt on multitouch events.
                if (e.changedTouches && e.changedTouches.length == 1) {
                    // Map the touch event's properties to the event.
                    var touchPoint = e.changedTouches[0];
                    e.clientX = touchPoint.clientX;
                    e.clientY = touchPoint.clientY;
                }
                wrapFunc(e);

                // Stop the browser from scrolling/zooming the page.
                e.preventDefault();
            };
            for (var i = 0, type; type = Blockly.Touch.TOUCH_MAP[name][i]; i++) {
                node.addEventListener(type, touchWrapFunc, false);
                bindData.push([node, type, touchWrapFunc]);
            }
        }
    }
    return bindData;
};

/**
 * Unbind one or more events event from a function call.
 * @param {!Array.<!Array>} bindData Opaque data from bindEvent_.
 *     This list is emptied during the course of calling this function.
 * @return {!Function} The function call.
 */
Blockly.unbindEvent_ = function (bindData) {
    while (bindData.length) {
        var bindDatum = bindData.pop();
        var node = bindDatum[0];
        var name = bindDatum[1];
        var func = bindDatum[2];
        node.removeEventListener(name, func, false);
    }
    return func;
};

/**
 * Is the given string a number (includes negative and decimals).
 * @param {string} str Input string.
 * @return {boolean} True if number, false otherwise.
 */
Blockly.isNumber = function (str) {
    return /^\s*-?\d+(\.\d+)?\s*$/.test(str);
};

/**
 * Checks old colour constants are not overwritten by the host application.
 * If a constant is overwritten, it prints a console warning directing the
 * developer to use the equivalent Msg constant.
 * @package
 */
Blockly.checkBlockColourConstants = function () {
    Blockly.checkBlockColourConstant_(
        'LOGIC_HUE', ['Blocks', 'logic', 'HUE'], undefined);
    Blockly.checkBlockColourConstant_(
        'LOGIC_HUE', ['Constants', 'Logic', 'HUE'], 210);
    Blockly.checkBlockColourConstant_(
        'LOOPS_HUE', ['Blocks', 'loops', 'HUE'], undefined);
    Blockly.checkBlockColourConstant_(
        'LOOPS_HUE', ['Constants', 'Loops', 'HUE'], 120);
    Blockly.checkBlockColourConstant_(
        'MATH_HUE', ['Blocks', 'math', 'HUE'], undefined);
    Blockly.checkBlockColourConstant_(
        'MATH_HUE', ['Constants', 'Math', 'HUE'], 230);
    Blockly.checkBlockColourConstant_(
        'TEXTS_HUE', ['Blocks', 'texts', 'HUE'], undefined);
    Blockly.checkBlockColourConstant_(
        'TEXTS_HUE', ['Constants', 'Text', 'HUE'], 160);
    Blockly.checkBlockColourConstant_(
        'LISTS_HUE', ['Blocks', 'lists', 'HUE'], undefined);
    Blockly.checkBlockColourConstant_(
        'LISTS_HUE', ['Constants', 'Lists', 'HUE'], 260);
    Blockly.checkBlockColourConstant_(
        'COLOUR_HUE', ['Blocks', 'colour', 'HUE'], undefined);
    Blockly.checkBlockColourConstant_(
        'COLOUR_HUE', ['Constants', 'Colour', 'HUE'], 20);
    Blockly.checkBlockColourConstant_(
        'VARIABLES_HUE', ['Blocks', 'variables', 'HUE'], undefined);
    Blockly.checkBlockColourConstant_(
        'VARIABLES_HUE', ['Constants', 'Variables', 'HUE'], 330);
    // Blockly.Blocks.variables_dynamic.HUE never existed.
    Blockly.checkBlockColourConstant_(
        'VARIABLES_DYNAMIC_HUE', ['Constants', 'VariablesDynamic', 'HUE'], 310);
    Blockly.checkBlockColourConstant_(
        'PROCEDURES_HUE', ['Blocks', 'procedures', 'HUE'], undefined);
    // Blockly.Constants.Procedures.HUE never existed.
};

/**
 * Checks for a constant in the Blockly namespace, verifying it is undefined or
 * has the old/original value. Prints a warning if this is not true.
 * @param {string} msgName The Msg constant identifier.
 * @param {Array<string>} blocklyNamePath The name parts of the tested
 *     constant.
 * @param {number|undefined} expectedValue The expected value of the constant.
 * @private
 */
Blockly.checkBlockColourConstant_ = function (
    msgName, blocklyNamePath, expectedValue) {
    var namePath = 'Blockly';
    var value = Blockly;
    for (var i = 0; i < blocklyNamePath.length; ++i) {
        namePath += '.' + blocklyNamePath[i];
        if (value) {
            value = value[blocklyNamePath[i]];
        }
    }

    if (value && value !== expectedValue) {
        var warningPattern = (expectedValue === undefined) ?
            '%1 has been removed. Use Blockly.Msg["%2"].' :
            '%1 is deprecated and unused. Override Blockly.Msg["%2"].';
        var warning = warningPattern.replace('%1', namePath).replace('%2', msgName);
        console.warn(warning);
    }
};

// IE9 does not have a console.  Create a stub to stop errors.
if (!goog.global['console']) {
    goog.global['console'] = {
        'log': function () { },
        'warn': function () { }
    };
}

// Export symbols that would otherwise be renamed by Closure compiler.
if (!goog.global['Blockly']) {
    goog.global['Blockly'] = {};
}
goog.global['Blockly']['getMainWorkspace'] = Blockly.getMainWorkspace;
goog.global['Blockly']['addChangeListener'] = Blockly.addChangeListener;
