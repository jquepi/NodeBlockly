// Copyright 2006 The Closure Library Authors. All Rights Reserved.
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

goog.provide('goog.i18n.NumberFormatTest');
goog.setTestOnly('goog.i18n.NumberFormatTest');

goog.require('goog.i18n.CompactNumberFormatSymbols');
goog.require('goog.i18n.CompactNumberFormatSymbols_de');
goog.require('goog.i18n.CompactNumberFormatSymbols_en');
goog.require('goog.i18n.CompactNumberFormatSymbols_fr');
goog.require('goog.i18n.NumberFormat');
goog.require('goog.i18n.NumberFormatSymbols');
goog.require('goog.i18n.NumberFormatSymbols_ar_EG');
goog.require('goog.i18n.NumberFormatSymbols_ar_EG_u_nu_latn');
goog.require('goog.i18n.NumberFormatSymbols_de');
goog.require('goog.i18n.NumberFormatSymbols_en');
goog.require('goog.i18n.NumberFormatSymbols_en_AU');
goog.require('goog.i18n.NumberFormatSymbols_en_US');
goog.require('goog.i18n.NumberFormatSymbols_fi');
goog.require('goog.i18n.NumberFormatSymbols_fr');
goog.require('goog.i18n.NumberFormatSymbols_pl');
goog.require('goog.i18n.NumberFormatSymbols_ro');
goog.require('goog.i18n.NumberFormatSymbols_u_nu_latn');
goog.require('goog.string');
goog.require('goog.testing.ExpectedFailures');
goog.require('goog.testing.PropertyReplacer');
goog.require('goog.testing.jsunit');
goog.require('goog.userAgent');
goog.require('goog.userAgent.product');
goog.require('goog.userAgent.product.isVersion');

var expectedFailures;

var stubs = new goog.testing.PropertyReplacer();

function setUpPage() {
  expectedFailures = new goog.testing.ExpectedFailures();
}

function setUp() {
  // Always switch back to English on startup.
  goog.i18n.NumberFormatSymbols = goog.i18n.NumberFormatSymbols_en;
  goog.i18n.NumberFormatSymbols_u_nu_latn = goog.i18n.NumberFormatSymbols_en;
  goog.i18n.CompactNumberFormatSymbols =
      goog.i18n.CompactNumberFormatSymbols_en;
  goog.i18n.NumberFormat.setEnforceAsciiDigits(false);
}

function tearDown() {
  expectedFailures.handleTearDown();
  stubs.reset();
}

function veryBigNumberCompare(str1, str2) {
  return str1.length == str2.length &&
      str1.substring(0, 8) == str2.substring(0, 8);
}

function testVeryBigNumber() {
  var str;
  var fmt = new goog.i18n.NumberFormat(goog.i18n.NumberFormat.Format.CURRENCY);
  str = fmt.format(1785599999999999888888888888888);
  // when comparing big number, various platform have small different in
  // precision. We have to tolerate that using veryBigNumberCompare.
  assertTrue(
      veryBigNumberCompare(
          '$1,785,599,999,999,999,400,000,000,000,000.00', str));
  str = fmt.format(1.7856E30);
  assertTrue(
      veryBigNumberCompare(
          '$1,785,599,999,999,999,400,000,000,000,000.00', str));
  str = fmt.format(1.3456E20);
  assertTrue(veryBigNumberCompare('$134,560,000,000,000,000,000.00', str));

  fmt = new goog.i18n.NumberFormat(goog.i18n.NumberFormat.Format.DECIMAL);
  str = fmt.format(1.3456E20);
  assertTrue(veryBigNumberCompare('134,559,999,999,999,980,000', str));


  fmt = new goog.i18n.NumberFormat(goog.i18n.NumberFormat.Format.PERCENT);
  str = fmt.format(1.3456E20);
  assertTrue(veryBigNumberCompare('13,456,000,000,000,000,000,000%', str));

  fmt = new goog.i18n.NumberFormat(goog.i18n.NumberFormat.Format.SCIENTIFIC);
  str = fmt.format(1.3456E20);
  assertEquals('1E20', str);

  fmt = new goog.i18n.NumberFormat(goog.i18n.NumberFormat.Format.DECIMAL);
  str = fmt.format(-1.234567890123456e306);
  assertEquals(1 + 1 + 306 + 306 / 3, str.length);
  assertEquals('-1,234,567,890,123,45', str.substr(0, 21));

  str = fmt.format(Infinity);
  assertEquals('\u221e', str);
  str = fmt.format(-Infinity);
  assertEquals('-\u221e', str);

  fmt = new goog.i18n.NumberFormat(goog.i18n.NumberFormat.Format.COMPACT_SHORT);
  str = fmt.format(Infinity);
  assertEquals('\u221eT', str);
  str = fmt.format(-Infinity);
  assertEquals('-\u221eT', str);
}

function testStandardFormat() {
  var str;
  var fmt = new goog.i18n.NumberFormat(goog.i18n.NumberFormat.Format.CURRENCY);
  str = fmt.format(1234.579);
  assertEquals('$1,234.58', str);
  fmt = new goog.i18n.NumberFormat(goog.i18n.NumberFormat.Format.DECIMAL);
  str = fmt.format(1234.579);
  assertEquals('1,234.579', str);
  fmt = new goog.i18n.NumberFormat(goog.i18n.NumberFormat.Format.PERCENT);
  str = fmt.format(1234.579);
  assertEquals('123,458%', str);
  fmt = new goog.i18n.NumberFormat(goog.i18n.NumberFormat.Format.SCIENTIFIC);
  str = fmt.format(1234.579);
  assertEquals('1E3', str);
  // Math.log(1000000)/Math.LN10 is strictly less than 6. Make sure it gets
  // formatted correctly.
  str = fmt.format(1000000);
  assertEquals('1E6', str);
}

function testNegativePercentage() {
  var str;
  var fmt = new goog.i18n.NumberFormat('#,##0.00%');
  str = fmt.format(-1234.56);
  assertEquals('-123,456.00%', str);

  fmt = new goog.i18n.NumberFormat(goog.i18n.NumberFormat.Format.PERCENT);
  str = fmt.format(-1234.579);
  assertEquals('-123,458%', str);
}

function testNegativePercentagePattern() {
  var str;
  var fmt = new goog.i18n.NumberFormat('#,##0.00%;(#,##0.00%)');
  str = fmt.format(1234.56);
  assertEquals('123,456.00%', str);

  str = fmt.format(-1234.56);
  assertEquals('(123,456.00%)', str);
}

function testCustomPercentage() {
  var fmt = new goog.i18n.NumberFormat(goog.i18n.NumberFormat.Format.PERCENT);
  fmt.setMaximumFractionDigits(1);
  fmt.setMinimumFractionDigits(1);
  var str = fmt.format(0.1291);
  assertEquals('12.9%', str);
  fmt.setMaximumFractionDigits(2);
  fmt.setMinimumFractionDigits(1);
  str = fmt.format(0.129);
  assertEquals('12.9%', str);
  fmt.setMaximumFractionDigits(2);
  fmt.setMinimumFractionDigits(1);
  str = fmt.format(0.12);
  assertEquals('12.0%', str);
  fmt.setMaximumFractionDigits(2);
  fmt.setMinimumFractionDigits(1);
  str = fmt.format(0.12911);
  assertEquals('12.91%', str);
}

