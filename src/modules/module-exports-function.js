/** @module */

// Function assigned to 'module.exports'
// ==================================================

/* NOTE: Notation for CommonJS modules works for Node.js modules too. */
/* NOTICE: How the `@module` tag is not given a pathname, it is 'intelligent' enough to figure it out. */

/**
 * @summary `module.exports` is a `function`.
 * @description Example of `module.exports` that exports a `function`.
 * @param {string} str - Any `string`.
 * @returns {string} It returns the same `str` surrounded by two nice `-`.
 */
module.exports = function publicMethodString (str) {
  return `-${str}-`
}