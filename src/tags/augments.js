/** @module tags/@augments */

// ES2015: SuperClassA
// ==================================================

/**
 * This is the description of `SuperClassA`.
 */
class SuperClassA {
  /**
   * This is the description of the `constructor`.
   * @param {string} name - The `sting` name of the instance.
   */
  constructor(name) {
    this.name = name
  }

  /**
   * Returns the instance's name as string with a prefix `A:`.
   * @example <caption>Creating an instance</caption>
   * const coffee = new SuperClassA('coffee')
   * console.log(coffee.toString()) // 'A: coffee'
   * @returns {string} The instance's name like `A: myName`
   */
  toString() {
    return `A: ${this.name}`
  }
}

// ES2015: SubClassA
// ==================================================

/**
 * This is the description of `SubClassA`.
 * @augments module:tags/@augments~SuperClassA
 */
class SubClassA extends SuperClassA {}

// Instance Examples
// ==================================================

const a = new SubClassA('coffee')

a.toString() // NOTE: In VSCode, hover over the method to see the docs.