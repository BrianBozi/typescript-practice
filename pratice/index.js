"use strict";
// goal is not write ts syntax rn but to see how it works
exports.__esModule = true;
var axios_1 = require("axios");
var url = 'https://jsonplaceholder.typicode.com/todos/1';
axios_1["default"].get(url).then(function (response) {
    console.log(response.data);
});
// so we have to compile this to js
// todo so we have to use tsc inswx.ts
