// Copyright 2017 The Closure Library Authors. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS-IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * @fileoverview Date interval formatting symbols for all locales.
 *
 * File generated from CLDR ver. 33.1
 *
 * To reduce the file size (which may cause issues in some JS
 * developing environments), this file will only contain locales
 * that are frequently used by web applications. This is defined as
 * proto/closure_locales_data.txt and will change (most likely addition)
 * over time.  Rest of the data can be found in another file named
 * "dateintervalsymbolsext.js", which will be generated at
 * the same time together with this file.
 */

// clang-format off

goog.module('goog.i18n.dateIntervalSymbols');

/**
 * Map containing the interval pattern for every calendar field.
 * @typedef {!Object<string, string>}
 */
var DateIntervalPatternMap;

/** @typedef {!DateIntervalPatternMap} */
exports.DateIntervalPatternMap;

/**
 * Collection of date interval symbols.
 * @typedef {{
 *   FULL_DATE: !DateIntervalPatternMap,
 *   LONG_DATE: !DateIntervalPatternMap,
 *   MEDIUM_DATE: !DateIntervalPatternMap,
 *   SHORT_DATE: !DateIntervalPatternMap,
 *   FULL_TIME: !DateIntervalPatternMap,
 *   LONG_TIME: !DateIntervalPatternMap,
 *   MEDIUM_TIME: !DateIntervalPatternMap,
 *   SHORT_TIME: !DateIntervalPatternMap,
 *   FULL_DATETIME: !DateIntervalPatternMap,
 *   LONG_DATETIME: !DateIntervalPatternMap,
 *   MEDIUM_DATETIME: !DateIntervalPatternMap,
 *   SHORT_DATETIME: !DateIntervalPatternMap,
 *   FALLBACK: string
 * }}
 */
var DateIntervalSymbols;

/** @typedef {!DateIntervalSymbols} */
exports.DateIntervalSymbols;

/** @type {!DateIntervalSymbols} */
var defaultSymbols;

/**
 * Returns the default DateIntervalSymbols.
 * @return {!DateIntervalSymbols}
 */
exports.getDateIntervalSymbols = function() {
  return defaultSymbols;
};

/**
 * Sets the default DateIntervalSymbols.
 * @param {!DateIntervalSymbols} symbols
 */
exports.setDateIntervalSymbols = function(symbols) {
  defaultSymbols = symbols;
};

/** @const {!DateIntervalSymbols} */
exports.DateIntervalSymbols_af = {
  FULL_DATE: {
    'M': 'EEEE, d MMMM ??? EEEE, d MMMM, y',
    'd': 'EEEE, d MMMM ??? EEEE, d MMMM y',
    'y': 'EEEE, d MMMM y ??? EEEE, d MMMM y',
    '_': 'EEEE, dd MMMM y'
  },
  LONG_DATE: {
    'M': 'd MMMM ??? d MMMM y',
    'd': 'd???d MMMM y',
    'y': 'd MMMM y ??? d MMMM y',
    '_': 'dd MMMM y'
  },
  MEDIUM_DATE: {
    'M': 'd MMM ??? d MMM y',
    'd': 'd???d MMM y',
    'y': 'd MMM y ??? d MMM y',
    '_': 'dd MMM y'
  },
  SHORT_DATE: {
    'Mdy': 'd/M/y ??? d/M/y',
    '_': 'y-MM-dd'
  },
  FULL_TIME: {
    'Mdy': 'y-MM-dd HH:mm:ss zzzz',
    '_': 'HH:mm:ss zzzz'
  },
  LONG_TIME: {
    'Mdy': 'y-MM-dd HH:mm:ss z',
    '_': 'HH:mm:ss z'
  },
  MEDIUM_TIME: {
    'Mdy': 'y-MM-dd HH:mm:ss',
    '_': 'HH:mm:ss'
  },
  SHORT_TIME: {
    'Mdy': 'y-MM-dd HH:mm',
    'ahm': 'HH:mm???HH:mm',
    '_': 'HH:mm'
  },
  FULL_DATETIME: {
    '_': 'EEEE, dd MMMM y HH:mm:ss zzzz'
  },
  LONG_DATETIME: {
    '_': 'dd MMMM y HH:mm:ss z'
  },
  MEDIUM_DATETIME: {
    '_': 'dd MMM y HH:mm:ss'
  },
  SHORT_DATETIME: {
    'ahm': 'y-MM-dd HH:mm???HH:mm',
    '_': 'y-MM-dd HH:mm'
  },
  FALLBACK: '{0} ??? {1}'
};

/** @const {!DateIntervalSymbols} */
exports.DateIntervalSymbols_am = {
  FULL_DATE: {
    'Md': 'EEEE MMMM d ??? EEEE MMMM d??? y',
    'y': 'EEEE??? MMMM d??? y ??? EEEE??? MMMM d??? y',
    '_': 'EEEE ???d MMMM y'
  },
  LONG_DATE: {
    'M': 'MMMM d ??? MMMM d??? y',
    'd': 'MMMM d???d??? y',
    'y': 'MMMM d??? y ??? MMMM d??? y',
    '_': 'd MMMM y'
  },
  MEDIUM_DATE: {
    'M': 'MMM d ??? MMM d??? y',
    'd': 'MMM d???d??? y',
    'y': 'MMM d??? y ??? MMM d??? y',
    '_': 'd MMM y'
  },
  SHORT_DATE: {
    'Mdy': 'd/M/y ??? d/M/y',
    '_': 'dd/MM/y'
  },
  FULL_TIME: {
    'Mdy': 'd/M/y h:mm:ss a zzzz',
    '_': 'h:mm:ss a zzzz'
  },
  LONG_TIME: {
    'Mdy': 'd/M/y h:mm:ss a z',
    '_': 'h:mm:ss a z'
  },
  MEDIUM_TIME: {
    'Mdy': 'd/M/y h:mm:ss a',
    '_': 'h:mm:ss a'
  },
  SHORT_TIME: {
    'Mdy': 'd/M/y h:mm a',
    'hm': 'h:mm ??? h:mm a',
    '_': 'h:mm a'
  },
  FULL_DATETIME: {
    '_': 'EEEE ???d MMMM y h:mm:ss a zzzz'
  },
  LONG_DATETIME: {
    '_': 'd MMMM y h:mm:ss a z'
  },
  MEDIUM_DATETIME: {
    '_': 'd MMM y h:mm:ss a'
  },
  SHORT_DATETIME: {
    'a': 'dd/MM/y h:mm a ??? h:mm a',
    'hm': 'dd/MM/y h:mm ??? h:mm a',
    '_': 'dd/MM/y h:mm a'
  },
  FALLBACK: '{0} ??? {1}'
};

/** @const {!DateIntervalSymbols} */
exports.DateIntervalSymbols_ar = {
  FULL_DATE: {
    'M': 'EEEE?? d MMMM ??? EEEE?? d MMMM?? y',
    'd': 'EEEE?? d ??? EEEE?? d MMMM?? y',
    'y': 'EEEE?? d MMMM?? y ??? EEEE?? d MMMM?? y',
    '_': 'EEEE?? d MMMM y'
  },
  LONG_DATE: {
    'M': 'd MMMM ??? d MMMM?? y',
    'd': 'd???d MMMM?? y',
    'y': 'd MMMM?? y ??? d MMMM?? y',
    '_': 'd MMMM y'
  },
  MEDIUM_DATE: {
    'Mdy': 'd???/M???/y ??? d???/M???/y',
    '_': 'dd???/MM???/y'
  },
  SHORT_DATE: {
    '_': 'd???/M???/y'
  },
  FULL_TIME: {
    'Mdy': 'd???/M???/y h:mm:ss a zzzz',
    '_': 'h:mm:ss a zzzz'
  },
  LONG_TIME: {
    'Mdy': 'd???/M???/y h:mm:ss a z',
    '_': 'h:mm:ss a z'
  },
  MEDIUM_TIME: {
    'Mdy': 'd???/M???/y h:mm:ss a',
    '_': 'h:mm:ss a'
  },
  SHORT_TIME: {
    'Mdy': 'd???/M???/y h:mm a',
    'hm': 'h:mm???h:mm a',
    '_': 'h:mm a'
  },
  FULL_DATETIME: {
    '_': 'EEEE?? d MMMM y h:mm:ss a zzzz'
  },
  LONG_DATETIME: {
    '_': 'd MMMM y h:mm:ss a z'
  },
  MEDIUM_DATETIME: {
    '_': 'dd???/MM???/y h:mm:ss a'
  },
  SHORT_DATETIME: {
    'a': 'd???/M???/y h:mm a ??? h:mm a',
    'hm': 'd???/M???/y h:mm???h:mm a',
    '_': 'd???/M???/y h:mm a'
  },
  FALLBACK: '{0} ??? {1}'
};

/** @const {!DateIntervalSymbols} */
exports.DateIntervalSymbols_ar_DZ = exports.DateIntervalSymbols_ar;

/** @const {!DateIntervalSymbols} */
exports.DateIntervalSymbols_ar_EG = exports.DateIntervalSymbols_ar;

/** @const {!DateIntervalSymbols} */
exports.DateIntervalSymbols_az = {
  FULL_DATE: {
    'Md': 'd MMMM y, EEEE ??? d MMMM, EEEE',
    '_': 'd MMMM y, EEEE'
  },
  LONG_DATE: {
    'M': 'd MMMM y ??? d MMMM',
    'd': 'y MMMM d???d',
    '_': 'd MMMM y'
  },
  MEDIUM_DATE: {
    'M': 'd MMM y ??? d MMM',
    'd': 'y MMM d???d',
    '_': 'd MMM y'
  },
  SHORT_DATE: {
    '_': 'dd.MM.yy'
  },
  FULL_TIME: {
    'Mdy': 'dd.MM.y HH:mm:ss zzzz',
    '_': 'HH:mm:ss zzzz'
  },
  LONG_TIME: {
    'Mdy': 'dd.MM.y HH:mm:ss z',
    '_': 'HH:mm:ss z'
  },
  MEDIUM_TIME: {
    'Mdy': 'dd.MM.y HH:mm:ss',
    '_': 'HH:mm:ss'
  },
  SHORT_TIME: {
    'Mdy': 'dd.MM.y HH:mm',
    'ahm': 'HH:mm???HH:mm',
    '_': 'HH:mm'
  },
  FULL_DATETIME: {
    '_': 'd MMMM y, EEEE HH:mm:ss zzzz'
  },
  LONG_DATETIME: {
    '_': 'd MMMM y HH:mm:ss z'
  },
  MEDIUM_DATETIME: {
    '_': 'd MMM y HH:mm:ss'
  },
  SHORT_DATETIME: {
    'ahm': 'dd.MM.yy HH:mm???HH:mm',
    '_': 'dd.MM.yy HH:mm'
  },
  FALLBACK: '{0} ??? {1}'
};

/** @const {!DateIntervalSymbols} */
exports.DateIntervalSymbols_be = {
  FULL_DATE: {
    'M': 'EEEE, d MMMM ??? EEEE, d MMMM y',
    'd': 'EEEE, d ??? EEEE, d MMMM y',
    'y': 'EEEE, d MMMM y ??? EEEE, d MMMM y',
    '_': 'EEEE, d MMMM y \'??\'.'
  },
  LONG_DATE: {
    'M': 'd MMMM ??? d MMMM y',
    'd': 'd???d MMMM y',
    'y': 'd MMMM y ??? d MMMM y',
    '_': 'd MMMM y \'??\'.'
  },
  MEDIUM_DATE: {
    'Mdy': 'd.M.y ??? d.M.y',
    '_': 'd.MM.y'
  },
  SHORT_DATE: {
    'Mdy': 'd.M.yy ??? d.M.yy',
    '_': 'd.MM.yy'
  },
  FULL_TIME: {
    'Mdy': 'd.M.y, HH:mm:ss, zzzz',
    '_': 'HH:mm:ss, zzzz'
  },
  LONG_TIME: {
    'Mdy': 'd.M.y, HH:mm:ss, z',
    '_': 'HH:mm:ss z'
  },
  MEDIUM_TIME: {
    'Mdy': 'd.M.y, HH:mm:ss',
    '_': 'HH:mm:ss'
  },
  SHORT_TIME: {
    'Mdy': 'd.M.y, HH:mm',
    'ahm': 'HH.mm???HH.mm',
    '_': 'HH:mm'
  },
  FULL_DATETIME: {
    '_': 'EEEE, d MMMM y \'??\'. \'??\' HH:mm:ss, zzzz'
  },
  LONG_DATETIME: {
    '_': 'd MMMM y \'??\'. \'??\' HH:mm:ss z'
  },
  MEDIUM_DATETIME: {
    '_': 'd.MM.y, HH:mm:ss'
  },
  SHORT_DATETIME: {
    'ahm': 'd.MM.yy, HH.mm???HH.mm',
    '_': 'd.MM.yy, HH:mm'
  },
  FALLBACK: '{0} ??? {1}'
};

/** @const {!DateIntervalSymbols} */
exports.DateIntervalSymbols_bg = {
  FULL_DATE: {
    'Md': 'EEEE, d MMMM ??? EEEE, d MMMM y \'??\'.',
    '_': 'EEEE, d MMMM y \'??\'.'
  },
  LONG_DATE: {
    'M': 'd MMMM ??? d MMMM y \'??\'.',
    'd': 'd ??? d MMMM y \'??\'.',
    '_': 'd MMMM y \'??\'.'
  },
  MEDIUM_DATE: {
    'Md': 'd.MM ??? d.MM.y \'??\'.',
    '_': 'd.MM.y \'??\'.'
  },
  SHORT_DATE: {
    'Md': 'd.MM ??? d.MM.yy \'??\'.',
    '_': 'd.MM.yy \'??\'.'
  },
  FULL_TIME: {
    'Mdy': 'd.MM.y \'??\'., H:mm:ss \'??\'. zzzz',
    '_': 'H:mm:ss \'??\'. zzzz'
  },
  LONG_TIME: {
    'Mdy': 'd.MM.y \'??\'., H:mm:ss \'??\'. z',
    '_': 'H:mm:ss \'??\'. z'
  },
  MEDIUM_TIME: {
    'Mdy': 'd.MM.y \'??\'., H:mm:ss \'??\'.',
    '_': 'H:mm:ss \'??\'.'
  },
  SHORT_TIME: {
    'Mdy': 'd.MM.y \'??\'., H:mm \'??\'.',
    '_': 'H:mm \'??\'.'
  },
  FULL_DATETIME: {
    '_': 'EEEE, d MMMM y \'??\'., H:mm:ss \'??\'. zzzz'
  },
  LONG_DATETIME: {
    '_': 'd MMMM y \'??\'., H:mm:ss \'??\'. z'
  },
  MEDIUM_DATETIME: {
    '_': 'd.MM.y \'??\'., H:mm:ss \'??\'.'
  },
  SHORT_DATETIME: {
    'ahm': 'd.MM.yy \'??\'., H:mm \'??\'. ??? H:mm \'??\'.',
    '_': 'd.MM.yy \'??\'., H:mm \'??\'.'
  },
  FALLBACK: '{0} ??? {1}'
};

/** @const {!DateIntervalSymbols} */
exports.DateIntervalSymbols_bn = {
  FULL_DATE: {
    'Md': 'EEEE, d MMMM ??? EEEE, d MMMM, y',
    '_': 'EEEE, d MMMM, y'
  },
  LONG_DATE: {
    'M': 'd MMMM ??? d MMMM, y',
    'd': 'd???d MMMM, y',
    '_': 'd MMMM, y'
  },
  MEDIUM_DATE: {
    'M': 'd MMM ??? d MMM, y',
    'd': 'd???d MMM, y',
    '_': 'd MMM, y'
  },
  SHORT_DATE: {
    '_': 'd/M/yy'
  },
  FULL_TIME: {
    'Mdy': 'd/M/y h:mm:ss a zzzz',
    '_': 'h:mm:ss a zzzz'
  },
  LONG_TIME: {
    'Mdy': 'd/M/y h:mm:ss a z',
    '_': 'h:mm:ss a z'
  },
  MEDIUM_TIME: {
    'Mdy': 'd/M/y h:mm:ss a',
    '_': 'h:mm:ss a'
  },
  SHORT_TIME: {
    'Mdy': 'd/M/y h:mm a',
    'hm': 'h:mm???h:mm a',
    '_': 'h:mm a'
  },
  FULL_DATETIME: {
    '_': 'EEEE, d MMMM, y h:mm:ss a zzzz'
  },
  LONG_DATETIME: {
    '_': 'd MMMM, y h:mm:ss a z'
  },
  MEDIUM_DATETIME: {
    '_': 'd MMM, y h:mm:ss a'
  },
  SHORT_DATETIME: {
    'a': 'd/M/yy h:mm a ??? h:mm a',
    'hm': 'd/M/yy h:mm???h:mm a',
    '_': 'd/M/yy h:mm a'
  },
  FALLBACK: '{0} ??? {1}'
};

/** @const {!DateIntervalSymbols} */
exports.DateIntervalSymbols_br = {
  FULL_DATE: {
    'Md': 'EEEE d MMMM ??? EEEE d MMMM y',
    '_': 'EEEE d MMMM y'
  },
  LONG_DATE: {
    'M': 'd MMMM ??? d MMMM y',
    'd': 'd???d MMMM y',
    '_': 'd MMMM y'
  },
  MEDIUM_DATE: {
    'M': 'd MMM ??? d MMM y',
    'd': 'd???d MMM y',
    '_': 'd MMM y'
  },
  SHORT_DATE: {
    '_': 'dd/MM/y'
  },
  FULL_TIME: {
    'Mdy': 'dd/MM/y, HH:mm:ss zzzz',
    '_': 'HH:mm:ss zzzz'
  },
  LONG_TIME: {
    'Mdy': 'dd/MM/y, HH:mm:ss z',
    '_': 'HH:mm:ss z'
  },
  MEDIUM_TIME: {
    'Mdy': 'dd/MM/y, HH:mm:ss',
    '_': 'HH:mm:ss'
  },
  SHORT_TIME: {
    'Mdy': 'dd/MM/y, HH:mm',
    'ahm': 'HH:mm???HH:mm',
    '_': 'HH:mm'
  },
  FULL_DATETIME: {
    '_': 'EEEE d MMMM y \'da\' HH:mm:ss zzzz'
  },
  LONG_DATETIME: {
    '_': 'd MMMM y \'da\' HH:mm:ss z'
  },
  MEDIUM_DATETIME: {
    '_': 'd MMM y, HH:mm:ss'
  },
  SHORT_DATETIME: {
    'ahm': 'dd/MM/y, HH:mm???HH:mm',
    '_': 'dd/MM/y HH:mm'
  },
  FALLBACK: '{0} ??? {1}'
};

/** @const {!DateIntervalSymbols} */
exports.DateIntervalSymbols_bs = {
  FULL_DATE: {
    'M': 'EEEE, d. MMMM ??? EEEE, d. MMMM y.',
    'd': 'EEEE, d. ??? EEEE, d. MMMM y.',
    'y': 'EEEE, d. MMMM y. ??? EEEE, d. MMMM y.',
    '_': 'EEEE, d. MMMM y.'
  },
  LONG_DATE: {
    'M': 'd. MMMM ??? d. MMMM y.',
    'd': 'd. ??? d. MMMM y.',
    'y': 'd. MMMM y. ??? d. MMMM y.',
    '_': 'd. MMMM y.'
  },
  MEDIUM_DATE: {
    'M': 'd. MMM ??? d. MMM y.',
    'd': 'd. ??? d. MMM y.',
    'y': 'd. MMM y. ??? d. MMM y.',
    '_': 'd. MMM y.'
  },
  SHORT_DATE: {
    'Mdy': 'd.M.yy. ??? d.M.yy.',
    '_': 'd.M.yy.'
  },
  FULL_TIME: {
    'Mdy': 'd.M.y. HH:mm:ss zzzz',
    '_': 'HH:mm:ss zzzz'
  },
  LONG_TIME: {
    'Mdy': 'd.M.y. HH:mm:ss z',
    '_': 'HH:mm:ss z'
  },
  MEDIUM_TIME: {
    'Mdy': 'd.M.y. HH:mm:ss',
    '_': 'HH:mm:ss'
  },
  SHORT_TIME: {
    'Mdy': 'd.M.y. HH:mm',
    'ahm': 'HH:mm ??? HH:mm',
    '_': 'HH:mm'
  },
  FULL_DATETIME: {
    '_': 'EEEE, d. MMMM y. \'u\' HH:mm:ss zzzz'
  },
  LONG_DATETIME: {
    '_': 'd. MMMM y. \'u\' HH:mm:ss z'
  },
  MEDIUM_DATETIME: {
    '_': 'd. MMM y. HH:mm:ss'
  },
  SHORT_DATETIME: {
    'ahm': 'd.M.yy. HH:mm ??? HH:mm',
    '_': 'd.M.yy. HH:mm'
  },
  FALLBACK: '{0} - {1}'
};

/** @const {!DateIntervalSymbols} */
exports.DateIntervalSymbols_ca = {
  FULL_DATE: {
    'M': 'EEEE, d MMMM ??? EEEE, d MMMM \'de\' y',
    'd': 'EEEE, d ??? EEEE, d MMMM \'de\' y',
    'y': 'EEEE, d MMMM \'de\' y ??? EEEE, d MMMM \'de\' y',
    '_': 'EEEE, d MMMM \'de\' y'
  },
  LONG_DATE: {
    'M': 'd MMMM ??? d MMMM \'de\' y',
    'd': 'd???d MMMM \'de\' y',
    'y': 'd MMMM \'de\' y ??? d MMMM \'de\' y',
    '_': 'd MMMM \'de\' y'
  },
  MEDIUM_DATE: {
    'M': 'd MMM ??? d MMM y',
    'd': 'd???d MMM y',
    'y': 'd MMM y ??? d MMM y',
    '_': 'd MMM y'
  },
  SHORT_DATE: {
    'Mdy': 'd/M/yy ??? d/M/yy',
    '_': 'd/M/yy'
  },
  FULL_TIME: {
    'Mdy': 'd/M/y, H:mm:ss zzzz',
    '_': 'H:mm:ss zzzz'
  },
  LONG_TIME: {
    'Mdy': 'd/M/y, H:mm:ss z',
    '_': 'H:mm:ss z'
  },
  MEDIUM_TIME: {
    'Mdy': 'd/M/y, H:mm:ss',
    '_': 'H:mm:ss'
  },
  SHORT_TIME: {
    'Mdy': 'd/M/y, H:mm',
    'ahm': 'H:mm ??? H:mm',
    '_': 'H:mm'
  },
  FULL_DATETIME: {
    '_': 'EEEE, d MMMM \'de\' y \'a\' \'les\' H:mm:ss zzzz'
  },
  LONG_DATETIME: {
    '_': 'd MMMM \'de\' y \'a\' \'les\' H:mm:ss z'
  },
  MEDIUM_DATETIME: {
    '_': 'd MMM y, H:mm:ss'
  },
  SHORT_DATETIME: {
    'ahm': 'd/M/yy, H:mm ??? H:mm',
    '_': 'd/M/yy H:mm'
  },
  FALLBACK: '{0} - {1}'
};

/** @const {!DateIntervalSymbols} */
exports.DateIntervalSymbols_chr = {
  FULL_DATE: {
    'Md': 'EEEE, MMMM d ??? EEEE, MMMM d, y',
    '_': 'EEEE, MMMM d, y'
  },
  LONG_DATE: {
    'M': 'MMMM d ??? MMMM d, y',
    'd': 'MMMM d ??? d, y',
    '_': 'MMMM d, y'
  },
  MEDIUM_DATE: {
    'M': 'MMM d ??? MMM d, y',
    'd': 'MMM d ??? d, y',
    '_': 'MMM d, y'
  },
  SHORT_DATE: {
    '_': 'M/d/yy'
  },
  FULL_TIME: {
    'Mdy': 'M/d/y, h:mm:ss a zzzz',
    '_': 'h:mm:ss a zzzz'
  },
  LONG_TIME: {
    'Mdy': 'M/d/y, h:mm:ss a z',
    '_': 'h:mm:ss a z'
  },
  MEDIUM_TIME: {
    'Mdy': 'M/d/y, h:mm:ss a',
    '_': 'h:mm:ss a'
  },
  SHORT_TIME: {
    'Mdy': 'M/d/y, h:mm a',
    'hm': 'h:mm ??? h:mm a',
    '_': 'h:mm a'
  },
  FULL_DATETIME: {
    '_': 'EEEE, MMMM d, y ????????? h:mm:ss a zzzz'
  },
  LONG_DATETIME: {
    '_': 'MMMM d, y ????????? h:mm:ss a z'
  },
  MEDIUM_DATETIME: {
    '_': 'MMM d, y, h:mm:ss a'
  },
  SHORT_DATETIME: {
    'a': 'M/d/yy, h:mm a ??? h:mm a',
    'hm': 'M/d/yy, h:mm ??? h:mm a',
    '_': 'M/d/yy, h:mm a'
  },
  FALLBACK: '{0} ??? {1}'
};

/** @const {!DateIntervalSymbols} */
exports.DateIntervalSymbols_cs = {
  FULL_DATE: {
    'Md': 'EEEE d. M. ??? EEEE d. M. y',
    'y': 'EEEE d. M. y ??? EEEE d. M. y',
    '_': 'EEEE d. MMMM y'
  },
  LONG_DATE: {
    'M': 'd. M. ??? d. M. y',
    'd': 'd.???d. M. y',
    'y': 'd. M. y ??? d. M. y',
    '_': 'd. MMMM y'
  },
  MEDIUM_DATE: {
    'Mdy': 'dd.MM.y ??? dd.MM.y',
    '_': 'd. M. y'
  },
  SHORT_DATE: {
    '_': 'dd.MM.yy'
  },
  FULL_TIME: {
    'Mdy': 'd. M. y H:mm:ss zzzz',
    '_': 'H:mm:ss zzzz'
  },
  LONG_TIME: {
    'Mdy': 'd. M. y H:mm:ss z',
    '_': 'H:mm:ss z'
  },
  MEDIUM_TIME: {
    'Mdy': 'd. M. y H:mm:ss',
    '_': 'H:mm:ss'
  },
  SHORT_TIME: {
    'Mdy': 'd. M. y H:mm',
    'ahm': 'H:mm???H:mm',
    '_': 'H:mm'
  },
  FULL_DATETIME: {
    '_': 'EEEE d. MMMM y H:mm:ss zzzz'
  },
  LONG_DATETIME: {
    '_': 'd. MMMM y H:mm:ss z'
  },
  MEDIUM_DATETIME: {
    '_': 'd. M. y H:mm:ss'
  },
  SHORT_DATETIME: {
    'ahm': 'dd. MM. yy H:mm???H:mm',
    '_': 'dd.MM.yy H:mm'
  },
  FALLBACK: '{0} ??? {1}'
};

