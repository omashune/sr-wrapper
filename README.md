# SR-Wrapper
SR-Wrapper is a simple [sovetromantica](https://sovetromantica.com) API wrapper for Node.js 

[API Documentation](https://service.sovetromantica.com/)

# Installation

`npm i sr-wrapper`

# Example

The code below will print information about each ongoing to the console
```js
const SRWrapper = require('sr-wrapper');
const wrapper = new SRWrapper();

wrapper.ongoing()
    .then(ids => wrapper.animes(ids))
    .then(res => console.log(res));
```