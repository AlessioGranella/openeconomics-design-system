/**
 * format-number.js — OpenEconomics number formatting utility
 *
 * Rules:
 *   Italian (locale "it"):  thousands = "."  decimals = ","   e.g. 1.234.567,89
 *   English  (locale "en"):  thousands = ","  decimals = "."   e.g. 1,234,567.89
 *
 * Usage (browser / Node):
 *   import { formatNumber, formatCurrency, formatPercent } from './utils/format-number.js';
 *
 *   formatNumber(1234567)          // → "1.234.567"   (default: Italian)
 *   formatNumber(1234567, "en")    // → "1,234,567"
 *   formatNumber(1234567.89, "it", 2)  // → "1.234.567,89"
 *   formatCurrency(412600, "it")   // → "412.600 €"
 *   formatCurrency(412600, "en")   // → "€ 412,600"
 *   formatPercent(18.4, "it")      // → "18,4%"
 *   formatPercent(18.4, "en")      // → "18.4%"
 *
 * In HTML templates (no import needed — include as a plain script):
 *   <script src="../../utils/format-number.js"></script>
 *   formatNumber(1000000) → "1.000.000"
 */

(function (root, factory) {
  if (typeof module === "object" && module.exports) {
    module.exports = factory();
  } else {
    const exports = factory();
    Object.assign(root, exports);
  }
})(typeof globalThis !== "undefined" ? globalThis : this, function () {

  /**
   * Core formatter.
   * @param {number} value
   * @param {"it"|"en"} locale   default "it"
   * @param {number}  decimals   decimal places; default: auto (strip trailing zeros)
   * @returns {string}
   */
  function formatNumber(value, locale, decimals) {
    if (typeof locale === "undefined") locale = "it";
    const thSep  = locale === "en" ? "," : ".";
    const decSep = locale === "en" ? "." : ",";

    if (isNaN(value)) return String(value);

    let abs = Math.abs(value);
    let sign = value < 0 ? "-" : "";

    let integer, fraction;

    if (typeof decimals === "number") {
      const fixed = abs.toFixed(decimals);
      const parts = fixed.split(".");
      integer  = parts[0];
      fraction = decimals > 0 ? parts[1] : "";
    } else {
      const str = abs.toString();
      const dot = str.indexOf(".");
      integer  = dot === -1 ? str : str.slice(0, dot);
      fraction = dot === -1 ? "" : str.slice(dot + 1).replace(/0+$/, "");
    }

    // insert thousands separator
    integer = integer.replace(/\B(?=(\d{3})+(?!\d))/g, thSep);

    return sign + integer + (fraction ? decSep + fraction : "");
  }

  /**
   * Format a monetary amount.
   * IT: "412.600 €"  |  EN: "€ 412,600"
   */
  function formatCurrency(value, locale, decimals) {
    locale = locale || "it";
    const n = formatNumber(value, locale, decimals);
    return locale === "en" ? "\u20AC\u00A0" + n : n + "\u00A0\u20AC";
  }

  /**
   * Format a percentage.
   * IT: "18,4%"  |  EN: "18.4%"
   */
  function formatPercent(value, locale, decimals) {
    locale = locale || "it";
    const d = typeof decimals === "number" ? decimals : 1;
    return formatNumber(value, locale, d) + "%";
  }

  return { formatNumber, formatCurrency, formatPercent };
});