/** @const {!DateIntervalSymbols} */
exports.DateIntervalSymbols_cy = {
  FULL_DATE: {
    'Md': 'EEEE, d MMMM ??? EEEE, d MMMM y',
    '_': 'EEEE, d MMMM y'
  },
  LONG_DATE: {
    'M': 'd MMMM ??? d MMMM y',
    'd': 'd???d MMMM y',
    'y': 'd MMMM, y ??? d MMMM y',
    '_': 'd MMMM y'
  },
  MEDIUM_DATE: {
    'M': 'd MMM ??? d MMM y',
    'd': 'd???d MMM y',
    'y': 'd MMM, y ??? d MMM y',
    '_': 'd MMM y'
  },
  SHORT_DATE: {
    'Mdy': 'd/M/yy ??? d/M/yy',
    '_': 'dd/MM/yy'
  },
  FULL_TIME: {
    'Mdy': 'd/M/y HH:mm:ss zzzz',
    '_': 'HH:mm:ss zzzz'
  },
  LONG_TIME: {
    'Mdy': 'd/M/y HH:mm:ss z',
    '_': 'HH:mm:ss z'
  },
  MEDIUM_TIME: {
    'Mdy': 'd/M/y HH:mm:ss',
    '_': 'HH:mm:ss'
  },
  SHORT_TIME: {
    'Mdy': 'd/M/y HH:mm',
    '_': 'HH:mm'
  },
  FULL_DATETIME: {
    '_': 'EEEE, d MMMM y \'am\' HH:mm:ss zzzz'
  },
  LONG_DATETIME: {
    '_': 'd MMMM y \'am\' HH:mm:ss z'
  },
  MEDIUM_DATETIME: {
    '_': 'd MMM y HH:mm:ss'
  },
  SHORT_DATETIME: {
    'ahm': 'dd/MM/yy HH:mm ??? HH:mm',
    '_': 'dd/MM/yy HH:mm'
  },
  FALLBACK: '{0} ??? {1}'
};

/** @const {!DateIntervalSymbols} */
exports.DateIntervalSymbols_da = {
  FULL_DATE: {
    'Md': 'EEEE \'den\' d.???EEEE \'den\' d. MMMM y',
    'y': 'EEEE \'den\' d. MMMM y???EEEE \'den\' d. MMMM y',
    '_': 'EEEE \'den\' d. MMMM y'
  },
  LONG_DATE: {
    'M': 'd. MMMM???d. MMMM y',
    'd': 'd.???d. MMMM y',
    'y': 'd. MMMM y???d. MMMM y',
    '_': 'd. MMMM y'
  },
  MEDIUM_DATE: {
    'M': 'd. MMM???d. MMM y',
    'd': 'd.???d. MMM y',
    'y': 'd. MMM y???d. MMM y',
    '_': 'd. MMM y'
  },
  SHORT_DATE: {
    'Mdy': 'dd/MM/y???dd/MM/y',
    '_': 'dd/MM/y'
  },
  FULL_TIME: {
    'Mdy': 'd/M/y HH.mm.ss zzzz',
    '_': 'HH.mm.ss zzzz'
  },
  LONG_TIME: {
    'Mdy': 'd/M/y HH.mm.ss z',
    '_': 'HH.mm.ss z'
  },
  MEDIUM_TIME: {
    'Mdy': 'd/M/y HH.mm.ss',
    '_': 'HH.mm.ss'
  },
  SHORT_TIME: {
    'Mdy': 'd/M/y HH.mm',
    'ahm': 'HH.mm???HH.mm',
    '_': 'HH.mm'
  },
  FULL_DATETIME: {
    '_': 'EEEE \'den\' d. MMMM y \'kl\'. HH.mm.ss zzzz'
  },
  LONG_DATETIME: {
    '_': 'd. MMMM y \'kl\'. HH.mm.ss z'
  },
  MEDIUM_DATETIME: {
    '_': 'd. MMM y HH.mm.ss'
  },
  SHORT_DATETIME: {
    'ahm': 'dd/MM/y HH.mm???HH.mm',
    '_': 'dd/MM/y HH.mm'
  },
  FALLBACK: '{0}-{1}'
};

/** @const {!DateIntervalSymbols} */
exports.DateIntervalSymbols_de = {
  FULL_DATE: {
    'M': 'EEEE, d. MMMM ??? EEEE, d. MMMM y',
    'd': 'EEEE, d. ??? EEEE, d. MMMM y',
    '_': 'EEEE, d. MMMM y'
  },
  LONG_DATE: {
    'M': 'd. MMMM ??? d. MMMM y',
    'd': 'd.???d. MMMM y',
    '_': 'd. MMMM y'
  },
  MEDIUM_DATE: {
    '_': 'dd.MM.y'
  },
  SHORT_DATE: {
    '_': 'dd.MM.yy'
  },
  FULL_TIME: {
    'Mdy': 'd.M.y, HH:mm:ss zzzz',
    '_': 'HH:mm:ss zzzz'
  },
  LONG_TIME: {
    'Mdy': 'd.M.y, HH:mm:ss z',
    '_': 'HH:mm:ss z'
  },
  MEDIUM_TIME: {
    'Mdy': 'd.M.y, HH:mm:ss',
    '_': 'HH:mm:ss'
  },
  SHORT_TIME: {
    'Mdy': 'd.M.y, HH:mm',
    'ahm': 'HH:mm???HH:mm \'Uhr\'',
    '_': 'HH:mm'
  },
  FULL_DATETIME: {
    '_': 'EEEE, d. MMMM y \'um\' HH:mm:ss zzzz'
  },
  LONG_DATETIME: {
    '_': 'd. MMMM y \'um\' HH:mm:ss z'
  },
  MEDIUM_DATETIME: {
    '_': 'dd.MM.y, HH:mm:ss'
  },
  SHORT_DATETIME: {
    'ahm': 'dd.MM.yy, HH:mm???HH:mm \'Uhr\'',
    '_': 'dd.MM.yy, HH:mm'
  },
  FALLBACK: '{0} ??? {1}'
};

/** @const {!DateIntervalSymbols} */
exports.DateIntervalSymbols_de_AT = exports.DateIntervalSymbols_de;

/** @const {!DateIntervalSymbols} */
exports.DateIntervalSymbols_de_CH = exports.DateIntervalSymbols_de;

/** @const {!DateIntervalSymbols} */
exports.DateIntervalSymbols_el = {
  FULL_DATE: {
    'Md': 'EEEE, dd MMMM ??? EEEE, dd MMMM y',
    'y': 'EEEE, dd MMMM y ??? EEEE, dd MMMM y',
    '_': 'EEEE, d MMMM y'
  },
  LONG_DATE: {
    'M': 'dd MMMM ??? dd MMMM y',
    'd': 'dd???dd MMMM y',
    'y': 'dd MMMM y ??? dd MMMM y',
    '_': 'd MMMM y'
  },
  MEDIUM_DATE: {
    'M': 'dd MMM ??? dd MMM y',
    'd': 'dd???dd MMM y',
    'y': 'dd MMM y ??? dd MMM y',
    '_': 'd MMM y'
  },
  SHORT_DATE: {
    'Mdy': 'dd/MM/yy ??? dd/MM/yy',
    '_': 'd/M/yy'
  },
  FULL_TIME: {
    'Mdy': 'd/M/y, h:mm:ss a zzzz',
    '_': 'h:mm:ss a zzzz'
  },
  LONG_TIME: {
    'Mdy': 'd/M/y, h:mm:ss a z',
    '_': 'h:mm:ss a z'
  },
  MEDIUM_TIME: {
    'Mdy': 'd/M/y, h:mm:ss a',
    '_': 'h:mm:ss a'
  },
  SHORT_TIME: {
    'Mdy': 'd/M/y, h:mm a',
    'a': 'h:mm a ??? h:mm a',
    'hm': 'h:mm???h:mm a',
    '_': 'h:mm a'
  },
  FULL_DATETIME: {
    '_': 'EEEE, d MMMM y - h:mm:ss a zzzz'
  },
  LONG_DATETIME: {
    '_': 'd MMMM y - h:mm:ss a z'
  },
  MEDIUM_DATETIME: {
    '_': 'd MMM y, h:mm:ss a'
  },
  SHORT_DATETIME: {
    'a': 'd/M/yy, h:mm a ??? h:mm a',
    'hm': 'd/M/yy, h:mm???h:mm a',
    '_': 'd/M/yy, h:mm a'
  },
  FALLBACK: '{0} - {1}'
};

/** @const {!DateIntervalSymbols} */
exports.DateIntervalSymbols_en = {
  FULL_DATE: {
    'Md': 'EEEE, MMMM d ??? EEEE, MMMM d, y',
    '_': 'EEEE, MMMM d, y'
  },
  LONG_DATE: {
    'M': 'MMMM d ??? MMMM d, y',
    'd': 'MMMM d ??? d, y',
    '_': 'MMMM d, y'
  },
  MEDIUM_DATE: {
    'M': 'MMM d ??? MMM d, y',
    'd': 'MMM d ??? d, y',
    '_': 'MMM d, y'
  },
  SHORT_DATE: {
    '_': 'M/d/yy'
  },
  FULL_TIME: {
    'Mdy': 'M/d/y, h:mm:ss a zzzz',
    '_': 'h:mm:ss a zzzz'
  },
  LONG_TIME: {
    'Mdy': 'M/d/y, h:mm:ss a z',
    '_': 'h:mm:ss a z'
  },
  MEDIUM_TIME: {
    'Mdy': 'M/d/y, h:mm:ss a',
    '_': 'h:mm:ss a'
  },
  SHORT_TIME: {
    'Mdy': 'M/d/y, h:mm a',
    'hm': 'h:mm ??? h:mm a',
    '_': 'h:mm a'
  },
  FULL_DATETIME: {
    '_': 'EEEE, MMMM d, y \'at\' h:mm:ss a zzzz'
  },
  LONG_DATETIME: {
    '_': 'MMMM d, y \'at\' h:mm:ss a z'
  },
  MEDIUM_DATETIME: {
    '_': 'MMM d, y, h:mm:ss a'
  },
  SHORT_DATETIME: {
    'a': 'M/d/yy, h:mm a ??? h:mm a',
    'hm': 'M/d/yy, h:mm ??? h:mm a',
    '_': 'M/d/yy, h:mm a'
  },
  FALLBACK: '{0} ??? {1}'
};

/** @const {!DateIntervalSymbols} */
exports.DateIntervalSymbols_en_AU = {
  FULL_DATE: {
    'M': 'EEEE, d MMMM ??? EEEE, d MMMM y',
    'd': 'EEEE, d ??? EEEE, d MMMM y',
    '_': 'EEEE, d MMMM y'
  },
  LONG_DATE: {
    'M': 'd MMMM ??? d MMMM y',
    'd': 'd ??? d MMMM y',
    '_': 'd MMMM y'
  },
  MEDIUM_DATE: {
    'M': 'd MMM ??? d MMM y',
    'd': 'd ??? d MMM y',
    '_': 'd MMM y'
  },
  SHORT_DATE: {
    'Mdy': 'dd/MM/yy ??? dd/MM/yy',
    '_': 'd/M/yy'
  },
  FULL_TIME: {
    'Mdy': 'dd/MM/y, h:mm:ss a zzzz',
    '_': 'h:mm:ss a zzzz'
  },
  LONG_TIME: {
    'Mdy': 'dd/MM/y, h:mm:ss a z',
    '_': 'h:mm:ss a z'
  },
  MEDIUM_TIME: {
    'Mdy': 'dd/MM/y, h:mm:ss a',
    '_': 'h:mm:ss a'
  },
  SHORT_TIME: {
    'Mdy': 'dd/MM/y, h:mm a',
    'hm': 'h:mm ??? h:mm a',
    '_': 'h:mm a'
  },
  FULL_DATETIME: {
    '_': 'EEEE, d MMMM y \'at\' h:mm:ss a zzzz'
  },
  LONG_DATETIME: {
    '_': 'd MMMM y \'at\' h:mm:ss a z'
  },
  MEDIUM_DATETIME: {
    '_': 'd MMM y, h:mm:ss a'
  },
  SHORT_DATETIME: {
    'a': 'd/M/yy, h:mm a ??? h:mm a',
    'hm': 'd/M/yy, h:mm ??? h:mm a',
    '_': 'd/M/yy, h:mm a'
  },
  FALLBACK: '{0} ??? {1}'
};

/** @const {!DateIntervalSymbols} */
exports.DateIntervalSymbols_en_CA = {
  FULL_DATE: {
    'Md': 'EEEE, MMMM d ??? EEEE, MMMM d, y',
    '_': 'EEEE, MMMM d, y'
  },
  LONG_DATE: {
    'M': 'MMMM d ??? MMMM d, y',
    'd': 'MMMM d ??? d, y',
    '_': 'MMMM d, y'
  },
  MEDIUM_DATE: {
    'M': 'MMM d ??? MMM d, y',
    'd': 'MMM d ??? d, y',
    '_': 'MMM d, y'
  },
  SHORT_DATE: {
    '_': 'y-MM-dd'
  },
  FULL_TIME: {
    'Mdy': 'y-MM-dd, h:mm:ss a zzzz',
    '_': 'h:mm:ss a zzzz'
  },
  LONG_TIME: {
    'Mdy': 'y-MM-dd, h:mm:ss a z',
    '_': 'h:mm:ss a z'
  },
  MEDIUM_TIME: {
    'Mdy': 'y-MM-dd, h:mm:ss a',
    '_': 'h:mm:ss a'
  },
  SHORT_TIME: {
    'Mdy': 'y-MM-dd, h:mm a',
    'hm': 'h:mm ??? h:mm a',
    '_': 'h:mm a'
  },
  FULL_DATETIME: {
    '_': 'EEEE, MMMM d, y \'at\' h:mm:ss a zzzz'
  },
  LONG_DATETIME: {
    '_': 'MMMM d, y \'at\' h:mm:ss a z'
  },
  MEDIUM_DATETIME: {
    '_': 'MMM d, y, h:mm:ss a'
  },
  SHORT_DATETIME: {
    'a': 'y-MM-dd, h:mm a ??? h:mm a',
    'hm': 'y-MM-dd, h:mm ??? h:mm a',
    '_': 'y-MM-dd, h:mm a'
  },
  FALLBACK: '{0} ??? {1}'
};

/** @const {!DateIntervalSymbols} */
exports.DateIntervalSymbols_en_GB = {
  FULL_DATE: {
    'M': 'EEEE, d MMMM ??? EEEE, d MMMM y',
    'd': 'EEEE, d ??? EEEE, d MMMM y',
    '_': 'EEEE, d MMMM y'
  },
  LONG_DATE: {
    'M': 'd MMMM ??? d MMMM y',
    'd': 'd???d MMMM y',
    '_': 'd MMMM y'
  },
  MEDIUM_DATE: {
    'M': 'd MMM ??? d MMM y',
    'd': 'd???d MMM y',
    '_': 'd MMM y'
  },
  SHORT_DATE: {
    '_': 'dd/MM/y'
  },
  FULL_TIME: {
    'Mdy': 'dd/MM/y, HH:mm:ss zzzz',
    '_': 'HH:mm:ss zzzz'
  },
  LONG_TIME: {
    'Mdy': 'dd/MM/y, HH:mm:ss z',
    '_': 'HH:mm:ss z'
  },
  MEDIUM_TIME: {
    'Mdy': 'dd/MM/y, HH:mm:ss',
    '_': 'HH:mm:ss'
  },
  SHORT_TIME: {
    'Mdy': 'dd/MM/y, HH:mm',
    'ahm': 'HH:mm???HH:mm',
    '_': 'HH:mm'
  },
  FULL_DATETIME: {
    '_': 'EEEE, d MMMM y \'at\' HH:mm:ss zzzz'
  },
  LONG_DATETIME: {
    '_': 'd MMMM y \'at\' HH:mm:ss z'
  },
  MEDIUM_DATETIME: {
    '_': 'd MMM y, HH:mm:ss'
  },
  SHORT_DATETIME: {
    'ahm': 'dd/MM/y, HH:mm???HH:mm',
    '_': 'dd/MM/y, HH:mm'
  },
  FALLBACK: '{0} ??? {1}'
};

/** @const {!DateIntervalSymbols} */
exports.DateIntervalSymbols_en_IE = {
  FULL_DATE: {
    'M': 'EEEE d MMMM ??? EEEE d MMMM y',
    'd': 'EEEE d ??? EEEE d MMMM y',
    '_': 'EEEE d MMMM y'
  },
  LONG_DATE: {
    'M': 'd MMMM ??? d MMMM y',
    'd': 'd ??? d MMMM y',
    '_': 'd MMMM y'
  },
  MEDIUM_DATE: {
    'M': 'd MMM ??? d MMM y',
    'd': 'd ??? d MMM y',
    '_': 'd MMM y'
  },
  SHORT_DATE: {
    '_': 'dd/MM/y'
  },
  FULL_TIME: {
    'Mdy': 'd/M/y, HH:mm:ss zzzz',
    '_': 'HH:mm:ss zzzz'
  },
  LONG_TIME: {
    'Mdy': 'd/M/y, HH:mm:ss z',
    '_': 'HH:mm:ss z'
  },
  MEDIUM_TIME: {
    'Mdy': 'd/M/y, HH:mm:ss',
    '_': 'HH:mm:ss'
  },
  SHORT_TIME: {
    'Mdy': 'd/M/y, HH:mm',
    '_': 'HH:mm'
  },
  FULL_DATETIME: {
    '_': 'EEEE d MMMM y \'at\' HH:mm:ss zzzz'
  },
  LONG_DATETIME: {
    '_': 'd MMMM y \'at\' HH:mm:ss z'
  },
  MEDIUM_DATETIME: {
    '_': 'd MMM y, HH:mm:ss'
  },
  SHORT_DATETIME: {
    'ahm': 'dd/MM/y, HH:mm ??? HH:mm',
    '_': 'dd/MM/y, HH:mm'
  },
  FALLBACK: '{0} ??? {1}'
};

/** @const {!DateIntervalSymbols} */
exports.DateIntervalSymbols_en_IN = {
  FULL_DATE: {
    'M': 'EEEE, d MMMM ??? EEEE, d MMMM y',
    'd': 'EEEE, d ??? EEEE, d MMMM y',
    'y': 'EEEE, d MMMM y ??? EEEE, d MMMM y',
    '_': 'EEEE, d MMMM, y'
  },
  LONG_DATE: {
    'M': 'd MMMM ??? d MMMM y',
    'd': 'd ??? d MMMM y',
    '_': 'd MMMM y'
  },
  MEDIUM_DATE: {
    'M': 'd MMM ??? d MMM y',
    'd': 'd ??? d MMM y',
    'y': 'd MMM y ??? d MMM y',
    '_': 'dd-MMM-y'
  },
  SHORT_DATE: {
    '_': 'dd/MM/yy'
  },
  FULL_TIME: {
    'Mdy': 'd/M/y, h:mm:ss a zzzz',
    '_': 'h:mm:ss a zzzz'
  },
  LONG_TIME: {
    'Mdy': 'd/M/y, h:mm:ss a z',
    '_': 'h:mm:ss a z'
  },
  MEDIUM_TIME: {
    'Mdy': 'd/M/y, h:mm:ss a',
    '_': 'h:mm:ss a'
  },
  SHORT_TIME: {
    'Mdy': 'd/M/y, h:mm a',
    'hm': 'h:mm ??? h:mm a',
    '_': 'h:mm a'
  },
  FULL_DATETIME: {
    '_': 'EEEE, d MMMM, y \'at\' h:mm:ss a zzzz'
  },
  LONG_DATETIME: {
    '_': 'd MMMM y \'at\' h:mm:ss a z'
  },
  MEDIUM_DATETIME: {
    '_': 'dd-MMM-y, h:mm:ss a'
  },
  SHORT_DATETIME: {
    'a': 'dd/MM/yy, h:mm a ??? h:mm a',
    'hm': 'dd/MM/yy, h:mm ??? h:mm a',
    '_': 'dd/MM/yy, h:mm a'
  },
  FALLBACK: '{0} ??? {1}'
};

/** @const {!DateIntervalSymbols} */
exports.DateIntervalSymbols_en_SG = {
  FULL_DATE: {
    'Md': 'EEEE, d MMMM ??? EEEE, d MMMM y',
    '_': 'EEEE, d MMMM y'
  },
  LONG_DATE: {
    'M': 'd MMMM ??? d MMMM y',
    'd': 'd ??? d MMMM y',
    '_': 'd MMMM y'
  },
  MEDIUM_DATE: {
    'M': 'd MMM ??? d MMM y',
    'd': 'd ??? d MMM y',
    '_': 'd MMM y'
  },
  SHORT_DATE: {
    '_': 'd/M/yy'
  },
  FULL_TIME: {
    'Mdy': 'dd/MM/y, h:mm:ss a zzzz',
    '_': 'h:mm:ss a zzzz'
  },
  LONG_TIME: {
    'Mdy': 'dd/MM/y, h:mm:ss a z',
    '_': 'h:mm:ss a z'
  },
  MEDIUM_TIME: {
    'Mdy': 'dd/MM/y, h:mm:ss a',
    '_': 'h:mm:ss a'
  },
  SHORT_TIME: {
    'Mdy': 'dd/MM/y, h:mm a',
    'hm': 'h:mm ??? h:mm a',
    '_': 'h:mm a'
  },
  FULL_DATETIME: {
    '_': 'EEEE, d MMMM y \'at\' h:mm:ss a zzzz'
  },
  LONG_DATETIME: {
    '_': 'd MMMM y \'at\' h:mm:ss a z'
  },
  MEDIUM_DATETIME: {
    '_': 'd MMM y, h:mm:ss a'
  },
  SHORT_DATETIME: {
    'a': 'd/M/yy, h:mm a ??? h:mm a',
    'hm': 'd/M/yy, h:mm ??? h:mm a',
    '_': 'd/M/yy, h:mm a'
  },
  FALLBACK: '{0} ??? {1}'
};

/** @const {!DateIntervalSymbols} */
exports.DateIntervalSymbols_en_US = exports.DateIntervalSymbols_en;

/** @const {!DateIntervalSymbols} */
exports.DateIntervalSymbols_en_ZA = {
  FULL_DATE: {
    'M': 'EEEE, d MMMM ??? EEEE, d MMMM y',
    'd': 'EEEE, d ??? EEEE, d MMMM y',
    'y': 'EEEE, d MMMM y ??? EEEE, d MMMM y',
    '_': 'EEEE, dd MMMM y'
  },
  LONG_DATE: {
    'M': 'd MMMM ??? d MMMM y',
    'd': 'd ??? d MMMM y',
    'y': 'd MMMM y ??? d MMMM y',
    '_': 'dd MMMM y'
  },
  MEDIUM_DATE: {
    'M': 'd MMM ??? d MMM y',
    'd': 'd ??? d MMM y',
    'y': 'd MMM y ??? d MMM y',
    '_': 'dd MMM y'
  },
  SHORT_DATE: {
    'Mdy': 'dd/MM/y ??? dd/MM/y',
    '_': 'y/MM/dd'
  },
  FULL_TIME: {
    'Mdy': 'y/MM/dd, HH:mm:ss zzzz',
    '_': 'HH:mm:ss zzzz'
  },
  LONG_TIME: {
    'Mdy': 'y/MM/dd, HH:mm:ss z',
    '_': 'HH:mm:ss z'
  },
  MEDIUM_TIME: {
    'Mdy': 'y/MM/dd, HH:mm:ss',
    '_': 'HH:mm:ss'
  },
  SHORT_TIME: {
    'Mdy': 'y/MM/dd, HH:mm',
    '_': 'HH:mm'
  },
  FULL_DATETIME: {
    '_': 'EEEE, dd MMMM y \'at\' HH:mm:ss zzzz'
  },
  LONG_DATETIME: {
    '_': 'dd MMMM y \'at\' HH:mm:ss z'
  },
  MEDIUM_DATETIME: {
    '_': 'dd MMM y, HH:mm:ss'
  },
  SHORT_DATETIME: {
    'ahm': 'y/MM/dd, HH:mm ??? HH:mm',
    '_': 'y/MM/dd, HH:mm'
  },
  FALLBACK: '{0} ??? {1}'
};

/** @const {!DateIntervalSymbols} */
exports.DateIntervalSymbols_es = {
  FULL_DATE: {
    'Md': 'EEEE, d \'de\' MMMM???EEEE, d \'de\' MMMM \'de\' y',
    '_': 'EEEE, d \'de\' MMMM \'de\' y'
  },
  LONG_DATE: {
    'M': 'd \'de\' MMMM???d \'de\' MMMM \'de\' y',
    'd': 'd???d \'de\' MMMM \'de\' y',
    '_': 'd \'de\' MMMM \'de\' y'
  },
  MEDIUM_DATE: {
    'M': 'd MMM ??? d MMM y',
    'd': 'd???d MMM y',
    'y': 'd MMM y ??? d MMM y',
    '_': 'd MMM y'
  },
  SHORT_DATE: {
    '_': 'd/M/yy'
  },
  FULL_TIME: {
    'Mdy': 'd/M/y H:mm:ss (zzzz)',
    '_': 'H:mm:ss (zzzz)'
  },
  LONG_TIME: {
    'Mdy': 'd/M/y H:mm:ss (z)',
    '_': 'H:mm:ss z'
  },
  MEDIUM_TIME: {
    'Mdy': 'd/M/y H:mm:ss',
    '_': 'H:mm:ss'
  },
  SHORT_TIME: {
    'Mdy': 'd/M/y H:mm',
    '_': 'H:mm'
  },
  FULL_DATETIME: {
    '_': 'EEEE, d \'de\' MMMM \'de\' y, H:mm:ss (zzzz)'
  },
  LONG_DATETIME: {
    '_': 'd \'de\' MMMM \'de\' y, H:mm:ss z'
  },
  MEDIUM_DATETIME: {
    '_': 'd MMM y H:mm:ss'
  },
  SHORT_DATETIME: {
    'ahm': 'd/M/yy H:mm???H:mm',
    '_': 'd/M/yy H:mm'
  },
  FALLBACK: '{0}???{1}'
};

/** @const {!DateIntervalSymbols} */
exports.DateIntervalSymbols_es_419 = {
  FULL_DATE: {
    'Md': 'EEEE, d \'de\' MMMM???EEEE, d \'de\' MMMM \'de\' y',
    '_': 'EEEE, d \'de\' MMMM \'de\' y'
  },
  LONG_DATE: {
    'M': 'd \'de\' MMMM???d \'de\' MMMM \'de\' y',
    'd': 'd???d \'de\' MMMM \'de\' y',
    '_': 'd \'de\' MMMM \'de\' y'
  },
  MEDIUM_DATE: {
    'M': 'd \'de\' MMM ??? d \'de\' MMM \'de\' y',
    'd': 'd ??? d \'de\' MMM \'de\' y',
    'y': 'd \'de\' MMM \'de\' y ??? d \'de\' MMM \'de\' y',
    '_': 'd MMM y'
  },
  SHORT_DATE: {
    '_': 'd/M/yy'
  },
  FULL_TIME: {
    'Mdy': 'd/M/y HH:mm:ss zzzz',
    '_': 'HH:mm:ss zzzz'
  },
  LONG_TIME: {
    'Mdy': 'd/M/y HH:mm:ss z',
    '_': 'HH:mm:ss z'
  },
  MEDIUM_TIME: {
    'Mdy': 'd/M/y HH:mm:ss',
    '_': 'HH:mm:ss'
  },
  SHORT_TIME: {
    'Mdy': 'd/M/y HH:mm',
    'ahm': 'H:mm???H:mm',
    '_': 'HH:mm'
  },
  FULL_DATETIME: {
    '_': 'EEEE, d \'de\' MMMM \'de\' y, HH:mm:ss zzzz'
  },
  LONG_DATETIME: {
    '_': 'd \'de\' MMMM \'de\' y, HH:mm:ss z'
  },
  MEDIUM_DATETIME: {
    '_': 'd MMM y HH:mm:ss'
  },
  SHORT_DATETIME: {
    'ahm': 'd/M/yy H:mm???H:mm',
    '_': 'd/M/yy HH:mm'
  },
  FALLBACK: '{0}???{1}'
};

