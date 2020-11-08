/** @module tags/@param */

// Primitive Types
// ==================================================

/**
 * @summary `@param {bigint}`
 * @description Example of a `bigint` parameter.
 * @example
 * setBigInt(1n)
 * @param {bigint} bigInt - The `bigint` parameter.
 */
function setBigInt (bigInt) { /* noop */ }

/**
 * @summary `@param {boolean}`
 * @description Example of a `boolean` parameter.
 * @example
 * setBoolean(true)
 * setBoolean(false)
 * @param {boolean} bool - The `boolean` parameter.
 */
function setBoolean (bool) { /* noop */ }

/**
 * @summary `@param {null}`
 * @description Example of a `null` parameter.
 * @example
 * setNull(null)
 * @param {null} nil - The `null` parameter.
 */
function setNull (nil) { /* noop */ }

/**
 * @summary `@param {number}`
 * @description Example of a `number` parameter.
 * @example
 * setNumber(1)
 * setNumber(-1)
 * @param {number} num - The `number` parameter.
 */
function setNumber (num) { /* noop */ }

/**
 * @summary `@param {string}`
 * @description Example of a `string` parameter.
 * @example
 * setString('Hello!')
 * @param {string} str - The `string` parameter.
 */
function setString (str) { /* noop */ }

/**
 * @summary `@param {symbol}`
 * @description Example of a `symbol` parameter.
 * @example
 * setSymbol(Symbol.iterator)
 * @param {symbol} sym - The `symbol` parameter.
 */
function setSymbol (sym) { /* noop */ }

/**
 * @summary `@param {undefined}`
 * @description Example of an `undefined` parameter.
 * @example
 * setUndefined(undefined)
 * @param {undefined} undef - The `undefined` parameter.
 */
function setUndefined (undef) { /* noop */ }

// Any, Multiple, Nullable, Non-Nullable, Optional, Unknown
// ==================================================

/**
 * @summary `@param {*}`
 * @description Example of a parameter that can receive any value.
 * @example
 * setAny(null)
 * setAny(undefined)
 * setAny(true)
 * setAny(1)
 * setAny('Hello!')
 * setAny([])
 * setAny({})
 * setAny(Symbol.iterator)
 * @param {*} any - Any param type.
 */
function setAny(any) { /* noop */ }

/**
 * @summary `@param {(number|string|boolean)}`
 * @description Example of a parameter that can receive
 * either a `number`, a `string`, or a `boolean`.
 * @example
 * setAnyOf(1)
 * setAnyOf('Hello!')
 * setAnyOf(false)
 * @param {(number|string|boolean)} anyOfTheType - A `number`, a `string` or a `boolean`.
 */
function setAnyOf(anyOfTheType) { /* noop */ }


/**
 * @summary Optional `@param {string} [name]`
 * @description Example of an optional parameter.
 * @note This can be applied to any other type.
 * @example
 * setOptional() // value is undefined
 * setOptional('No!')
 * @param {string} [str] - An **optional** `string`.
 */
function setOptional (str) { /* noop */ }

/**
 * @summary Optional `@param {string=}`
 * @description Example 2 of an optional parameter.
 * @note This can be applied to any other type.
 * @example
 * setOptional2() // value is undefined
 * setOptional2('No!')
 * @param {string=} srt - An **optional** `string`.
 */
function setOptional2 (str) { /* noop */ }

/**
 * @summary `@param {?number}`
 * @description Example of a `nullable` parameter that can be
 * either a `number` or `null`.
 * @note This can be applied to any other type.
 * @example
 * setNullable(1)
 * setNullable(null)
 * @param {?number} num - A `number` or `null`.
 */
function setNullable (num) { /* noop */ }

/**
 * @summary `@param {!string}`
 * @description Example of a `non-nullable` parameter.
 * @note This can be applied to any other type.
 * @example
 * setNonNullable('Hello!')
 * setNonNullable(null) // this should NOT be allowed
 * @param {!string} str - A `string` that can NOT be `null`.
 */
function setNonNullable (str) { /* noop */ }

/**
 * @summary Optional + default `@param {string} [name='default']`
 * @description Example of an optional parameter with a default value.
 * @note This can be applied to any other type.
 * @example
 * setWithDefault() // sets the default value 'Hello!'
 * setWithDefault('Hi!') // uses value 'Hi!' provided
 * @param {string} [greet='Hello!'] - The greeting string.
 */
function setWithDefault (greet) { /* noop */ }