function testBasicParse() {
  var value;

  var fmt = new goog.i18n.NumberFormat('0.0000');
  value = fmt.parse('123.4579');
  assertEquals(123.4579, value);

  value = fmt.parse('+123.4579');
  assertEquals(123.4579, value);

  value = fmt.parse('-123.4579');
  assertEquals(-123.4579, value);
}

function testPrefixParse() {
  var value;

  var fmt = new goog.i18n.NumberFormat('0.0;(0.0)');
  value = fmt.parse('123.4579');
  assertEquals(123.4579, value);

  value = fmt.parse('(123.4579)');
  assertEquals(-123.4579, value);
}

function testPrecentParse() {
  var value;

  var fmt = new goog.i18n.NumberFormat('0.0;(0.0)');
  value = fmt.parse('123.4579%');
  assertEquals((123.4579 / 100), value);

  value = fmt.parse('(%123.4579)');
  assertEquals((-123.4579 / 100), value);

  value = fmt.parse('123.4579\u2030');
  assertEquals((123.4579 / 1000), value);

  value = fmt.parse('(\u2030123.4579)');
  assertEquals((-123.4579 / 1000), value);
}

function testPercentAndPerMillAdvance() {
  var value;
  var pos = [0];
  var fmt = new goog.i18n.NumberFormat('0');
  value = fmt.parse('120%', pos);
  assertEquals(1.2, value);
  assertEquals(4, pos[0]);
  pos[0] = 0;
  value = fmt.parse('120\u2030', pos);
  assertEquals(0.12, value);
  assertEquals(4, pos[0]);
}

function testPercentAndPerMillParsing() {
  var implicitFmt = new goog.i18n.NumberFormat('0;(0)');
  assertEquals(123 / 100, implicitFmt.parse("123%"));
  assertEquals(-123 / 100, implicitFmt.parse("(123%)"));
  assertEquals(123 / 1000, implicitFmt.parse("123???"));
  assertEquals(-123 / 1000, implicitFmt.parse("(123???)"));

  var explicitFmtPercent = new goog.i18n.NumberFormat('0%;(0%)');
  assertEquals(123 / 100, explicitFmtPercent.parse("123%"));
  assertEquals(-123 / 100, explicitFmtPercent.parse("(123%)"));

  var explicitFmtPermill = new goog.i18n.NumberFormat('0???;(0???)');
  assertEquals(123 / 1000, explicitFmtPermill.parse("123???"));
  assertEquals(-123 / 1000, explicitFmtPermill.parse("(123???)"));
}

function testInfinityParse() {
  var value;
  var fmt = new goog.i18n.NumberFormat('0.0;(0.0)');

  // gwt need to add those symbols first
  value = fmt.parse('\u221e');
  assertEquals(Number.POSITIVE_INFINITY, value);

  value = fmt.parse('(\u221e)');
  assertEquals(Number.NEGATIVE_INFINITY, value);
}
function testExponentParse() {
  var value;
  var fmt;

  fmt = new goog.i18n.NumberFormat('#E0');
  value = fmt.parse('1.234E3');
  assertEquals(1.234E+3, value);

  fmt = new goog.i18n.NumberFormat('0.###E0');
  value = fmt.parse('1.234E3');
  assertEquals(1.234E+3, value);

  fmt = new goog.i18n.NumberFormat('#E0');
  value = fmt.parse('1.2345E4');
  assertEquals(12345.0, value);

  value = fmt.parse('1.2345E4');
  assertEquals(12345.0, value);

  value = fmt.parse('1.2345E+4');
  assertEquals(12345.0, value);
}

function testGroupingParse() {
  var value;

  var fmt = new goog.i18n.NumberFormat('#,###');
  value = fmt.parse('1,234,567,890');
  assertEquals(1234567890, value);
  value = fmt.parse('12,3456,7890');
  assertEquals(1234567890, value);

  fmt = new goog.i18n.NumberFormat('#');
  value = fmt.parse('1234567890');
  assertEquals(1234567890, value);
}

function testParsingStop() {
  var pos = [0];
  var fmt = new goog.i18n.NumberFormat('###0.###E0');

  assertEquals(123.457, fmt.parse('123.457', pos));
  assertEquals(7, pos[0]);

  pos[0] = 0;
  assertEquals(123.457, fmt.parse('+123.457', pos));
  assertEquals(8, pos[0]);

  pos[0] = 0;
  assertEquals(123, fmt.parse('123 cars in the parking lot.', pos));
  assertEquals(3, pos[0]);

  pos[0] = 0;
  assertEquals(12, fmt.parse('12 + 12', pos));
  assertEquals(2, pos[0]);

  pos[0] = 0;
  assertEquals(12, fmt.parse('12+12', pos));
  assertEquals(2, pos[0]);

  pos[0] = 0;
  assertEquals(120, fmt.parse('1.2E+2', pos));
  assertEquals(6, pos[0]);

  pos[0] = 0;
  assertEquals(120, fmt.parse('1.2E+2-12', pos));
  assertEquals(6, pos[0]);
}

function testBasicFormat() {
  var fmt = new goog.i18n.NumberFormat('0.0000');
  var str = fmt.format(123.45789179565757);
  assertEquals('123.4579', str);
}

function testGrouping() {
  var str;

  var fmt = new goog.i18n.NumberFormat('#,###');
  str = fmt.format(1234567890);
  assertEquals('1,234,567,890', str);

  fmt = new goog.i18n.NumberFormat('#,####');
  str = fmt.format(1234567890);
  assertEquals('12,3456,7890', str);

  fmt = new goog.i18n.NumberFormat('#');
  str = fmt.format(1234567890);
  assertEquals('1234567890', str);
}

function testIndiaNumberGrouping() {
  // Test for a known grouping used and recognized in India
  var fmt = new goog.i18n.NumberFormat('#,##,###');
  var str = fmt.format(1);
  assertEquals('1', str);
  str = fmt.format(12);
  assertEquals('12', str);
  str = fmt.format(123);
  assertEquals('123', str);
  str = fmt.format(1234);
  assertEquals('1,234', str);
  str = fmt.format(12345);
  assertEquals('12,345', str);
  str = fmt.format(123456);
  assertEquals('1,23,456', str);
  str = fmt.format(1234567);
  assertEquals('12,34,567', str);
  str = fmt.format(12345678);
  assertEquals('1,23,45,678', str);
  str = fmt.format(123456789);
  assertEquals('12,34,56,789', str);
  str = fmt.format(1234567890);
  assertEquals('1,23,45,67,890', str);
  str = fmt.format(0);
  assertEquals('0', str);
  str = fmt.format(-1);
  assertEquals('-1', str);
  str = fmt.format(-12);
  assertEquals('-12', str);
  str = fmt.format(-123);
  assertEquals('-123', str);
  str = fmt.format(-1234);
  assertEquals('-1,234', str);
  str = fmt.format(-12345);
  assertEquals('-12,345', str);
  str = fmt.format(-123456);
  assertEquals('-1,23,456', str);
  str = fmt.format(-1234567);
  assertEquals('-12,34,567', str);
  str = fmt.format(-12345678);
  assertEquals('-1,23,45,678', str);
  str = fmt.format(-123456789);
  assertEquals('-12,34,56,789', str);
  str = fmt.format(-1234567890);
  assertEquals('-1,23,45,67,890', str);
}

