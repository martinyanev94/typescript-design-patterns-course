import { throwError, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

const fetchDataObservable = new Observable<string>(subscriber => {
    // Simulate a failed fetch operation
    subscriber.error('Failed to fetch data');
});

fetchDataObservable.pipe(
    catchError(error => {
        console.error(`Error occurred: ${error}`);
        return of('Default Data'); // Fallback value
    })
).subscribe({
    next(data) { 
        console.log(`Received data: ${data}`); 
    },
    error(err) { 
        console.error(`This will not be executed due to catchError.`); 
    }
});
