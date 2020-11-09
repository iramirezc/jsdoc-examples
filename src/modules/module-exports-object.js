/** @module */

// Object literal `{}` assigned to `module.exports`
// ==================================================

/* NOTE: Notation for CommonJS modules works for Node.js modules too. */
/* NOTICE: How the `@module` tag is not given a pathname, it is 'intelligent' enough to figure it out. */

// Private members
// ==================================================

/**
 * @summary This is a private constant.
 * @description Example of a **private** constant within the module.
 * @type {string}
 */
const privateConstant = 'I am not reachable'

// Private methods
// ==================================================

/**
 * @summary This is a private method.
 * @description Example of a **private** method (not exported) within the module.
 * @example
 * privateMethod(true) // returns false
 * privateMethod(false) // returns true
 * @param {boolean} bool - A `boolean`.
 * @returns {boolean} The negated `boolean` provided.
 */
function privateMethod (bool) {
  return !bool
}

// Initial exported public members & methods
// ==================================================

module.exports = {
  /**
   * @summary This is public variable.
   * @description Example of a **public** variable within the module.
   * @type {string}
   */
  publicVariable: 'I am reachable',
  /**
   * @summary This is a public method defined in `module.exports`.
   * @description Example of a **public** method directly defined as a property of `module.exports`.
   * @example
   * module.exports.publicMethod(true) // returns true
   * module.exports.publicMethod(false) // returns false
   * @param {boolean} bool - A `boolean`.
   * @returns {boolean} The same `boolean`.
   */
  publicMethod (bool) {
    return bool
  },
  publicMethodNumber
}

// More public methods
// ==================================================

/**
 * @summary This is a public method that will be included in the `module.exports`.
 * @description Example of a **public** method that was declared as a **private** function
 * but that will be exposed in `module.exports` as a property.<br>
 * Internally, calls [`publicMethodString`]{@link module:modules/module-exports-object.publicMethodString} method
 * using the [`privateConstant`]{@link module:modules/module-exports-object~privateConstant}.
 * @alias module:modules/module-exports-object.publicMethodNumber
 * @note If the `@alias` is not provided, then the function gets document as an **inner Method**.
 * @see [`publicMethodString`]{@link module:modules/module-exports-object.publicMethodString}
 * @example
 * publicMethodNumber(0) // returns 20
 * module.exports.publicMethodNumber(5) // returns 25
 * @param {number} n - Any `number`.
 * @returns {number} Returns the sum of `n` and the length of the **private** constant with some extra sugar.
 */
function publicMethodNumber (n) {
  return module.exports.publicMethodString(privateConstant).length + n
}

/**
 * @summary This is a public method that was later attached to the `module.exports`.
 * @description Example of a **public** method that was attached later to the `module.exports` object.
 * @example
 * module.exports.publicMethodString('a') // returns '-a-'
 * module.exports.publicMethodString('aba') // returns '-aba-'
 * @param {string} str - Any `string`.
 * @returns {string} It returns the same `str` surrounded by two nice `-`.
 */
module.exports.publicMethodString = function (str) {
  return `-${str}-`
}

/**
 * @summary This is a public method that calls other private and public methods.
 * @description Calls [`privateMethod`]{@link module:modules/module-exports-object~privateMethod}
 * with the result of calling [`publicMethod`]{@link module:modules/module-exports-object.publicMethod}
 * with a `false` value. Naturally, this will be always `true`. Then it returns the result
 * of calling [`publicMethodNumber`]{@link module:modules/module-exports-object.publicMethodNumber}
 * with the length of the result of calling [`publicMethodString`]{@link module:modules/module-exports-object.publicMethodString}
 * with the string `test`.
 * @alias module:modules/module-exports-object.publicMethodExec
 * @note If the `@alias` is not provided, then the function gets document as an **inner Method**.
 * @example
 * publicMethodExec() // returns 26
 * module.exports.publicMethodExec() // returns 26
 * @returns {number} A constant value of `26`.
 */
function publicMethodExec () {
  if (privateMethod(module.exports.publicMethod(false))) {
    return publicMethodNumber(module.exports.publicMethodString('test').length)
  }
}

module.exports.publicMethodExec = publicMethodExec
