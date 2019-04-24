import { log } from './utils/promise-helper.js';
import './utils/array-helper.js';
import { notasService as service } from './nota/service.js';
import { takeUntil, debounceTime } from './utils/operators.js';

const action = debounceTime(500, 
    takeUntil(3, () =>
        service.sumItems('2143')
        .then(log)
        .catch(log)
    )
);

document
    .querySelector('#myButton')
    .onclick = action;