function testUnknownNumberGroupings() {
  // Test for any future unknown grouping format in addition to India
  var fmt = new goog.i18n.NumberFormat('#,####,##,###');
  var str = fmt.format(1);
  assertEquals('1', str);
  str = fmt.format(12);
  assertEquals('12', str);
  str = fmt.format(123);
  assertEquals('123', str);
  str = fmt.format(1234);
  assertEquals('1,234', str);
  str = fmt.format(12345);
  assertEquals('12,345', str);
  str = fmt.format(123456);
  assertEquals('1,23,456', str);
  str = fmt.format(1234567);
  assertEquals('12,34,567', str);
  str = fmt.format(12345678);
  assertEquals('123,45,678', str);
  str = fmt.format(123456789);
  assertEquals('1234,56,789', str);
  str = fmt.format(1234567890);
  assertEquals('1,2345,67,890', str);
  str = fmt.format(11234567890);
  assertEquals('11,2345,67,890', str);
  str = fmt.format(111234567890);
  assertEquals('111,2345,67,890', str);
  str = fmt.format(1111234567890);
  assertEquals('1111,2345,67,890', str);
  str = fmt.format(11111234567890);
  assertEquals('1,1111,2345,67,890', str);
  str = fmt.format(0);
  assertEquals('0', str);
  str = fmt.format(-1);
  assertEquals('-1', str);
  str = fmt.format(-12);
  assertEquals('-12', str);
  str = fmt.format(-123);
  assertEquals('-123', str);
  str = fmt.format(-1234);
  assertEquals('-1,234', str);
  str = fmt.format(-12345);
  assertEquals('-12,345', str);
  str = fmt.format(-123456);
  assertEquals('-1,23,456', str);
  str = fmt.format(-1234567);
  assertEquals('-12,34,567', str);
  str = fmt.format(-12345678);
  assertEquals('-123,45,678', str);
  str = fmt.format(-123456789);
  assertEquals('-1234,56,789', str);
  str = fmt.format(-1234567890);
  assertEquals('-1,2345,67,890', str);
  str = fmt.format(-11234567890);
  assertEquals('-11,2345,67,890', str);
  str = fmt.format(-111234567890);
  assertEquals('-111,2345,67,890', str);
  str = fmt.format(-1111234567890);
  assertEquals('-1111,2345,67,890', str);
  str = fmt.format(-11111234567890);
  assertEquals('-1,1111,2345,67,890', str);

  fmt = new goog.i18n.NumberFormat('#,#,##,###,#');
  str = fmt.format(1);
  assertEquals('1', str);
  str = fmt.format(12);
  assertEquals('1,2', str);
  str = fmt.format(123);
  assertEquals('12,3', str);
  str = fmt.format(1234);
  assertEquals('123,4', str);
  str = fmt.format(12345);
  assertEquals('1,234,5', str);
  str = fmt.format(123456);
  assertEquals('12,345,6', str);
  str = fmt.format(1234567);
  assertEquals('1,23,456,7', str);
  str = fmt.format(12345678);
  assertEquals('1,2,34,567,8', str);
  str = fmt.format(123456789);
  assertEquals('1,2,3,45,678,9', str);
  str = fmt.format(1234567890);
  assertEquals('1,2,3,4,56,789,0', str);
  str = fmt.format(0);
  assertEquals('0', str);
  str = fmt.format(-1);
  assertEquals('-1', str);
  str = fmt.format(-12);
  assertEquals('-1,2', str);
  str = fmt.format(-123);
  assertEquals('-12,3', str);
  str = fmt.format(-1234);
  assertEquals('-123,4', str);
  str = fmt.format(-12345);
  assertEquals('-1,234,5', str);
  str = fmt.format(-123456);
  assertEquals('-12,345,6', str);
  str = fmt.format(-1234567);
  assertEquals('-1,23,456,7', str);
  str = fmt.format(-12345678);
  assertEquals('-1,2,34,567,8', str);
  str = fmt.format(-123456789);
  assertEquals('-1,2,3,45,678,9', str);
  str = fmt.format(-1234567890);
  assertEquals('-1,2,3,4,56,789,0', str);
}

function testPerMill() {
  var str;

  var fmt = new goog.i18n.NumberFormat('###.###\u2030');
  str = fmt.format(0.4857);
  assertEquals('485.7\u2030', str);
}

function testCurrency() {
  var str;

  var fmt = new goog.i18n.NumberFormat('\u00a4#,##0.00;-\u00a4#,##0.00');
  str = fmt.format(1234.56);
  assertEquals('$1,234.56', str);
  str = fmt.format(-1234.56);
  assertEquals('-$1,234.56', str);

  fmt = new goog.i18n.NumberFormat(
      '\u00a4#,##0.00;-\u00a4#,##0.00', 'USD',
      goog.i18n.NumberFormat.CurrencyStyle.LOCAL);
  str = fmt.format(1234.56);
  assertEquals('$1,234.56', str);
  str = fmt.format(-1234.56);
  assertEquals('-$1,234.56', str);
  fmt = new goog.i18n.NumberFormat(
      '\u00a4#,##0.00;-\u00a4#,##0.00', 'USD',
      goog.i18n.NumberFormat.CurrencyStyle.PORTABLE);
  str = fmt.format(1234.56);
  assertEquals('US$1,234.56', str);
  str = fmt.format(-1234.56);
  assertEquals('-US$1,234.56', str);
  fmt = new goog.i18n.NumberFormat(
      '\u00a4#,##0.00;-\u00a4#,##0.00', 'USD',
      goog.i18n.NumberFormat.CurrencyStyle.GLOBAL);
  str = fmt.format(1234.56);
  assertEquals('USD $1,234.56', str);
  str = fmt.format(-1234.56);
  assertEquals('-USD $1,234.56', str);


  fmt = new goog.i18n.NumberFormat(
      '\u00a4\u00a4 #,##0.00;-\u00a4\u00a4 #,##0.00');
  str = fmt.format(1234.56);
  assertEquals('USD 1,234.56', str);
  fmt = new goog.i18n.NumberFormat(
      '\u00a4\u00a4 #,##0.00;\u00a4\u00a4 -#,##0.00');
  str = fmt.format(-1234.56);
  assertEquals('USD -1,234.56', str);

  fmt = new goog.i18n.NumberFormat('\u00a4#,##0.00;-\u00a4#,##0.00', 'BRL');
  str = fmt.format(1234.56);
  assertEquals('R$1,234.56', str);
  str = fmt.format(-1234.56);
  assertEquals('-R$1,234.56', str);

  fmt = new goog.i18n.NumberFormat(
      '\u00a4\u00a4 #,##0.00;(\u00a4\u00a4 #,##0.00)', 'BRL');
  str = fmt.format(1234.56);
  assertEquals('BRL 1,234.56', str);
  str = fmt.format(-1234.56);
  assertEquals('(BRL 1,234.56)', str);

  // Test implicit negative pattern.
  fmt = new goog.i18n.NumberFormat('\u00a4#,##0.00');
  str = fmt.format(1234.56);
  assertEquals('$1,234.56', str);
  str = fmt.format(-1234.56);
  assertEquals('-$1,234.56', str);
}

