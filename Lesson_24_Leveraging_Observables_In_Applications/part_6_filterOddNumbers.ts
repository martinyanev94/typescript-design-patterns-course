import { Observable } from 'rxjs';
import { filter } from 'rxjs/operators';

function oddNumbers(): (source: Observable<number>) => Observable<number> {
    return (source: Observable<number>) => source.pipe(
        filter(number => number % 2 !== 0)
    );
}

const numbers$ = new Observable<number>(subscriber => {
    for (let i = 1; i <= 10; i++) {
        subscriber.next(i);
    }
    subscriber.complete();
});

numbers$.pipe(oddNumbers()).subscribe({
    next(value) { console.log(`Odd number: ${value}`); },
});
