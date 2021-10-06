"use strict";
// goal is not write ts syntax rn but to see how it works
exports.__esModule = true;
var axios_1 = require("axios");
var url = 'https://jsonplaceholder.typicode.com/todos/1';
axios_1["default"].get(url).then(function (response) {
    // adding "as Todo" pretty much tells TS that this gonna be one of those todods
    var todo = response.data;
    // here is an error that we wouldnt find out until compiling in js
    // these are named wrong for assessing the data we want
    // const ID = todo.iD
    // const title = todo.title
    // const finished = todo.finished
    // the 3 have red scrigly lines, its ts saying something is wrong based on type
    // and it explains the error too
    // console.log(`
    // the todo with ID: ${todo.ID}
    // title of: ${todo.Title}
    // finished: ${todo.Finished}
    // `);
    // corrected way
    console.log("\n  the todo with ID: " + todo.id + "\n  title of: " + todo.title + "\n  completed: " + todo.completed + "\n  ");
});
// so we have to compile this to js
// todo so we have to use tsc index.ts
// so  when we run tsc, itll compile it as vanilla js and be a copy of the ts file converted to js
// can run node index.js to see the data
