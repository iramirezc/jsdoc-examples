/***
 * Ref:
 * - https://jsdoc.app/tags-type.html
 * - https://github.com/google/closure-compiler/wiki/Types-in-the-Closure-Type-System
 */

// Primitive Types
// ==================================================

/**
 * Example of a `boolean` type
 * @type {boolean}
 */
const BOOL = true

/**
 * Example of a `null` type
 * @type {null}
 */
const NIL = null

/**
 * Example of an `undefined` type
 * @type {undefined}
 */
const UNDEF = undefined

/**
 * Example of a `number` type
 * @type {number}
 */
const number = 9

/**
 * Example of a `bigint`
 * @type {bigint}
 */
const bigNumber = 2n ** 53n

/**
 * Example of a `string`
 * @type {string}
 */
const string = 'Hello World'

/**
 * Example of a `symbol`
 * @type {symbol}
 */
const Iterator = Symbol.iterator

// Any, Multiple, Nullable & Non-Nullable Types
// ==================================================

/**
 * Example of `any` type
 * @type {*}
 */
const any = { bool: true, n: 1, str: 'secret' }

/**
 * Example of multiple types using `()`
 * @type {(number|string|boolean)}
 */
const multiple = true

/**
 * Example of a `nullable` type (either a `number` or `null`)
 * @type {?number}
 */
const n = null

/**
 * Example of a `non-nullable` type (a `string` but never `null`)
 * @type {!string}
 */
const str = 'Hello'

// Type Definitions
// ==================================================

/**
 * @typedef Vector
 * @type {object}
 * @property {string} x - Point X
 * @property {string} y - Point Y
 */

/**
 * Example of a custom `Vector` type
 * @type {Vector}
 */
const v = { x: 1, y: 0 }

// Objects
// ==================================================

/**
 * Example of an `object` with `any` schema
 * @type {object}
 */
const anySchema = { access: true, code: 123, secret: 'sugar' }

/**
 * Example of an `object` using `{}` literal
 * @type {{ name: string, age: number, single: boolean, location: Vector, skills }}
 */
const props = { name: 'Isaac', age: 33, single: true, location: { x: 1, y: 1 }, skills: { ninja: true } }

/**
 * Example of an `object` using `string` keys with `number` values
 * @type {Object<string, number>}
 */
const dictionary = { A: 10, B: 20, C: 30 }

// Arrays
// ==================================================

/**
 * Example of an `array` of any using `Array` constructor
 * @type {Array}
 */
let fruits

/**
 * Example of an `array` of any using `Array<*>` notation
 * @type {Array<*>}
 */
let candy

/**
 * Example of an `array` of `strings` using `[]` literal
 * @type {string[]}
 */
const hobbies = ['photography', 'free diving', 'sport climbing']

/**
 * Example of an `array` of `strings` using `Array` constructor
 * @type {Array<string>}
 */
const food = ['mexican', 'japanese', 'italian']

/**
 * Example of an `array` of `Vectors` using `[]` literal
 * @type {Vector[]}
 */
const vectors = [{ x: 1, y: 1 }, { x: 2, y: -1 }]

/**
 * Example of an `array` of `Vectors` using `Array` constructor
 * @type {Array<Vector>}
 */
const coordinates = [{ x: 1, y: 1 }, { x: 2, y: -1 }]

// Callback Functions
// ==================================================

/**
 * @callback displayNamesCB
 * @param {string[]} names - The list of names to be displayed
 */

/**
 * @type {displayNamesCB}
 */
let cb // notice that when calling `cb()` the param `names` will be shown
