import { Observable } from 'rxjs';

const numberObservable = new Observable<number>(subscriber => {
    let count = 0;
    const intervalId = setInterval(() => {
        subscriber.next(count++);
        if (count > 5) {
            subscriber.complete();
            clearInterval(intervalId);
        }
    }, 1000);
});

numberObservable.subscribe({
    next(value) {
        console.log(`Received: ${value}`);
    },
    complete() {
        console.log('Observable complete!');
    }
});