function testQuotes() {
  var str;

  var fmt = new goog.i18n.NumberFormat('a\'fo\'\'o\'b#');
  str = fmt.format(123);
  assertEquals('afo\'ob123', str);

  fmt = new goog.i18n.NumberFormat('a\'\'b#');
  str = fmt.format(123);
  assertEquals('a\'b123', str);

  fmt = new goog.i18n.NumberFormat('a\'fo\'\'o\'b#');
  str = fmt.format(-123);
  assertEquals('-afo\'ob123', str);

  fmt = new goog.i18n.NumberFormat('a\'\'b#');
  str = fmt.format(-123);
  assertEquals('-a\'b123', str);
}

function testZeros() {
  var str;
  var fmt;

  fmt = new goog.i18n.NumberFormat('#.#');
  str = fmt.format(0);
  assertEquals('0', str);
  fmt = new goog.i18n.NumberFormat('#.');
  str = fmt.format(0);
  assertEquals('0.', str);
  fmt = new goog.i18n.NumberFormat('.#');
  str = fmt.format(0);
  assertEquals('.0', str);
  fmt = new goog.i18n.NumberFormat('#');
  str = fmt.format(0);
  assertEquals('0', str);

  fmt = new goog.i18n.NumberFormat('#0.#');
  str = fmt.format(0);
  assertEquals('0', str);
  fmt = new goog.i18n.NumberFormat('#0.');
  str = fmt.format(0);
  assertEquals('0.', str);
  fmt = new goog.i18n.NumberFormat('#.0');
  str = fmt.format(0);
  assertEquals('.0', str);
  fmt = new goog.i18n.NumberFormat('#');
  str = fmt.format(0);
  assertEquals('0', str);
  fmt = new goog.i18n.NumberFormat('000');
  str = fmt.format(0);
  assertEquals('000', str);
}

function testExponential() {
  var str;
  var fmt;

  fmt = new goog.i18n.NumberFormat('0.####E0');
  str = fmt.format(0.01234);
  assertEquals('1.234E-2', str);
  fmt = new goog.i18n.NumberFormat('00.000E00');
  str = fmt.format(0.01234);
  assertEquals('12.340E-03', str);
  fmt = new goog.i18n.NumberFormat('##0.######E000');
  str = fmt.format(0.01234);
  assertEquals('12.34E-003', str);
  fmt = new goog.i18n.NumberFormat('0.###E0;[0.###E0]');
  str = fmt.format(0.01234);
  assertEquals('1.234E-2', str);

  fmt = new goog.i18n.NumberFormat('0.####E0');
  str = fmt.format(123456789);
  assertEquals('1.2346E8', str);
  fmt = new goog.i18n.NumberFormat('00.000E00');
  str = fmt.format(123456789);
  assertEquals('12.346E07', str);
  fmt = new goog.i18n.NumberFormat('##0.######E000');
  str = fmt.format(123456789);
  assertEquals('123.456789E006', str);
  fmt = new goog.i18n.NumberFormat('0.###E0;[0.###E0]');
  str = fmt.format(123456789);
  assertEquals('1.235E8', str);

  fmt = new goog.i18n.NumberFormat('0.####E0');
  str = fmt.format(1.23e300);
  assertEquals('1.23E300', str);
  fmt = new goog.i18n.NumberFormat('00.000E00');
  str = fmt.format(1.23e300);
  assertEquals('12.300E299', str);
  fmt = new goog.i18n.NumberFormat('##0.######E000');
  str = fmt.format(1.23e300);
  assertEquals('1.23E300', str);
  fmt = new goog.i18n.NumberFormat('0.###E0;[0.###E0]');
  str = fmt.format(1.23e300);
  assertEquals('1.23E300', str);

  fmt = new goog.i18n.NumberFormat('0.####E0');
  str = fmt.format(-3.141592653e-271);
  assertEquals('-3.1416E-271', str);
  fmt = new goog.i18n.NumberFormat('00.000E00');
  str = fmt.format(-3.141592653e-271);
  assertEquals('-31.416E-272', str);
  fmt = new goog.i18n.NumberFormat('##0.######E000');
  str = fmt.format(-3.141592653e-271);
  assertEquals('-314.159265E-273', str);
  fmt = new goog.i18n.NumberFormat('0.###E0;[0.###E0]');
  str = fmt.format(-3.141592653e-271);
  assertEquals('[3.142E-271]', str);

  fmt = new goog.i18n.NumberFormat('0.####E0');
  str = fmt.format(0);
  assertEquals('0E0', str);
  fmt = new goog.i18n.NumberFormat('00.000E00');
  str = fmt.format(0);
  assertEquals('00.000E00', str);
  fmt = new goog.i18n.NumberFormat('##0.######E000');
  str = fmt.format(0);
  assertEquals('0E000', str);
  fmt = new goog.i18n.NumberFormat('0.###E0;[0.###E0]');
  str = fmt.format(0);
  assertEquals('0E0', str);

  fmt = new goog.i18n.NumberFormat('0.####E0');
  str = fmt.format(-1);
  assertEquals('-1E0', str);
  fmt = new goog.i18n.NumberFormat('00.000E00');
  str = fmt.format(-1);
  assertEquals('-10.000E-01', str);
  fmt = new goog.i18n.NumberFormat('##0.######E000');
  str = fmt.format(-1);
  assertEquals('-1E000', str);
  fmt = new goog.i18n.NumberFormat('0.###E0;[0.###E0]');
  str = fmt.format(-1);
  assertEquals('[1E0]', str);

  fmt = new goog.i18n.NumberFormat('0.####E0');
  str = fmt.format(1);
  assertEquals('1E0', str);
  fmt = new goog.i18n.NumberFormat('00.000E00');
  str = fmt.format(1);
  assertEquals('10.000E-01', str);
  fmt = new goog.i18n.NumberFormat('##0.######E000');
  str = fmt.format(1);
  assertEquals('1E000', str);
  fmt = new goog.i18n.NumberFormat('0.###E0;[0.###E0]');
  str = fmt.format(1);
  assertEquals('1E0', str);

  fmt = new goog.i18n.NumberFormat('#E0');
  str = fmt.format(12345.0);
  assertEquals('1E4', str);
  fmt = new goog.i18n.NumberFormat('0E0');
  str = fmt.format(12345.0);
  assertEquals('1E4', str);
  fmt = new goog.i18n.NumberFormat('##0.###E0');
  str = fmt.format(12345.0);
  assertEquals('12.345E3', str);
  fmt = new goog.i18n.NumberFormat('##0.###E0');
  str = fmt.format(12345.00001);
  assertEquals('12.345E3', str);
  fmt = new goog.i18n.NumberFormat('##0.###E0');
  str = fmt.format(12345);
  assertEquals('12.345E3', str);

  fmt = new goog.i18n.NumberFormat('##0.####E0');
  str = fmt.format(789.12345e-9);
  // Firefox 3.6.3 Linux is known to fail here with a rounding error.
  // fmt.format will return '789.1234E-9'.
  expectedFailures.expectFailureFor(isFirefox363Linux());
  try {
    assertEquals('789.1235E-9', str);
  } catch (e) {
    expectedFailures.handleException(e);
  }
  fmt = new goog.i18n.NumberFormat('##0.####E0');
  str = fmt.format(780.e-9);
  assertEquals('780E-9', str);
  fmt = new goog.i18n.NumberFormat('.###E0');
  str = fmt.format(45678.0);
  assertEquals('.457E5', str);
  fmt = new goog.i18n.NumberFormat('.###E0');
  str = fmt.format(0);
  assertEquals('.0E0', str);

  fmt = new goog.i18n.NumberFormat('#E0');
  str = fmt.format(45678000);
  assertEquals('5E7', str);
  fmt = new goog.i18n.NumberFormat('##E0');
  str = fmt.format(45678000);
  assertEquals('46E6', str);
  fmt = new goog.i18n.NumberFormat('####E0');
  str = fmt.format(45678000);
  assertEquals('4568E4', str);
  fmt = new goog.i18n.NumberFormat('0E0');
  str = fmt.format(45678000);
  assertEquals('5E7', str);
  fmt = new goog.i18n.NumberFormat('00E0');
  str = fmt.format(45678000);
  assertEquals('46E6', str);
  fmt = new goog.i18n.NumberFormat('000E0');
  str = fmt.format(45678000);
  assertEquals('457E5', str);
  fmt = new goog.i18n.NumberFormat('###E0');
  str = fmt.format(0.0000123);
  assertEquals('12E-6', str);
  fmt = new goog.i18n.NumberFormat('###E0');
  str = fmt.format(0.000123);
  assertEquals('123E-6', str);
  fmt = new goog.i18n.NumberFormat('###E0');
  str = fmt.format(0.00123);
  assertEquals('1E-3', str);
  fmt = new goog.i18n.NumberFormat('###E0');
  str = fmt.format(0.0123);
  assertEquals('12E-3', str);
  fmt = new goog.i18n.NumberFormat('###E0');
  str = fmt.format(0.123);
  assertEquals('123E-3', str);
  fmt = new goog.i18n.NumberFormat('###E0');
  str = fmt.format(1.23);
  assertEquals('1E0', str);
  fmt = new goog.i18n.NumberFormat('###E0');
  str = fmt.format(12.3);
  assertEquals('12E0', str);
  fmt = new goog.i18n.NumberFormat('###E0');
  str = fmt.format(123.0);
  assertEquals('123E0', str);
  fmt = new goog.i18n.NumberFormat('###E0');
  str = fmt.format(1230.0);
  assertEquals('1E3', str);
}

