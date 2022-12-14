/**
 * Blockly Demos: Code
 *
 * Copyright 2012 Google Inc.
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
 * @fileoverview JavaScript for Blockly's Code demo.
 * @author fraser@google.com (Neil Fraser)
 */
'use strict';

/**
 * Create a namespace for the application.
 */
var Code = {};

/**
 * Lookup for names of supported languages.  Keys should be in ISO 639 format.
 */
Code.LANGUAGE_NAME = {
    'en': 'English',
    'cs': 'Czech'
};

/**
 * Blockly's main workspace.
 * @type {Blockly.WorkspaceSvg}
 */
Code.workspace = null;

/**
 * Extracts a parameter from the URL.
 * If the parameter is absent default_value is returned.
 * @param {string} name The name of the parameter.
 * @param {string} defaultValue Value to return if parameter not found.
 * @return {string} The parameter value or the default value if not found.
 */
Code.getStringParamFromUrl = function (name, defaultValue) {
    var val = location.search.match(new RegExp('[?&]' + name + '=([^&]+)'));
    return val ? decodeURIComponent(val[1].replace(/\+/g, '%20')) : defaultValue;
};

/**
 * Get the language of this user from the URL.
 * @return {string} User's language.
 */
Code.getLang = function () {
    var lang = Code.getStringParamFromUrl('lang', '');
    if (Code.LANGUAGE_NAME[lang] === undefined) {
        // Default to English.
        lang = 'en';
    }
    return lang;
};

/**
 * Load blocks saved on App Engine Storage or in session/local storage.
 * @param {string} defaultXml Text representation of default blocks.
 */
Code.loadBlocks = function (defaultXml) {

    console.log('loading blocks');

    try {
        var loadOnce = window.sessionStorage.loadOnceBlocks;
    } catch (e) {
        // Firefox sometimes throws a SecurityError when accessing sessionStorage.
        // Restarting Firefox fixes this, so it looks like a bug.
        var loadOnce = null;
    }
    if ('BlocklyStorage' in window && window.location.hash.length > 1) {
        // An href with #key trigers an AJAX call to retrieve saved blocks.
        BlocklyStorage.retrieveXml(window.location.hash.substring(1));
    } else if (loadOnce) {
        // Language switching stores the blocks during the reload.
        delete window.sessionStorage.loadOnceBlocks;
        var xml = Blockly.Xml.textToDom(loadOnce);
        Blockly.Xml.domToWorkspace(xml, Code.workspace);
    } else if (defaultXml) {
        // Load the editor with default starting blocks.
        var xml = Blockly.Xml.textToDom(defaultXml);
        Blockly.Xml.domToWorkspace(xml, Code.workspace);
    } else if ('BlocklyStorage' in window) {
        // Restore saved blocks in a separate thread so that subsequent
        // initialization is not affected from a failed load.
        window.setTimeout(BlocklyStorage.restoreBlocks, 0);
    }
};

/**
 * Save the blocks and reload with a different language.
 */
Code.changeLanguage = function () {
    // Store the blocks for the duration of the reload.
    // MSIE 11 does not support sessionStorage on file:// URLs.
    if (window.sessionStorage) {
        var xml = Blockly.Xml.workspaceToDom(Code.workspace);
        var text = Blockly.Xml.domToText(xml);
        window.sessionStorage.loadOnceBlocks = text;
    }

    var languageMenu = document.getElementById('languageMenu');
    var newLang = encodeURIComponent(
        languageMenu.options[languageMenu.selectedIndex].value);
    var search = window.location.search;
    if (search.length <= 1) {
        search = '?lang=' + newLang;
    } else if (search.match(/[?&]lang=[^&]*/)) {
        search = search.replace(/([?&]lang=)[^&]*/, '$1' + newLang);
    } else {
        search = search.replace(/\?/, '?lang=' + newLang + '&');
    }

    window.location = window.location.protocol + '//' +
        window.location.host + window.location.pathname + search;
};

