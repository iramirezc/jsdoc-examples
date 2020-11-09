/** @module modules/exporting-a-class */

// Class assigned to 'module.exports'
// ==================================================

/* NOTE: Notation for CommonJS modules works for Node.js modules too. */

/**
 * Example of `module.exports` being `AnExportedClass` class.
 * @alias module:modules/exporting-a-class
 * @todo I actually do NOT like this way of exporting. I might need to look for an alternative.
 */
class AnExportedClass {
  /**
   * This is the description of the `constructor`.
   * @param {string} name - Any `string` name.
   */
  constructor(name) {
    this.name = name
  }

  /**
   * @summary This is the summary of the `publicMethod`.
   * @description This is the description of the **public** method.
   * @param {number} n - Any number.
   * @returns {number} The same provided number provided as argument.
   */
  publicMethod(n) {
    return n
  }

  /**
   * @summary This is the summary of the `staticMethod`.
   * @description This is the description of the **static** method.
   * @param {string} [str] - Any string.
   * @returns {boolean} Returns if the `str` was provided.
   */
  static staticMethod(str) {
    return !!str
  }
}

module.exports = AnExportedClass
