import { handleStatus, log } from './utils/promise-helper.js';

document
    .querySelector('#myButton')
    .onclick = () =>
        fetch('http://localhost:3000/notas')
        .then(handleStatus)
        .then(log)
        .catch(log);