# Base10

Convert text to numbers and vice-verca.

# Install
```
npm install AldieNightStar/NodeJS_Base10
```

# Usage
```js
const b10 = require("Base10");

let numbers = b10.toNumbers(Buffer.from("Hello, world!"));
// Output: 072101108108111044032119111114108100033

let data    = b10.toData(numbers);
// Output: Hello, world!

console.log(data.toString());
```