/**
 * Bind a function to a button's click event.
 * On touch enabled browsers, ontouchend is treated as equivalent to onclick.
 * @param {!Element|string} el Button element or ID thereof.
 * @param {!Function} func Event handler to bind.
 */
Code.bindClick = function (el, func) {
    if (typeof el == 'string') {
        el = document.getElementById(el);
    }
    el.addEventListener('click', func, true);
    el.addEventListener('touchend', func, true);
};

/**
 * Load the Prettify CSS and JavaScript.
 */
Code.importPrettify = function () {
    var script = document.createElement('script');
    script.setAttribute('src', 'https://cdn.rawgit.com/google/code-prettify/master/loader/run_prettify.js');
    document.head.appendChild(script);
};

/**
 * Compute the absolute coordinates and dimensions of an HTML element.
 * @param {!Element} element Element to match.
 * @return {!Object} Contains height, width, x, and y properties.
 * @private
 */
Code.getBBox_ = function (element) {
    var height = element.offsetHeight;
    var width = element.offsetWidth;
    var x = 0;
    var y = 0;
    do {
        x += element.offsetLeft;
        y += element.offsetTop;
        element = element.offsetParent;
    } while (element);
    return {
        height: height,
        width: width,
        x: x,
        y: y
    };
};

/**
 * User's language (e.g. "en").
 * @type {string}
 */
Code.LANG = Code.getLang();

/**
 * List of tab names.
 * @private
 */
Code.TABS_ = ['blocks', 'javascript', 'xml'];

Code.selected = 'blocks';

/**
 * Switch the visible pane when a tab is clicked.
 * @param {string} clickedName Name of tab clicked.
 */
Code.tabClick = function (clickedName) {
    // If the XML tab was open, save and render the content.
    if (document.getElementById('tab_xml').className == 'tabon') {
        var xmlTextarea = document.getElementById('content_xml');
        var xmlText = xmlTextarea.value;
        var xmlDom = null;
        try {
            xmlDom = Blockly.Xml.textToDom(xmlText);
        } catch (e) {
            var q =
                window.confirm(MSG['badXml'].replace('%1', e));
            if (!q) {
                // Leave the user on the XML tab.
                return;
            }
        }
        if (xmlDom) {
            Code.workspace.clear();
            Blockly.Xml.domToWorkspace(xmlDom, Code.workspace);
        }
    }

    if (document.getElementById('tab_blocks').className == 'tabon') {
        Code.workspace.setVisible(false);
    }
    // Deselect all tabs and hide all panes.
    for (var i = 0; i < Code.TABS_.length; i++) {
        var name = Code.TABS_[i];
        document.getElementById('tab_' + name).className = 'taboff';
        document.getElementById('content_' + name).style.visibility = 'hidden';
    }

    // Select the active tab.
    Code.selected = clickedName;
    document.getElementById('tab_' + clickedName).className = 'tabon';
    // Show the selected pane.
    document.getElementById('content_' + clickedName).style.visibility =
        'visible';
    Code.renderContent();
    if (clickedName == 'blocks') {
        Code.workspace.setVisible(true);
    }
    Blockly.svgResize(Code.workspace);
};

/**
 * Populate the currently selected pane with content generated from the blocks.
 */
Code.renderContent = function () {
    var content = document.getElementById('content_' + Code.selected);
    // Initialize the pane.
    if (content.id == 'content_xml') {
        var xmlTextarea = document.getElementById('content_xml');
        var xmlDom = Blockly.Xml.workspaceToDom(Code.workspace);
        var xmlText = Blockly.Xml.domToPrettyText(xmlDom);
        xmlTextarea.value = xmlText;
        xmlTextarea.focus();
    } else if (content.id == 'content_javascript') {
        Code.attemptCodeGeneration(Blockly.JavaScript, 'js');
    }
};

/**
 * Attempt to generate the code and display it in the UI, pretty printed.
 * @param generator {!Blockly.Generator} The generator to use.
 * @param prettyPrintType {string} The file type key for the pretty printer.
 */
