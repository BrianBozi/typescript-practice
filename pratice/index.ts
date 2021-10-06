// goal is not write ts syntax rn but to see how it works

import axios from 'axios'

const url = 'https://jsonplaceholder.typicode.com/todos/1'

axios.get(url).then(response => {
  console.log(response.data);
})


// so we have to compile this to js
// todo so we have to use tsc index.ts
// so  when we run tsc, itll compile it as vanilla js and be a copy of the ts file converted to js
// can run node index.js to see the data
