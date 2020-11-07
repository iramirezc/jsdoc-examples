### @note tag

My custom made `@note` tag.

_NOTE: It is recommended to place `@note` right after the description block or the `@description` tag._

#### Examples

Example using `@note` tag after the description block:

```js
/**
 * Divides number `a` by number `b`.
 * @note Validation of any kind is NOT implemented.
 * @param {number} a - The dividend.
 * @param {number} b - The divisor.
 * @returns {number} The result of the operation `a / b`.
 */
function divide(a, b) { return a / b; }
```

Example using `@note` tag after the `@description` tag:

```js
/**
 * @description Calculates the factorial number for `n`.
 * @note No safe checking is implemented. Use with caution!
 * @param {number} n - The number to get the factorial.
 * @returns {number} The factorial of `n`.
 */
function factorial (n) { /* implementation omitted */ }
```