/** @const {!DateIntervalSymbols} */
exports.DateIntervalSymbols_es_ES = exports.DateIntervalSymbols_es;

/** @const {!DateIntervalSymbols} */
exports.DateIntervalSymbols_es_MX = {
  FULL_DATE: {
    'Md': 'EEEE, d \'de\' MMMM???EEEE, d \'de\' MMMM \'de\' y',
    'y': 'EEEE, d \'de\' MMMM \'de\' y???EEEE, d \'de\' MMMM \'de\' y',
    '_': 'EEEE, d \'de\' MMMM \'de\' y'
  },
  LONG_DATE: {
    'M': 'd \'de\' MMMM???d \'de\' MMMM \'de\' y',
    'd': 'd???d \'de\' MMMM \'de\' y',
    'y': 'd \'de\' MMMM \'de\' y???d \'de\' MMMM \'de\' y',
    '_': 'd \'de\' MMMM \'de\' y'
  },
  MEDIUM_DATE: {
    'M': 'd \'de\' MMM ??? d \'de\' MMM y',
    'd': 'd???d \'de\' MMM \'de\' y',
    'y': 'd \'de\' MMM \'de\' y ??? d \'de\' MMM \'de\' y',
    '_': 'd MMM y'
  },
  SHORT_DATE: {
    'Mdy': 'd/M/yy ??? d/M/yy',
    '_': 'dd/MM/yy'
  },
  FULL_TIME: {
    'Mdy': 'd/M/y H:mm:ss zzzz',
    '_': 'H:mm:ss zzzz'
  },
  LONG_TIME: {
    'Mdy': 'd/M/y H:mm:ss z',
    '_': 'H:mm:ss z'
  },
  MEDIUM_TIME: {
    'Mdy': 'd/M/y H:mm:ss',
    '_': 'H:mm:ss'
  },
  SHORT_TIME: {
    'Mdy': 'd/M/y H:mm',
    'ahm': 'HH:mm???HH:mm',
    '_': 'H:mm'
  },
  FULL_DATETIME: {
    '_': 'EEEE, d \'de\' MMMM \'de\' y, H:mm:ss zzzz'
  },
  LONG_DATETIME: {
    '_': 'd \'de\' MMMM \'de\' y, H:mm:ss z'
  },
  MEDIUM_DATETIME: {
    '_': 'd MMM y H:mm:ss'
  },
  SHORT_DATETIME: {
    'ahm': 'dd/MM/yy HH:mm???HH:mm',
    '_': 'dd/MM/yy H:mm'
  },
  FALLBACK: '{0} ??? {1}'
};

/** @const {!DateIntervalSymbols} */
exports.DateIntervalSymbols_es_US = {
  FULL_DATE: {
    'Md': 'EEEE, d \'de\' MMMM???EEEE, d \'de\' MMMM \'de\' y',
    '_': 'EEEE, d \'de\' MMMM \'de\' y'
  },
  LONG_DATE: {
    'M': 'd \'de\' MMMM???d \'de\' MMMM \'de\' y',
    'd': 'd???d \'de\' MMMM \'de\' y',
    '_': 'd \'de\' MMMM \'de\' y'
  },
  MEDIUM_DATE: {
    'M': 'd \'de\' MMM ??? d \'de\' MMM y',
    'd': 'd???d \'de\' MMM \'de\' y',
    'y': 'd \'de\' MMM \'de\' y ??? d \'de\' MMM \'de\' y',
    '_': 'd MMM y'
  },
  SHORT_DATE: {
    '_': 'd/M/yy'
  },
  FULL_TIME: {
    'Mdy': 'd/M/y h:mm:ss a zzzz',
    '_': 'h:mm:ss a zzzz'
  },
  LONG_TIME: {
    'Mdy': 'd/M/y h:mm:ss a z',
    '_': 'h:mm:ss a z'
  },
  MEDIUM_TIME: {
    'Mdy': 'd/M/y h:mm:ss a',
    '_': 'h:mm:ss a'
  },
  SHORT_TIME: {
    'Mdy': 'd/M/y h:mm a',
    'a': 'h:mm a ??? h:mm a',
    'hm': 'h:mm???h:mm a',
    '_': 'h:mm a'
  },
  FULL_DATETIME: {
    '_': 'EEEE, d \'de\' MMMM \'de\' y, h:mm:ss a zzzz'
  },
  LONG_DATETIME: {
    '_': 'd \'de\' MMMM \'de\' y, h:mm:ss a z'
  },
  MEDIUM_DATETIME: {
    '_': 'd MMM y h:mm:ss a'
  },
  SHORT_DATETIME: {
    'a': 'd/M/yy h:mm a ??? h:mm a',
    'hm': 'd/M/yy h:mm???h:mm a',
    '_': 'd/M/yy h:mm a'
  },
  FALLBACK: '{0}???{1}'
};

/** @const {!DateIntervalSymbols} */
exports.DateIntervalSymbols_et = {
  FULL_DATE: {
    'Md': 'EEEE, d. MMMM ??? EEEE, d. MMMM y',
    '_': 'EEEE, d. MMMM y'
  },
  LONG_DATE: {
    'M': 'd. MMMM ??? d. MMMM y',
    'd': 'd.???d. MMMM y',
    '_': 'd. MMMM y'
  },
  MEDIUM_DATE: {
    'M': 'd. MMM ??? d. MMM y',
    'd': 'd.???d. MMM y',
    '_': 'd. MMM y'
  },
  SHORT_DATE: {
    'Mdy': 'dd.MM.yy???dd.MM.yy',
    '_': 'dd.MM.yy'
  },
  FULL_TIME: {
    'Mdy': 'd.M.y HH:mm:ss zzzz',
    '_': 'HH:mm:ss zzzz'
  },
  LONG_TIME: {
    'Mdy': 'd.M.y HH:mm:ss z',
    '_': 'HH:mm:ss z'
  },
  MEDIUM_TIME: {
    'Mdy': 'd.M.y HH:mm:ss',
    '_': 'HH:mm:ss'
  },
  SHORT_TIME: {
    'Mdy': 'd.M.y HH:mm',
    'ahm': 'HH:mm???HH:mm',
    '_': 'HH:mm'
  },
  FULL_DATETIME: {
    '_': 'EEEE, d. MMMM y HH:mm:ss zzzz'
  },
  LONG_DATETIME: {
    '_': 'd. MMMM y HH:mm:ss z'
  },
  MEDIUM_DATETIME: {
    '_': 'd. MMM y HH:mm:ss'
  },
  SHORT_DATETIME: {
    'ahm': 'dd.MM.yy HH:mm???HH:mm',
    '_': 'dd.MM.yy HH:mm'
  },
  FALLBACK: '{0} ??? {1}'
};

/** @const {!DateIntervalSymbols} */
exports.DateIntervalSymbols_eu = {
  FULL_DATE: {
    'M': 'y(\'e\')\'ko\' MMMM d, EEEE ??? MMMM d, EEEE',
    'dy': 'y(\'e\')\'ko\' MMMM d, EEEE ??? y(\'e\')\'ko\' MMMM d, EEEE',
    '_': 'y(\'e\')\'ko\' MMMM\'ren\' d(\'a\'), EEEE'
  },
  LONG_DATE: {
    'M': 'y(\'e\')\'ko\' MMMM d ??? MMMM d',
    'd': 'y(\'e\')\'ko\' MMMM d???d',
    'y': 'y(\'e\')\'ko\' MMMM d ??? y(\'e\')\'ko\' MMMM d',
    '_': 'y(\'e\')\'ko\' MMMM\'ren\' d(\'a\')'
  },
  MEDIUM_DATE: {
    'M': 'y(\'e\')\'ko\' MMM d ??? MMM d',
    'd': 'y(\'e\')\'ko\' MMM d???d',
    'y': 'y(\'e\')\'ko\' MMM d ??? y(\'e\')\'ko\' MMM d',
    '_': 'y MMM d'
  },
  SHORT_DATE: {
    '_': 'yy/M/d'
  },
  FULL_TIME: {
    'Mdy': 'y/M/d HH:mm:ss (zzzz)',
    '_': 'HH:mm:ss (zzzz)'
  },
  LONG_TIME: {
    'Mdy': 'y/M/d HH:mm:ss (z)',
    '_': 'HH:mm:ss (z)'
  },
  MEDIUM_TIME: {
    'Mdy': 'y/M/d HH:mm:ss',
    '_': 'HH:mm:ss'
  },
  SHORT_TIME: {
    'Mdy': 'y/M/d HH:mm',
    'ahm': 'HH:mm???HH:mm',
    '_': 'HH:mm'
  },
  FULL_DATETIME: {
    '_': 'y(\'e\')\'ko\' MMMM\'ren\' d(\'a\'), EEEE HH:mm:ss (zzzz)'
  },
  LONG_DATETIME: {
    '_': 'y(\'e\')\'ko\' MMMM\'ren\' d(\'a\') HH:mm:ss (z)'
  },
  MEDIUM_DATETIME: {
    '_': 'y MMM d HH:mm:ss'
  },
  SHORT_DATETIME: {
    'ahm': 'yy/M/d HH:mm???HH:mm',
    '_': 'yy/M/d HH:mm'
  },
  FALLBACK: '{0} ??? {1}'
};

/** @const {!DateIntervalSymbols} */
exports.DateIntervalSymbols_fa = {
  FULL_DATE: {
    'Md': 'EEEE d LLLL ???? EEEE d MMMM y',
    '_': 'EEEE d MMMM y'
  },
  LONG_DATE: {
    'M': 'd LLLL ???? d MMMM y',
    'd': 'd ???? d MMMM y',
    '_': 'd MMMM y'
  },
  MEDIUM_DATE: {
    'M': 'd LLL ???? d MMM y',
    'd': 'd ???? d MMM y',
    '_': 'd MMM y'
  },
  SHORT_DATE: {
    '_': 'y/M/d'
  },
  FULL_TIME: {
    'Mdy': 'y/M/d????? H:mm:ss (zzzz)',
    '_': 'H:mm:ss (zzzz)'
  },
  LONG_TIME: {
    'Mdy': 'y/M/d????? H:mm:ss (z)',
    '_': 'H:mm:ss (z)'
  },
  MEDIUM_TIME: {
    'Mdy': 'y/M/d????? H:mm:ss',
    '_': 'H:mm:ss'
  },
  SHORT_TIME: {
    'Mdy': 'y/M/d????? H:mm',
    '_': 'H:mm'
  },
  FULL_DATETIME: {
    '_': 'EEEE d MMMM y?? ???????? H:mm:ss (zzzz)'
  },
  LONG_DATETIME: {
    '_': 'd MMMM y?? ???????? H:mm:ss (z)'
  },
  MEDIUM_DATETIME: {
    '_': 'd MMM y????? H:mm:ss'
  },
  SHORT_DATETIME: {
    'ahm': 'y/M/d????? H:mm ???? H:mm',
    '_': 'y/M/d????? H:mm'
  },
  FALLBACK: '{0} ???? {1}'
};

/** @const {!DateIntervalSymbols} */
exports.DateIntervalSymbols_fi = {
  FULL_DATE: {
    '_': 'cccc d. MMMM y'
  },
  LONG_DATE: {
    'M': 'd. MMMM ??? d. MMMM y',
    'd': 'd.???d. MMMM y',
    'y': 'd. MMMM y ??? d. MMMM y',
    '_': 'd. MMMM y'
  },
  MEDIUM_DATE: {
    'M': 'd.M.???d.M.y',
    'd': 'd.???d.M.y',
    '_': 'd.M.y'
  },
  SHORT_DATE: {
    'M': 'd.M.???d.M.y',
    'd': 'd.???d.M.y',
    '_': 'd.M.y'
  },
  FULL_TIME: {
    'Mdy': 'd.M.y \'klo\' H.mm.ss zzzz',
    '_': 'H.mm.ss zzzz'
  },
  LONG_TIME: {
    'Mdy': 'd.M.y \'klo\' H.mm.ss z',
    '_': 'H.mm.ss z'
  },
  MEDIUM_TIME: {
    'Mdy': 'd.M.y \'klo\' H.mm.ss',
    '_': 'H.mm.ss'
  },
  SHORT_TIME: {
    'Mdy': 'd.M.y \'klo\' H.mm',
    '_': 'H.mm'
  },
  FULL_DATETIME: {
    '_': 'cccc d. MMMM y \'klo\' H.mm.ss zzzz'
  },
  LONG_DATETIME: {
    '_': 'd. MMMM y \'klo\' H.mm.ss z'
  },
  MEDIUM_DATETIME: {
    '_': 'd.M.y \'klo\' H.mm.ss'
  },
  SHORT_DATETIME: {
    'ahm': 'd.M.y \'klo\' H.mm???H.mm',
    '_': 'd.M.y H.mm'
  },
  FALLBACK: '{0}???{1}'
};

/** @const {!DateIntervalSymbols} */
exports.DateIntervalSymbols_fil = {
  FULL_DATE: {
    'Md': 'EEEE, MMMM d ??? EEEE, MMMM d, y',
    '_': 'EEEE, MMMM d, y'
  },
  LONG_DATE: {
    'M': 'MMMM d ??? MMMM d, y',
    'd': 'MMMM d???d, y',
    '_': 'MMMM d, y'
  },
  MEDIUM_DATE: {
    'M': 'MMM d ??? MMM d, y',
    'd': 'MMM d???d, y',
    '_': 'MMM d, y'
  },
  SHORT_DATE: {
    '_': 'M/d/yy'
  },
  FULL_TIME: {
    'Mdy': 'M/d/y, h:mm:ss a zzzz',
    '_': 'h:mm:ss a zzzz'
  },
  LONG_TIME: {
    'Mdy': 'M/d/y, h:mm:ss a z',
    '_': 'h:mm:ss a z'
  },
  MEDIUM_TIME: {
    'Mdy': 'M/d/y, h:mm:ss a',
    '_': 'h:mm:ss a'
  },
  SHORT_TIME: {
    'Mdy': 'M/d/y, h:mm a',
    'hm': 'h:mm???h:mm a',
    '_': 'h:mm a'
  },
  FULL_DATETIME: {
    '_': 'EEEE, MMMM d, y \'nang\' h:mm:ss a zzzz'
  },
  LONG_DATETIME: {
    '_': 'MMMM d, y \'nang\' h:mm:ss a z'
  },
  MEDIUM_DATETIME: {
    '_': 'MMM d, y, h:mm:ss a'
  },
  SHORT_DATETIME: {
    'a': 'M/d/yy, h:mm a ??? h:mm a',
    'hm': 'M/d/yy, h:mm???h:mm a',
    '_': 'M/d/yy, h:mm a'
  },
  FALLBACK: '{0} ??? {1}'
};

/** @const {!DateIntervalSymbols} */
exports.DateIntervalSymbols_fr = {
  FULL_DATE: {
    'M': 'EEEE d MMMM ??? EEEE d MMMM y',
    'd': 'EEEE d ??? EEEE d MMMM y',
    '_': 'EEEE d MMMM y'
  },
  LONG_DATE: {
    'M': 'd MMMM ??? d MMMM y',
    'd': 'd???d MMMM y',
    '_': 'd MMMM y'
  },
  MEDIUM_DATE: {
    'M': 'd MMM ??? d MMM y',
    'd': 'd???d MMM y',
    '_': 'd MMM y'
  },
  SHORT_DATE: {
    '_': 'dd/MM/y'
  },
  FULL_TIME: {
    'Mdy': 'dd/MM/y \'??\' HH:mm:ss zzzz',
    '_': 'HH:mm:ss zzzz'
  },
  LONG_TIME: {
    'Mdy': 'dd/MM/y \'??\' HH:mm:ss z',
    '_': 'HH:mm:ss z'
  },
  MEDIUM_TIME: {
    'Mdy': 'dd/MM/y \'??\' HH:mm:ss',
    '_': 'HH:mm:ss'
  },
  SHORT_TIME: {
    'Mdy': 'dd/MM/y \'??\' HH:mm',
    '_': 'HH:mm'
  },
  FULL_DATETIME: {
    '_': 'EEEE d MMMM y \'??\' HH:mm:ss zzzz'
  },
  LONG_DATETIME: {
    '_': 'd MMMM y \'??\' HH:mm:ss z'
  },
  MEDIUM_DATETIME: {
    '_': 'd MMM y \'??\' HH:mm:ss'
  },
  SHORT_DATETIME: {
    'ahm': 'dd/MM/y \'??\' HH:mm ??? HH:mm',
    '_': 'dd/MM/y HH:mm'
  },
  FALLBACK: '{0} ??? {1}'
};

/** @const {!DateIntervalSymbols} */
exports.DateIntervalSymbols_fr_CA = {
  FULL_DATE: {
    'M': 'EEEE d MMMM ??? EEEE d MMMM y',
    'd': 'EEEE d ??? EEEE d MMMM y',
    '_': 'EEEE d MMMM y'
  },
  LONG_DATE: {
    'M': 'd MMMM ??? d MMMM y',
    'd': 'd???d MMMM y',
    '_': 'd MMMM y'
  },
  MEDIUM_DATE: {
    'M': 'd MMM ??? d MMM y',
    'd': 'd???d MMM y',
    '_': 'd MMM y'
  },
  SHORT_DATE: {
    '_': 'yy-MM-dd'
  },
  FULL_TIME: {
    'Mdy': 'y-MM-dd HH \'h\' mm \'min\' ss \'s\' zzzz',
    '_': 'HH \'h\' mm \'min\' ss \'s\' zzzz'
  },
  LONG_TIME: {
    'Mdy': 'y-MM-dd HH \'h\' mm \'min\' ss \'s\' z',
    '_': 'HH \'h\' mm \'min\' ss \'s\' z'
  },
  MEDIUM_TIME: {
    'Mdy': 'y-MM-dd HH \'h\' mm \'min\' ss \'s\'',
    '_': 'HH \'h\' mm \'min\' ss \'s\''
  },
  SHORT_TIME: {
    'Mdy': 'y-MM-dd HH \'h\' mm',
    'ahm': 'H \'h\' mm ??? H \'h\' mm',
    '_': 'HH \'h\' mm'
  },
  FULL_DATETIME: {
    '_': 'EEEE d MMMM y \'??\' HH \'h\' mm \'min\' ss \'s\' zzzz'
  },
  LONG_DATETIME: {
    '_': 'd MMMM y \'??\' HH \'h\' mm \'min\' ss \'s\' z'
  },
  MEDIUM_DATETIME: {
    '_': 'd MMM y HH \'h\' mm \'min\' ss \'s\''
  },
  SHORT_DATETIME: {
    'ahm': 'yy-MM-dd H \'h\' mm ??? H \'h\' mm',
    '_': 'yy-MM-dd HH \'h\' mm'
  },
  FALLBACK: '{0} ??? {1}'
};

/** @const {!DateIntervalSymbols} */
exports.DateIntervalSymbols_ga = {
  FULL_DATE: {
    'Md': 'EEEE d MMMM ??? EEEE d MMMM y',
    '_': 'EEEE d MMMM y'
  },
  LONG_DATE: {
    'M': 'd MMMM ??? d MMMM y',
    'd': 'd ??? d MMMM y',
    '_': 'd MMMM y'
  },
  MEDIUM_DATE: {
    'M': 'd MMM ??? d MMM y',
    'd': 'd ??? d MMM y',
    '_': 'd MMM y'
  },
  SHORT_DATE: {
    '_': 'dd/MM/y'
  },
  FULL_TIME: {
    'Mdy': 'dd/MM/y HH:mm:ss zzzz',
    '_': 'HH:mm:ss zzzz'
  },
  LONG_TIME: {
    'Mdy': 'dd/MM/y HH:mm:ss z',
    '_': 'HH:mm:ss z'
  },
  MEDIUM_TIME: {
    'Mdy': 'dd/MM/y HH:mm:ss',
    '_': 'HH:mm:ss'
  },
  SHORT_TIME: {
    'Mdy': 'dd/MM/y HH:mm',
    '_': 'HH:mm'
  },
  FULL_DATETIME: {
    '_': 'EEEE d MMMM y HH:mm:ss zzzz'
  },
  LONG_DATETIME: {
    '_': 'd MMMM y HH:mm:ss z'
  },
  MEDIUM_DATETIME: {
    '_': 'd MMM y HH:mm:ss'
  },
  SHORT_DATETIME: {
    'ahm': 'dd/MM/y HH:mm ??? HH:mm',
    '_': 'dd/MM/y HH:mm'
  },
  FALLBACK: '{0} ??? {1}'
};

/** @const {!DateIntervalSymbols} */
exports.DateIntervalSymbols_gl = {
  FULL_DATE: {
    'M': 'EEEE, d \'de\' MMMM ??? EEEE, d \'de\' MMMM \'de\' y',
    'd': 'EEEE, d MMMM ??? EEEE, d MMMM y',
    '_': 'EEEE, d \'de\' MMMM \'de\' y'
  },
  LONG_DATE: {
    'M': 'd MMMM ??? d MMMM \'de\' y',
    'd': 'd???d \'de\' MMMM \'de\' y',
    'y': 'd MMMM y ??? d MMMM y',
    '_': 'd \'de\' MMMM \'de\' y'
  },
  MEDIUM_DATE: {
    'Md': 'd/M/y ??? d/M/y',
    '_': 'dd/MM/y'
  },
  SHORT_DATE: {
    'Md': 'd/M/yy ??? d/M/yy',
    '_': 'dd/MM/yy'
  },
  FULL_TIME: {
    'Mdy': 'HH:mm:ss zzzz, d/M/y',
    '_': 'HH:mm:ss zzzz'
  },
  LONG_TIME: {
    'Mdy': 'HH:mm:ss z, d/M/y',
    '_': 'HH:mm:ss z'
  },
  MEDIUM_TIME: {
    'Mdy': 'HH:mm:ss, d/M/y',
    '_': 'HH:mm:ss'
  },
  SHORT_TIME: {
    'Mdy': 'HH:mm, d/M/y',
    'ahm': 'HH:mm???HH:mm',
    '_': 'HH:mm'
  },
  FULL_DATETIME: {
    '_': 'HH:mm:ss zzzz \'do\' EEEE, d \'de\' MMMM \'de\' y'
  },
  LONG_DATETIME: {
    '_': 'HH:mm:ss z \'do\' d \'de\' MMMM \'de\' y'
  },
  MEDIUM_DATETIME: {
    '_': 'HH:mm:ss, dd/MM/y'
  },
  SHORT_DATETIME: {
    'ahm': 'HH:mm???HH:mm, dd/MM/yy',
    '_': 'HH:mm, dd/MM/yy'
  },
  FALLBACK: '{0} ??? {1}'
};

/** @const {!DateIntervalSymbols} */
exports.DateIntervalSymbols_gsw = {
  FULL_DATE: {
    'M': 'EEEE, d. MMMM ??? EEEE, d. MMMM y',
    'd': 'EEEE, d. ??? EEEE, d. MMMM y',
    '_': 'EEEE, d. MMMM y'
  },
  LONG_DATE: {
    'M': 'd. MMMM ??? d. MMMM y',
    'd': 'd.???d. MMMM y',
    '_': 'd. MMMM y'
  },
  MEDIUM_DATE: {
    '_': 'dd.MM.y'
  },
  SHORT_DATE: {
    '_': 'dd.MM.yy'
  },
  FULL_TIME: {
    'Mdy': 'd.M.y HH:mm:ss zzzz',
    '_': 'HH:mm:ss zzzz'
  },
  LONG_TIME: {
    'Mdy': 'd.M.y HH:mm:ss z',
    '_': 'HH:mm:ss z'
  },
  MEDIUM_TIME: {
    'Mdy': 'd.M.y HH:mm:ss',
    '_': 'HH:mm:ss'
  },
  SHORT_TIME: {
    'Mdy': 'd.M.y HH:mm',
    'ahm': 'HH:mm???HH:mm',
    '_': 'HH:mm'
  },
  FULL_DATETIME: {
    '_': 'EEEE, d. MMMM y HH:mm:ss zzzz'
  },
  LONG_DATETIME: {
    '_': 'd. MMMM y HH:mm:ss z'
  },
  MEDIUM_DATETIME: {
    '_': 'dd.MM.y HH:mm:ss'
  },
  SHORT_DATETIME: {
    'ahm': 'dd.MM.yy HH:mm???HH:mm',
    '_': 'dd.MM.yy HH:mm'
  },
  FALLBACK: '{0} ??? {1}'
};

/** @const {!DateIntervalSymbols} */
exports.DateIntervalSymbols_gu = {
  FULL_DATE: {
    'Md': 'EEEE, d MMMM ??? EEEE, d MMMM, y',
    '_': 'EEEE, d MMMM, y'
  },
  LONG_DATE: {
    'M': 'd MMMM ??? d MMMM, y',
    'd': 'd???d MMMM, y',
    '_': 'd MMMM, y'
  },
  MEDIUM_DATE: {
    'M': 'd MMM ??? d MMM, y',
    'd': 'd???d MMM, y',
    '_': 'd MMM, y'
  },
  SHORT_DATE: {
    '_': 'd/M/yy'
  },
  FULL_TIME: {
    'Mdy': 'd/M/y hh:mm:ss a zzzz',
    '_': 'hh:mm:ss a zzzz'
  },
  LONG_TIME: {
    'Mdy': 'd/M/y hh:mm:ss a z',
    '_': 'hh:mm:ss a z'
  },
  MEDIUM_TIME: {
    'Mdy': 'd/M/y hh:mm:ss a',
    '_': 'hh:mm:ss a'
  },
  SHORT_TIME: {
    'Mdy': 'd/M/y hh:mm a',
    'a': 'h:mm a ??? h:mm a',
    'h': 'h:mm ??? h:mm a',
    'm': 'h:mm???h:mm a',
    '_': 'hh:mm a'
  },
  FULL_DATETIME: {
    '_': 'EEEE, d MMMM, y ??? hh:mm:ss a zzzz ??????????????????'
  },
  LONG_DATETIME: {
    '_': 'd MMMM, y ??? hh:mm:ss a z ??????????????????'
  },
  MEDIUM_DATETIME: {
    '_': 'd MMM, y hh:mm:ss a'
  },
  SHORT_DATETIME: {
    'a': 'd/M/yy h:mm a ??? h:mm a',
    'h': 'd/M/yy h:mm ??? h:mm a',
    'm': 'd/M/yy h:mm???h:mm a',
    '_': 'd/M/yy hh:mm a'
  },
  FALLBACK: '{0} ??? {1}'
};

