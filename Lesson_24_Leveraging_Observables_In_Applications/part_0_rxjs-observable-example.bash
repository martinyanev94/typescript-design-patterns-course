npm install rxjs
import { Observable } from 'rxjs';

const numberObservable = new Observable<number>(subscriber => {
    subscriber.next(1);
    subscriber.next(2);
    subscriber.next(3);
    subscriber.complete();
});

numberObservable.subscribe({
    next(value) { console.log(`Received value: ${value}`); },
    complete() { console.log('Observable completed.'); }
});
