/** @module tags/@example */

/**
 * @summary Single `@example`.
 * @description Example of using a single `@example` tag.
 * @example
 * add(1, 3) // 4
 * add(5, 2) // 7
 */
function add(a, b) { return a + b }

/**
 * @summary Multiple `@example` with no captions.
 * @description Example of using multiple `@example` tags.
 * @example
 * subtract(5, 2) // 3
 * @example
 * subtract(2, 5) // -3
 */
function subtract(a, b) { return a - b }

/**
 * @summary Multiple `@example` with captions.
 * @description Example of using `@example` tag with captions.
 * @example <caption>Dividing by positive number</caption>
 * divide(9, 3) // 3
 * @example <caption>Dividing zero</caption>
 * divide(0, 1) // 0
 * @example <caption>Dividing by zero</caption>
 * divide(1, 0) // Infinity
 * @example <caption>Dividing zero by zero</caption>
 * divide(0, 0) // NaN
 */
function divide(a, b) { return a / b }
