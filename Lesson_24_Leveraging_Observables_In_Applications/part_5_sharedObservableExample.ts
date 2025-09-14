import { Observable } from 'rxjs';
import { share } from 'rxjs/operators';

const sharedObservable = new Observable<number>(subscriber => {
    console.log('Creating observable...');
    subscriber.next(Math.random()); // Emit a random number
    subscriber.complete();
}).pipe(share());

sharedObservable.subscribe({
    next(value) { console.log(`Subscriber 1 received: ${value}`); }
});

sharedObservable.subscribe({
    next(value) { console.log(`Subscriber 2 received: ${value}`); }
});