Code.attemptCodeGeneration = function (generator, prettyPrintType) {
    var content = document.getElementById('content_' + Code.selected);
    content.textContent = '';
    if (Code.checkAllGeneratorFunctionsDefined(generator)) {
        var code = generator.workspaceToCode(Code.workspace);

        content.textContent = code;
        if (typeof PR.prettyPrintOne == 'function') {
            code = content.textContent;
            code = PR.prettyPrintOne(code, prettyPrintType);
            content.innerHTML = code;
        }
    }
};

/**
 * Check whether all blocks in use have generator functions.
 * @param generator {!Blockly.Generator} The generator to use.
 */
Code.checkAllGeneratorFunctionsDefined = function (generator) {
    var blocks = Code.workspace.getAllBlocks();
    var missingBlockGenerators = [];
    for (var i = 0; i < blocks.length; i++) {
        var blockType = blocks[i].type;
        if (!generator[blockType]) {
            if (missingBlockGenerators.indexOf(blockType) === -1) {
                missingBlockGenerators.push(blockType);
            }
        }
    }

    var valid = missingBlockGenerators.length == 0;
    if (!valid) {
        var msg = 'The generator code for the following blocks not specified for '
            + generator.name_ + ':\n - ' + missingBlockGenerators.join('\n - ');
        Blockly.alert(msg);  // Assuming synchronous. No callback.
    }
    return valid;
};

/**
 * Initialize Blockly.  Called on page load.
 */