/**
 * @summary Optional + default `@param {string}`
 * @description Example 2 of an optional parameter with default value.
 * @note This can be applied to any other type.
 * @example
 * setWithDefault2() // sets the default value 'Good Bye!'
 * setWithDefault2('Bye!') // uses value 'Bye!' provided
 * @param {string} adieu - The adieu string.
 */
function setWithDefault2 (adieu = 'Good Bye!') { /* noop */ }

/**
 * @summary `@param {?}`
 * @description Example of an `unknown` parameter.
 * @example
 * setUnknown(someVarWhichIDoNotKnowTheType)
 * @param {?} u - The unknown parameter?
 */
function setUnknown (u) { /* noop */ }

// Objects
// ==================================================

/**
 * @summary `@param {Object}`
 * @description Example of an Object parameter with any schema.
 * @example
 * setObjectWithAnySchema({ access: true, secret: 'pa$$sw0rd' })
 * setObjectWithAnySchema({ id: 1, firstName: 'Jon', lasName: 'Doe' })
 * @param {Object} obj - An Object with any schema.
 */
function setObjectWithAnySchema (obj) { /* noop */ }

/**
 * @summary `@param {{ name: string, age: number, single: boolean, location: Vector, skills }}`
 * @description Example of an Object parameter with a defined schema.
 * @see {@link module:tags/@typedef~Vector}
 * @example
 * setObjectWithSchema({
 *    name: 'Jon',
 *    age: 40,
 *    admin: true,
 *    location: { x: 1, y: 0 },
 *    skills: ['javascript']
 * })
 *
 * setObjectWithSchema({
 *    name: 'Doe',
 *    age: 30,
 *    admin: false,
 *    location: { x: 2, y: -1 },
 *    skills: { cooking: true }
 * })
 * @param {{ name: string, age: number, single: boolean, location: Vector, skills }} obj - An Object with the requested schema.
 */
function setObjectWithSchema (obj) { /* noop */ }

/**
 * @summary `@param {Object}` with `props` defined one by one.
 * @description Example of an Object parameter with a defined schema prop by prop.
 * @example
 * setObjectWithProps({
 *    firstName: 'Isaac',
 *    lastName: 'Ramírez',
 *    age: 33,
 *    hasAPet: false,
 *    config: { allowNotifications: true }
 * })
 *
 * setObjectWithProps({
 *    firstName: 'Cinthia',
 *    lastName: 'Davalos',
 *    age: 33,
 *    hasAPet: true,
 *    config: { multiFactorAuth: true }
 * })
 * @param {Object} props - The `prop` Object holding the schema for a person.
 * @param {string} props.firstName - A `string` property as the first name.
 * @param {string} props.lastName - A `string` property as the last name.
 * @param {number} [props.age] - An optional `number` property as the age.
 * @param {boolean} props.hasAPet - A `boolean` property to know if the person has a pet.
 * @param {*} props.config - A config `Object` with any schema.
 */
function setObjectWithProps (props) { /* noop */ }

/**
 * @summary `@param {Object<string, number>}`
 * @description Example of an Object parameter with `string` keys and `number` values.
 * @note This can be applied to any other type.
 * @example
 * setObjectOfKeyValues({ min: 1, max: 10 })
 * setObjectOfKeyValues({ apples: 11, bananas: 2, chocolate: 3 })
 * @param {Object<string, number>} obj - An Object with `string` keys and `number` values.
 */
function setObjectOfKeyValues (obj) { /* noop */ }

// Arrays
// ==================================================

/**
 * @summary `@param {Array}`
 * @description Example of an `Array` of any type.
 * @example
 * setArrayOfAny([1, true, 'Hello!'])
 * @param {Array} arrayOfAny - The `Array` of any data type.
 */
function setArrayOfAny (arrayOfAny) { /* noop */ }

/**
 * @summary `@param {Array<*>}`
 * @description Example 2 of an `Array` of any type.
 * @example
 * setArrayOfAny2([{}, [], false])
 * @param {Array<*>} arrayOfAny - The `Array` of any data type.
 */
function setArrayOfAny2 (arrayOfAny) { /* noop */ }

/**
 * @summary `@param {Array<number>}`
 * @description Example of an `Array` of `number` values.
 * @note This can be applied to any other type:
 * `Array<bigint>`, `Array<boolean>`, `Array<null>`, `Array<number>`,
 * `Array<string>`, `Array<symbol>`, `Array<undefined>`,
 * `Array<Array>`, `Array<Object>`, `Array<Vector>`, etc.
 * @example
 * setArrayOfType([1, 2, 3])
 * @param {Array<number>} arrayOfType - The `Array` containing **only** `number` values.
 */
