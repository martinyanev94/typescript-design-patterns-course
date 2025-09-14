import { map } from 'rxjs/operators';

// Creating an observable to emit numbers
const doubledObservable = numberObservable.pipe(
    map(value => value * 2)
);

doubledObservable.subscribe({
    next(value) {
        console.log(`Doubled Received: ${value}`);
    },
    complete() {
        console.log('Doubled Observable complete!');
    }
});
