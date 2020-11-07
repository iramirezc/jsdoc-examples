/** @module comments */

/*
 * This block comment with syntax `/*` should be ignored!
 * @type {boolean}
 */
const shouldBeIgnored1 = true

/* This inline comment with syntax `/*` should be ignored!*/
const shouldBeIgnored2 = true

/***
 * This block comment with syntax `/***` should be ignored!
 * @type {boolean}
 */
const shouldBeIgnored3 = true

/*** This inline comment with syntax `/***` should be ignored! */
const shouldBeIgnored4 = true

// This comment with syntax `//` should be ignored!
// @type {boolean}
const shouldBeIgnored5 = true

/**
 * Example of a valid JSDoc block comment describing a variable.
 * @type {boolean}
 */
const aSimpleBlockComment = true

/**
 * Example of a valid JSDoc block comment but with nothing to describe.
 * Should you be reading this? I guess NOT!
 */

/**
 * Example of a block comment using a block tag `@param`.
 * @param {number} n Just give me any number!
 */
function exampleOfBlockTagComment(n) { /* noop */ }

/**
 * Example of a block comment using an inline tag `@link`.
 * @param {string} s Just give me any string! <br> What's a string? {@link https://en.wikipedia.org/wiki/String_(computer_science)}
 */
function exampleOfInlineTagComment(s) { /* noop */ }
