import { handleStatus, log } from './utils/promise-helper.js';
import './utils/array-helper.js';
import { notasService as service } from './nota/service.js';



document
    .querySelector('#myButton')
    .onclick = () =>
        service.sumItems('2143')
        .then(log)
        .catch(log);