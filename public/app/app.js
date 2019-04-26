import { log, timeoutPromise, retry } from './utils/promise-helper.js';
import './utils/array-helper.js';
import { notasService as service } from './nota/service.js';
import { takeUntil, debounceTime, partialize, pipe } from './utils/operators.js';
import { EventEmitter } from './utils/event-emitter.js';
import { Maybe } from './utils/maybe.js';

const resultado = Maybe
    .of(10)
    .map(value => value + 10) 
    .map(value => value + 30)
    .getOrElse(0); // retorna 50

alert(resultado);


const operations = pipe(
    partialize(takeUntil, 3),
    partialize(debounceTime, 500)
);

const action =  operations(() =>
    retry(3, 3000, () => timeoutPromise(200, service.sumItems('2143')))
    .then(total => EventEmitter.emit('itensTotalizados', total))
    .then(log)
    .catch(log)
);

document
    .querySelector('#myButton')
    .onclick = action;