function setArrayOfType (arrayOfType) { /* noop */ }

/**
 * @summary `@param {string[]}`
 * @description Example of an `Array` of `string` values.
 * @note This can be applied to some other type:
 * `bigint[]`, `boolean[]`, `number[]`,
 * `string[]`, `symbol[]`,
 * `Object[]`, `Vector[]`, etc.
 * @example
 * setArrayOfType2(['a', 'b', 'c'])
 * @param {string[]} arrayOfType - The `Array` containing **only** `string` values.
 */
function setArrayOfType2 (arrayOfType) { /* noop */ }

/**
 * @summary `@param Array<Object>`
 * @description Example of an `Array` of `Object` values with any schema.
 * @example
 * setArrayOfObjectsWithAnySchema([
 *    { x: 1 },
 *    { name: 'Doe' },
 *    { isTeaPot: true }
 * ])
 * @param {Array<Object>} arrayOfObjects - The `Array` of `Object` values with any schema.
 */
function setArrayOfObjectsWithAnySchema(arrayOfObjects) { /* noop */ }

/**
 * @summary `@param {Array<{ name: string, age: number, admin: boolean }>}`
 * @description Example of an `Array` of `Object` values with a defined schema.
 * @example
 * setArrayOfObjectsWithSchema([
 *    {
 *      name: 'Jon',
 *      age: 40,
 *      admin: false
 *    },
 *    {
 *      name: 'Doe',
 *      age: 50,
 *      admin: true
 *    }
 * ])
 * @param {Array<{ name: string, age: number, admin: boolean }>} arrayOfObjects - The `Array` of `Object` values with a defined schema.
 */
function setArrayOfObjectsWithSchema(arrayOfObjects) { /* noop */ }

/**
 * @summary `@param {Array<Object<string, boolean>>}`
 * @description Example of an `Array` of `Object` values with `string` keys and `boolean` values.
 * @example
 * setArrayOfObjectsOfKeyValues([
 *    {
 *      isAdmin: true,
 *      hasAccess: false,
 *      isHuman: true
 *    }
 * ])
 * @param {Array<Object<string, boolean>>} arrayOfObjects - The `Array` of `Object` values with `string` keys and `boolean` values.
 */
function setArrayOfObjectsOfKeyValues() { /* noop */ }

/**
 * @summary `@param {Vector[]}`
 * @description Example of an `Array` of a defined type `Vector`.
 * @see {@link module:tags/@typedef~Vector}
 * @example
 * setArrayOfVectors([
 *    { x: 1, y: 1 },
 *    { x: 2, y: -1 }
 * ])
 * @param {Vector[]} arrayOfVectors - The `Array` of `Vector` objects.
 */
function setArrayOfVectors(arrayOfVectors) { /* noop */ }

/**
 * @summary `@param {Array<Array<number>>}`
 * @description Example of an `Array` of `Array`s of `number` values (Matrix).
 * @example
 * setArrayOfArrays([
 *    [1, 2, 3],
 *    [4, 5, 6]
 * ])
 * @param {Array<Array<number>>} arrayOfArrays - The `Array` of `Array`s of `number` values.
 */
function setArrayOfArrays(arrayOfArrays) { /* noop */ }

/**
 * @summary `@param {...number}`
 * @description Example of a variable number of `number` parameters.
 * @example
 * setUnknownArgs(1) // returns 1
 * setUnknownArgs(1, 2, 3) // returns 6
 * setUnknownArgs(1, 2, 3, 4, 5) // returns 15
 * @param {...number} args - Any number of `number` values.
 * @returns {number} The sum of all the numbers provided.
 */
function setUnknownArgs () { let sum = 0; for (let i = 0; i < arguments.length; i++) sum += arguments[i]; return sum }

// Callbacks
// ==================================================

/**
 * @summary `@param {fetchUsersByIdsCB}`
 * @description Example of a `fetchUsersByIdsCB` callback function as a parameter.
 * @see {@link module:tags/@callback~fetchUsersByIdsCB}
 * @example
 * callCallback(fetchUsers) // passing the `fetchUsers` as a callback defined by the `fetchUsersByIdsCB` callback type.
 * @param {fetchUsersByIdsCB} callbackFn - The callback function that will be executed.
 */
function callCallback (callbackFn) { callbackFn([1, 2, 3]) }