/** @const {!DateIntervalSymbols} */
exports.DateIntervalSymbols_haw = {
  FULL_DATE: {
    'Md': 'y MMMM d, EEEE ??? MMMM d, EEEE',
    'y': 'y MMMM d, EEEE ??? y MMMM d, EEEE',
    '_': 'EEEE, d MMMM y'
  },
  LONG_DATE: {
    'M': 'y MMMM d ??? MMMM d',
    'd': 'y MMMM d???d',
    'y': 'y MMMM d ??? y MMMM d',
    '_': 'd MMMM y'
  },
  MEDIUM_DATE: {
    'M': 'y MMM d ??? MMM d',
    'd': 'y MMM d???d',
    'y': 'y MMM d ??? y MMM d',
    '_': 'd MMM y'
  },
  SHORT_DATE: {
    'Mdy': 'yy-MM-dd ??? yy-MM-dd',
    '_': 'd/M/yy'
  },
  FULL_TIME: {
    'Mdy': 'd/M/y h:mm:ss a zzzz',
    '_': 'h:mm:ss a zzzz'
  },
  LONG_TIME: {
    'Mdy': 'd/M/y h:mm:ss a z',
    '_': 'h:mm:ss a z'
  },
  MEDIUM_TIME: {
    'Mdy': 'd/M/y h:mm:ss a',
    '_': 'h:mm:ss a'
  },
  SHORT_TIME: {
    'Mdy': 'd/M/y h:mm a',
    'hm': 'h:mm???h:mm a',
    '_': 'h:mm a'
  },
  FULL_DATETIME: {
    '_': 'EEEE, d MMMM y h:mm:ss a zzzz'
  },
  LONG_DATETIME: {
    '_': 'd MMMM y h:mm:ss a z'
  },
  MEDIUM_DATETIME: {
    '_': 'd MMM y h:mm:ss a'
  },
  SHORT_DATETIME: {
    'a': 'd/M/yy h:mm a ??? h:mm a',
    'hm': 'd/M/yy h:mm???h:mm a',
    '_': 'd/M/yy h:mm a'
  },
  FALLBACK: '{0} ??? {1}'
};

/** @const {!DateIntervalSymbols} */
exports.DateIntervalSymbols_he = {
  FULL_DATE: {
    'Md': 'EEEE d MMMM ??? EEEE d MMMM y',
    'y': 'EEEE d MMMM y ??? EEEE d MMMM y',
    '_': 'EEEE, d ??MMMM y'
  },
  LONG_DATE: {
    'M': 'd MMMM ??? d MMMM y',
    'd': 'd???d ??MMMM y',
    'y': 'd MMMM y ??? d MMMM y',
    '_': 'd ??MMMM y'
  },
  MEDIUM_DATE: {
    'M': 'd MMM ??? d MMM y',
    'd': 'd???d ??MMM y',
    'y': 'd MMM y ??? d MMM y',
    '_': 'd ??MMM y'
  },
  SHORT_DATE: {
    'd': 'dd.M.y ??? dd.M.y',
    '_': 'd.M.y'
  },
  FULL_TIME: {
    'Mdy': 'd.M.y, H:mm:ss zzzz',
    '_': 'H:mm:ss zzzz'
  },
  LONG_TIME: {
    'Mdy': 'd.M.y, H:mm:ss z',
    '_': 'H:mm:ss z'
  },
  MEDIUM_TIME: {
    'Mdy': 'd.M.y, H:mm:ss',
    '_': 'H:mm:ss'
  },
  SHORT_TIME: {
    'Mdy': 'd.M.y, H:mm',
    'ahm': 'H:mm???H:mm',
    '_': 'H:mm'
  },
  FULL_DATETIME: {
    '_': 'EEEE, d ??MMMM y ???????? H:mm:ss zzzz'
  },
  LONG_DATETIME: {
    '_': 'd ??MMMM y ???????? H:mm:ss z'
  },
  MEDIUM_DATETIME: {
    '_': 'd ??MMM y, H:mm:ss'
  },
  SHORT_DATETIME: {
    'ahm': 'd.M.y, H:mm???H:mm',
    '_': 'd.M.y, H:mm'
  },
  FALLBACK: '{0} ??? {1}'
};

/** @const {!DateIntervalSymbols} */
exports.DateIntervalSymbols_hi = {
  FULL_DATE: {
    'Md': 'EEEE, d MMMM ??? EEEE, d MMMM y',
    '_': 'EEEE, d MMMM y'
  },
  LONG_DATE: {
    'M': 'd MMMM ??? d MMMM y',
    'd': 'd???d MMMM y',
    '_': 'd MMMM y'
  },
  MEDIUM_DATE: {
    'M': 'd MMM ??? d MMM y',
    'd': 'd???d MMM y',
    '_': 'd MMM y'
  },
  SHORT_DATE: {
    '_': 'd/M/yy'
  },
  FULL_TIME: {
    'Mdy': 'd/M/y, h:mm:ss a zzzz',
    '_': 'h:mm:ss a zzzz'
  },
  LONG_TIME: {
    'Mdy': 'd/M/y, h:mm:ss a z',
    '_': 'h:mm:ss a z'
  },
  MEDIUM_TIME: {
    'Mdy': 'd/M/y, h:mm:ss a',
    '_': 'h:mm:ss a'
  },
  SHORT_TIME: {
    'Mdy': 'd/M/y, h:mm a',
    'hm': 'h:mm???h:mm a',
    '_': 'h:mm a'
  },
  FULL_DATETIME: {
    '_': 'EEEE, d MMMM y ?????? h:mm:ss a zzzz'
  },
  LONG_DATETIME: {
    '_': 'd MMMM y ?????? h:mm:ss a z'
  },
  MEDIUM_DATETIME: {
    '_': 'd MMM y, h:mm:ss a'
  },
  SHORT_DATETIME: {
    'a': 'd/M/yy, h:mm a ??? h:mm a',
    'hm': 'd/M/yy, h:mm???h:mm a',
    '_': 'd/M/yy, h:mm a'
  },
  FALLBACK: '{0} ??? {1}'
};

/** @const {!DateIntervalSymbols} */
exports.DateIntervalSymbols_hr = {
  FULL_DATE: {
    'M': 'EEEE, dd. MMMM ??? EEEE, dd. MMMM y.',
    'd': 'EEEE, dd. ??? EEEE, dd. MMMM y.',
    'y': 'EEEE, dd. MMMM y. ??? EEEE, dd. MMMM y.',
    '_': 'EEEE, d. MMMM y.'
  },
  LONG_DATE: {
    'M': 'dd. MMMM ??? dd. MMMM y.',
    'd': 'dd. ??? dd. MMMM y.',
    'y': 'dd. MMMM y. ??? dd. MMMM y.',
    '_': 'd. MMMM y.'
  },
  MEDIUM_DATE: {
    'M': 'dd. MMM ??? dd. MMM y.',
    'd': 'dd. ??? dd. MMM y.',
    'y': 'dd. MMM y. ??? dd. MMM y.',
    '_': 'd. MMM y.'
  },
  SHORT_DATE: {
    '_': 'dd. MM. y.'
  },
  FULL_TIME: {
    'Mdy': 'dd. MM. y. HH:mm:ss (zzzz)',
    '_': 'HH:mm:ss (zzzz)'
  },
  LONG_TIME: {
    'Mdy': 'dd. MM. y. HH:mm:ss (z)',
    '_': 'HH:mm:ss z'
  },
  MEDIUM_TIME: {
    'Mdy': 'dd. MM. y. HH:mm:ss',
    '_': 'HH:mm:ss'
  },
  SHORT_TIME: {
    'Mdy': 'dd. MM. y. HH:mm',
    '_': 'HH:mm'
  },
  FULL_DATETIME: {
    '_': 'EEEE, d. MMMM y. \'u\' HH:mm:ss (zzzz)'
  },
  LONG_DATETIME: {
    '_': 'd. MMMM y. \'u\' HH:mm:ss z'
  },
  MEDIUM_DATETIME: {
    '_': 'd. MMM y. HH:mm:ss'
  },
  SHORT_DATETIME: {
    'ahm': 'dd. MM. y. HH:mm ??? HH:mm',
    '_': 'dd. MM. y. HH:mm'
  },
  FALLBACK: '{0} ??? {1}'
};

/** @const {!DateIntervalSymbols} */
exports.DateIntervalSymbols_hu = {
  FULL_DATE: {
    'M': 'y. MMMM d., EEEE ??? MMMM d., EEEE',
    'd': 'y. MMMM d., EEEE ??? d., EEEE',
    '_': 'y. MMMM d., EEEE'
  },
  LONG_DATE: {
    'M': 'y. MMMM d. ??? MMMM d.',
    'd': 'y. MMMM d???d.',
    '_': 'y. MMMM d.'
  },
  MEDIUM_DATE: {
    'M': 'y. MMM d. ??? MMM d.',
    'd': 'y. MMM d???d.',
    '_': 'y. MMM d.'
  },
  SHORT_DATE: {
    'M': 'y. MM. dd. ??? MM. dd.',
    'd': 'y. MM. dd???dd.',
    '_': 'y. MM. dd.'
  },
  FULL_TIME: {
    'Mdy': 'y. MM. dd. H:mm:ss zzzz',
    '_': 'H:mm:ss zzzz'
  },
  LONG_TIME: {
    'Mdy': 'y. MM. dd. H:mm:ss z',
    '_': 'H:mm:ss z'
  },
  MEDIUM_TIME: {
    'Mdy': 'y. MM. dd. H:mm:ss',
    '_': 'H:mm:ss'
  },
  SHORT_TIME: {
    'Mdy': 'y. MM. dd. H:mm',
    'ahm': 'H:mm???H:mm',
    '_': 'H:mm'
  },
  FULL_DATETIME: {
    '_': 'y. MMMM d., EEEE H:mm:ss zzzz'
  },
  LONG_DATETIME: {
    '_': 'y. MMMM d. H:mm:ss z'
  },
  MEDIUM_DATETIME: {
    '_': 'y. MMM d. H:mm:ss'
  },
  SHORT_DATETIME: {
    'ahm': 'y. MM. dd. H:mm???H:mm',
    '_': 'y. MM. dd. H:mm'
  },
  FALLBACK: '{0} ??? {1}'
};

/** @const {!DateIntervalSymbols} */
exports.DateIntervalSymbols_hy = {
  FULL_DATE: {
    'Md': 'EEEE, d MMMM ??? EEEE, d MMMM, y ??.',
    'y': 'EEEE, d MMMM, y ??? EEEE, d MMMM, y ??.',
    '_': 'y ??. MMMM d, EEEE'
  },
  LONG_DATE: {
    'M': 'dd MMMM ??? dd MMMM, y ??.',
    'd': 'dd???dd MMMM, y ??.',
    'y': 'dd MMMM, y ????? ??? dd MMMM, y ??.',
    '_': 'dd MMMM, y ??.'
  },
  MEDIUM_DATE: {
    'M': 'dd MMM ??? dd MMM, y ??.',
    'd': 'dd???dd MMM, y ??.',
    'y': 'dd MMM, y ????? ??? dd MMM, y ??.',
    '_': 'dd MMM, y ??.'
  },
  SHORT_DATE: {
    '_': 'dd.MM.yy'
  },
  FULL_TIME: {
    'Mdy': 'dd.MM.y, HH:mm:ss zzzz',
    '_': 'HH:mm:ss zzzz'
  },
  LONG_TIME: {
    'Mdy': 'dd.MM.y, HH:mm:ss z',
    '_': 'HH:mm:ss z'
  },
  MEDIUM_TIME: {
    'Mdy': 'dd.MM.y, HH:mm:ss',
    '_': 'HH:mm:ss'
  },
  SHORT_TIME: {
    'Mdy': 'dd.MM.y, HH:mm',
    'ahm': 'H:mm???H:mm',
    '_': 'HH:mm'
  },
  FULL_DATETIME: {
    '_': 'y ??. MMMM d, EEEE, HH:mm:ss zzzz'
  },
  LONG_DATETIME: {
    '_': 'dd MMMM, y ??., HH:mm:ss z'
  },
  MEDIUM_DATETIME: {
    '_': 'dd MMM, y ??., HH:mm:ss'
  },
  SHORT_DATETIME: {
    'ahm': 'dd.MM.yy, H:mm???H:mm',
    '_': 'dd.MM.yy, HH:mm'
  },
  FALLBACK: '{0} ??? {1}'
};

/** @const {!DateIntervalSymbols} */
exports.DateIntervalSymbols_id = {
  FULL_DATE: {
    'Md': 'EEEE, d MMMM ??? EEEE, d MMMM y',
    'y': 'EEEE, d MMMM y ??? EEEE, d MMMM y',
    '_': 'EEEE, dd MMMM y'
  },
  LONG_DATE: {
    'M': 'd MMMM ??? d MMMM y',
    'd': 'd???d MMMM y',
    '_': 'd MMMM y'
  },
  MEDIUM_DATE: {
    'M': 'd MMM ??? d MMM y',
    'd': 'd???d MMM y',
    '_': 'd MMM y'
  },
  SHORT_DATE: {
    'Mdy': 'd/M/yy ??? d/M/yy',
    '_': 'dd/MM/yy'
  },
  FULL_TIME: {
    'Mdy': 'd/M/y HH.mm.ss zzzz',
    '_': 'HH.mm.ss zzzz'
  },
  LONG_TIME: {
    'Mdy': 'd/M/y HH.mm.ss z',
    '_': 'HH.mm.ss z'
  },
  MEDIUM_TIME: {
    'Mdy': 'd/M/y HH.mm.ss',
    '_': 'HH.mm.ss'
  },
  SHORT_TIME: {
    'Mdy': 'd/M/y HH.mm',
    'ahm': 'HH.mm???HH.mm',
    '_': 'HH.mm'
  },
  FULL_DATETIME: {
    '_': 'EEEE, dd MMMM y HH.mm.ss zzzz'
  },
  LONG_DATETIME: {
    '_': 'd MMMM y HH.mm.ss z'
  },
  MEDIUM_DATETIME: {
    '_': 'd MMM y HH.mm.ss'
  },
  SHORT_DATETIME: {
    'ahm': 'dd/MM/yy HH.mm???HH.mm',
    '_': 'dd/MM/yy HH.mm'
  },
  FALLBACK: '{0} ??? {1}'
};

/** @const {!DateIntervalSymbols} */
exports.DateIntervalSymbols_in = {
  FULL_DATE: {
    'Md': 'EEEE, d MMMM ??? EEEE, d MMMM y',
    'y': 'EEEE, d MMMM y ??? EEEE, d MMMM y',
    '_': 'EEEE, dd MMMM y'
  },
  LONG_DATE: {
    'M': 'd MMMM ??? d MMMM y',
    'd': 'd???d MMMM y',
    '_': 'd MMMM y'
  },
  MEDIUM_DATE: {
    'M': 'd MMM ??? d MMM y',
    'd': 'd???d MMM y',
    '_': 'd MMM y'
  },
  SHORT_DATE: {
    'Mdy': 'd/M/yy ??? d/M/yy',
    '_': 'dd/MM/yy'
  },
  FULL_TIME: {
    'Mdy': 'd/M/y HH.mm.ss zzzz',
    '_': 'HH.mm.ss zzzz'
  },
  LONG_TIME: {
    'Mdy': 'd/M/y HH.mm.ss z',
    '_': 'HH.mm.ss z'
  },
  MEDIUM_TIME: {
    'Mdy': 'd/M/y HH.mm.ss',
    '_': 'HH.mm.ss'
  },
  SHORT_TIME: {
    'Mdy': 'd/M/y HH.mm',
    'ahm': 'HH.mm???HH.mm',
    '_': 'HH.mm'
  },
  FULL_DATETIME: {
    '_': 'EEEE, dd MMMM y HH.mm.ss zzzz'
  },
  LONG_DATETIME: {
    '_': 'd MMMM y HH.mm.ss z'
  },
  MEDIUM_DATETIME: {
    '_': 'd MMM y HH.mm.ss'
  },
  SHORT_DATETIME: {
    'ahm': 'dd/MM/yy HH.mm???HH.mm',
    '_': 'dd/MM/yy HH.mm'
  },
  FALLBACK: '{0} ??? {1}'
};

/** @const {!DateIntervalSymbols} */
exports.DateIntervalSymbols_is = {
  FULL_DATE: {
    'M': 'EEEE, d. MMMM ??? EEEE, d. MMMM y',
    'd': 'EEEE, d. ??? EEEE, d. MMMM y',
    '_': 'EEEE, d. MMMM y'
  },
  LONG_DATE: {
    'M': 'd. MMMM ??? d. MMMM y',
    'd': 'd.???d. MMMM y',
    '_': 'd. MMMM y'
  },
  MEDIUM_DATE: {
    'M': 'd. MMM ??? d. MMM y',
    'd': 'd.???d. MMM y',
    '_': 'd. MMM y'
  },
  SHORT_DATE: {
    '_': 'd.M.y'
  },
  FULL_TIME: {
    'Mdy': 'd.M.y, HH:mm:ss zzzz',
    '_': 'HH:mm:ss zzzz'
  },
  LONG_TIME: {
    'Mdy': 'd.M.y, HH:mm:ss z',
    '_': 'HH:mm:ss z'
  },
  MEDIUM_TIME: {
    'Mdy': 'd.M.y, HH:mm:ss',
    '_': 'HH:mm:ss'
  },
  SHORT_TIME: {
    'Mdy': 'd.M.y, HH:mm',
    'ahm': 'HH:mm???HH:mm',
    '_': 'HH:mm'
  },
  FULL_DATETIME: {
    '_': 'EEEE, d. MMMM y \'kl\'. HH:mm:ss zzzz'
  },
  LONG_DATETIME: {
    '_': 'd. MMMM y \'kl\'. HH:mm:ss z'
  },
  MEDIUM_DATETIME: {
    '_': 'd. MMM y, HH:mm:ss'
  },
  SHORT_DATETIME: {
    'ahm': 'd.M.y, HH:mm???HH:mm',
    '_': 'd.M.y, HH:mm'
  },
  FALLBACK: '{0} ??? {1}'
};

/** @const {!DateIntervalSymbols} */
exports.DateIntervalSymbols_it = {
  FULL_DATE: {
    'M': 'EEEE d MMMM ??? EEEE d MMMM y',
    'd': 'EEEE d ??? EEEE d MMMM y',
    'y': 'EEEE d MMMM y ??? EEEE d MMMM y',
    '_': 'EEEE d MMMM y'
  },
  LONG_DATE: {
    'M': 'dd MMMM ??? dd MMMM y',
    'd': 'dd???dd MMMM y',
    'y': 'dd MMMM y ??? dd MMMM y',
    '_': 'd MMMM y'
  },
  MEDIUM_DATE: {
    'M': 'dd MMM ??? dd MMM y',
    'd': 'dd???dd MMM y',
    'y': 'dd MMM y ??? dd MMM y',
    '_': 'd MMM y'
  },
  SHORT_DATE: {
    'Mdy': 'dd/MM/yy ??? dd/MM/yy',
    '_': 'dd/MM/yy'
  },
  FULL_TIME: {
    'Mdy': 'd/M/y, HH:mm:ss zzzz',
    '_': 'HH:mm:ss zzzz'
  },
  LONG_TIME: {
    'Mdy': 'd/M/y, HH:mm:ss z',
    '_': 'HH:mm:ss z'
  },
  MEDIUM_TIME: {
    'Mdy': 'd/M/y, HH:mm:ss',
    '_': 'HH:mm:ss'
  },
  SHORT_TIME: {
    'Mdy': 'd/M/y, HH:mm',
    'ahm': 'HH:mm???HH:mm',
    '_': 'HH:mm'
  },
  FULL_DATETIME: {
    '_': 'EEEE d MMMM y HH:mm:ss zzzz'
  },
  LONG_DATETIME: {
    '_': 'd MMMM y HH:mm:ss z'
  },
  MEDIUM_DATETIME: {
    '_': 'd MMM y, HH:mm:ss'
  },
  SHORT_DATETIME: {
    'ahm': 'dd/MM/yy, HH:mm???HH:mm',
    '_': 'dd/MM/yy, HH:mm'
  },
  FALLBACK: '{0} - {1}'
};

/** @const {!DateIntervalSymbols} */
exports.DateIntervalSymbols_iw = {
  FULL_DATE: {
    'Md': 'EEEE d MMMM ??? EEEE d MMMM y',
    'y': 'EEEE d MMMM y ??? EEEE d MMMM y',
    '_': 'EEEE, d ??MMMM y'
  },
  LONG_DATE: {
    'M': 'd MMMM ??? d MMMM y',
    'd': 'd???d ??MMMM y',
    'y': 'd MMMM y ??? d MMMM y',
    '_': 'd ??MMMM y'
  },
  MEDIUM_DATE: {
    'M': 'd MMM ??? d MMM y',
    'd': 'd???d ??MMM y',
    'y': 'd MMM y ??? d MMM y',
    '_': 'd ??MMM y'
  },
  SHORT_DATE: {
    'd': 'dd.M.y ??? dd.M.y',
    '_': 'd.M.y'
  },
  FULL_TIME: {
    'Mdy': 'd.M.y, H:mm:ss zzzz',
    '_': 'H:mm:ss zzzz'
  },
  LONG_TIME: {
    'Mdy': 'd.M.y, H:mm:ss z',
    '_': 'H:mm:ss z'
  },
  MEDIUM_TIME: {
    'Mdy': 'd.M.y, H:mm:ss',
    '_': 'H:mm:ss'
  },
  SHORT_TIME: {
    'Mdy': 'd.M.y, H:mm',
    'ahm': 'H:mm???H:mm',
    '_': 'H:mm'
  },
  FULL_DATETIME: {
    '_': 'EEEE, d ??MMMM y ???????? H:mm:ss zzzz'
  },
  LONG_DATETIME: {
    '_': 'd ??MMMM y ???????? H:mm:ss z'
  },
  MEDIUM_DATETIME: {
    '_': 'd ??MMM y, H:mm:ss'
  },
  SHORT_DATETIME: {
    'ahm': 'd.M.y, H:mm???H:mm',
    '_': 'd.M.y, H:mm'
  },
  FALLBACK: '{0} ??? {1}'
};

/** @const {!DateIntervalSymbols} */
exports.DateIntervalSymbols_ja = {
  FULL_DATE: {
    'Mdy': 'y/MM/dd(EEEE)???y/MM/dd(EEEE)',
    '_': 'y???M???d???EEEE'
  },
  LONG_DATE: {
    'Mdy': 'y/MM/dd???y/MM/dd',
    '_': 'y???M???d???'
  },
  MEDIUM_DATE: {
    '_': 'y/MM/dd'
  },
  SHORT_DATE: {
    '_': 'y/MM/dd'
  },
  FULL_TIME: {
    'Mdy': 'y/M/d H???mm???ss??? zzzz',
    '_': 'H???mm???ss??? zzzz'
  },
  LONG_TIME: {
    'Mdy': 'y/M/d H???mm???ss??? z',
    '_': 'H:mm:ss z'
  },
  MEDIUM_TIME: {
    'Mdy': 'y/M/d H:mm:ss',
    '_': 'H:mm:ss'
  },
  SHORT_TIME: {
    'Mdy': 'y/M/d H:mm',
    'ahm': 'H???mm??????H???mm???',
    '_': 'H:mm'
  },
  FULL_DATETIME: {
    '_': 'y???M???d???EEEE H???mm???ss??? zzzz'
  },
  LONG_DATETIME: {
    '_': 'y???M???d??? H:mm:ss z'
  },
  MEDIUM_DATETIME: {
    '_': 'y/MM/dd H:mm:ss'
  },
  SHORT_DATETIME: {
    'ahm': 'y/MM/dd H???mm??????H???mm???',
    '_': 'y/MM/dd H:mm'
  },
  FALLBACK: '{0}???{1}'
};

/** @const {!DateIntervalSymbols} */
exports.DateIntervalSymbols_ka = {
  FULL_DATE: {
    'Md': 'EEEE, d MMMM. ??? EEEE, d MMMM. y',
    'y': 'EEEE, d MMMM. y ??? EEEE, d MMMM. y',
    '_': 'EEEE, dd MMMM, y'
  },
  LONG_DATE: {
    'M': 'dd MMMM. ??? dd MMMM. y',
    'd': 'd???d MMMM, y',
    'y': 'dd MMMM. y ??? d MMMM. y',
    '_': 'd MMMM, y'
  },
  MEDIUM_DATE: {
    'M': 'dd MMM. ??? dd MMM. y',
    'd': 'd???d MMM, y',
    'y': 'dd MMM. y ??? d MMM. y',
    '_': 'd MMM. y'
  },
  SHORT_DATE: {
    '_': 'dd.MM.yy'
  },
  FULL_TIME: {
    'Mdy': 'd.M.y, HH:mm:ss zzzz',
    '_': 'HH:mm:ss zzzz'
  },
  LONG_TIME: {
    'Mdy': 'd.M.y, HH:mm:ss z',
    '_': 'HH:mm:ss z'
  },
  MEDIUM_TIME: {
    'Mdy': 'd.M.y, HH:mm:ss',
    '_': 'HH:mm:ss'
  },
  SHORT_TIME: {
    'Mdy': 'd.M.y, HH:mm',
    'ahm': 'HH:mm???HH:mm',
    '_': 'HH:mm'
  },
  FULL_DATETIME: {
    '_': 'EEEE, dd MMMM, y, HH:mm:ss zzzz'
  },
  LONG_DATETIME: {
    '_': 'd MMMM, y, HH:mm:ss z'
  },
  MEDIUM_DATETIME: {
    '_': 'd MMM. y, HH:mm:ss'
  },
  SHORT_DATETIME: {
    'ahm': 'dd.MM.yy, HH:mm???HH:mm',
    '_': 'dd.MM.yy, HH:mm'
  },
  FALLBACK: '{0} ??? {1}'
};

/** @const {!DateIntervalSymbols} */
exports.DateIntervalSymbols_kk = {
  FULL_DATE: {
    'M': 'y \'??\'. d MMMM, EEEE ??? d MMMM, EEEE',
    'dy': 'y \'??\'. d MMMM, EEEE ??? y \'??\'. d MMMM, EEEE',
    '_': 'y \'??\'. d MMMM, EEEE'
  },
  LONG_DATE: {
    'M': 'y \'??\'. d MMMM ??? d MMMM',
    'd': 'y \'??\'. d???d MMMM',
    'y': 'y \'??\'. d MMMM ??? y \'??\'. d MMMM',
    '_': 'y \'??\'. d MMMM'
  },
  MEDIUM_DATE: {
    'M': 'y \'??\'. d MMM ??? d MMM',
    'd': 'y \'??\'. d???d MMM',
    'y': 'y \'??\'. d MMM ??? y \'??\'. d MMM',
    '_': 'y \'??\'. dd MMM'
  },
  SHORT_DATE: {
    'Mdy': 'dd.MM.yy ??? dd.MM.yy',
    '_': 'dd.MM.yy'
  },
  FULL_TIME: {
    'Mdy': 'dd.MM.y, HH:mm:ss zzzz',
    '_': 'HH:mm:ss zzzz'
  },
  LONG_TIME: {
    'Mdy': 'dd.MM.y, HH:mm:ss z',
    '_': 'HH:mm:ss z'
  },
  MEDIUM_TIME: {
    'Mdy': 'dd.MM.y, HH:mm:ss',
    '_': 'HH:mm:ss'
  },
  SHORT_TIME: {
    'Mdy': 'dd.MM.y, HH:mm',
    'ahm': 'HH:mm???HH:mm',
    '_': 'HH:mm'
  },
  FULL_DATETIME: {
    '_': 'y \'??\'. d MMMM, EEEE, HH:mm:ss zzzz'
  },
  LONG_DATETIME: {
    '_': 'y \'??\'. d MMMM, HH:mm:ss z'
  },
  MEDIUM_DATETIME: {
    '_': 'y \'??\'. dd MMM, HH:mm:ss'
  },
  SHORT_DATETIME: {
    'ahm': 'dd.MM.yy, HH:mm???HH:mm',
    '_': 'dd.MM.yy, HH:mm'
  },
  FALLBACK: '{0} - {1}'
};