Code.init = function () {
    Code.initLanguage();

    var container = document.getElementById('content_area');
    var onresize = function (e) {
        var bBox = Code.getBBox_(container);
        for (var i = 0; i < Code.TABS_.length; i++) {
            var el = document.getElementById('content_' + Code.TABS_[i]);
            el.style.top = bBox.y + 'px';
            el.style.left = bBox.x + 'px';
            // Height and width need to be set, read back, then set again to
            // compensate for scrollbars.
            el.style.height = bBox.height + 'px';
            el.style.height = (2 * bBox.height - el.offsetHeight) + 'px';
            el.style.width = bBox.width + 'px';
            el.style.width = (2 * bBox.width - el.offsetWidth) + 'px';
        }
        // Make the 'Blocks' tab line up with the toolbox.
        if (Code.workspace && Code.workspace.toolbox_.width) {
            document.getElementById('tab_blocks').style.minWidth =
                (Code.workspace.toolbox_.width - 38) + 'px';
            // Account for the 19 pixel margin and on each side.
        }
    };
    window.addEventListener('resize', onresize, false);

    // The toolbox XML specifies each category name using Blockly's messaging
    // format (eg. `<category name="%{BKY_CATLOGIC}">`).
    // These message keys need to be defined in `Blockly.Msg` in order to
    // be decoded by the library. Therefore, we'll use the `MSG` dictionary that's
    // been defined for each language to import each category name message
    // into `Blockly.Msg`.
    // TODO: Clean up the message files so this is done explicitly instead of
    // through this for-loop.
    for (var messageKey in MSG) {
        if (messageKey.indexOf('cat') == 0) {
            Blockly.Msg[messageKey.toUpperCase()] = MSG[messageKey];
        }
    }

    // Construct the toolbox XML, replacing translated variable names.
    var toolboxText = document.getElementById('toolbox').outerHTML;
    toolboxText = toolboxText.replace(/(^|[^%]){(\w+)}/g,
        function (m, p1, p2) { return p1 + MSG[p2]; });
    var toolboxXml = Blockly.Xml.textToDom(toolboxText);

    Code.workspace = Blockly.inject('content_blocks',
        {
            horizontalLayout: false,
            collapse: false,
            comments: false,
            disable: true,
            maxBlocks: Infinity,
            trashcan: true,
            sounds: true,
            scrollbars: true,
            backloop: false,
            toolboxPosition: 'end',
            grid:
            {
                spacing: 25,
                length: 3,
                colour: '#aaa',
                snap: true
            },
            media: '../blockly/media/',
            rtl: true,
            rtlMod: true,
            toolbox: toolboxXml,
            zoom:
            {
                controls: true,
                wheel: true
            }
        });

    // Add to reserved word list: Local variables in execution environment (runJS)
    // and the infinite loop detection function.
    Blockly.JavaScript.addReservedWords('code,timeouts,checkTimeout');

    let blocks =
        '<xml xmlns="http://www.w3.org/1999/xhtml">' +
        '  <variables></variables>' +
        '  <block type="node_confrom" id="#T`b~L7W0#%TjfCxf}e0" x="729" y="63">' +
        '    <toid>sIxRt[p`k~{`;FdjJBye</toid>' +
        '    <value name="ARG0">' +
        '      <block type="node_in" id="9?e]n/P~wb)Nd9Rzl)mH">' +
        '        <field name="SENSOR">SENSOR_0</field>' +
        '      </block>' +
        '    </value>' +
        '  </block>' +
        '  <block type="node_confrom" id="?JNqc.]t.4#ZhkLgeSMM" x="530" y="88">' +
        '    <toid>R1fW*ivr.pk+[bDjcb`v</toid>' +
        '    <value name="ARG0">' +
        '      <block type="node_2gate" id="eCC:~ZoZy~5;hQ8A[iv3">' +
        '        <field name="GTYPE">or</field>' +
        '        <value name="ARG0">' +
        '          <block type="node_conto" id="sIxRt[p`k~{`;FdjJBye">' +
        '            <fromid>#T`b~L7W0#%TjfCxf}e0</fromid>' +
        '          </block>' +
        '        </value>' +
        '        <value name="ARG1">' +
        '          <block type="node_conto" id="[`7S1cQU*tw5IiZHll]%">' +
        '            <fromid>^fx]gE6[o6{TK]fZ7^@]</fromid>' +
        '          </block>' +
        '        </value>' +
        '      </block>' +
        '    </value>' +
        '  </block>' +
        '  <block type="node_confrom" id="G|yx$UW[jH2jvLQW66U{" x="330" y="138">' +
        '    <toid>359c``8;V5*A|@MOb(Q/</toid>' +
        '    <value name="ARG0">' +
        '      <block type="node_2gate" id="sMD_heXn5@;:kG4)TjrG">' +
        '        <field name="GTYPE">and</field>' +
        '        <value name="ARG0">' +
        '          <block type="node_conto" id="R1fW*ivr.pk+[bDjcb`v">' +
        '            <fromid>?JNqc.]t.4#ZhkLgeSMM</fromid>' +
        '          </block>' +
        '        </value>' +
        '        <value name="ARG1">' +
        '          <block type="node_conto" id="b*HYuZ$m;[eBl]f{HF[I">' +
        '            <fromid>kN0J4rp:Yw9_Nw#(e!ac</fromid>' +
        '          </block>' +
        '        </value>' +
        '      </block>' +
        '    </value>' +
        '  </block>' +
        '  <block type="node_out" id="g/3LmBU!PXBJrk14KJ[K" x="104" y="163">' +
        '    <field name="ACTION">ACTION_0</field>' +
        '    <value name="ACTION">' +
        '      <block type="node_conto" id="359c``8;V5*A|@MOb(Q/">' +
        '        <fromid>G|yx$UW[jH2jvLQW66U{</fromid>' +
        '      </block>' +
        '    </value>' +
        '  </block>' +
        '  <block type="node_confrom" id="^fx]gE6[o6{TK]fZ7^@]" x="729" y="138">' +
        '    <toid>[`7S1cQU*tw5IiZHll]%</toid>' +
        '    <value name="ARG0">' +
        '      <block type="node_in" id="9t:@Wu?iW`8d!H8[6rWP">' +
        '        <field name="SENSOR">SENSOR_1</field>' +
        '      </block>' +
        '    </value>' +
        '  </block>' +
        '  <block type="node_confrom" id="kN0J4rp:Yw9_Nw#(e!ac" x="729" y="213">' +
        '    <toid>b*HYuZ$m;[eBl]f{HF[I</toid>' +
        '    <value name="ARG0">' +
        '      <block type="node_in" id=",:{cm$V0Tgv5syTa9(%_">' +
        '        <field name="SENSOR">SENSOR_2</field>' +
        '      </block>' +
        '    </value>' +
        '  </block>' +
        '</xml>';
    Code.loadBlocks(blocks);

    if ('BlocklyStorage' in window) {
        // Hook a save function onto unload.
        BlocklyStorage.backupOnUnload(Code.workspace);
    }

    Code.tabClick(Code.selected);

    Code.bindClick('trashButton', function () { Code.discard(); Code.renderContent(); });
    Code.bindClick('runButton', Code.showCode);
    Code.bindClick('saveButton', Code.saveXmlFile);
    Code.bindClick('loadButton', Code.loadUserXmlFile);


    for (var i = 0; i < Code.TABS_.length; i++) {
        var name = Code.TABS_[i];
        Code.bindClick('tab_' + name,
            function (name_) { return function () { Code.tabClick(name_); }; }(name));
    }
    onresize();
    Blockly.svgResize(Code.workspace);

    // Lazy-load the syntax-highlighting.
    window.setTimeout(Code.importPrettify, 1);

    Code.workspace.addChangeListener(Code.updateCodePreview);
};