function testPlusSignInExponentPart() {
  var fmt;
  fmt = new goog.i18n.NumberFormat('0E+0');
  str = fmt.format(45678000);
  assertEquals('5E+7', str);
}

function testGroupingParse2() {
  var value;
  var fmt;

  fmt = new goog.i18n.NumberFormat('#,###');
  value = fmt.parse('1,234,567,890');
  assertEquals(1234567890, value);
  fmt = new goog.i18n.NumberFormat('#,###');
  value = fmt.parse('12,3456,7890');
  assertEquals(1234567890, value);

  fmt = new goog.i18n.NumberFormat('#');
  value = fmt.parse('1234567890');
  assertEquals(1234567890, value);
}

function testApis() {
  var fmt;
  var str;

  fmt = new goog.i18n.NumberFormat('#,###');
  str = fmt.format(1234567890);
  assertEquals('1,234,567,890', str);

  fmt = new goog.i18n.NumberFormat('\u00a4#,##0.00;-\u00a4#,##0.00');
  str = fmt.format(1234.56);
  assertEquals('$1,234.56', str);
  fmt = new goog.i18n.NumberFormat('\u00a4#,##0.00;(\u00a4#,##0.00)');
  str = fmt.format(-1234.56);
  assertEquals('($1,234.56)', str);

  fmt = new goog.i18n.NumberFormat('\u00a4#,##0.00;-\u00a4#,##0.00', 'SEK');
  str = fmt.format(1234.56);
  assertEquals('kr1,234.56', str);
  fmt = new goog.i18n.NumberFormat('\u00a4#,##0.00;(\u00a4#,##0.00)', 'SEK');
  str = fmt.format(-1234.56);
  assertEquals('(kr1,234.56)', str);
}

function testLocaleSwitch() {
  goog.i18n.NumberFormatSymbols = goog.i18n.NumberFormatSymbols_fr;

  // When this test is performed in test cluster, 2 out of 60 machines have
  // problem getting the symbol. It is likely to be caused by size of uncompiled
  // symbol file. There will not be an issue after it is compiled.
  if (goog.i18n.NumberFormatSymbols.DECIMAL_SEP ==
      goog.i18n.NumberFormatSymbols_en.DECIMAL_SEP) {
    // fails to load French symbols, skip the test.
    return;
  }

  var fmt = new goog.i18n.NumberFormat('#,###');
  var str = fmt.format(1234567890);
  assertEquals('1\u00a0234\u00a0567\u00a0890', str);

  fmt = new goog.i18n.NumberFormat('\u00a4#,##0.00;-\u00a4#,##0.00');
  str = fmt.format(1234.56);
  assertEquals('\u20AC1\u00a0234,56', str);
  fmt = new goog.i18n.NumberFormat('\u00a4#,##0.00;(\u00a4#,##0.00)');
  str = fmt.format(-1234.56);
  assertEquals('(\u20AC1\u00a0234,56)', str);

  fmt = new goog.i18n.NumberFormat('\u00a4#,##0.00;-\u00a4#,##0.00', 'SEK');
  str = fmt.format(1234.56);
  assertEquals('kr1\u00a0234,56', str);
  fmt = new goog.i18n.NumberFormat('\u00a4#,##0.00;(\u00a4#,##0.00)', 'SEK');
  str = fmt.format(-1234.56);
  assertEquals('(kr1\u00a0234,56)', str);
}

function testFrenchParse() {
  goog.i18n.NumberFormatSymbols = goog.i18n.NumberFormatSymbols_fr;

  // When this test is performed in test cluster, 2 out of 60 machines have
  // problem getting the symbol. It is likely to be caused by size of uncompiled
  // symbol file. There will not be an issue after it is compiled.
  if (goog.i18n.NumberFormatSymbols.DECIMAL_SEP ==
      goog.i18n.NumberFormatSymbols_en.DECIMAL_SEP) {
    // fails to load French symbols, skip the test.
    return;
  }

  var fmt = new goog.i18n.NumberFormat('0.0000');
  var value = fmt.parse('0,30');
  assertEquals(0.30, value);

  fmt = new goog.i18n.NumberFormat(goog.i18n.NumberFormat.Format.CURRENCY);
  value = fmt.parse('0,30\u00A0\u20AC');
  assertEquals(0.30, value);
  fmt = new goog.i18n.NumberFormat('#,##0.00');
  value = fmt.parse('123 456,99');
  assertEquals(123456.99, value);

  fmt = new goog.i18n.NumberFormat('#,##0.00');
  value = fmt.parse('123\u00a0456,99');
  assertEquals(123456.99, value);

  fmt = new goog.i18n.NumberFormat('#,##0.00');
  value = fmt.parse('8 123\u00a0456,99');
  assertEquals(8123456.99, value);
}


