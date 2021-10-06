// goal is not write ts syntax rn but to see how it works

import axios from 'axios'

const url = 'https://jsonplaceholder.typicode.com/todos/1'

// we can create a type of object
// this will set up the types
interface Todo {
  id: number;
  title: string;
  completed; boolean;
}

axios.get(url).then(response => {
  // adding "as Todo" pretty much tells TS that this gonna be one of those todods
  const todo = response.data as Todo

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
  console.log(`
  the todo with ID: ${todo.id}
  title of: ${todo.title}
  completed: ${todo.completed}
  `);
})


// so we have to compile this to js
// todo so we have to use tsc index.ts
// so  when we run tsc, itll compile it as vanilla js and be a copy of the ts file converted to js
// can run node index.js to see the data