/** @const {!DateIntervalSymbols} */
exports.DateIntervalSymbols_km = {
  FULL_DATE: {
    'Md': 'EEEE dd MMMM y ??? EEEE dd MMMM y',
    'y': 'EEEE dd-MM-y ??? EEEE dd MMMM y',
    '_': 'EEEE d MMMM y'
  },
  LONG_DATE: {
    'M': 'd MMMM ??? d MMMM y',
    'd': 'd ??? d MMMM y',
    'y': 'd MMMM y ??? d MMMM y',
    '_': 'd MMMM y'
  },
  MEDIUM_DATE: {
    'M': 'd MMM ??? d MMM y',
    'd': 'd ??? d MMM y',
    'y': 'd MMM y ??? d MMM y',
    '_': 'd MMM y'
  },
  SHORT_DATE: {
    'Mdy': 'd/M/yy ??? d/M/yy',
    '_': 'd/M/yy'
  },
  FULL_TIME: {
    'Mdy': 'd/M/y, h:mm:ss a zzzz',
    '_': 'h:mm:ss a zzzz'
  },
  LONG_TIME: {
    'Mdy': 'd/M/y, h:mm:ss a z',
    '_': 'h:mm:ss a z'
  },
  MEDIUM_TIME: {
    'Mdy': 'd/M/y, h:mm:ss a',
    '_': 'h:mm:ss a'
  },
  SHORT_TIME: {
    'Mdy': 'd/M/y, h:mm a',
    'a': 'h:mm a ??? h:mm a',
    'hm': 'h:mm ??? h:mm a',
    '_': 'h:mm a'
  },
  FULL_DATETIME: {
    '_': 'EEEE d MMMM y ????????????????????? h:mm:ss a zzzz'
  },
  LONG_DATETIME: {
    '_': 'd MMMM y ????????????????????? h:mm:ss a z'
  },
  MEDIUM_DATETIME: {
    '_': 'd MMM y, h:mm:ss a'
  },
  SHORT_DATETIME: {
    'a': 'd/M/yy, h:mm a ??? h:mm a',
    'hm': 'd/M/yy, h:mm ??? h:mm a',
    '_': 'd/M/yy, h:mm a'
  },
  FALLBACK: '{0} - {1}'
};

/** @const {!DateIntervalSymbols} */
exports.DateIntervalSymbols_kn = {
  FULL_DATE: {
    'M': 'EEEE, MMMM d ??? EEEE, MMMM d, y',
    'd': 'EEEE, MMMM d ??? EEEE, MMMM d,y',
    'y': 'd MMMM, y EEEE ??? d MMMM, y EEEE',
    '_': 'EEEE, MMMM d, y'
  },
  LONG_DATE: {
    'M': 'd MMMM ??? d MMMM, y',
    'd': 'MMMM d???d,y',
    'y': 'd, MMMM, y ??? d, MMMM, y',
    '_': 'MMMM d, y'
  },
  MEDIUM_DATE: {
    'M': 'd MMM ??? d MMM, y',
    'd': 'MMM d???d,y',
    'y': 'd, MMM, y ??? d, MMM, y',
    '_': 'MMM d, y'
  },
  SHORT_DATE: {
    'Mdy': 'M/d/yy ??? M/d/yy',
    '_': 'd/M/yy'
  },
  FULL_TIME: {
    'Mdy': 'd/M/y hh:mm:ss a zzzz',
    '_': 'hh:mm:ss a zzzz'
  },
  LONG_TIME: {
    'Mdy': 'd/M/y hh:mm:ss a z',
    '_': 'hh:mm:ss a z'
  },
  MEDIUM_TIME: {
    'Mdy': 'd/M/y hh:mm:ss a',
    '_': 'hh:mm:ss a'
  },
  SHORT_TIME: {
    'Mdy': 'd/M/y hh:mm a',
    'a': 'h:mm a ??? h:mm a',
    'h': 'h:mm???h:mm a',
    'm': 'h:mm ??? h:mm a',
    '_': 'hh:mm a'
  },
  FULL_DATETIME: {
    '_': 'EEEE, MMMM d, y hh:mm:ss a zzzz'
  },
  LONG_DATETIME: {
    '_': 'MMMM d, y hh:mm:ss a z'
  },
  MEDIUM_DATETIME: {
    '_': 'MMM d, y hh:mm:ss a'
  },
  SHORT_DATETIME: {
    'a': 'd/M/yy h:mm a ??? h:mm a',
    'h': 'd/M/yy h:mm???h:mm a',
    'm': 'd/M/yy h:mm ??? h:mm a',
    '_': 'd/M/yy hh:mm a'
  },
  FALLBACK: '{0} ??? {1}'
};

/** @const {!DateIntervalSymbols} */
exports.DateIntervalSymbols_ko = {
  FULL_DATE: {
    'Mdy': 'y. M. d. (EEEE) ~ y. M. d. (EEEE)',
    '_': 'y??? M??? d??? EEEE'
  },
  LONG_DATE: {
    'Mdy': 'y. M. d. ~ y. M. d.',
    '_': 'y??? M??? d???'
  },
  MEDIUM_DATE: {
    '_': 'y. M. d.'
  },
  SHORT_DATE: {
    '_': 'yy. M. d.'
  },
  FULL_TIME: {
    'Mdy': 'y. M. d. a h??? m??? s??? zzzz',
    '_': 'a h??? m??? s??? zzzz'
  },
  LONG_TIME: {
    'Mdy': 'y. M. d. a h??? m??? s??? z',
    '_': 'a h??? m??? s??? z'
  },
  MEDIUM_TIME: {
    'Mdy': 'y. M. d. a h:mm:ss',
    '_': 'a h:mm:ss'
  },
  SHORT_TIME: {
    'Mdy': 'y. M. d. a h:mm',
    'hm': 'a h:mm~h:mm',
    '_': 'a h:mm'
  },
  FULL_DATETIME: {
    '_': 'y??? M??? d??? EEEE a h??? m??? s??? zzzz'
  },
  LONG_DATETIME: {
    '_': 'y??? M??? d??? a h??? m??? s??? z'
  },
  MEDIUM_DATETIME: {
    '_': 'y. M. d. a h:mm:ss'
  },
  SHORT_DATETIME: {
    'a': 'yy. M. d. a h:mm ~ a h:mm',
    'hm': 'yy. M. d. a h:mm~h:mm',
    '_': 'yy. M. d. a h:mm'
  },
  FALLBACK: '{0} ~ {1}'
};

/** @const {!DateIntervalSymbols} */
exports.DateIntervalSymbols_ky = {
  FULL_DATE: {
    'M': 'y-\'??\'., d-MMMM, EEEE ??? d-MMMM EEEE',
    'd': 'y-\'??\'., d-MMMM, EEEE ??? d-MMMM, EEEE',
    'y': 'y-\'??\'., d-MMMM, EEEE ??? y-\'??\'., d-MMMM, EEEE',
    '_': 'y-\'??\'., d-MMMM, EEEE'
  },
  LONG_DATE: {
    'M': 'd-MMMM ??? d-MMMM y-\'??\'.',
    'd': 'd???d-MMMM y-\'??\'.',
    'y': 'd-MMMM y-\'??\'. - d-MMMM y-\'??\'.',
    '_': 'y-\'??\'., d-MMMM'
  },
  MEDIUM_DATE: {
    'M': 'd-MMM ??? d-MMM y-\'??\'.',
    'd': 'd???d-MMM y-\'??\'.',
    'y': 'd-MMM y-\'??\'. - d-MMM y-\'??\'.',
    '_': 'y-\'??\'., d-MMM'
  },
  SHORT_DATE: {
    'Mdy': 'dd.MM.yy ??? dd.MM.yy',
    '_': 'd/M/yy'
  },
  FULL_TIME: {
    'Mdy': 'y-dd-MM HH:mm:ss zzzz',
    '_': 'HH:mm:ss zzzz'
  },
  LONG_TIME: {
    'Mdy': 'y-dd-MM HH:mm:ss z',
    '_': 'HH:mm:ss z'
  },
  MEDIUM_TIME: {
    'Mdy': 'y-dd-MM HH:mm:ss',
    '_': 'HH:mm:ss'
  },
  SHORT_TIME: {
    'Mdy': 'y-dd-MM HH:mm',
    'ahm': 'HH:mm???HH:mm',
    '_': 'HH:mm'
  },
  FULL_DATETIME: {
    '_': 'y-\'??\'., d-MMMM, EEEE HH:mm:ss zzzz'
  },
  LONG_DATETIME: {
    '_': 'y-\'??\'., d-MMMM HH:mm:ss z'
  },
  MEDIUM_DATETIME: {
    '_': 'y-\'??\'., d-MMM HH:mm:ss'
  },
  SHORT_DATETIME: {
    'ahm': 'd/M/yy HH:mm???HH:mm',
    '_': 'd/M/yy HH:mm'
  },
  FALLBACK: '{0} - {1}'
};

/** @const {!DateIntervalSymbols} */
exports.DateIntervalSymbols_ln = {
  FULL_DATE: {
    'Md': 'y MMMM d, EEEE ??? MMMM d, EEEE',
    'y': 'y MMMM d, EEEE ??? y MMMM d, EEEE',
    '_': 'EEEE d MMMM y'
  },
  LONG_DATE: {
    'M': 'y MMMM d ??? MMMM d',
    'd': 'y MMMM d???d',
    'y': 'y MMMM d ??? y MMMM d',
    '_': 'd MMMM y'
  },
  MEDIUM_DATE: {
    'M': 'y MMM d ??? MMM d',
    'd': 'y MMM d???d',
    'y': 'y MMM d ??? y MMM d',
    '_': 'd MMM y'
  },
  SHORT_DATE: {
    'Mdy': 'y-MM-dd ??? y-MM-dd',
    '_': 'd/M/y'
  },
  FULL_TIME: {
    'Mdy': 'd/M/y HH:mm:ss zzzz',
    '_': 'HH:mm:ss zzzz'
  },
  LONG_TIME: {
    'Mdy': 'd/M/y HH:mm:ss z',
    '_': 'HH:mm:ss z'
  },
  MEDIUM_TIME: {
    'Mdy': 'd/M/y HH:mm:ss',
    '_': 'HH:mm:ss'
  },
  SHORT_TIME: {
    'Mdy': 'd/M/y HH:mm',
    'ahm': 'HH:mm???HH:mm',
    '_': 'HH:mm'
  },
  FULL_DATETIME: {
    '_': 'EEEE d MMMM y HH:mm:ss zzzz'
  },
  LONG_DATETIME: {
    '_': 'd MMMM y HH:mm:ss z'
  },
  MEDIUM_DATETIME: {
    '_': 'd MMM y HH:mm:ss'
  },
  SHORT_DATETIME: {
    'ahm': 'd/M/y HH:mm???HH:mm',
    '_': 'd/M/y HH:mm'
  },
  FALLBACK: '{0} ??? {1}'
};

/** @const {!DateIntervalSymbols} */
exports.DateIntervalSymbols_lo = {
  FULL_DATE: {
    '_': 'EEEE ?????? d MMMM G y'
  },
  LONG_DATE: {
    'M': 'd/MM/y ??? d/MM',
    'd': 'd/MM/y ??? d/MM/y',
    'y': 'dd/MM/y ??? dd/MM/y',
    '_': 'd MMMM y'
  },
  MEDIUM_DATE: {
    'M': 'd/MM/y ??? d/MM',
    'd': 'd/MM/y ??? d/MM/y',
    'y': 'dd/MM/y ??? dd/MM/y',
    '_': 'd MMM y'
  },
  SHORT_DATE: {
    'Mdy': 'dd/MM/y ??? dd/MM/y',
    '_': 'd/M/y'
  },
  FULL_TIME: {
    'Mdy': 'd/M/y, H ????????? m ???????????? ss ?????????????????? zzzz',
    '_': 'H ????????? m ???????????? ss ?????????????????? zzzz'
  },
  LONG_TIME: {
    'Mdy': 'd/M/y, H ????????? m ???????????? ss ?????????????????? z',
    '_': 'H ????????? m ???????????? ss ?????????????????? z'
  },
  MEDIUM_TIME: {
    'Mdy': 'd/M/y, H:mm:ss',
    '_': 'H:mm:ss'
  },
  SHORT_TIME: {
    'Mdy': 'd/M/y, H:mm',
    'ahm': 'HH:mm???HH:mm',
    '_': 'H:mm'
  },
  FULL_DATETIME: {
    '_': 'EEEE ?????? d MMMM G y, H ????????? m ???????????? ss ?????????????????? zzzz'
  },
  LONG_DATETIME: {
    '_': 'd MMMM y, H ????????? m ???????????? ss ?????????????????? z'
  },
  MEDIUM_DATETIME: {
    '_': 'd MMM y, H:mm:ss'
  },
  SHORT_DATETIME: {
    'ahm': 'd/M/y, HH:mm???HH:mm',
    '_': 'd/M/y, H:mm'
  },
  FALLBACK: '{0} ??? {1}'
};

/** @const {!DateIntervalSymbols} */
exports.DateIntervalSymbols_lt = {
  FULL_DATE: {
    'M': 'y MMMM d, EEEE. ??? MMMM d, EEEE.',
    'd': 'y MMMM d, EEEE ??? MMMM d, EEEE',
    'y': 'y MMMM d, EEEE. ??? y MMMM d, EEEE.',
    '_': 'y \'m\'. MMMM d \'d\'., EEEE'
  },
  LONG_DATE: {
    'M': 'y MMMM d ??? MMMM d',
    'd': 'y MMMM d???d',
    'y': 'y MMMM d ??? y MMMM d',
    '_': 'y \'m\'. MMMM d \'d\'.'
  },
  MEDIUM_DATE: {
    '_': 'y-MM-dd'
  },
  SHORT_DATE: {
    '_': 'y-MM-dd'
  },
  FULL_TIME: {
    'Mdy': 'y-MM-dd HH:mm:ss zzzz',
    '_': 'HH:mm:ss zzzz'
  },
  LONG_TIME: {
    'Mdy': 'y-MM-dd HH:mm:ss z',
    '_': 'HH:mm:ss z'
  },
  MEDIUM_TIME: {
    'Mdy': 'y-MM-dd HH:mm:ss',
    '_': 'HH:mm:ss'
  },
  SHORT_TIME: {
    'Mdy': 'y-MM-dd HH:mm',
    'ahm': 'HH:mm???HH:mm',
    '_': 'HH:mm'
  },
  FULL_DATETIME: {
    '_': 'y \'m\'. MMMM d \'d\'., EEEE HH:mm:ss zzzz'
  },
  LONG_DATETIME: {
    '_': 'y \'m\'. MMMM d \'d\'. HH:mm:ss z'
  },
  MEDIUM_DATETIME: {
    '_': 'y-MM-dd HH:mm:ss'
  },
  SHORT_DATETIME: {
    'ahm': 'y-MM-dd HH:mm???HH:mm',
    '_': 'y-MM-dd HH:mm'
  },
  FALLBACK: '{0} ??? {1}'
};

/** @const {!DateIntervalSymbols} */
exports.DateIntervalSymbols_lv = {
  FULL_DATE: {
    'Md': 'EEEE, y. \'gada\' d. MMMM ??? EEEE, y. \'gada\' d. MMMM',
    'y': 'EEEE, y. \'gada\' d. MMMM????? EEEE, y. \'gada\' d. MMMM',
    '_': 'EEEE, y. \'gada\' d. MMMM'
  },
  LONG_DATE: {
    'M': 'y. \'gada\' d. MMMM ??? d. MMMM',
    'd': 'y. \'gada\' d.???d. MMMM',
    'y': 'y. \'gada\' d. MMMM ??? y. \'gada\' d. MMMM',
    '_': 'y. \'gada\' d. MMMM'
  },
  MEDIUM_DATE: {
    'M': 'y. \'gada\' d. MMM ??? d. MMM',
    'd': 'y. \'gada\' d.???d. MMM',
    'y': 'y. \'gada\' d. MMM ??? y. \'gada\' d. MMM',
    '_': 'y. \'gada\' d. MMM'
  },
  SHORT_DATE: {
    'Mdy': 'dd.MM.yy.???dd.MM.yy.',
    '_': 'dd.MM.yy'
  },
  FULL_TIME: {
    'Mdy': 'y.MM.d. HH:mm:ss zzzz',
    '_': 'HH:mm:ss zzzz'
  },
  LONG_TIME: {
    'Mdy': 'y.MM.d. HH:mm:ss z',
    '_': 'HH:mm:ss z'
  },
  MEDIUM_TIME: {
    'Mdy': 'y.MM.d. HH:mm:ss',
    '_': 'HH:mm:ss'
  },
  SHORT_TIME: {
    'Mdy': 'y.MM.d. HH:mm',
    'ahm': 'HH:mm???HH:mm',
    '_': 'HH:mm'
  },
  FULL_DATETIME: {
    '_': 'EEEE, y. \'gada\' d. MMMM HH:mm:ss zzzz'
  },
  LONG_DATETIME: {
    '_': 'y. \'gada\' d. MMMM HH:mm:ss z'
  },
  MEDIUM_DATETIME: {
    '_': 'y. \'gada\' d. MMM HH:mm:ss'
  },
  SHORT_DATETIME: {
    'ahm': 'dd.MM.yy HH:mm???HH:mm',
    '_': 'dd.MM.yy HH:mm'
  },
  FALLBACK: '{0} - {1}'
};

/** @const {!DateIntervalSymbols} */
exports.DateIntervalSymbols_mk = {
  FULL_DATE: {
    'M': 'EEEE, dd MMMM ??? EEEE, dd MMMM y',
    'd': 'EEEE, dd ??? EEEE, dd MMMM y',
    'y': 'EEEE, dd MMMM y ??? EEEE, dd MMMM y',
    '_': 'EEEE, dd MMMM y'
  },
  LONG_DATE: {
    'M': 'dd MMMM ??? dd MMMM y',
    'd': 'dd ??? dd MMMM y',
    'y': 'dd MMMM y ??? dd MMMM y',
    '_': 'dd MMMM y'
  },
  MEDIUM_DATE: {
    'Mdy': 'dd.M.y ??? dd.M.y',
    '_': 'dd.M.y'
  },
  SHORT_DATE: {
    'Mdy': 'dd.M.yy ??? dd.M.yy',
    '_': 'dd.M.yy'
  },
  FULL_TIME: {
    'Mdy': 'd.M.y HH:mm:ss zzzz',
    '_': 'HH:mm:ss zzzz'
  },
  LONG_TIME: {
    'Mdy': 'd.M.y HH:mm:ss z',
    '_': 'HH:mm:ss z'
  },
  MEDIUM_TIME: {
    'Mdy': 'd.M.y HH:mm:ss',
    '_': 'HH:mm:ss'
  },
  SHORT_TIME: {
    'Mdy': 'd.M.y HH:mm',
    'ahm': 'HH:mm ??? HH:mm',
    '_': 'HH:mm'
  },
  FULL_DATETIME: {
    '_': 'EEEE, dd MMMM y HH:mm:ss zzzz'
  },
  LONG_DATETIME: {
    '_': 'dd MMMM y HH:mm:ss z'
  },
  MEDIUM_DATETIME: {
    '_': 'dd.M.y HH:mm:ss'
  },
  SHORT_DATETIME: {
    'ahm': 'dd.M.yy HH:mm ??? HH:mm',
    '_': 'dd.M.yy HH:mm'
  },
  FALLBACK: '{0} - {1}'
};

/** @const {!DateIntervalSymbols} */
exports.DateIntervalSymbols_ml = {
  FULL_DATE: {
    'Md': 'y MMMM d, EEEE ??? MMMM d, EEEE',
    'y': 'y MMMM d, EEEE ??? y MMMM d, EEEE',
    '_': 'y, MMMM d, EEEE'
  },
  LONG_DATE: {
    'M': 'y MMMM d ??? MMMM d',
    'd': 'y MMMM d ??? d',
    'y': 'y MMMM d ??? y MMMM d',
    '_': 'y, MMMM d'
  },
  MEDIUM_DATE: {
    'M': 'y MMM d ??? MMM d',
    'd': 'y MMM d ??? d',
    'y': 'y MMM d ??? y MMM d',
    '_': 'y, MMM d'
  },
  SHORT_DATE: {
    'Mdy': 'd/M/yy ??? d/M/yy',
    '_': 'd/M/yy'
  },
  FULL_TIME: {
    'Mdy': 'd/M/y h:mm:ss a zzzz',
    '_': 'h:mm:ss a zzzz'
  },
  LONG_TIME: {
    'Mdy': 'd/M/y h:mm:ss a z',
    '_': 'h:mm:ss a z'
  },
  MEDIUM_TIME: {
    'Mdy': 'd/M/y h:mm:ss a',
    '_': 'h:mm:ss a'
  },
  SHORT_TIME: {
    'Mdy': 'd/M/y h:mm a',
    'a': 'h:mm a ??? h:mm a',
    'hm': 'h:mm ??? h:mm a',
    '_': 'h:mm a'
  },
  FULL_DATETIME: {
    '_': 'y, MMMM d, EEEE h:mm:ss a zzzz'
  },
  LONG_DATETIME: {
    '_': 'y, MMMM d h:mm:ss a z'
  },
  MEDIUM_DATETIME: {
    '_': 'y, MMM d h:mm:ss a'
  },
  SHORT_DATETIME: {
    'a': 'd/M/yy h:mm a ??? h:mm a',
    'hm': 'd/M/yy h:mm ??? h:mm a',
    '_': 'd/M/yy h:mm a'
  },
  FALLBACK: '{0} - {1}'
};

/** @const {!DateIntervalSymbols} */
exports.DateIntervalSymbols_mn = {
  FULL_DATE: {
    'Mdy': 'EEEE, y/MM/dd ??? EEEE, y/MM/dd',
    '_': 'y.MM.dd, EEEE'
  },
  LONG_DATE: {
    'M': 'y/MM/dd ???MM/dd',
    'd': 'y/MM/dd???dd',
    'y': 'y/MM/dd ??? y/MM/dd',
    '_': 'y.MM.dd'
  },
  MEDIUM_DATE: {
    'M': 'y/MM/dd ???MM/dd',
    'd': 'y/MM/dd???dd',
    'y': 'y/MM/dd ??? y/MM/dd',
    '_': 'y.MM.dd'
  },
  SHORT_DATE: {
    'M': 'y/MM/dd ???MM/dd',
    'd': 'y/MM/dd???dd',
    'y': 'y/MM/dd ??? y/MM/dd',
    '_': 'y.MM.dd'
  },
  FULL_TIME: {
    'Mdy': 'y.MM.dd HH:mm:ss (zzzz)',
    '_': 'HH:mm:ss (zzzz)'
  },
  LONG_TIME: {
    'Mdy': 'y.MM.dd HH:mm:ss (z)',
    '_': 'HH:mm:ss (z)'
  },
  MEDIUM_TIME: {
    'Mdy': 'y.MM.dd HH:mm:ss',
    '_': 'HH:mm:ss'
  },
  SHORT_TIME: {
    'Mdy': 'y.MM.dd HH:mm',
    '_': 'HH:mm'
  },
  FULL_DATETIME: {
    '_': 'y.MM.dd, EEEE HH:mm:ss (zzzz)'
  },
  LONG_DATETIME: {
    '_': 'y.MM.dd HH:mm:ss (z)'
  },
  MEDIUM_DATETIME: {
    '_': 'y.MM.dd HH:mm:ss'
  },
  SHORT_DATETIME: {
    'ahm': 'y.MM.dd HH:mm ??? HH:mm',
    '_': 'y.MM.dd HH:mm'
  },
  FALLBACK: '{0} ??? {1}'
};

/** @const {!DateIntervalSymbols} */
exports.DateIntervalSymbols_mo = {
  FULL_DATE: {
    'Md': 'EEEE, d MMMM ??? EEEE, d MMMM y',
    '_': 'EEEE, d MMMM y'
  },
  LONG_DATE: {
    'M': 'd MMMM ??? d MMMM y',
    'd': 'd???d MMMM y',
    '_': 'd MMMM y'
  },
  MEDIUM_DATE: {
    'M': 'd MMM ??? d MMM y',
    'd': 'd???d MMM y',
    '_': 'd MMM y'
  },
  SHORT_DATE: {
    '_': 'dd.MM.y'
  },
  FULL_TIME: {
    'Mdy': 'dd.MM.y, HH:mm:ss zzzz',
    '_': 'HH:mm:ss zzzz'
  },
  LONG_TIME: {
    'Mdy': 'dd.MM.y, HH:mm:ss z',
    '_': 'HH:mm:ss z'
  },
  MEDIUM_TIME: {
    'Mdy': 'dd.MM.y, HH:mm:ss',
    '_': 'HH:mm:ss'
  },
  SHORT_TIME: {
    'Mdy': 'dd.MM.y, HH:mm',
    'ahm': 'HH:mm???HH:mm',
    '_': 'HH:mm'
  },
  FULL_DATETIME: {
    '_': 'EEEE, d MMMM y, HH:mm:ss zzzz'
  },
  LONG_DATETIME: {
    '_': 'd MMMM y, HH:mm:ss z'
  },
  MEDIUM_DATETIME: {
    '_': 'd MMM y, HH:mm:ss'
  },
  SHORT_DATETIME: {
    'ahm': 'dd.MM.y, HH:mm???HH:mm',
    '_': 'dd.MM.y, HH:mm'
  },
  FALLBACK: '{0} ??? {1}'
};

/** @const {!DateIntervalSymbols} */
exports.DateIntervalSymbols_mr = {
  FULL_DATE: {
    'M': 'EEEE, d MMMM ??? EEEE, d MMMM, y',
    'd': 'EEEE, d MMMM y ??? EEEE, d MMMM, y',
    '_': 'EEEE, d MMMM, y'
  },
  LONG_DATE: {
    'M': 'd MMMM ??? d MMMM, y',
    'd': 'd ??? d MMMM, y',
    '_': 'd MMMM, y'
  },
  MEDIUM_DATE: {
    'M': 'd MMM ??? d MMM, y',
    'd': 'd ??? d MMM, y',
    '_': 'd MMM, y'
  },
  SHORT_DATE: {
    '_': 'd/M/yy'
  },
  FULL_TIME: {
    'Mdy': 'd/M/y, h:mm:ss a zzzz',
    '_': 'h:mm:ss a zzzz'
  },
  LONG_TIME: {
    'Mdy': 'd/M/y, h:mm:ss a z',
    '_': 'h:mm:ss a z'
  },
  MEDIUM_TIME: {
    'Mdy': 'd/M/y, h:mm:ss a',
    '_': 'h:mm:ss a'
  },
  SHORT_TIME: {
    'Mdy': 'd/M/y, h:mm a',
    'hm': 'h:mm ??? h:mm a',
    '_': 'h:mm a'
  },
  FULL_DATETIME: {
    '_': 'EEEE, d MMMM, y ???????????? h:mm:ss a zzzz'
  },
  LONG_DATETIME: {
    '_': 'd MMMM, y ???????????? h:mm:ss a z'
  },
  MEDIUM_DATETIME: {
    '_': 'd MMM, y, h:mm:ss a'
  },
  SHORT_DATETIME: {
    'a': 'd/M/yy, h:mm a ??? h:mm a',
    'hm': 'd/M/yy, h:mm ??? h:mm a',
    '_': 'd/M/yy, h:mm a'
  },
  FALLBACK: '{0} ??? {1}'
};

