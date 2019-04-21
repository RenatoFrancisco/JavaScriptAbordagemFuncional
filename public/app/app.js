import { handleStatus } from './utils/promise-helper.js';

document
    .querySelector('#myButton')
    .onclick = () =>
        fetch('http://localhost:3000/notas')
        .then(handleStatus)
        .then(notas => console.log(notas))
        .catch(console.log);