/**
 * Update the code when any kind of event happends
 * @param {Blockly.Event} event 
 */
Code.updateCodePreview = function (event) {
    var code = Blockly.JavaScript.workspaceToCode(Code.workspace);
    var preview = document.getElementById('preview_code');
    preview.textContent = code;
}

/**
 * Initialize the page language.
 */
Code.initLanguage = function () {
    // Set the HTML's language and direction.
    document.dir = 'ltr';
    document.head.parentElement.setAttribute('lang', Code.LANG);

    // Sort languages alphabetically.
    var languages = [];
    for (var lang in Code.LANGUAGE_NAME) {
        languages.push([Code.LANGUAGE_NAME[lang], lang]);
    }
    var comp = function (a, b) {
        // Sort based on first argument ('English', '??????????????', '?????????', etc).
        if (a[0] > b[0]) return 1;
        if (a[0] < b[0]) return -1;
        return 0;
    };
    languages.sort(comp);
    // Populate the language selection menu.
    var languageMenu = document.getElementById('languageMenu');
    languageMenu.options.length = 0;
    for (var i = 0; i < languages.length; i++) {
        var tuple = languages[i];
        var lang = tuple[tuple.length - 1];
        var option = new Option(tuple[0], lang);
        if (lang == Code.LANG) {
            option.selected = true;
        }
        languageMenu.options.add(option);
    }
    languageMenu.addEventListener('change', Code.changeLanguage, true);
    document.getElementById('title').textContent = '';
    document.getElementById('tab_blocks').textContent = MSG['blocks'];
    document.getElementById('runButton').title = MSG['runTooltip'];
    document.getElementById('trashButton').title = MSG['trashTooltip'];
    document.getElementById('saveButton').title = MSG['saveTooltip'];
    document.getElementById('loadButton').title = MSG['loadTooltip'];
};

/**
 * Show the generated code
 * 
 */
Code.showCode = function () {

    var code = Blockly.JavaScript.workspaceToCode(Code.workspace);
    Blockly.JavaScript.INFINITE_LOOP_TRAP = null;
    alert('Generated code:\n\n' + code);

};

/**
 * Discard all blocks from the workspace.
 */
Code.discard = function () {
    var count = Code.workspace.getAllBlocks().length;
    if (count < 2 ||
        window.confirm(Blockly.Msg['DELETE_ALL_BLOCKS'].replace('%1', count))) {
        Code.workspace.clear();
        if (window.location.hash) {
            window.location.hash = '';
        }
    }
};


/**
 * Creates an XML file containing the blocks from the Blockly workspace and
 * prompts the users to save it into their local file system.
 */
Code.saveXmlFile = function () {
    Code.saveTextFileAs(
        'BlocklyLCF.xml', Code.generateXml());
};