/** @const {!DateIntervalSymbols} */
exports.DateIntervalSymbols_ms = {
  FULL_DATE: {
    'Md': 'EEEE, d MMMM ??? EEEE, d MMMM y',
    '_': 'EEEE, d MMMM y'
  },
  LONG_DATE: {
    'M': 'd MMMM ??? d MMMM, y',
    'd': 'd???d MMMM y',
    '_': 'd MMMM y'
  },
  MEDIUM_DATE: {
    'M': 'd MMM ??? d MMM, y',
    'd': 'd???d MMM y',
    '_': 'd MMM y'
  },
  SHORT_DATE: {
    'Mdy': 'd/M/yy ??? d/M/yy',
    '_': 'd/MM/yy'
  },
  FULL_TIME: {
    'Mdy': 'd/M/y, h:mm:ss a zzzz',
    '_': 'h:mm:ss a zzzz'
  },
  LONG_TIME: {
    'Mdy': 'd/M/y, h:mm:ss a z',
    '_': 'h:mm:ss a z'
  },
  MEDIUM_TIME: {
    'Mdy': 'd/M/y, h:mm:ss a',
    '_': 'h:mm:ss a'
  },
  SHORT_TIME: {
    'Mdy': 'd/M/y, h:mm a',
    'hm': 'h:mm???h:mm a',
    '_': 'h:mm a'
  },
  FULL_DATETIME: {
    '_': 'EEEE, d MMMM y h:mm:ss a zzzz'
  },
  LONG_DATETIME: {
    '_': 'd MMMM y h:mm:ss a z'
  },
  MEDIUM_DATETIME: {
    '_': 'd MMM y, h:mm:ss a'
  },
  SHORT_DATETIME: {
    'a': 'd/MM/yy, h:mm a ??? h:mm a',
    'hm': 'd/MM/yy, h:mm???h:mm a',
    '_': 'd/MM/yy, h:mm a'
  },
  FALLBACK: '{0} ??? {1}'
};

/** @const {!DateIntervalSymbols} */
exports.DateIntervalSymbols_mt = {
  FULL_DATE: {
    'M': 'EEEE, d \'ta\'??? MMMM ??? EEEE, d \'ta\'??? MMMM y',
    'd': 'EEEE, d MMMM ??? EEEE, d MMMM, y',
    '_': 'EEEE, d \'ta\'??? MMMM y'
  },
  LONG_DATE: {
    'M': 'y MMMM d ??? MMMM d',
    'd': 'd ??? d MMMM y',
    'y': 'd MMMM, y ??? d MMMM, y',
    '_': 'd \'ta\'??? MMMM y'
  },
  MEDIUM_DATE: {
    'M': 'y MMM d ??? MMM d',
    'd': 'd ??? d MMM y',
    'y': 'd MMM, y ??? d MMM, y',
    '_': 'dd MMM y'
  },
  SHORT_DATE: {
    '_': 'dd/MM/y'
  },
  FULL_TIME: {
    'Mdy': 'd/M/y HH:mm:ss zzzz',
    '_': 'HH:mm:ss zzzz'
  },
  LONG_TIME: {
    'Mdy': 'd/M/y HH:mm:ss z',
    '_': 'HH:mm:ss z'
  },
  MEDIUM_TIME: {
    'Mdy': 'd/M/y HH:mm:ss',
    '_': 'HH:mm:ss'
  },
  SHORT_TIME: {
    'Mdy': 'd/M/y HH:mm',
    'ahm': 'HH:mm???HH:mm',
    '_': 'HH:mm'
  },
  FULL_DATETIME: {
    '_': 'EEEE, d \'ta\'??? MMMM y HH:mm:ss zzzz'
  },
  LONG_DATETIME: {
    '_': 'd \'ta\'??? MMMM y HH:mm:ss z'
  },
  MEDIUM_DATETIME: {
    '_': 'dd MMM y HH:mm:ss'
  },
  SHORT_DATETIME: {
    'ahm': 'dd/MM/y HH:mm???HH:mm',
    '_': 'dd/MM/y HH:mm'
  },
  FALLBACK: '{0} ??? {1}'
};

/** @const {!DateIntervalSymbols} */
exports.DateIntervalSymbols_my = {
  FULL_DATE: {
    'Md': 'y??? MMMM d??? EEEE ??? MMMM d??? EEEE',
    '_': 'y??? MMMM d??? EEEE'
  },
  LONG_DATE: {
    'M': 'y??? MMMM d ??? MMMM d',
    'd': 'y??? MMMM d ??? d',
    'y': 'y??? MMMM d ??? y??? MMMM d',
    '_': 'y??? d MMMM'
  },
  MEDIUM_DATE: {
    'M': 'y??? MMM d ??? MMM d',
    'd': 'y??? MMM d ??? d',
    '_': 'y??? MMM d'
  },
  SHORT_DATE: {
    'Mdy': 'd/M/yy ??? d/M/yy',
    '_': 'dd-MM-yy'
  },
  FULL_TIME: {
    'Mdy': 'dd-MM-y zzzz HH:mm:ss',
    '_': 'zzzz HH:mm:ss'
  },
  LONG_TIME: {
    'Mdy': 'dd-MM-y z HH:mm:ss',
    '_': 'z HH:mm:ss'
  },
  MEDIUM_TIME: {
    'Mdy': 'dd-MM-y B HH:mm:ss',
    '_': 'B HH:mm:ss'
  },
  SHORT_TIME: {
    'Mdy': 'dd-MM-y B H:mm',
    'ahm': 'HH:mm ??? HH:mm',
    '_': 'B H:mm'
  },
  FULL_DATETIME: {
    '_': 'y??? MMMM d??? EEEE zzzz HH:mm:ss'
  },
  LONG_DATETIME: {
    '_': 'y??? d MMMM z HH:mm:ss'
  },
  MEDIUM_DATETIME: {
    '_': 'y??? MMM d B HH:mm:ss'
  },
  SHORT_DATETIME: {
    'ahm': 'dd-MM-yy HH:mm ??? HH:mm',
    '_': 'dd-MM-yy B H:mm'
  },
  FALLBACK: '{0} ??? {1}'
};

/** @const {!DateIntervalSymbols} */
exports.DateIntervalSymbols_nb = {
  FULL_DATE: {
    'M': 'EEEE d. MMMM???EEEE d. MMMM y',
    'd': 'EEEE d.???EEEE d. MMMM y',
    '_': 'EEEE d. MMMM y'
  },
  LONG_DATE: {
    'M': 'd. MMMM???d. MMMM y',
    'd': 'd.???d. MMMM y',
    '_': 'd. MMMM y'
  },
  MEDIUM_DATE: {
    'M': 'd. MMM???d. MMM y',
    'd': 'd.???d. MMM y',
    '_': 'd. MMM y'
  },
  SHORT_DATE: {
    '_': 'dd.MM.y'
  },
  FULL_TIME: {
    'Mdy': 'd.M.y, HH:mm:ss zzzz',
    '_': 'HH:mm:ss zzzz'
  },
  LONG_TIME: {
    'Mdy': 'd.M.y, HH:mm:ss z',
    '_': 'HH:mm:ss z'
  },
  MEDIUM_TIME: {
    'Mdy': 'd.M.y, HH:mm:ss',
    '_': 'HH:mm:ss'
  },
  SHORT_TIME: {
    'Mdy': 'd.M.y, HH:mm',
    '_': 'HH:mm'
  },
  FULL_DATETIME: {
    '_': 'EEEE d. MMMM y HH:mm:ss zzzz'
  },
  LONG_DATETIME: {
    '_': 'd. MMMM y \'kl\'. HH:mm:ss z'
  },
  MEDIUM_DATETIME: {
    '_': 'd. MMM y, HH:mm:ss'
  },
  SHORT_DATETIME: {
    'ahm': 'dd.MM.y, HH:mm???HH:mm',
    '_': 'dd.MM.y, HH:mm'
  },
  FALLBACK: '{0}???{1}'
};

/** @const {!DateIntervalSymbols} */
exports.DateIntervalSymbols_ne = {
  FULL_DATE: {
    'Md': 'y MMMM d, EEEE ??? MMMM d, EEEE',
    '_': 'y MMMM d, EEEE'
  },
  LONG_DATE: {
    'M': 'y MMMM d ??? MMMM d',
    'd': 'y MMMM d???d',
    '_': 'y MMMM d'
  },
  MEDIUM_DATE: {
    'M': 'y MMM d ??? MMM d',
    'd': 'y MMM d???d',
    '_': 'y MMM d'
  },
  SHORT_DATE: {
    'Mdy': 'yy-MM-dd ??? yy-MM-dd',
    '_': 'yy/M/d'
  },
  FULL_TIME: {
    'Mdy': 'y-MM-dd, HH:mm:ss zzzz',
    '_': 'HH:mm:ss zzzz'
  },
  LONG_TIME: {
    'Mdy': 'y-MM-dd, HH:mm:ss z',
    '_': 'HH:mm:ss z'
  },
  MEDIUM_TIME: {
    'Mdy': 'y-MM-dd, HH:mm:ss',
    '_': 'HH:mm:ss'
  },
  SHORT_TIME: {
    'Mdy': 'y-MM-dd, HH:mm',
    'ahm': 'HH:mm???HH:mm',
    '_': 'HH:mm'
  },
  FULL_DATETIME: {
    '_': 'y MMMM d, EEEE HH:mm:ss zzzz'
  },
  LONG_DATETIME: {
    '_': 'y MMMM d HH:mm:ss z'
  },
  MEDIUM_DATETIME: {
    '_': 'y MMM d, HH:mm:ss'
  },
  SHORT_DATETIME: {
    'ahm': 'yy/M/d, HH:mm???HH:mm',
    '_': 'yy/M/d, HH:mm'
  },
  FALLBACK: '{0} ??? {1}'
};

/** @const {!DateIntervalSymbols} */
exports.DateIntervalSymbols_nl = {
  FULL_DATE: {
    'M': 'EEEE d MMMM ??? EEEE d MMMM y',
    'd': 'EEEE d ??? EEEE d MMMM y',
    'y': 'EEEE d MMMM y ??? EEEE d MMMM y',
    '_': 'EEEE d MMMM y'
  },
  LONG_DATE: {
    'M': 'd MMMM ??? d MMMM y',
    'd': 'd???d MMMM y',
    'y': 'd MMMM y ??? d MMMM y',
    '_': 'd MMMM y'
  },
  MEDIUM_DATE: {
    'M': 'd MMM ??? d MMM y',
    'd': 'd???d MMM y',
    'y': 'd MMM y ??? d MMM y',
    '_': 'd MMM y'
  },
  SHORT_DATE: {
    'Mdy': 'dd-MM-yy ??? dd-MM-yy',
    '_': 'dd-MM-yy'
  },
  FULL_TIME: {
    'Mdy': 'd-M-y HH:mm:ss zzzz',
    '_': 'HH:mm:ss zzzz'
  },
  LONG_TIME: {
    'Mdy': 'd-M-y HH:mm:ss z',
    '_': 'HH:mm:ss z'
  },
  MEDIUM_TIME: {
    'Mdy': 'd-M-y HH:mm:ss',
    '_': 'HH:mm:ss'
  },
  SHORT_TIME: {
    'Mdy': 'd-M-y HH:mm',
    'ahm': 'HH:mm???HH:mm',
    '_': 'HH:mm'
  },
  FULL_DATETIME: {
    '_': 'EEEE d MMMM y \'om\' HH:mm:ss zzzz'
  },
  LONG_DATETIME: {
    '_': 'd MMMM y \'om\' HH:mm:ss z'
  },
  MEDIUM_DATETIME: {
    '_': 'd MMM y HH:mm:ss'
  },
  SHORT_DATETIME: {
    'ahm': 'dd-MM-yy HH:mm???HH:mm',
    '_': 'dd-MM-yy HH:mm'
  },
  FALLBACK: '{0} - {1}'
};

/** @const {!DateIntervalSymbols} */
exports.DateIntervalSymbols_no = {
  FULL_DATE: {
    'M': 'EEEE d. MMMM???EEEE d. MMMM y',
    'd': 'EEEE d.???EEEE d. MMMM y',
    '_': 'EEEE d. MMMM y'
  },
  LONG_DATE: {
    'M': 'd. MMMM???d. MMMM y',
    'd': 'd.???d. MMMM y',
    '_': 'd. MMMM y'
  },
  MEDIUM_DATE: {
    'M': 'd. MMM???d. MMM y',
    'd': 'd.???d. MMM y',
    '_': 'd. MMM y'
  },
  SHORT_DATE: {
    '_': 'dd.MM.y'
  },
  FULL_TIME: {
    'Mdy': 'd.M.y, HH:mm:ss zzzz',
    '_': 'HH:mm:ss zzzz'
  },
  LONG_TIME: {
    'Mdy': 'd.M.y, HH:mm:ss z',
    '_': 'HH:mm:ss z'
  },
  MEDIUM_TIME: {
    'Mdy': 'd.M.y, HH:mm:ss',
    '_': 'HH:mm:ss'
  },
  SHORT_TIME: {
    'Mdy': 'd.M.y, HH:mm',
    '_': 'HH:mm'
  },
  FULL_DATETIME: {
    '_': 'EEEE d. MMMM y HH:mm:ss zzzz'
  },
  LONG_DATETIME: {
    '_': 'd. MMMM y \'kl\'. HH:mm:ss z'
  },
  MEDIUM_DATETIME: {
    '_': 'd. MMM y, HH:mm:ss'
  },
  SHORT_DATETIME: {
    'ahm': 'dd.MM.y, HH:mm???HH:mm',
    '_': 'dd.MM.y, HH:mm'
  },
  FALLBACK: '{0}???{1}'
};

/** @const {!DateIntervalSymbols} */
exports.DateIntervalSymbols_no_NO = exports.DateIntervalSymbols_no;

/** @const {!DateIntervalSymbols} */
exports.DateIntervalSymbols_or = {
  FULL_DATE: {
    'Md': 'y MMMM d, EEEE ??? MMMM d, EEEE',
    'y': 'y MMMM d, EEEE ??? y MMMM d, EEEE',
    '_': 'EEEE, MMMM d, y'
  },
  LONG_DATE: {
    'M': 'y MMMM d ??? MMMM d',
    'd': 'y MMMM d???d',
    'y': 'y MMMM d ??? y MMMM d',
    '_': 'MMMM d, y'
  },
  MEDIUM_DATE: {
    'M': 'y MMM d ??? MMM d',
    'd': 'y MMM d???d',
    'y': 'y MMM d ??? y MMM d',
    '_': 'MMM d, y'
  },
  SHORT_DATE: {
    'Mdy': 'yy-MM-dd ??? yy-MM-dd',
    '_': 'M/d/yy'
  },
  FULL_TIME: {
    'Mdy': 'M/d/y, h:mm:ss a zzzz',
    '_': 'h:mm:ss a zzzz'
  },
  LONG_TIME: {
    'Mdy': 'M/d/y, h:mm:ss a z',
    '_': 'h:mm:ss a z'
  },
  MEDIUM_TIME: {
    'Mdy': 'M/d/y, h:mm:ss a',
    '_': 'h:mm:ss a'
  },
  SHORT_TIME: {
    'Mdy': 'M/d/y, h:mm a',
    'hm': 'h:mm???h:mm a',
    '_': 'h:mm a'
  },
  FULL_DATETIME: {
    '_': 'h:mm:ss a zzzz ???????????? EEEE, MMMM d, y'
  },
  LONG_DATETIME: {
    '_': 'h:mm:ss a z ???????????? MMMM d, y'
  },
  MEDIUM_DATETIME: {
    '_': 'MMM d, y, h:mm:ss a'
  },
  SHORT_DATETIME: {
    'a': 'M/d/yy, h:mm a ??? h:mm a',
    'hm': 'M/d/yy, h:mm???h:mm a',
    '_': 'M/d/yy, h:mm a'
  },
  FALLBACK: '{0} ??? {1}'
};

/** @const {!DateIntervalSymbols} */
exports.DateIntervalSymbols_pa = {
  FULL_DATE: {
    'Md': 'EEEE, d MMMM ??? EEEE, d MMMM y',
    '_': 'EEEE, d MMMM y'
  },
  LONG_DATE: {
    'M': 'd MMMM ??? d MMMM y',
    'd': 'd???d MMMM y',
    '_': 'd MMMM y'
  },
  MEDIUM_DATE: {
    'M': 'd MMM ??? d MMM y',
    'd': 'd???d MMM y',
    '_': 'd MMM y'
  },
  SHORT_DATE: {
    '_': 'd/M/yy'
  },
  FULL_TIME: {
    'Mdy': 'd/M/y, h:mm:ss a zzzz',
    '_': 'h:mm:ss a zzzz'
  },
  LONG_TIME: {
    'Mdy': 'd/M/y, h:mm:ss a z',
    '_': 'h:mm:ss a z'
  },
  MEDIUM_TIME: {
    'Mdy': 'd/M/y, h:mm:ss a',
    '_': 'h:mm:ss a'
  },
  SHORT_TIME: {
    'Mdy': 'd/M/y, h:mm a',
    'hm': 'h:mm???h:mm a',
    '_': 'h:mm a'
  },
  FULL_DATETIME: {
    '_': 'EEEE, d MMMM y h:mm:ss a zzzz'
  },
  LONG_DATETIME: {
    '_': 'd MMMM y h:mm:ss a z'
  },
  MEDIUM_DATETIME: {
    '_': 'd MMM y, h:mm:ss a'
  },
  SHORT_DATETIME: {
    'a': 'd/M/yy, h:mm a ??? h:mm a',
    'hm': 'd/M/yy, h:mm???h:mm a',
    '_': 'd/M/yy, h:mm a'
  },
  FALLBACK: '{0} ??? {1}'
};

/** @const {!DateIntervalSymbols} */
exports.DateIntervalSymbols_pl = {
  FULL_DATE: {
    'M': 'EEEE, d MMMM ??? EEEE, d MMMM y',
    'd': 'EEEE, d ??? EEEE, d MMMM y',
    'y': 'EEEE, d MMMM y ??? EEEE, d MMMM y',
    '_': 'EEEE, d MMMM y'
  },
  LONG_DATE: {
    'M': 'd MMMM ??? d MMMM y',
    'd': 'd???d MMMM y',
    'y': 'd MMMM y ??? d MMMM y',
    '_': 'd MMMM y'
  },
  MEDIUM_DATE: {
    'M': 'd MMM???d MMM y',
    'd': 'd???d MMM y',
    '_': 'd MMM y'
  },
  SHORT_DATE: {
    'M': 'dd.MM???dd.MM.y',
    'd': 'dd???dd.MM.y',
    '_': 'dd.MM.y'
  },
  FULL_TIME: {
    'Mdy': 'd.MM.y, HH:mm:ss zzzz',
    '_': 'HH:mm:ss zzzz'
  },
  LONG_TIME: {
    'Mdy': 'd.MM.y, HH:mm:ss z',
    '_': 'HH:mm:ss z'
  },
  MEDIUM_TIME: {
    'Mdy': 'd.MM.y, HH:mm:ss',
    '_': 'HH:mm:ss'
  },
  SHORT_TIME: {
    'Mdy': 'd.MM.y, HH:mm',
    '_': 'HH:mm'
  },
  FULL_DATETIME: {
    '_': 'EEEE, d MMMM y HH:mm:ss zzzz'
  },
  LONG_DATETIME: {
    '_': 'd MMMM y HH:mm:ss z'
  },
  MEDIUM_DATETIME: {
    '_': 'd MMM y, HH:mm:ss'
  },
  SHORT_DATETIME: {
    'ahm': 'dd.MM.y, HH:mm???HH:mm',
    '_': 'dd.MM.y, HH:mm'
  },
  FALLBACK: '{0}???{1}'
};

/** @const {!DateIntervalSymbols} */
exports.DateIntervalSymbols_pt = {
  FULL_DATE: {
    'M': 'EEEE, d \'de\' MMMM ??? EEEE, d \'de\' MMMM \'de\' y',
    'd': 'EEEE, d ??? EEEE, d \'de\' MMMM \'de\' y',
    'y': 'EEEE, d \'de\' MMMM \'de\' y ??? EEEE, d \'de\' MMMM \'de\' y',
    '_': 'EEEE, d \'de\' MMMM \'de\' y'
  },
  LONG_DATE: {
    'M': 'd \'de\' MMMM ??? d \'de\' MMMM \'de\' y',
    'd': 'd ??? d \'de\' MMMM \'de\' y',
    'y': 'd \'de\' MMMM \'de\' y ??? d \'de\' MMMM \'de\' y',
    '_': 'd \'de\' MMMM \'de\' y'
  },
  MEDIUM_DATE: {
    'M': 'd \'de\' MMM ??? d \'de\' MMM \'de\' y',
    'd': 'd ??? d \'de\' MMM \'de\' y',
    'y': 'd \'de\' MMM \'de\' y ??? d \'de\' MMM \'de\' y',
    '_': 'd \'de\' MMM \'de\' y'
  },
  SHORT_DATE: {
    'Mdy': 'dd/MM/y ??? dd/MM/y',
    '_': 'dd/MM/y'
  },
  FULL_TIME: {
    'Mdy': 'dd/MM/y HH:mm:ss zzzz',
    '_': 'HH:mm:ss zzzz'
  },
  LONG_TIME: {
    'Mdy': 'dd/MM/y HH:mm:ss z',
    '_': 'HH:mm:ss z'
  },
  MEDIUM_TIME: {
    'Mdy': 'dd/MM/y HH:mm:ss',
    '_': 'HH:mm:ss'
  },
  SHORT_TIME: {
    'Mdy': 'dd/MM/y HH:mm',
    'ahm': 'HH:mm ??? HH:mm',
    '_': 'HH:mm'
  },
  FULL_DATETIME: {
    '_': 'EEEE, d \'de\' MMMM \'de\' y HH:mm:ss zzzz'
  },
  LONG_DATETIME: {
    '_': 'd \'de\' MMMM \'de\' y HH:mm:ss z'
  },
  MEDIUM_DATETIME: {
    '_': 'd \'de\' MMM \'de\' y HH:mm:ss'
  },
  SHORT_DATETIME: {
    'ahm': 'dd/MM/y HH:mm ??? HH:mm',
    '_': 'dd/MM/y HH:mm'
  },
  FALLBACK: '{0} - {1}'
};

/** @const {!DateIntervalSymbols} */
exports.DateIntervalSymbols_pt_BR = exports.DateIntervalSymbols_pt;

/** @const {!DateIntervalSymbols} */
exports.DateIntervalSymbols_pt_PT = {
  FULL_DATE: {
    'Md': 'EEEE, d \'de\' MMMM ??? EEEE, d \'de\' MMMM \'de\' y',
    'y': 'EEEE, d \'de\' MMMM \'de\' y ??? EEEE, d \'de\' MMMM \'de\' y',
    '_': 'EEEE, d \'de\' MMMM \'de\' y'
  },
  LONG_DATE: {
    'M': 'd \'de\' MMMM ??? d \'de\' MMMM \'de\' y',
    'd': 'd???d \'de\' MMMM \'de\' y',
    'y': 'd \'de\' MMMM \'de\' y ??? d \'de\' MMMM \'de\' y',
    '_': 'd \'de\' MMMM \'de\' y'
  },
  MEDIUM_DATE: {
    'Mdy': 'dd/MM/y ??? dd/MM/y',
    '_': 'dd/MM/y'
  },
  SHORT_DATE: {
    'Mdy': 'dd/MM/yy ??? dd/MM/yy',
    '_': 'dd/MM/yy'
  },
  FULL_TIME: {
    'Mdy': 'dd/MM/y, HH:mm:ss zzzz',
    '_': 'HH:mm:ss zzzz'
  },
  LONG_TIME: {
    'Mdy': 'dd/MM/y, HH:mm:ss z',
    '_': 'HH:mm:ss z'
  },
  MEDIUM_TIME: {
    'Mdy': 'dd/MM/y, HH:mm:ss',
    '_': 'HH:mm:ss'
  },
  SHORT_TIME: {
    'Mdy': 'dd/MM/y, HH:mm',
    'ahm': 'HH:mm ??? HH:mm',
    '_': 'HH:mm'
  },
  FULL_DATETIME: {
    '_': 'EEEE, d \'de\' MMMM \'de\' y \'??s\' HH:mm:ss zzzz'
  },
  LONG_DATETIME: {
    '_': 'd \'de\' MMMM \'de\' y \'??s\' HH:mm:ss z'
  },
  MEDIUM_DATETIME: {
    '_': 'dd/MM/y, HH:mm:ss'
  },
  SHORT_DATETIME: {
    'ahm': 'dd/MM/yy, HH:mm ??? HH:mm',
    '_': 'dd/MM/yy, HH:mm'
  },
  FALLBACK: '{0} - {1}'
};

/** @const {!DateIntervalSymbols} */
exports.DateIntervalSymbols_ro = {
  FULL_DATE: {
    'Md': 'EEEE, d MMMM ??? EEEE, d MMMM y',
    '_': 'EEEE, d MMMM y'
  },
  LONG_DATE: {
    'M': 'd MMMM ??? d MMMM y',
    'd': 'd???d MMMM y',
    '_': 'd MMMM y'
  },
  MEDIUM_DATE: {
    'M': 'd MMM ??? d MMM y',
    'd': 'd???d MMM y',
    '_': 'd MMM y'
  },
  SHORT_DATE: {
    '_': 'dd.MM.y'
  },
  FULL_TIME: {
    'Mdy': 'dd.MM.y, HH:mm:ss zzzz',
    '_': 'HH:mm:ss zzzz'
  },
  LONG_TIME: {
    'Mdy': 'dd.MM.y, HH:mm:ss z',
    '_': 'HH:mm:ss z'
  },
  MEDIUM_TIME: {
    'Mdy': 'dd.MM.y, HH:mm:ss',
    '_': 'HH:mm:ss'
  },
  SHORT_TIME: {
    'Mdy': 'dd.MM.y, HH:mm',
    'ahm': 'HH:mm???HH:mm',
    '_': 'HH:mm'
  },
  FULL_DATETIME: {
    '_': 'EEEE, d MMMM y, HH:mm:ss zzzz'
  },
  LONG_DATETIME: {
    '_': 'd MMMM y, HH:mm:ss z'
  },
  MEDIUM_DATETIME: {
    '_': 'd MMM y, HH:mm:ss'
  },
  SHORT_DATETIME: {
    'ahm': 'dd.MM.y, HH:mm???HH:mm',
    '_': 'dd.MM.y, HH:mm'
  },
  FALLBACK: '{0} ??? {1}'
};

