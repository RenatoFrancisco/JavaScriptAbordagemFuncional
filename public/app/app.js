import { log } from './utils/promise-helper.js';
import './utils/array-helper.js';
import { notasService as service } from './nota/service.js';
import { takeUntil } from './utils/operators.js';

const operation1 = takeUntil(3, () =>
    service.sumItems('2143')
    .then(log)
    .catch(log)
);

document
    .querySelector('#myButton')
    .onclick = operation1;