/**
 * Creates an text file with the input content and files name, and prompts the
 * users to save it into their local file system.
 * @param {!string} fileName Name for the file to be saved.
 * @param {!string} content Text datd to be saved in to the file.
 */
Code.saveTextFileAs = function (fileName, content) {
    Code.download(content, fileName, 'text/plain;charset=utf-8');
};

/** @return {!string} Generated XML code from the Blockly workspace. */
Code.generateXml = function () {
    var xmlDom = Blockly.Xml.workspaceToDom(Code.workspace);
    return Blockly.Xml.domToPrettyText(xmlDom);
};

/**
 * Loads an XML file from the users file system and adds the blocks into the
 * Blockly workspace.
 */
Code.loadUserXmlFile = function () {
    // Create File Reader event listener function
    var parseInputXMLfile = function (e) {
        var xmlFile = e.target.files[0];
        var filename = xmlFile.name;
        var extensionPosition = filename.lastIndexOf('.');
        if (extensionPosition !== -1) {
            filename = filename.substr(0, extensionPosition);
        }

        var reader = new FileReader();
        reader.onload = function () {
            var success = Code.replaceBlocksfromXml(reader.result);
            if (success) {
                Code.renderContent();
            } else {
                alert("Ooops something went wrong during load. Try again with another file.");
            }
        };
        reader.readAsText(xmlFile);
    };

    // Create once invisible browse button with event listener, and click it
    var selectFile = document.getElementById('select_file');
    if (selectFile === null) {
        var selectFileDom = document.createElement('INPUT');
        selectFileDom.type = 'file';
        selectFileDom.id = 'select_file';

        var selectFileWrapperDom = document.createElement('DIV');
        selectFileWrapperDom.id = 'select_file_wrapper';
        selectFileWrapperDom.style.display = 'none';
        selectFileWrapperDom.appendChild(selectFileDom);

        document.body.appendChild(selectFileWrapperDom);
        selectFile = document.getElementById('select_file');
        selectFile.addEventListener('change', parseInputXMLfile, false);
    }
    selectFile.click();
};

/**
 * Parses the XML from its argument input to generate and replace the blocks
 * in the Blockly workspace.
 * @param {!string} blocksXml String of XML code for the blocks.
 * @return {!boolean} Indicates if the XML into blocks parse was successful.
 */
Code.replaceBlocksfromXml = function (blocksXml) {
    var xmlDom = null;
    try {
        xmlDom = Blockly.Xml.textToDom(blocksXml);
    } catch (e) {
        return false;
    }
    Code.workspace.clear();
    var sucess = false;
    if (xmlDom) {
        sucess = Code.loadBlocksfromXmlDom(xmlDom);
    }
    return sucess;
};

/**
 * Parses the XML from its argument to add the blocks to the workspace.
 * @param {!string} blocksXmlDom String of XML DOM code for the blocks.
 * @return {!boolean} Indicates if the XML into blocks parse was successful.
 */
Code.loadBlocksfromXmlDom = function (blocksXmlDom) {
    try {
        Blockly.Xml.domToWorkspace(blocksXmlDom, Code.workspace);
    } catch (e) {
        return false;
    }
    return true;
};

/** Function to download data to a file
 */
Code.download = function (data, filename, type) {
    var file = new Blob([data], { type: type });
    if (window.navigator.msSaveOrOpenBlob) // IE10+
        window.navigator.msSaveOrOpenBlob(file, filename);
    else { // Others
        var a = document.createElement("a"),
            url = URL.createObjectURL(file);
        a.href = url;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        setTimeout(function () {
            document.body.removeChild(a);
            window.URL.revokeObjectURL(url);
        }, 0);
    }
}

// Load the Code demo's language strings.
document.write('<script src="msg/' + Code.LANG + '.js"></script>\n');
// Load Blockly's language strings.
document.write('<script src="../blockly/msg/js/' + Code.LANG + '.js"></script>\n');

window.addEventListener('load', Code.init);