/** @const {!DateIntervalSymbols} */
exports.DateIntervalSymbols_ru = {
  FULL_DATE: {
    'M': 'ccc, d MMMM ??? ccc, d MMMM y \'??\'.',
    'd': 'ccc, d ??? ccc, d MMMM y \'??\'.',
    'y': 'ccc, d MMMM y \'??\'. ??? ccc, d MMMM y \'??\'.',
    '_': 'EEEE, d MMMM y \'??\'.'
  },
  LONG_DATE: {
    'M': 'd MMMM ??? d MMMM y \'??\'.',
    'd': 'd???d MMMM y \'??\'.',
    '_': 'd MMMM y \'??\'.'
  },
  MEDIUM_DATE: {
    'M': 'd MMM ??? d MMM y \'??\'.',
    'd': 'd???d MMM y \'??\'.',
    '_': 'd MMM y \'??\'.'
  },
  SHORT_DATE: {
    '_': 'dd.MM.y'
  },
  FULL_TIME: {
    'Mdy': 'dd.MM.y, H:mm:ss zzzz',
    '_': 'H:mm:ss zzzz'
  },
  LONG_TIME: {
    'Mdy': 'dd.MM.y, H:mm:ss z',
    '_': 'H:mm:ss z'
  },
  MEDIUM_TIME: {
    'Mdy': 'dd.MM.y, H:mm:ss',
    '_': 'H:mm:ss'
  },
  SHORT_TIME: {
    'Mdy': 'dd.MM.y, H:mm',
    'ahm': 'H:mm???H:mm',
    '_': 'H:mm'
  },
  FULL_DATETIME: {
    '_': 'EEEE, d MMMM y \'??\'., H:mm:ss zzzz'
  },
  LONG_DATETIME: {
    '_': 'd MMMM y \'??\'., H:mm:ss z'
  },
  MEDIUM_DATETIME: {
    '_': 'd MMM y \'??\'., H:mm:ss'
  },
  SHORT_DATETIME: {
    'ahm': 'dd.MM.y, H:mm???H:mm',
    '_': 'dd.MM.y, H:mm'
  },
  FALLBACK: '{0} ??? {1}'
};

/** @const {!DateIntervalSymbols} */
exports.DateIntervalSymbols_sh = {
  FULL_DATE: {
    'M': 'EEEE, dd. MMMM ??? EEEE, dd. MMMM y.',
    'd': 'EEEE, dd. ??? EEEE, dd. MMMM y.',
    '_': 'EEEE, dd. MMMM y.'
  },
  LONG_DATE: {
    'M': 'dd. MMMM ??? dd. MMMM y.',
    'd': 'dd.???dd. MMMM y.',
    '_': 'dd. MMMM y.'
  },
  MEDIUM_DATE: {
    'Mdy': 'd.M.y. ??? d.M.y.',
    '_': 'dd.MM.y.'
  },
  SHORT_DATE: {
    '_': 'd.M.yy.'
  },
  FULL_TIME: {
    'Mdy': 'd.M.y. HH:mm:ss zzzz',
    '_': 'HH:mm:ss zzzz'
  },
  LONG_TIME: {
    'Mdy': 'd.M.y. HH:mm:ss z',
    '_': 'HH:mm:ss z'
  },
  MEDIUM_TIME: {
    'Mdy': 'd.M.y. HH:mm:ss',
    '_': 'HH:mm:ss'
  },
  SHORT_TIME: {
    'Mdy': 'd.M.y. HH:mm',
    'ahm': 'HH:mm???HH:mm',
    '_': 'HH:mm'
  },
  FULL_DATETIME: {
    '_': 'EEEE, dd. MMMM y. HH:mm:ss zzzz'
  },
  LONG_DATETIME: {
    '_': 'dd. MMMM y. HH:mm:ss z'
  },
  MEDIUM_DATETIME: {
    '_': 'dd.MM.y. HH:mm:ss'
  },
  SHORT_DATETIME: {
    'ahm': 'd.M.yy. HH:mm???HH:mm',
    '_': 'd.M.yy. HH:mm'
  },
  FALLBACK: '{0} ??? {1}'
};

/** @const {!DateIntervalSymbols} */
exports.DateIntervalSymbols_si = {
  FULL_DATE: {
    '_': 'y MMMM d, EEEE'
  },
  LONG_DATE: {
    'M': 'y MMMM d ??? MMMM d',
    'd': 'y MMMM d ??? d',
    '_': 'y MMMM d'
  },
  MEDIUM_DATE: {
    'M': 'y MMM d ??? MMM d',
    'd': 'y MMM d ??? d',
    '_': 'y MMM d'
  },
  SHORT_DATE: {
    'Mdy': 'y-M-d ??? y-M-d',
    '_': 'y-MM-dd'
  },
  FULL_TIME: {
    'Mdy': 'y-M-d HH.mm.ss zzzz',
    '_': 'HH.mm.ss zzzz'
  },
  LONG_TIME: {
    'Mdy': 'y-M-d HH.mm.ss z',
    '_': 'HH.mm.ss z'
  },
  MEDIUM_TIME: {
    'Mdy': 'y-M-d HH.mm.ss',
    '_': 'HH.mm.ss'
  },
  SHORT_TIME: {
    'Mdy': 'y-M-d HH.mm',
    'ahm': 'HH.mm???HH.mm',
    '_': 'HH.mm'
  },
  FULL_DATETIME: {
    '_': 'y MMMM d, EEEE HH.mm.ss zzzz'
  },
  LONG_DATETIME: {
    '_': 'y MMMM d HH.mm.ss z'
  },
  MEDIUM_DATETIME: {
    '_': 'y MMM d HH.mm.ss'
  },
  SHORT_DATETIME: {
    'ahm': 'y-MM-dd HH.mm???HH.mm',
    '_': 'y-MM-dd HH.mm'
  },
  FALLBACK: '{0} ??? {1}'
};

/** @const {!DateIntervalSymbols} */
exports.DateIntervalSymbols_sk = {
  FULL_DATE: {
    'M': 'EEEE d. M. ??? EEEE d. M. y',
    'd': 'EEEE d. ??? EEEE d. M. y',
    'y': 'EEEE d. M. y ??? EEEE d. M. y',
    '_': 'EEEE d. MMMM y'
  },
  LONG_DATE: {
    'M': 'd. M. ??? d. M. y',
    'd': 'd. ??? d. M. y',
    'y': 'd. M. y ??? d. M. y',
    '_': 'd. MMMM y'
  },
  MEDIUM_DATE: {
    '_': 'd. M. y'
  },
  SHORT_DATE: {
    '_': 'd. M. y'
  },
  FULL_TIME: {
    'Mdy': 'd. M. y, H:mm:ss zzzz',
    '_': 'H:mm:ss zzzz'
  },
  LONG_TIME: {
    'Mdy': 'd. M. y, H:mm:ss z',
    '_': 'H:mm:ss z'
  },
  MEDIUM_TIME: {
    'Mdy': 'd. M. y, H:mm:ss',
    '_': 'H:mm:ss'
  },
  SHORT_TIME: {
    'Mdy': 'd. M. y, H:mm',
    '_': 'H:mm'
  },
  FULL_DATETIME: {
    '_': 'EEEE d. MMMM y, H:mm:ss zzzz'
  },
  LONG_DATETIME: {
    '_': 'd. MMMM y, H:mm:ss z'
  },
  MEDIUM_DATETIME: {
    '_': 'd. M. y, H:mm:ss'
  },
  SHORT_DATETIME: {
    'ahm': 'd. M. y, H:mm ??? H:mm',
    '_': 'd. M. y H:mm'
  },
  FALLBACK: '{0} ??? {1}'
};

/** @const {!DateIntervalSymbols} */
exports.DateIntervalSymbols_sl = {
  FULL_DATE: {
    'Md': 'EEEE, d. MMMM???EEEE, d. MMMM y',
    'y': 'EEEE, d. MMMM y???EEEE, d. MMMM y',
    '_': 'EEEE, dd. MMMM y'
  },
  LONG_DATE: {
    'M': 'd. MMMM???d. MMMM y',
    'd': 'd.???d. MMMM y',
    'y': 'd. MMMM y???d. MMMM y',
    '_': 'dd. MMMM y'
  },
  MEDIUM_DATE: {
    'M': 'd. MMM???d. MMM y',
    'd': 'd.???d. MMM y',
    '_': 'd. MMM y'
  },
  SHORT_DATE: {
    'M': 'd. M.???d. M. yy',
    'dy': 'd. M. yy???d. M. yy',
    '_': 'd. MM. yy'
  },
  FULL_TIME: {
    'Mdy': 'd. M. y HH:mm:ss zzzz',
    '_': 'HH:mm:ss zzzz'
  },
  LONG_TIME: {
    'Mdy': 'd. M. y HH:mm:ss z',
    '_': 'HH:mm:ss z'
  },
  MEDIUM_TIME: {
    'Mdy': 'd. M. y HH:mm:ss',
    '_': 'HH:mm:ss'
  },
  SHORT_TIME: {
    'Mdy': 'd. M. y HH:mm',
    '_': 'HH:mm'
  },
  FULL_DATETIME: {
    '_': 'EEEE, dd. MMMM y HH:mm:ss zzzz'
  },
  LONG_DATETIME: {
    '_': 'dd. MMMM y HH:mm:ss z'
  },
  MEDIUM_DATETIME: {
    '_': 'd. MMM y HH:mm:ss'
  },
  SHORT_DATETIME: {
    'ahm': 'd. MM. yy HH:mm???HH:mm',
    '_': 'd. MM. yy HH:mm'
  },
  FALLBACK: '{0}???{1}'
};

/** @const {!DateIntervalSymbols} */
exports.DateIntervalSymbols_sq = {
  FULL_DATE: {
    'M': 'EEEE, d MMMM ??? EEEE, d MMMM y',
    'd': 'EEEE, d ??? EEEE, d MMMM y',
    'y': 'EEEE, d MMMM y ??? EEEE, d MMMM y',
    '_': 'EEEE, d MMMM y'
  },
  LONG_DATE: {
    'M': 'd MMMM ??? d MMMM y',
    'd': 'd ??? d MMMM y',
    'y': 'd MMMM y ??? d MMMM y',
    '_': 'd MMMM y'
  },
  MEDIUM_DATE: {
    'M': 'd MMM ??? d MMM y',
    'd': 'd ??? d MMM y',
    'y': 'd MMM y ??? d MMM y',
    '_': 'd MMM y'
  },
  SHORT_DATE: {
    'Mdy': 'd.M.yy ??? d.M.yy',
    '_': 'd.M.yy'
  },
  FULL_TIME: {
    'Mdy': 'd.M.y, h:mm:ss a, zzzz',
    '_': 'h:mm:ss a, zzzz'
  },
  LONG_TIME: {
    'Mdy': 'd.M.y, h:mm:ss a, z',
    '_': 'h:mm:ss a, z'
  },
  MEDIUM_TIME: {
    'Mdy': 'd.M.y, h:mm:ss a',
    '_': 'h:mm:ss a'
  },
  SHORT_TIME: {
    'Mdy': 'd.M.y, h:mm a',
    'a': 'h:mm a ??? h:mm a',
    'hm': 'h:mm ??? h:mm a',
    '_': 'h:mm a'
  },
  FULL_DATETIME: {
    '_': 'EEEE, d MMMM y \'n??\' h:mm:ss a, zzzz'
  },
  LONG_DATETIME: {
    '_': 'd MMMM y \'n??\' h:mm:ss a, z'
  },
  MEDIUM_DATETIME: {
    '_': 'd MMM y, h:mm:ss a'
  },
  SHORT_DATETIME: {
    'a': 'd.M.yy, h:mm a ??? h:mm a',
    'hm': 'd.M.yy, h:mm ??? h:mm a',
    '_': 'd.M.yy, h:mm a'
  },
  FALLBACK: '{0} - {1}'
};

/** @const {!DateIntervalSymbols} */
exports.DateIntervalSymbols_sr = {
  FULL_DATE: {
    'M': 'EEEE, dd. MMMM ??? EEEE, dd. MMMM y.',
    'd': 'EEEE, dd. ??? EEEE, dd. MMMM y.',
    '_': 'EEEE, dd. MMMM y.'
  },
  LONG_DATE: {
    'M': 'dd. MMMM ??? dd. MMMM y.',
    'd': 'dd.???dd. MMMM y.',
    '_': 'dd. MMMM y.'
  },
  MEDIUM_DATE: {
    'Mdy': 'd.M.y. ??? d.M.y.',
    '_': 'dd.MM.y.'
  },
  SHORT_DATE: {
    '_': 'd.M.yy.'
  },
  FULL_TIME: {
    'Mdy': 'd.M.y. HH:mm:ss zzzz',
    '_': 'HH:mm:ss zzzz'
  },
  LONG_TIME: {
    'Mdy': 'd.M.y. HH:mm:ss z',
    '_': 'HH:mm:ss z'
  },
  MEDIUM_TIME: {
    'Mdy': 'd.M.y. HH:mm:ss',
    '_': 'HH:mm:ss'
  },
  SHORT_TIME: {
    'Mdy': 'd.M.y. HH:mm',
    'ahm': 'HH:mm???HH:mm',
    '_': 'HH:mm'
  },
  FULL_DATETIME: {
    '_': 'EEEE, dd. MMMM y. HH:mm:ss zzzz'
  },
  LONG_DATETIME: {
    '_': 'dd. MMMM y. HH:mm:ss z'
  },
  MEDIUM_DATETIME: {
    '_': 'dd.MM.y. HH:mm:ss'
  },
  SHORT_DATETIME: {
    'ahm': 'd.M.yy. HH:mm???HH:mm',
    '_': 'd.M.yy. HH:mm'
  },
  FALLBACK: '{0} ??? {1}'
};

/** @const {!DateIntervalSymbols} */
exports.DateIntervalSymbols_sr_Latn = exports.DateIntervalSymbols_sr;

/** @const {!DateIntervalSymbols} */
exports.DateIntervalSymbols_sv = {
  FULL_DATE: {
    'Md': 'EEEE dd MMMM???EEEE dd MMMM y',
    'y': 'EEEE dd MMMM y???EEEE dd MMMM y',
    '_': 'EEEE d MMMM y'
  },
  LONG_DATE: {
    'M': 'd MMMM???d MMMM y',
    'd': 'd???d MMMM y',
    'y': 'd MMMM y???d MMMM y',
    '_': 'd MMMM y'
  },
  MEDIUM_DATE: {
    'M': 'd MMM???d MMM y',
    'd': 'd???d MMM y',
    'y': 'd MMM y???d MMM y',
    '_': 'd MMM y'
  },
  SHORT_DATE: {
    'M': 'y-MM-dd ??? MM-dd',
    'd': 'y-MM-dd ??? dd',
    '_': 'y-MM-dd'
  },
  FULL_TIME: {
    'Mdy': 'y-MM-dd \'kl\'. HH:mm:ss zzzz',
    '_': '\'kl\'. HH:mm:ss zzzz'
  },
  LONG_TIME: {
    'Mdy': 'y-MM-dd \'kl\'. HH:mm:ss z',
    '_': 'HH:mm:ss z'
  },
  MEDIUM_TIME: {
    'Mdy': 'y-MM-dd HH:mm:ss',
    '_': 'HH:mm:ss'
  },
  SHORT_TIME: {
    'Mdy': 'y-MM-dd HH:mm',
    'ahm': 'HH:mm???HH:mm',
    '_': 'HH:mm'
  },
  FULL_DATETIME: {
    '_': 'EEEE d MMMM y \'kl\'. HH:mm:ss zzzz'
  },
  LONG_DATETIME: {
    '_': 'd MMMM y HH:mm:ss z'
  },
  MEDIUM_DATETIME: {
    '_': 'd MMM y HH:mm:ss'
  },
  SHORT_DATETIME: {
    'ahm': 'y-MM-dd HH:mm???HH:mm',
    '_': 'y-MM-dd HH:mm'
  },
  FALLBACK: '{0} ??? {1}'
};

/** @const {!DateIntervalSymbols} */
exports.DateIntervalSymbols_sw = {
  FULL_DATE: {
    'M': 'EEEE, MMMM d??? EEEE, MMMM d y',
    'd': 'EEEE, MMMM d ??? EEEE, MMMM d y',
    'y': 'EEEE, MMMM d y ??? EEEE, MMMM d y',
    '_': 'EEEE, d MMMM y'
  },
  LONG_DATE: {
    'Md': 'MMMM d ??? d, y',
    'y': 'MMMM d y ??? MMMM d y',
    '_': 'd MMMM y'
  },
  MEDIUM_DATE: {
    'Md': 'MMM d ??? d, y',
    'y': 'MMM d y ??? MMM d y',
    '_': 'd MMM y'
  },
  SHORT_DATE: {
    'Mdy': 'd/M/y ??? d/M/y',
    '_': 'dd/MM/y'
  },
  FULL_TIME: {
    'Mdy': 'd/M/y HH:mm:ss zzzz',
    '_': 'HH:mm:ss zzzz'
  },
  LONG_TIME: {
    'Mdy': 'd/M/y HH:mm:ss z',
    '_': 'HH:mm:ss z'
  },
  MEDIUM_TIME: {
    'Mdy': 'd/M/y HH:mm:ss',
    '_': 'HH:mm:ss'
  },
  SHORT_TIME: {
    'Mdy': 'd/M/y HH:mm',
    '_': 'HH:mm'
  },
  FULL_DATETIME: {
    '_': 'EEEE, d MMMM y HH:mm:ss zzzz'
  },
  LONG_DATETIME: {
    '_': 'd MMMM y HH:mm:ss z'
  },
  MEDIUM_DATETIME: {
    '_': 'd MMM y HH:mm:ss'
  },
  SHORT_DATETIME: {
    'ahm': 'dd/MM/y HH:mm ??? HH:mm',
    '_': 'dd/MM/y HH:mm'
  },
  FALLBACK: '{0} ??? {1}'
};

/** @const {!DateIntervalSymbols} */
exports.DateIntervalSymbols_ta = {
  FULL_DATE: {
    'Md': 'EEEE, d MMMM ??? EEEE, d MMMM, y',
    '_': 'EEEE, d MMMM, y'
  },
  LONG_DATE: {
    'M': 'd MMMM ??? d MMMM, y',
    'd': 'd ??? d MMMM, y',
    '_': 'd MMMM, y'
  },
  MEDIUM_DATE: {
    'M': 'd MMM ??? d MMM, y',
    'd': 'd ??? d MMM, y',
    '_': 'd MMM, y'
  },
  SHORT_DATE: {
    '_': 'd/M/yy'
  },
  FULL_TIME: {
    'Mdy': 'd/M/y, a h:mm:ss zzzz',
    '_': 'a h:mm:ss zzzz'
  },
  LONG_TIME: {
    'Mdy': 'd/M/y, a h:mm:ss z',
    '_': 'a h:mm:ss z'
  },
  MEDIUM_TIME: {
    'Mdy': 'd/M/y, a h:mm:ss',
    '_': 'a h:mm:ss'
  },
  SHORT_TIME: {
    'Mdy': 'd/M/y, a h:mm',
    'hm': 'a h:mm???h:mm',
    '_': 'a h:mm'
  },
  FULL_DATETIME: {
    '_': 'EEEE, d MMMM, y ????????????????????? a h:mm:ss zzzz'
  },
  LONG_DATETIME: {
    '_': 'd MMMM, y ????????????????????? a h:mm:ss z'
  },
  MEDIUM_DATETIME: {
    '_': 'd MMM, y, a h:mm:ss'
  },
  SHORT_DATETIME: {
    'a': 'd/M/yy, a h:mm ??? a h:mm',
    'hm': 'd/M/yy, a h:mm???h:mm',
    '_': 'd/M/yy, a h:mm'
  },
  FALLBACK: '{0} ??? {1}'
};

/** @const {!DateIntervalSymbols} */
exports.DateIntervalSymbols_te = {
  FULL_DATE: {
    'Md': 'd MMMM, EEEE ??? d MMMM, y, EEEE',
    'y': 'd MMMM, y, EEEE ??? d MMMM, y, EEEE',
    '_': 'd, MMMM y, EEEE'
  },
  LONG_DATE: {
    'M': 'd MMMM ??? d MMMM, y',
    'd': 'd???d MMMM, y',
    '_': 'd MMMM, y'
  },
  MEDIUM_DATE: {
    'M': 'd MMM ??? d MMM, y',
    'd': 'd???d MMM, y',
    '_': 'd MMM, y'
  },
  SHORT_DATE: {
    'Mdy': 'd/M/yy ??? d/M/yy',
    '_': 'dd-MM-yy'
  },
  FULL_TIME: {
    'Mdy': 'd/M/y h:mm:ss a zzzz',
    '_': 'h:mm:ss a zzzz'
  },
  LONG_TIME: {
    'Mdy': 'd/M/y h:mm:ss a z',
    '_': 'h:mm:ss a z'
  },
  MEDIUM_TIME: {
    'Mdy': 'd/M/y h:mm:ss a',
    '_': 'h:mm:ss a'
  },
  SHORT_TIME: {
    'Mdy': 'd/M/y h:mm a',
    'hm': 'h:mm???h:mm a',
    '_': 'h:mm a'
  },
  FULL_DATETIME: {
    '_': 'd, MMMM y, EEEE h:mm:ss a zzzz??????'
  },
  LONG_DATETIME: {
    '_': 'd MMMM, y h:mm:ss a z??????'
  },
  MEDIUM_DATETIME: {
    '_': 'd MMM, y h:mm:ss a'
  },
  SHORT_DATETIME: {
    'a': 'dd-MM-yy h:mm a ??? h:mm a',
    'hm': 'dd-MM-yy h:mm???h:mm a',
    '_': 'dd-MM-yy h:mm a'
  },
  FALLBACK: '{0} ??? {1}'
};

/** @const {!DateIntervalSymbols} */
exports.DateIntervalSymbols_th = {
  FULL_DATE: {
    '_': 'EEEE????????? d MMMM G y'
  },
  LONG_DATE: {
    '_': 'd MMMM G y'
  },
  MEDIUM_DATE: {
    'M': 'd MMM ??? d MMM y',
    'd': 'd???d MMM y',
    '_': 'd MMM y'
  },
  SHORT_DATE: {
    '_': 'd/M/yy'
  },
  FULL_TIME: {
    'Mdy': 'd/M/y H ?????????????????? mm ???????????? ss ?????????????????? zzzz',
    '_': 'H ?????????????????? mm ???????????? ss ?????????????????? zzzz'
  },
  LONG_TIME: {
    'Mdy': 'd/M/y H ?????????????????? mm ???????????? ss ?????????????????? z',
    '_': 'H ?????????????????? mm ???????????? ss ?????????????????? z'
  },
  MEDIUM_TIME: {
    'Mdy': 'd/M/y HH:mm:ss',
    '_': 'HH:mm:ss'
  },
  SHORT_TIME: {
    'Mdy': 'd/M/y HH:mm',
    'ahm': 'HH:mm ???. ??? HH:mm ???.',
    '_': 'HH:mm'
  },
  FULL_DATETIME: {
    '_': 'EEEE????????? d MMMM G y H ?????????????????? mm ???????????? ss ?????????????????? zzzz'
  },
  LONG_DATETIME: {
    '_': 'd MMMM G y H ?????????????????? mm ???????????? ss ?????????????????? z'
  },
  MEDIUM_DATETIME: {
    '_': 'd MMM y HH:mm:ss'
  },
  SHORT_DATETIME: {
    'ahm': 'd/M/yy HH:mm ???. ??? HH:mm ???.',
    '_': 'd/M/yy HH:mm'
  },
  FALLBACK: '{0} ??? {1}'
};

/** @const {!DateIntervalSymbols} */
exports.DateIntervalSymbols_tl = {
  FULL_DATE: {
    'Md': 'EEEE, MMMM d ??? EEEE, MMMM d, y',
    '_': 'EEEE, MMMM d, y'
  },
  LONG_DATE: {
    'M': 'MMMM d ??? MMMM d, y',
    'd': 'MMMM d???d, y',
    '_': 'MMMM d, y'
  },
  MEDIUM_DATE: {
    'M': 'MMM d ??? MMM d, y',
    'd': 'MMM d???d, y',
    '_': 'MMM d, y'
  },
  SHORT_DATE: {
    '_': 'M/d/yy'
  },
  FULL_TIME: {
    'Mdy': 'M/d/y, h:mm:ss a zzzz',
    '_': 'h:mm:ss a zzzz'
  },
  LONG_TIME: {
    'Mdy': 'M/d/y, h:mm:ss a z',
    '_': 'h:mm:ss a z'
  },
  MEDIUM_TIME: {
    'Mdy': 'M/d/y, h:mm:ss a',
    '_': 'h:mm:ss a'
  },
  SHORT_TIME: {
    'Mdy': 'M/d/y, h:mm a',
    'hm': 'h:mm???h:mm a',
    '_': 'h:mm a'
  },
  FULL_DATETIME: {
    '_': 'EEEE, MMMM d, y \'nang\' h:mm:ss a zzzz'
  },
  LONG_DATETIME: {
    '_': 'MMMM d, y \'nang\' h:mm:ss a z'
  },
  MEDIUM_DATETIME: {
    '_': 'MMM d, y, h:mm:ss a'
  },
  SHORT_DATETIME: {
    'a': 'M/d/yy, h:mm a ??? h:mm a',
    'hm': 'M/d/yy, h:mm???h:mm a',
    '_': 'M/d/yy, h:mm a'
  },
  FALLBACK: '{0} ??? {1}'
};

/** @const {!DateIntervalSymbols} */
exports.DateIntervalSymbols_tr = {
  FULL_DATE: {
    '_': 'd MMMM y EEEE'
  },
  LONG_DATE: {
    'M': 'd MMMM ??? d MMMM y',
    'd': 'd???d MMMM y',
    '_': 'd MMMM y'
  },
  MEDIUM_DATE: {
    'M': 'd MMM ??? d MMM y',
    'd': 'd???d MMM y',
    '_': 'd MMM y'
  },
  SHORT_DATE: {
    'Mdy': 'dd.MM.y ??? dd.MM.y',
    '_': 'd.MM.y'
  },
  FULL_TIME: {
    'Mdy': 'dd.MM.y HH:mm:ss zzzz',
    '_': 'HH:mm:ss zzzz'
  },
  LONG_TIME: {
    'Mdy': 'dd.MM.y HH:mm:ss z',
    '_': 'HH:mm:ss z'
  },
  MEDIUM_TIME: {
    'Mdy': 'dd.MM.y HH:mm:ss',
    '_': 'HH:mm:ss'
  },
  SHORT_TIME: {
    'Mdy': 'dd.MM.y HH:mm',
    'ahm': 'HH:mm???HH:mm',
    '_': 'HH:mm'
  },
  FULL_DATETIME: {
    '_': 'd MMMM y EEEE HH:mm:ss zzzz'
  },
  LONG_DATETIME: {
    '_': 'd MMMM y HH:mm:ss z'
  },
  MEDIUM_DATETIME: {
    '_': 'd MMM y HH:mm:ss'
  },
  SHORT_DATETIME: {
    'ahm': 'd.MM.y HH:mm???HH:mm',
    '_': 'd.MM.y HH:mm'
  },
  FALLBACK: '{0} ??? {1}'
};

