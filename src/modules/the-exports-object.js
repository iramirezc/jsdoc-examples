/** @module modules/the-exports-object */

// Properties of the `exports` object
// ==================================================

/* NOTE: Notation for CommonJS modules works for Node.js modules too. */

// Private members
// ==================================================

/**
 * @summary This is a private variable.
 * @description Example of a **private** variable within the module.
 * @type {string}
 */
let privateVariable = 'I am not reachable'

// Public members
// ==================================================

/**
 * @summary This is a public variable.
 * @description Example of a **public** variable within the module.
 * @type {string}
 */
exports.publicVariable = 'I am reachable'

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

// Public methods
// ==================================================

/**
 * @summary This is a public method using `exports.publicMethod`.
 * @description Example of a **public** method directly attached to the `exports` object.
 * @example
 * exports.publicMethod(true) // returns true
 * exports.publicMethod(false) // returns false
 * @param {boolean} bool - A `boolean`.
 * @returns {boolean} The same `boolean` provided.
 */
exports.publicMethod = function (bool) {
  return bool
}

/**
 * @summary This is a public method using an `@alias`.
 * @description Example of a **public** method that is declared in a constant
 * using an `@alias` and later is exported in the `exports` object.<br>
 * Internally, calls [`publicMethodString`]{@link module:modules/the-exports-object.publicMethodString} method
 * using the [`privateVariable`]{@link module:modules/the-exports-object~privateVariable}.
 * @alias module:modules/the-exports-object.publicMethodNumber
 * @note If the `@alias` is not provided, then the function gets document as an **inner Method**.
 * @see [`publicMethodString`]{@link module:modules/the-exports-object.publicMethodString}
 * @example
 * publicMethodNumber(0) // returns 20
 * exports.publicMethodNumber(5) // returns 25
 * @param {number} n - Any `number`.
 * @returns {number} Returns the sum of `n` and the length of the **private** variable with some extra sugar.
 */
const publicMethodNumber = function (n) {
  return publicMethodString(privateVariable).length + n
}

/*
 * NOTE: if I do: publicMethodNumber = exports.publicMethodNumber = function () {...}
 * the JSDoc is showing the function as a static constant instead of a method,
 * which is the reason I'm doing the export later.
 */
exports.publicMethodNumber = publicMethodNumber


const publicMethodString =
  /**
   * @summary This is a public method using a weird syntax `publicMethodString = /** /exports.publicMethodString`.
   * @description Example of a **public** method documented immediately before the `exports` object.
   * @note This syntax just feels weird to me. I definitely do NOT recommend it.
   * @note It seems to be working well in the generated JSDoc but not in VSCode.
   * @example
   * publicMethodString('a') // returns '-a-'
   * exports.publicMethodString('aba') // returns '-aba-'
   * @param {string} str - Any `string`.
   * @returns {string} It returns the same `str` surrounded by two nice `-`.
   */
exports.publicMethodString = function (str) {
  return `-${str}-`
}

/**
 * @summary This is a public method that calls other private and public methods.
 * @description Calls [`privateMethod`]{@link module:modules/the-exports-object~privateMethod}
 * with the result of calling [`publicMethod`]{@link module:modules/the-exports-object.publicMethod}
 * with a `false` value. Naturally, this will be always `true`. Then it returns the result
 * of calling [`publicMethodNumber`]{@link module:modules/the-exports-object.publicMethodNumber}
 * with the length of the result of calling [`publicMethodString`]{@link module:modules/the-exports-object.publicMethodString}
 * with the string `test`.
 * @example
 * exports.publicMethodExec() // returns 26
 * @returns {number} A constant value of `26`.
 */
exports.publicMethodExec = function () {
  if (privateMethod(exports.publicMethod(false))) {
    return publicMethodNumber(publicMethodString('test').length)
  }
}