function testFailParseShouldThrow() {
  var fmt = new goog.i18n.NumberFormat('0.0000');
  var value = fmt.parse('x');
  assertNaN(value);

  fmt = new goog.i18n.NumberFormat('0.000x');
  value = fmt.parse('3y');
  assertNaN(value);

  fmt = new goog.i18n.NumberFormat('x0.000');
  value = fmt.parse('y3');
  assertNaN(value);
}


/**
 * @return {boolean} Whether we're on Linux Firefox 3.6.3.
 */
function isFirefox363Linux() {
  return goog.userAgent.product.FIREFOX && goog.userAgent.LINUX &&
      goog.userAgent.product.isVersion('3.6.3') &&
      !goog.userAgent.product.isVersion('3.6.4');
}


function testEnforceAscii() {
  goog.i18n.NumberFormatSymbols = goog.i18n.NumberFormatSymbols_ar_EG;
  goog.i18n.NumberFormatSymbols_u_nu_latn =
      goog.i18n.NumberFormatSymbols_ar_EG_u_nu_latn;

  var fmt = new goog.i18n.NumberFormat('0.0000%');
  var str = fmt.format(123.45789179565757);
  assertEquals('????????????????????????', str);

  goog.i18n.NumberFormat.setEnforceAsciiDigits(true);
  fmt = new goog.i18n.NumberFormat('0.0000%');
  str = fmt.format(123.45789179565757);
  assertEquals('12345.7892???%???', str);
}

function testFractionDigits() {
  var fmt = new goog.i18n.NumberFormat(goog.i18n.NumberFormat.Format.DECIMAL);
  fmt.setMinimumFractionDigits(4);
  fmt.setMaximumFractionDigits(6);
  assertEquals('0.1230', fmt.format(0.123));
  assertEquals('0.123456', fmt.format(0.123456));
  assertEquals('0.123457', fmt.format(0.12345678));
}

function testFractionDigitsSetOutOfOrder() {
  var fmt = new goog.i18n.NumberFormat(goog.i18n.NumberFormat.Format.DECIMAL);
  // First, setup basic min/max
  fmt.setMinimumFractionDigits(2);
  fmt.setMaximumFractionDigits(2);
  // Now change to a lower min & max, but change the max value first so that it
  // is temporarily less than the current "min" value.  This makes sure that we
  // don't throw an error.
  fmt.setMaximumFractionDigits(1);
  fmt.setMinimumFractionDigits(1);
  assertEquals('2.3', fmt.format(2.34));
}

function testFractionDigitsInvalid() {
  var fmt = new goog.i18n.NumberFormat(goog.i18n.NumberFormat.Format.DECIMAL);
  fmt.setMinimumFractionDigits(2);
  fmt.setMaximumFractionDigits(1);
  try {
    fmt.format(0.123);
    fail('Should have thrown exception.');
  } catch (e) {
  }
}

function testFractionDigitsTooHigh() {
  var fmt = new goog.i18n.NumberFormat(goog.i18n.NumberFormat.Format.DECIMAL);
  fmt.setMaximumFractionDigits(308);
  var err = assertThrows(function() {
    fmt.setMaximumFractionDigits(309);
  });
  assertEquals('Unsupported maximum fraction digits: 309', err.message);
}

function testSignificantDigitsEqualToMax() {
  var fmt = new goog.i18n.NumberFormat(goog.i18n.NumberFormat.Format.DECIMAL);
  fmt.setMinimumFractionDigits(0);
  fmt.setMaximumFractionDigits(2);

  fmt.setSignificantDigits(2);
  assertEquals('123', fmt.format(123.4));
  assertEquals('12', fmt.format(12.34));
  assertEquals('1.2', fmt.format(1.234));
  assertEquals('0.12', fmt.format(0.1234));
  assertEquals('0.13', fmt.format(0.1284));
}

function testSignificantDigitsLessThanMax() {
  var fmt = new goog.i18n.NumberFormat(goog.i18n.NumberFormat.Format.DECIMAL);
  fmt.setMinimumFractionDigits(0);
  fmt.setMaximumFractionDigits(4);
  fmt.setSignificantDigits(1);

  assertEquals('123', fmt.format(123.4));
  assertEquals('12', fmt.format(12.34));
  assertEquals('1', fmt.format(1.234));
  assertEquals('0.1', fmt.format(0.1234));
  assertEquals('0.2', fmt.format(0.1834));
}

function testSignificantDigitsMoreThanMax() {
  // Max fractional digits should be absolute
  var fmt = new goog.i18n.NumberFormat(goog.i18n.NumberFormat.Format.DECIMAL);
  fmt.setMinimumFractionDigits(0);
  fmt.setMaximumFractionDigits(2);
  fmt.setSignificantDigits(3);

  assertEquals('123', fmt.format(123.4));
  assertEquals('12.3', fmt.format(12.34));
  assertEquals('1.23', fmt.format(1.234));
  assertEquals('0.12', fmt.format(0.1234));
  assertEquals('0.13', fmt.format(0.1284));
}

function testNegativeDecimalFinnish() {
  // Finnish uses a full-width dash for negative.
  goog.i18n.NumberFormatSymbols = goog.i18n.NumberFormatSymbols_fi;

  var fmt = new goog.i18n.NumberFormat(goog.i18n.NumberFormat.Format.DECIMAL);

  var str = fmt.format(-123);
  assertEquals('???123', str);
}

function testSimpleCompactFrench() {
  // Switch to French.
  goog.i18n.NumberFormatSymbols = goog.i18n.NumberFormatSymbols_fr;
  goog.i18n.CompactNumberFormatSymbols =
      goog.i18n.CompactNumberFormatSymbols_fr;

  var fmt =
      new goog.i18n.NumberFormat(goog.i18n.NumberFormat.Format.COMPACT_SHORT);

  var str = fmt.format(123400000);
  assertEquals('123\u00A0M', str);
}

function testSimpleCompactGerman() {
  // Switch to German.
  goog.i18n.NumberFormatSymbols = goog.i18n.NumberFormatSymbols_de;
  goog.i18n.CompactNumberFormatSymbols =
      goog.i18n.CompactNumberFormatSymbols_de;

  var fmt =
      new goog.i18n.NumberFormat(goog.i18n.NumberFormat.Format.COMPACT_SHORT);

  // The german short compact decimal has a simple '0' for 1000's, which is
  // supposed to be interpreted as 'leave the number as-is'.
  // (The number itself will still be formatted with the '.', but no rounding)
  var str = fmt.format(1234);
  assertEquals('1.234', str);
}

function testSimpleCompact1() {
  var fmt =
      new goog.i18n.NumberFormat(goog.i18n.NumberFormat.Format.COMPACT_SHORT);

  var str = fmt.format(1234);
  assertEquals('1.2K', str);
}

function testSimpleCompact2() {
  var fmt =
      new goog.i18n.NumberFormat(goog.i18n.NumberFormat.Format.COMPACT_SHORT);

  var str = fmt.format(12345);
  assertEquals('12K', str);
}

function testRoundingCompact() {
  var fmt =
      new goog.i18n.NumberFormat(goog.i18n.NumberFormat.Format.COMPACT_SHORT);

  var str = fmt.format(999999);
  assertEquals('1M', str);  // as opposed to 1000k
}

