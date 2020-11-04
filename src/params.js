/***
 * Ref:
 * - https://jsdoc.app/tags-type.html
 * - https://github.com/google/closure-compiler/wiki/Types-in-the-Closure-Type-System
 */

// Primitive Types as Function Parameters
// ==================================================

/**
 * Example of a `boolean` parameter
 * @param {boolean} b A boolean
 */
function isBoolean (b) { console.log(b) }

/**
 * Example of a `null` parameter
 * @param {null} nil A null value
 */
function isNull (nil) { console.log(nil) }

/**
 * Example of an `undefined` parameter
 * @param {undefined} undef An undefined value
 */
function isUndefined (undef) { console.log(undef) }

/**
 * Example of a `number` parameter
 * @param {number} n A number
 */
function isNumber (n) { console.log(n) }

/**
 * Example of a `bigint` parameter
 * @param {bigint} n A Big number
 */
function isBigNumber (n) { console.log(n) }

/**
 * Example of a `string` parameter
 * @param {string} s A string
 */
function isString (s) { console.log(s) }

/**
 * Example of a `symbol` parameter
 * @param {symbol} sym A Symbol
 */
function isSymbol (sym) { console.log(sym) }

// Any, Multiple, Nullable & Non-Nullable Type Parameters
// ==================================================

/**
 * Example of `any` parameter
 * @param {*} a Any parameter
 */
function isAny (a) { console.log(a) }

/**
 * Example of an `unknown` parameter
 * @param {?} p An unknown parameter
 */
function isDefined (p) { console.log(p) }

/**
 * Example of a multiple type parameter
 * @param {(boolean|number|string)} k A parameter that can be either a `boolean`, a `number` or a `string`.
 */
function isBoolOrNumberOrString (k) { console.log(k) }

/**
 * Example of a `nullable` parameter
 * @param {?number} n A `number` or `null`
 */
function setOptionalNumber (n) { console.log(n) }

/**
 * Example of a `non-nullable` parameter
 * @param {!string} s A `string` that can NOT be null
 */
function setString (s) { console.log(s) }

// Optional & Default Parameters
// ==================================================

/**
 * Example 1 of an optional `string` parameter
 * @param {string} [k] The key to search for
 */
function findByKey (k) { console.log(k) }

/**
 * Example 2 of an optional `string` parameter
 * @param {string=} id The ID to search for
 */
function findById (id) { console.log(id) }

/**
 * Example 1 of an optional `string` parameter with default value
 * @param {string} [order='asc'] Sorting order
 */
function sortBy (order) { order = order || 'asc'; console.log(order) }

/**
 * Example 2 of an optional `string` parameter with default value
 * @param {string} order Sorting order
 */
function sort (order = 'asc') { console.log(order) }

// Type Definitions as Function Parameters
// ==================================================

/**
 * @typedef Vector
 * @type {object}
 * @property {string} x - Point X
 * @property {string} y - Point Y
 */

/**
 * Example of a function that receives 2 `Vector` type parameters
 * @param {Vector} v1 Vector 1
 * @param {Vector} v2 Vector 2
 */
function getDistance (v1, v2) { return Math.sqrt(Math.pow(v2.x - v1.x, 2) + Math.pow(v2.y - v1.y, 2) * 1.0) }

// Objects as Function Parameters
// ==================================================

/**
 * Example of an `object` with `any` schema
 * @param {object} schema Any object
 */
function validateSchema (schema) { console.log(schema) }

/**
 * Example of an `object` with a defined schema
 * @param {{ name: string, age: number, single: boolean, location: Vector, skills }} props An object with the props
 */
function validateProps (props) { console.log(props) }

/**
 * Example of an `object` using `string` keys with `number` values
 * @param {Object<string, number>} hashMap An object like `{ a: 10 }`
 */
function search (hashMap) { console.log(hashMap) }

/**
 * Example of an `object` using multiline notation
 * @param {Object} props The object holding data
 * @param {string} props.firstName The first name
 * @param {string} props.lastName The last name
 * @param {number} [props.age] The age
 * @param {*} props.config A config object
 */
function getFullName (props) { console.log(props) }

// Arrays as Function Parameters
// ==================================================

/**
 * Example of an `array` of any using `[]` literal
 * @param {[]} vegetables The list of vegetables
 */
function displayVegetables (vegetables) { console.log(vegetables) }

/**
 * Example of an `array` of any using `Array` constructor
 * @param {Array} fruits The list of fruits
 */
function displayFruits (fruits) { console.log(fruits) }

/**
 * Example of an `array` of any using `Array<>` notation
 * @param {Array<>} candy The list of candy
 */
function displayCandy (candy) { console.log(candy) }

/**
 * Example of an `array` of `string` values using `[]` literal
 * @param {string[]} hobbies The list of hobbies.
 */
function mapHobbies (hobbies) { console.log(hobbies) }

/**
 * Example of an `array` of `string` values using `Array` constructor
 * @param {Array<string>} food The list of your favorite food.
 */
function findSimilarFood (food) { console.log(food) }

/**
 * Example of an `array` of `Vectors` using `[]` literal
 * @param {Vector[]} vectors The list of vectors
 */
function calculateDistance (vectors) { console.log(vectors) }

/**
 * Example of an `array` of `Vectors` using `Array` constructor
 * @param {Array<Vector>} coordinates
 */
function getClosestLocation (coordinates) { console.log(coordinates) }

/**
 * Example of a variable number of `numeric` parameters
 * @param {...number} numbers The numbers to be sum
 */
function getSum () { let sum = 0; for (let i = 0; i < arguments.length; i++) sum += arguments[i]; return sum }

// Callback Functions as Function Parameter
// ==================================================

/**
 * @callback displayUsersCB
 * @param {string[]} names - The list of users to be displayed
 */

/**
 * Example of a `callback` function as parameter
 * @param {displayUsersCB} cb Callback function that will process the users
 */
function fetchUsers (cb) { Promise.resolve(['J', 'K']).then(users => cb(users)) }
