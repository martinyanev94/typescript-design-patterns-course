import { interval } from 'rxjs';
import { take } from 'rxjs/operators';

const timerObservable = interval(1000).pipe(take(5));

timerObservable.subscribe({
    next(value) { console.log(`Timer tick: ${value}`); },
    complete() { console.log('Timer completed.'); }
});