function testRoundingCompactNegative() {
  var fmt =
      new goog.i18n.NumberFormat(goog.i18n.NumberFormat.Format.COMPACT_SHORT);

  var str = fmt.format(-999999);
  assertEquals('-1M', str);
}

function testCompactSmall() {
  var fmt =
      new goog.i18n.NumberFormat(goog.i18n.NumberFormat.Format.COMPACT_SHORT);

  var str = fmt.format(0.1234);
  assertEquals('0.12', str);
}

function testCompactLong() {
  var fmt =
      new goog.i18n.NumberFormat(goog.i18n.NumberFormat.Format.COMPACT_LONG);

  var str = fmt.format(12345);
  assertEquals('12 thousand', str);
}

function testCompactWithoutSignificant() {
  var fmt =
      new goog.i18n.NumberFormat(goog.i18n.NumberFormat.Format.COMPACT_SHORT);
  fmt.setSignificantDigits(0);
  fmt.setMinimumFractionDigits(2);
  fmt.setMaximumFractionDigits(2);

  assertEquals('1.23K', fmt.format(1234));
  assertEquals('1.00K', fmt.format(1000));
  assertEquals('123.46K', fmt.format(123456.7));
  assertEquals('999.99K', fmt.format(999994));
  assertEquals('1.00M', fmt.format(999995));
}

function testCompactWithoutSignificant2() {
  var fmt =
      new goog.i18n.NumberFormat(goog.i18n.NumberFormat.Format.COMPACT_SHORT);
  fmt.setSignificantDigits(0);
  fmt.setMinimumFractionDigits(0);
  fmt.setMaximumFractionDigits(2);

  assertEquals('1.23K', fmt.format(1234));
  assertEquals('1K', fmt.format(1000));
  assertEquals('123.46K', fmt.format(123456.7));
  assertEquals('999.99K', fmt.format(999994));
  assertEquals('1M', fmt.format(999995));
}

function testCompactFallbacks() {
  var cdfSymbols = {COMPACT_DECIMAL_SHORT_PATTERN: {'1000': {'other': '0K'}}};

  goog.i18n.CompactNumberFormatSymbols = cdfSymbols;
  var fmt =
      new goog.i18n.NumberFormat(goog.i18n.NumberFormat.Format.COMPACT_LONG);
  var str = fmt.format(220000000000000);
  assertEquals('220,000,000,000K', str);
}

function testShowTrailingZerosWithSignificantDigits() {
  var fmt = new goog.i18n.NumberFormat(goog.i18n.NumberFormat.Format.DECIMAL);
  fmt.setSignificantDigits(2);
  fmt.setShowTrailingZeros(true);

  assertEquals('2.0', fmt.format(2));
  assertEquals('2,000', fmt.format(2000));
  assertEquals('0.20', fmt.format(0.2));
  assertEquals('0.02', fmt.format(0.02));
  assertEquals('0.002', fmt.format(0.002));
  assertEquals('0.00', fmt.format(0));

  fmt.setShowTrailingZeros(false);
  assertEquals('2', fmt.format(2));
  assertEquals('0.2', fmt.format(0.2));
}


function testShowTrailingZerosWithSignificantDigitsCompactShort() {
  var fmt =
      new goog.i18n.NumberFormat(goog.i18n.NumberFormat.Format.COMPACT_SHORT);
  fmt.setSignificantDigits(2);
  fmt.setShowTrailingZeros(true);

  assertEquals('2.0', fmt.format(2));
  assertEquals('2.0K', fmt.format(2000));
  assertEquals('20', fmt.format(20));
}

function testCurrencyCodeOrder() {
  goog.i18n.NumberFormatSymbols = goog.i18n.NumberFormatSymbols_fr;
  goog.i18n.CompactNumberFormatSymbols =
      goog.i18n.CompactNumberFormatSymbols_fr;
  var fmt = new goog.i18n.NumberFormat(goog.i18n.NumberFormat.Format.CURRENCY);
  assertFalse(fmt.isCurrencyCodeBeforeValue());

  goog.i18n.NumberFormatSymbols = goog.i18n.NumberFormatSymbols_en;
  goog.i18n.CompactNumberFormatSymbols =
      goog.i18n.CompactNumberFormatSymbols_en;
  var fmt1 = new goog.i18n.NumberFormat(goog.i18n.NumberFormat.Format.CURRENCY);
  assertTrue(fmt1.isCurrencyCodeBeforeValue());

  // Check that we really have different formatters with different patterns
  assertFalse(fmt.isCurrencyCodeBeforeValue());


  // Using custom patterns instead of standard locale ones

  fmt = new goog.i18n.NumberFormat('\u00A4 #0');
  assertTrue(fmt.isCurrencyCodeBeforeValue());

  fmt = new goog.i18n.NumberFormat('\u00A4 0 and #');
  assertTrue(fmt.isCurrencyCodeBeforeValue());

  fmt = new goog.i18n.NumberFormat('#0 \u00A4');
  assertFalse(fmt.isCurrencyCodeBeforeValue());

  fmt = new goog.i18n.NumberFormat('0 and # \u00A4');
  assertFalse(fmt.isCurrencyCodeBeforeValue());

  fmt = new goog.i18n.NumberFormat('\u00A4 0');
  assertTrue(fmt.isCurrencyCodeBeforeValue());

  fmt = new goog.i18n.NumberFormat('0 \u00A4');
  assertFalse(fmt.isCurrencyCodeBeforeValue());

  fmt = new goog.i18n.NumberFormat('\u00A4 #');
  assertTrue(fmt.isCurrencyCodeBeforeValue());

  fmt = new goog.i18n.NumberFormat('# \u00A4');
  assertFalse(fmt.isCurrencyCodeBeforeValue());


  // Edge cases, should never happen (like #0 separated by currency symbol,
  // or missing currency symbol, or missing both # and 0, or missing all)
  // We still make sure we get reasonable results (as much as possible)

  fmt = new goog.i18n.NumberFormat('0 \u00A4 #');
  assertFalse(fmt.isCurrencyCodeBeforeValue());

  fmt = new goog.i18n.NumberFormat('# \u00A4 0');
  assertFalse(fmt.isCurrencyCodeBeforeValue());

  fmt = new goog.i18n.NumberFormat('\u00A4');
  assertTrue(fmt.isCurrencyCodeBeforeValue());  // currency first, en_US style

  fmt = new goog.i18n.NumberFormat('0');
  assertTrue(fmt.isCurrencyCodeBeforeValue());  // currency first, en_US style

  fmt = new goog.i18n.NumberFormat('#');
  assertTrue(fmt.isCurrencyCodeBeforeValue());  // currency first, en_US style

  fmt = new goog.i18n.NumberFormat('#0');
  assertTrue(fmt.isCurrencyCodeBeforeValue());  // currency first, en_US style

  fmt = new goog.i18n.NumberFormat('0 and #');
  assertTrue(fmt.isCurrencyCodeBeforeValue());  // currency first, en_US style

  fmt = new goog.i18n.NumberFormat('nothing');
  assertTrue(fmt.isCurrencyCodeBeforeValue());  // currency first, en_US style
}

