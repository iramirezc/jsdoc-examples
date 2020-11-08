/** @module classes/ES2015 */

// ES2015: ASimpleClass
// ==================================================

/**
 * This is the description of `ASimpleClass`.
 */
class ASimpleClass {
  /**
   * This is the description of the `constructor`.
   * @param {Object} props - Any props `Object`.
   */
  constructor(props) {
    this.props = props
  }

  /**
   * @summary This is the summary of the `publicMethod`.
   * @description This is the description of the **public** method.
   * @param {number} - Any number.
   * @returns {number} The same provided number provided as argument.
   */
  publicMethod(n) {
    return n
  }

  /**
   * This is the description of the **static** method.
   * @summary This is the summary of the `staticMethod`.
   * @param {string} [str] - Any string.
   * @returns {boolean} Returns if the `str` was provided.
   */
  static staticMethod(str) {
    return !!str
  }
}

// ES2015: ASimpleClassFromExpression
// ==================================================

/**
 * This is the description of `ASimpleClassFromExpression`.
 */
const ASimpleClassFromExpression = class {
  /**
   * This is the description of the `constructor`.
   * @param {Object} props - Any props `Object`.
   */
  constructor(props) {
    this.props = props
  }

  /**
   * @summary This is the summary of the `publicMethod`.
   * @description This is the description of the **public** method.
   * @param {number} - Any number.
   * @returns {number} The same provided number provided as argument.
   */
  publicMethod(n) {
    return n
  }

  /**
   * This is the description of the **static** method.
   * @summary This is the summary of the `staticMethod`.
   * @param {string} [str] - Any string.
   * @returns {boolean} Returns if the `str` was provided.
   */
  static staticMethod(str) {
    return !!str
  }
}

// ES2015: ASubClass inherits ASimpleClass
// ==================================================

/**
 * This is the description of `ASubClass`.
 * @note Class documented by using the `@extends` tag.
 * @extends ASimpleClass
 */
class ASubClass extends ASimpleClass {
  /**
   * This is the description of the `constructor`.
   * @param {Object} props - Any props `Object`.
   * @param {Object} props.myProps - The actual props for this subclass.
   */
  constructor(props) {
    const { myProps, ...propsForParent } = props

    super(propsForParent)
    this.myProps = myProps
  }

  /**
   * @summary This is the summary of the `myOwnPublicMethod`.
   * @description This is the description of the **public** method.
   * @param {number} - Any number.
   * @returns {number} The same provided number provided as argument.
   */
  myOwnPublicMethod(n) {
    return n
  }

  /**
   * This is the description of the **static** method.
   * @summary This is the summary of the `myOwnStaticMethod`.
   * @param {string} [str] - Any string.
   * @returns {boolean} Returns if the `str` was provided.
   */
  static myOwnStaticMethod(str) {
    return !!str
  }
}

// ES2015: AnotherSubClass inherits ASimpleClassFromExpression
// ==================================================

/**
 * This is the description of `AnotherSubClass`.
 * @note Class documented by using the `@augments` tag.
 * @augments ASimpleClassFromExpression
 */
class AnotherSubClass extends ASimpleClassFromExpression {
  /**
   * This is the description of the `constructor`.
   * @param {Object} props - Any props `Object`.
   * @param {Object} props.myProps - The actual props for this subclass.
   */
  constructor(props) {
    const { myProps, ...propsForParent } = props

    super(propsForParent)
    this.myProps = myProps
  }

  /**
   * @summary This is the summary of the `myOwnPublicMethod`.
   * @description This is the description of the **public** method.
   * @param {number} - Any number.
   * @returns {number} The same provided number provided as argument.
   */
  myOwnPublicMethod(n) {
    return n
  }

  /**
   * This is the description of the **static** method.
   * @summary This is the summary of the `myOwnStaticMethod`.
   * @param {string} [str] - Any string.
   * @returns {boolean} Returns if the `str` was provided.
   */
  static myOwnStaticMethod(str) {
    return !!str
  }
}
