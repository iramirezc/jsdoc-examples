/** @module data-types/object */

/**
 * Example of `@type {object}`
 * @type {object}
 */
const aMixedObject = { access: true, code: 123, secret: 'zucker' }

/**
 * Example of `@type {{ name: string, age: number, admin: boolean, location: Vector, skills }}`
 * @type {{ name: string, age: number, admin: boolean, location: Vector, skills }}
 */
const aSchemaObject = { name: 'Isaac', age: 33, admin: true, location: { x: 1, y: 0 }, skills: ['javascript'] }

/**
 * Example of `@type {Object<string, number>}`
 * @type {Object<string, number>}
 */
const anObjectOfStringKeysAndNumberValues = { A: 10, B: 20, C: 30 }