/** @const {!DateIntervalSymbols} */
exports.DateIntervalSymbols_uk = {
  FULL_DATE: {
    'M': 'EEEE, d MMMM ??? EEEE, d MMMM y',
    'd': 'EEEE, d ??? EEEE, d MMMM y',
    'y': 'EEEE, d MMMM y ??? EEEE, d MMMM y',
    '_': 'EEEE, d MMMM y \'??\'.'
  },
  LONG_DATE: {
    'M': 'd MMMM ??? d MMMM y',
    'd': 'd???d MMMM y',
    'y': 'd MMMM y ??? d MMMM y',
    '_': 'd MMMM y \'??\'.'
  },
  MEDIUM_DATE: {
    'M': 'd MMM ??? d MMM y',
    'd': 'd???d MMM y',
    'y': 'd MMM y ??? d MMM y',
    '_': 'd MMM y \'??\'.'
  },
  SHORT_DATE: {
    '_': 'dd.MM.yy'
  },
  FULL_TIME: {
    'Mdy': 'dd.MM.y, HH:mm:ss zzzz',
    '_': 'HH:mm:ss zzzz'
  },
  LONG_TIME: {
    'Mdy': 'dd.MM.y, HH:mm:ss z',
    '_': 'HH:mm:ss z'
  },
  MEDIUM_TIME: {
    'Mdy': 'dd.MM.y, HH:mm:ss',
    '_': 'HH:mm:ss'
  },
  SHORT_TIME: {
    'Mdy': 'dd.MM.y, HH:mm',
    'ahm': 'HH:mm???HH:mm',
    '_': 'HH:mm'
  },
  FULL_DATETIME: {
    '_': 'EEEE, d MMMM y \'??\'. \'??\' HH:mm:ss zzzz'
  },
  LONG_DATETIME: {
    '_': 'd MMMM y \'??\'. \'??\' HH:mm:ss z'
  },
  MEDIUM_DATETIME: {
    '_': 'd MMM y \'??\'., HH:mm:ss'
  },
  SHORT_DATETIME: {
    'ahm': 'dd.MM.yy, HH:mm???HH:mm',
    '_': 'dd.MM.yy, HH:mm'
  },
  FALLBACK: '{0} ??? {1}'
};

/** @const {!DateIntervalSymbols} */
exports.DateIntervalSymbols_ur = {
  FULL_DATE: {
    'Md': 'EEEE?? d MMMM ??? EEEE?? d MMMM?? y',
    '_': 'EEEE?? d MMMM?? y'
  },
  LONG_DATE: {
    'M': 'd MMMM ??? d MMMM?? y',
    'd': 'd???d MMMM y',
    '_': 'd MMMM?? y'
  },
  MEDIUM_DATE: {
    'M': 'd MMM ??? d MMM?? y',
    'd': 'd???d MMM y',
    '_': 'd MMM?? y'
  },
  SHORT_DATE: {
    '_': 'd/M/yy'
  },
  FULL_TIME: {
    'Mdy': 'd/M/y h:mm:ss a zzzz',
    '_': 'h:mm:ss a zzzz'
  },
  LONG_TIME: {
    'Mdy': 'd/M/y h:mm:ss a z',
    '_': 'h:mm:ss a z'
  },
  MEDIUM_TIME: {
    'Mdy': 'd/M/y h:mm:ss a',
    '_': 'h:mm:ss a'
  },
  SHORT_TIME: {
    'Mdy': 'd/M/y h:mm a',
    'hm': 'h:mm???h:mm a',
    '_': 'h:mm a'
  },
  FULL_DATETIME: {
    '_': 'EEEE?? d MMMM?? y h:mm:ss a zzzz'
  },
  LONG_DATETIME: {
    '_': 'd MMMM?? y h:mm:ss a z'
  },
  MEDIUM_DATETIME: {
    '_': 'd MMM?? y h:mm:ss a'
  },
  SHORT_DATETIME: {
    'a': 'd/M/yy h:mm a ??? h:mm a',
    'hm': 'd/M/yy h:mm???h:mm a',
    '_': 'd/M/yy h:mm a'
  },
  FALLBACK: '{0} ??? {1}'
};

/** @const {!DateIntervalSymbols} */
exports.DateIntervalSymbols_uz = {
  FULL_DATE: {
    'Md': 'EEEE, d-MMMM ??? EEEE, d-MMMM, y',
    '_': 'EEEE, d-MMMM, y'
  },
  LONG_DATE: {
    'M': 'd-MMMM ??? d-MMMM, y',
    'd': 'd ??? d-MMMM, y',
    '_': 'd-MMMM, y'
  },
  MEDIUM_DATE: {
    'M': 'd-MMM ??? d-MMM, y',
    'd': 'd ??? d-MMM, y',
    '_': 'd-MMM, y'
  },
  SHORT_DATE: {
    '_': 'dd/MM/yy'
  },
  FULL_TIME: {
    'Mdy': 'dd/MM/y, H:mm:ss (zzzz)',
    '_': 'H:mm:ss (zzzz)'
  },
  LONG_TIME: {
    'Mdy': 'dd/MM/y, H:mm:ss (z)',
    '_': 'H:mm:ss (z)'
  },
  MEDIUM_TIME: {
    'Mdy': 'dd/MM/y, HH:mm:ss',
    '_': 'HH:mm:ss'
  },
  SHORT_TIME: {
    'Mdy': 'dd/MM/y, HH:mm',
    'ahm': 'HH:mm???HH:mm',
    '_': 'HH:mm'
  },
  FULL_DATETIME: {
    '_': 'EEEE, d-MMMM, y, H:mm:ss (zzzz)'
  },
  LONG_DATETIME: {
    '_': 'd-MMMM, y, H:mm:ss (z)'
  },
  MEDIUM_DATETIME: {
    '_': 'd-MMM, y, HH:mm:ss'
  },
  SHORT_DATETIME: {
    'ahm': 'dd/MM/yy, HH:mm???HH:mm',
    '_': 'dd/MM/yy, HH:mm'
  },
  FALLBACK: '{0} ??? {1}'
};

/** @const {!DateIntervalSymbols} */
exports.DateIntervalSymbols_vi = {
  FULL_DATE: {
    'M': 'EEEE, dd \'th??ng\' M ??? EEEE, dd \'th??ng\' M, y',
    'd': 'EEEE, \'ng??y\' dd MMMM ??? EEEE, \'ng??y\' dd MMMM \'n??m\' y',
    'y': 'EEEE, dd \'th??ng\' M, y ??? EEEE, dd \'th??ng\' M, y',
    '_': 'EEEE, d MMMM, y'
  },
  LONG_DATE: {
    'M': 'd MMMM ??? d MMMM, y',
    'd': 'd ??? d MMMM, y',
    'y': '\'Ng??y\' dd \'th??ng\' M \'n??m\' y - \'Ng??y\' dd \'th??ng\' M \'n??m\' y',
    '_': 'd MMMM, y'
  },
  MEDIUM_DATE: {
    'M': 'd MMM ??? d MMM, y',
    'd': 'd ??? d MMM, y',
    'y': '\'Ng??y\' dd \'th??ng\' M \'n??m\' y - \'Ng??y\' dd \'th??ng\' M \'n??m\' y',
    '_': 'd MMM, y'
  },
  SHORT_DATE: {
    'Mdy': 'dd/MM/y ??? dd/MM/y',
    '_': 'dd/MM/y'
  },
  FULL_TIME: {
    'Mdy': 'HH:mm:ss zzzz, d/M/y',
    '_': 'HH:mm:ss zzzz'
  },
  LONG_TIME: {
    'Mdy': 'HH:mm:ss z, d/M/y',
    '_': 'HH:mm:ss z'
  },
  MEDIUM_TIME: {
    'Mdy': 'HH:mm:ss, d/M/y',
    '_': 'HH:mm:ss'
  },
  SHORT_TIME: {
    'Mdy': 'HH:mm, d/M/y',
    'ahm': 'HH:mm???HH:mm',
    '_': 'HH:mm'
  },
  FULL_DATETIME: {
    '_': 'HH:mm:ss zzzz EEEE, d MMMM, y'
  },
  LONG_DATETIME: {
    '_': 'HH:mm:ss z d MMMM, y'
  },
  MEDIUM_DATETIME: {
    '_': 'HH:mm:ss, d MMM, y'
  },
  SHORT_DATETIME: {
    'ahm': 'HH:mm???HH:mm, dd/MM/y',
    '_': 'HH:mm, dd/MM/y'
  },
  FALLBACK: '{0} - {1}'
};

/** @const {!DateIntervalSymbols} */
exports.DateIntervalSymbols_zh = {
  FULL_DATE: {
    'Mdy': 'y/M/dEEEE???y/M/dEEEE',
    '_': 'y???M???d???EEEE'
  },
  LONG_DATE: {
    'Mdy': 'y/M/d ??? y/M/d',
    '_': 'y???M???d???'
  },
  MEDIUM_DATE: {
    'Mdy': 'y/M/d ??? y/M/d',
    '_': 'y???M???d???'
  },
  SHORT_DATE: {
    '_': 'y/M/d'
  },
  FULL_TIME: {
    'Mdy': 'y/M/d zzzz ah:mm:ss',
    '_': 'zzzz ah:mm:ss'
  },
  LONG_TIME: {
    'Mdy': 'y/M/d z ah:mm:ss',
    '_': 'z ah:mm:ss'
  },
  MEDIUM_TIME: {
    'Mdy': 'y/M/d ah:mm:ss',
    '_': 'ah:mm:ss'
  },
  SHORT_TIME: {
    'Mdy': 'y/M/d ah:mm',
    'a': 'ah:mm???ah:mm',
    'hm': 'ah:mm???h:mm',
    '_': 'ah:mm'
  },
  FULL_DATETIME: {
    '_': 'y???M???d???EEEE zzzz ah:mm:ss'
  },
  LONG_DATETIME: {
    '_': 'y???M???d??? z ah:mm:ss'
  },
  MEDIUM_DATETIME: {
    '_': 'y???M???d??? ah:mm:ss'
  },
  SHORT_DATETIME: {
    'a': 'y/M/d ah:mm???ah:mm',
    'hm': 'y/M/d ah:mm???h:mm',
    '_': 'y/M/d ah:mm'
  },
  FALLBACK: '{0} ??? {1}'
};

/** @const {!DateIntervalSymbols} */
exports.DateIntervalSymbols_zh_CN = exports.DateIntervalSymbols_zh;

/** @const {!DateIntervalSymbols} */
exports.DateIntervalSymbols_zh_HK = {
  FULL_DATE: {
    'Mdy': 'd/M/y???EEEE??? ??? d/M/y???EEEE???',
    '_': 'y???M???d???EEEE'
  },
  LONG_DATE: {
    'Mdy': 'd/M/y ??? d/M/y',
    '_': 'y???M???d???'
  },
  MEDIUM_DATE: {
    'Mdy': 'd/M/y ??? d/M/y',
    '_': 'y???M???d???'
  },
  SHORT_DATE: {
    'Mdy': 'd/M/y ??? d/M/y',
    '_': 'd/M/y'
  },
  FULL_TIME: {
    'Mdy': 'd/M/y ah:mm:ss [zzzz]',
    '_': 'ah:mm:ss [zzzz]'
  },
  LONG_TIME: {
    'Mdy': 'd/M/y ah:mm:ss [z]',
    '_': 'ah:mm:ss [z]'
  },
  MEDIUM_TIME: {
    'Mdy': 'd/M/y ah:mm:ss',
    '_': 'ah:mm:ss'
  },
  SHORT_TIME: {
    'Mdy': 'd/M/y ah:mm',
    'a': 'ah:mm???ah:mm',
    'hm': 'ah:mm???h:mm',
    '_': 'ah:mm'
  },
  FULL_DATETIME: {
    '_': 'y???M???d???EEEE ah:mm:ss [zzzz]'
  },
  LONG_DATETIME: {
    '_': 'y???M???d??? ah:mm:ss [z]'
  },
  MEDIUM_DATETIME: {
    '_': 'y???M???d??? ah:mm:ss'
  },
  SHORT_DATETIME: {
    'a': 'd/M/y ah:mm???ah:mm',
    'hm': 'd/M/y ah:mm???h:mm',
    '_': 'd/M/y ah:mm'
  },
  FALLBACK: '{0} ??? {1}'
};

/** @const {!DateIntervalSymbols} */
exports.DateIntervalSymbols_zh_TW = {
  FULL_DATE: {
    'Mdy': 'y/M/dEEEE???y/M/dEEEE',
    '_': 'y???M???d??? EEEE'
  },
  LONG_DATE: {
    'Mdy': 'y/M/d???y/M/d',
    '_': 'y???M???d???'
  },
  MEDIUM_DATE: {
    'Mdy': 'y/M/d???y/M/d',
    '_': 'y???M???d???'
  },
  SHORT_DATE: {
    'Mdy': 'y/M/d???y/M/d',
    '_': 'y/M/d'
  },
  FULL_TIME: {
    'Mdy': 'y/M/d ah:mm:ss [zzzz]',
    '_': 'ah:mm:ss [zzzz]'
  },
  LONG_TIME: {
    'Mdy': 'y/M/d ah:mm:ss [z]',
    '_': 'ah:mm:ss [z]'
  },
  MEDIUM_TIME: {
    'Mdy': 'y/M/d ah:mm:ss',
    '_': 'ah:mm:ss'
  },
  SHORT_TIME: {
    'Mdy': 'y/M/d ah:mm',
    'a': 'ah:mm???ah:mm',
    'hm': 'ah:mm???h:mm',
    '_': 'ah:mm'
  },
  FULL_DATETIME: {
    '_': 'y???M???d??? EEEE ah:mm:ss [zzzz]'
  },
  LONG_DATETIME: {
    '_': 'y???M???d??? ah:mm:ss [z]'
  },
  MEDIUM_DATETIME: {
    '_': 'y???M???d??? ah:mm:ss'
  },
  SHORT_DATETIME: {
    'a': 'y/M/d ah:mm???ah:mm',
    'hm': 'y/M/d ah:mm???h:mm',
    '_': 'y/M/d ah:mm'
  },
  FALLBACK: '{0} ??? {1}'
};

/** @const {!DateIntervalSymbols} */
exports.DateIntervalSymbols_zu = {
  FULL_DATE: {
    'Md': 'EEEE, MMMM d ??? EEEE, MMMM d, y',
    '_': 'EEEE, MMMM d, y'
  },
  LONG_DATE: {
    'M': 'MMMM d ??? MMMM d, y',
    'd': 'MMMM d ??? d, y',
    '_': 'MMMM d, y'
  },
  MEDIUM_DATE: {
    'M': 'MMM d ??? MMM d, y',
    'd': 'MMM d ??? d, y',
    '_': 'MMM d, y'
  },
  SHORT_DATE: {
    '_': 'M/d/yy'
  },
  FULL_TIME: {
    'Mdy': 'y-MM-dd HH:mm:ss zzzz',
    '_': 'HH:mm:ss zzzz'
  },
  LONG_TIME: {
    'Mdy': 'y-MM-dd HH:mm:ss z',
    '_': 'HH:mm:ss z'
  },
  MEDIUM_TIME: {
    'Mdy': 'y-MM-dd HH:mm:ss',
    '_': 'HH:mm:ss'
  },
  SHORT_TIME: {
    'Mdy': 'y-MM-dd HH:mm',
    '_': 'HH:mm'
  },
  FULL_DATETIME: {
    '_': 'EEEE, MMMM d, y HH:mm:ss zzzz'
  },
  LONG_DATETIME: {
    '_': 'MMMM d, y HH:mm:ss z'
  },
  MEDIUM_DATETIME: {
    '_': 'MMM d, y HH:mm:ss'
  },
  SHORT_DATETIME: {
    'ahm': 'M/d/yy HH:mm ??? HH:mm',
    '_': 'M/d/yy HH:mm'
  },
  FALLBACK: '{0} ??? {1}'
};

switch (goog.LOCALE) {
  case 'af':
    defaultSymbols = exports.DateIntervalSymbols_af;
    break;
  case 'am':
    defaultSymbols = exports.DateIntervalSymbols_am;
    break;
  case 'ar':
    defaultSymbols = exports.DateIntervalSymbols_ar;
    break;
  case 'ar_DZ':
  case 'ar-DZ':
    defaultSymbols = exports.DateIntervalSymbols_ar_DZ;
    break;
  case 'ar_EG':
  case 'ar-EG':
    defaultSymbols = exports.DateIntervalSymbols_ar_EG;
    break;
  case 'az':
    defaultSymbols = exports.DateIntervalSymbols_az;
    break;
  case 'be':
    defaultSymbols = exports.DateIntervalSymbols_be;
    break;
  case 'bg':
    defaultSymbols = exports.DateIntervalSymbols_bg;
    break;
  case 'bn':
    defaultSymbols = exports.DateIntervalSymbols_bn;
    break;
  case 'br':
    defaultSymbols = exports.DateIntervalSymbols_br;
    break;
  case 'bs':
    defaultSymbols = exports.DateIntervalSymbols_bs;
    break;
  case 'ca':
    defaultSymbols = exports.DateIntervalSymbols_ca;
    break;
  case 'chr':
    defaultSymbols = exports.DateIntervalSymbols_chr;
    break;
  case 'cs':
    defaultSymbols = exports.DateIntervalSymbols_cs;
    break;
  case 'cy':
    defaultSymbols = exports.DateIntervalSymbols_cy;
    break;
  case 'da':
    defaultSymbols = exports.DateIntervalSymbols_da;
    break;
  case 'de':
    defaultSymbols = exports.DateIntervalSymbols_de;
    break;
  case 'de_AT':
  case 'de-AT':
    defaultSymbols = exports.DateIntervalSymbols_de_AT;
    break;
  case 'de_CH':
  case 'de-CH':
    defaultSymbols = exports.DateIntervalSymbols_de_CH;
    break;
  case 'el':
    defaultSymbols = exports.DateIntervalSymbols_el;
    break;
  case 'en':
    defaultSymbols = exports.DateIntervalSymbols_en;
    break;
  case 'en_AU':
  case 'en-AU':
    defaultSymbols = exports.DateIntervalSymbols_en_AU;
    break;
  case 'en_CA':
  case 'en-CA':
    defaultSymbols = exports.DateIntervalSymbols_en_CA;
    break;
  case 'en_GB':
  case 'en-GB':
    defaultSymbols = exports.DateIntervalSymbols_en_GB;
    break;
  case 'en_IE':
  case 'en-IE':
    defaultSymbols = exports.DateIntervalSymbols_en_IE;
    break;
  case 'en_IN':
  case 'en-IN':
    defaultSymbols = exports.DateIntervalSymbols_en_IN;
    break;
  case 'en_SG':
  case 'en-SG':
    defaultSymbols = exports.DateIntervalSymbols_en_SG;
    break;
  case 'en_US':
  case 'en-US':
    defaultSymbols = exports.DateIntervalSymbols_en_US;
    break;
  case 'en_ZA':
  case 'en-ZA':
    defaultSymbols = exports.DateIntervalSymbols_en_ZA;
    break;
  case 'es':
    defaultSymbols = exports.DateIntervalSymbols_es;
    break;
  case 'es_419':
  case 'es-419':
    defaultSymbols = exports.DateIntervalSymbols_es_419;
    break;
  case 'es_ES':
  case 'es-ES':
    defaultSymbols = exports.DateIntervalSymbols_es_ES;
    break;
  case 'es_MX':
  case 'es-MX':
    defaultSymbols = exports.DateIntervalSymbols_es_MX;
    break;
  case 'es_US':
  case 'es-US':
    defaultSymbols = exports.DateIntervalSymbols_es_US;
    break;
  case 'et':
    defaultSymbols = exports.DateIntervalSymbols_et;
    break;
  case 'eu':
    defaultSymbols = exports.DateIntervalSymbols_eu;
    break;
  case 'fa':
    defaultSymbols = exports.DateIntervalSymbols_fa;
    break;
  case 'fi':
    defaultSymbols = exports.DateIntervalSymbols_fi;
    break;
  case 'fil':
    defaultSymbols = exports.DateIntervalSymbols_fil;
    break;
  case 'fr':
    defaultSymbols = exports.DateIntervalSymbols_fr;
    break;
  case 'fr_CA':
  case 'fr-CA':
    defaultSymbols = exports.DateIntervalSymbols_fr_CA;
    break;
  case 'ga':
    defaultSymbols = exports.DateIntervalSymbols_ga;
    break;
  case 'gl':
    defaultSymbols = exports.DateIntervalSymbols_gl;
    break;
  case 'gsw':
    defaultSymbols = exports.DateIntervalSymbols_gsw;
    break;
  case 'gu':
    defaultSymbols = exports.DateIntervalSymbols_gu;
    break;
  case 'haw':
    defaultSymbols = exports.DateIntervalSymbols_haw;
    break;
  case 'he':
    defaultSymbols = exports.DateIntervalSymbols_he;
    break;
  case 'hi':
    defaultSymbols = exports.DateIntervalSymbols_hi;
    break;
  case 'hr':
    defaultSymbols = exports.DateIntervalSymbols_hr;
    break;
  case 'hu':
    defaultSymbols = exports.DateIntervalSymbols_hu;
    break;
  case 'hy':
    defaultSymbols = exports.DateIntervalSymbols_hy;
    break;
  case 'id':
    defaultSymbols = exports.DateIntervalSymbols_id;
    break;
  case 'in':
    defaultSymbols = exports.DateIntervalSymbols_in;
    break;
  case 'is':
    defaultSymbols = exports.DateIntervalSymbols_is;
    break;
  case 'it':
    defaultSymbols = exports.DateIntervalSymbols_it;
    break;
  case 'iw':
    defaultSymbols = exports.DateIntervalSymbols_iw;
    break;
  case 'ja':
    defaultSymbols = exports.DateIntervalSymbols_ja;
    break;
  case 'ka':
    defaultSymbols = exports.DateIntervalSymbols_ka;
    break;
  case 'kk':
    defaultSymbols = exports.DateIntervalSymbols_kk;
    break;
  case 'km':
    defaultSymbols = exports.DateIntervalSymbols_km;
    break;
  case 'kn':
    defaultSymbols = exports.DateIntervalSymbols_kn;
    break;
  case 'ko':
    defaultSymbols = exports.DateIntervalSymbols_ko;
    break;
  case 'ky':
    defaultSymbols = exports.DateIntervalSymbols_ky;
    break;
  case 'ln':
    defaultSymbols = exports.DateIntervalSymbols_ln;
    break;
  case 'lo':
    defaultSymbols = exports.DateIntervalSymbols_lo;
    break;
  case 'lt':
    defaultSymbols = exports.DateIntervalSymbols_lt;
    break;
  case 'lv':
    defaultSymbols = exports.DateIntervalSymbols_lv;
    break;
  case 'mk':
    defaultSymbols = exports.DateIntervalSymbols_mk;
    break;
  case 'ml':
    defaultSymbols = exports.DateIntervalSymbols_ml;
    break;
  case 'mn':
    defaultSymbols = exports.DateIntervalSymbols_mn;
    break;
  case 'mo':
    defaultSymbols = exports.DateIntervalSymbols_mo;
    break;
  case 'mr':
    defaultSymbols = exports.DateIntervalSymbols_mr;
    break;
  case 'ms':
    defaultSymbols = exports.DateIntervalSymbols_ms;
    break;
  case 'mt':
    defaultSymbols = exports.DateIntervalSymbols_mt;
    break;
  case 'my':
    defaultSymbols = exports.DateIntervalSymbols_my;
    break;
  case 'nb':
    defaultSymbols = exports.DateIntervalSymbols_nb;
    break;
  case 'ne':
    defaultSymbols = exports.DateIntervalSymbols_ne;
    break;
  case 'nl':
    defaultSymbols = exports.DateIntervalSymbols_nl;
    break;
  case 'no':
    defaultSymbols = exports.DateIntervalSymbols_no;
    break;
  case 'no_NO':
  case 'no-NO':
    defaultSymbols = exports.DateIntervalSymbols_no_NO;
    break;
  case 'or':
    defaultSymbols = exports.DateIntervalSymbols_or;
    break;
  case 'pa':
    defaultSymbols = exports.DateIntervalSymbols_pa;
    break;
  case 'pl':
    defaultSymbols = exports.DateIntervalSymbols_pl;
    break;
  case 'pt':
    defaultSymbols = exports.DateIntervalSymbols_pt;
    break;
  case 'pt_BR':
  case 'pt-BR':
    defaultSymbols = exports.DateIntervalSymbols_pt_BR;
    break;
  case 'pt_PT':
  case 'pt-PT':
    defaultSymbols = exports.DateIntervalSymbols_pt_PT;
    break;
  case 'ro':
    defaultSymbols = exports.DateIntervalSymbols_ro;
    break;
  case 'ru':
    defaultSymbols = exports.DateIntervalSymbols_ru;
    break;
  case 'sh':
    defaultSymbols = exports.DateIntervalSymbols_sh;
    break;
  case 'si':
    defaultSymbols = exports.DateIntervalSymbols_si;
    break;
  case 'sk':
    defaultSymbols = exports.DateIntervalSymbols_sk;
    break;
  case 'sl':
    defaultSymbols = exports.DateIntervalSymbols_sl;
    break;
  case 'sq':
    defaultSymbols = exports.DateIntervalSymbols_sq;
    break;
  case 'sr':
    defaultSymbols = exports.DateIntervalSymbols_sr;
    break;
  case 'sr_Latn':
  case 'sr-Latn':
    defaultSymbols = exports.DateIntervalSymbols_sr_Latn;
    break;
  case 'sv':
    defaultSymbols = exports.DateIntervalSymbols_sv;
    break;
  case 'sw':
    defaultSymbols = exports.DateIntervalSymbols_sw;
    break;
  case 'ta':
    defaultSymbols = exports.DateIntervalSymbols_ta;
    break;
  case 'te':
    defaultSymbols = exports.DateIntervalSymbols_te;
    break;
  case 'th':
    defaultSymbols = exports.DateIntervalSymbols_th;
    break;
  case 'tl':
    defaultSymbols = exports.DateIntervalSymbols_tl;
    break;
  case 'tr':
    defaultSymbols = exports.DateIntervalSymbols_tr;
    break;
  case 'uk':
    defaultSymbols = exports.DateIntervalSymbols_uk;
    break;
  case 'ur':
    defaultSymbols = exports.DateIntervalSymbols_ur;
    break;
  case 'uz':
    defaultSymbols = exports.DateIntervalSymbols_uz;
    break;
  case 'vi':
    defaultSymbols = exports.DateIntervalSymbols_vi;
    break;
  case 'zh':
    defaultSymbols = exports.DateIntervalSymbols_zh;
    break;
  case 'zh_CN':
  case 'zh-CN':
    defaultSymbols = exports.DateIntervalSymbols_zh_CN;
    break;
  case 'zh_HK':
  case 'zh-HK':
    defaultSymbols = exports.DateIntervalSymbols_zh_HK;
    break;
  case 'zh_TW':
  case 'zh-TW':
    defaultSymbols = exports.DateIntervalSymbols_zh_TW;
    break;
  case 'zu':
    defaultSymbols = exports.DateIntervalSymbols_zu;
    break;
  default:
    defaultSymbols = exports.DateIntervalSymbols_en;
}