function testCompactWithBaseFormattingNumber() {
  var fmt =
      new goog.i18n.NumberFormat(goog.i18n.NumberFormat.Format.COMPACT_SHORT);

  fmt.setBaseFormatting(1000);
  assertEquals('0.8K', fmt.format(800, 1000));

  fmt.setBaseFormatting(null);
  assertEquals('800', fmt.format(800, 1000));
  fmt.setBaseFormatting(1000);
  assertEquals('1,200K', fmt.format(1200000, 1000));
  assertEquals('0.01K', fmt.format(10, 1000));
  fmt.setSignificantDigits(0);
  fmt.setMinimumFractionDigits(2);
  assertEquals('0.00K', fmt.format(1, 1000));
}

function testCompactWithBaseFormattingFrench() {
  // Switch to French.
  stubs.set(goog.i18n, 'NumberFormatSymbols', goog.i18n.NumberFormatSymbols_fr);
  stubs.set(
      goog.i18n, 'CompactNumberFormatSymbols',
      goog.i18n.CompactNumberFormatSymbols_fr);

  var fmt =
      new goog.i18n.NumberFormat(goog.i18n.NumberFormat.Format.COMPACT_SHORT);
  assertEquals('123\u00A0M', fmt.format(123400000));
  fmt.setBaseFormatting(1000);
  assertEquals('123\u00A0400\u00A0k', fmt.format(123400000));
}

function testGetBaseFormattingNumber() {
  var fmt =
      new goog.i18n.NumberFormat(goog.i18n.NumberFormat.Format.COMPACT_SHORT);
  assertEquals(null, fmt.getBaseFormatting());
  fmt.setBaseFormatting(10000);
  assertEquals(10000, fmt.getBaseFormatting());
}

// Moved Polish, Romanian, other currencies to tier 2, check that it works now
function testPolish() {
  goog.i18n.NumberFormatSymbols = goog.i18n.NumberFormatSymbols_pl;
  var fmPl = new goog.i18n.NumberFormat(goog.i18n.NumberFormat.Format.CURRENCY);
  assertEquals('100,00\u00A0z\u0142', fmPl.format(100));  // 100.00 z??

  goog.i18n.NumberFormatSymbols = goog.i18n.NumberFormatSymbols_ro;
  var fmRo = new goog.i18n.NumberFormat(goog.i18n.NumberFormat.Format.CURRENCY);
  assertEquals('100,00\u00A0RON', fmRo.format(100));

  goog.i18n.NumberFormatSymbols = goog.i18n.NumberFormatSymbols_en;
}

function testVerySmallNumberScientific() {  // See b/30990076.
  var f = new goog.i18n.NumberFormat(goog.i18n.NumberFormat.Format.SCIENTIFIC);
  var result = f.format(5e-324);
  assertEquals('5E-324', result);
}

function testVerySmallNumberDecimal() {
  var f = new goog.i18n.NumberFormat(goog.i18n.NumberFormat.Format.DECIMAL);
  f.setSignificantDigits(3);
  f.setMaximumFractionDigits(100);

  var expected = '0.' + goog.string.repeat('0', 89) + '387';
  assertEquals(expected, f.format(3.87e-90));
  expected = '0.' + goog.string.repeat('0', 8) + '387';
  assertEquals(expected, f.format(3.87e-9));
  expected = '0.' + goog.string.repeat('0', 89) + '342';
  assertEquals(expected, f.format(3.42e-90));
  expected = '0.' + goog.string.repeat('0', 8) + '342';
  assertEquals(expected, f.format(3.42e-9));

  f.setSignificantDigits(2);
  expected = '0.' + goog.string.repeat('0', 89) + '39';
  assertEquals(expected, f.format(3.87e-90));
  expected = '0.' + goog.string.repeat('0', 8) + '39';
  assertEquals(expected, f.format(3.87e-9));
  expected = '0.' + goog.string.repeat('0', 89) + '34';
  assertEquals(expected, f.format(3.42e-90));
  expected = '0.' + goog.string.repeat('0', 8) + '34';
  assertEquals(expected, f.format(3.42e-9));

  f.setSignificantDigits(1);
  expected = '0.' + goog.string.repeat('0', 89) + '4';
  assertEquals(expected, f.format(3.87e-90));
  expected = '0.' + goog.string.repeat('0', 8) + '4';
  assertEquals(expected, f.format(3.87e-9));
  expected = '0.' + goog.string.repeat('0', 89) + '3';
  assertEquals(expected, f.format(3.42e-90));
  expected = '0.' + goog.string.repeat('0', 8) + '3';
  assertEquals(expected, f.format(3.42e-9));
}

function testSymbols_percent() {
  var f = new goog.i18n.NumberFormat(
      goog.i18n.NumberFormat.Format.PERCENT, undefined, undefined,
      // Alternate percent symbol.
      Object.create(
          goog.i18n.NumberFormatSymbols, {PERCENT: {'value': 'Percent'}}));
  assertEquals('-25Percent', f.format(-0.25));
  assertEquals('25Percent', f.format(0.25));

  var f2 = new goog.i18n.NumberFormat(
      goog.i18n.NumberFormat.Format.PERCENT, undefined, undefined,
      goog.i18n.NumberFormatSymbols_en);
  assertEquals('-25%', f2.format(-0.25));
  assertEquals('25%', f2.format(0.25));
  goog.i18n.NumberFormatSymbols = goog.i18n.NumberFormatSymbols_ar_EG;
  assertEquals('-25Percent', f.format(-0.25));
  assertEquals('25Percent', f.format(0.25));
  assertEquals('-25%', f2.format(-0.25));
  assertEquals('25%', f2.format(0.25));
}

function testSymbols_permill() {
  var f = new goog.i18n.NumberFormat(
      '#,##0\u2030', undefined, undefined,
      Object.create(
          goog.i18n.NumberFormatSymbols, {PERMILL: {'value': 'Permill'}}));
  assertEquals('0Permill', f.format(0));

  assertEquals('0\u2030', new goog.i18n.NumberFormat('#,##0\u2030').format(0));
}

function testSymbols_expSymbol() {
  var f = new goog.i18n.NumberFormat(
      goog.i18n.NumberFormat.Format.SCIENTIFIC, undefined, undefined,
      goog.i18n.NumberFormatSymbols_en_AU);
  assertEquals('1e3', f.format(1000));

  var defaultLocale =
      new goog.i18n.NumberFormat(goog.i18n.NumberFormat.Format.SCIENTIFIC);
  assertEquals('1e3', f.format(1000));
  assertEquals('1E3', defaultLocale.format(1000));

  goog.i18n.NumberFormatSymbols = goog.i18n.NumberFormatSymbols_en_AU;
  assertEquals('1e3', f.format(1000));
  assertEquals('1e3', defaultLocale.format(1000));

  goog.i18n.NumberFormatSymbols = goog.i18n.NumberFormatSymbols_en_US;
  assertEquals('1e3', f.format(1000));
  assertEquals('1E3', defaultLocale.format(1000));
}

function testScientific_ar_rtl() {
  var scientific = new goog.i18n.NumberFormat(
      goog.i18n.NumberFormat.Format.SCIENTIFIC, undefined, undefined,
      goog.i18n.NumberFormatSymbols_ar_EG);
  assertEquals('??????3', scientific.format(1000));
}
