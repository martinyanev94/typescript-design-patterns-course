import { from } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

const fetchUserData = (userId: number) => {
    return new Observable(subscriber => {
        fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
            .then(response => response.json())
            .then(data => {
                subscriber.next(data);
                subscriber.complete();
            })
            .catch(err => subscriber.error(err));
    });
};

fetchUserData(1)
    .pipe(
        map(user => `User Name: ${user.name}`),
        catchError(error => {
            console.error('Error fetching data', error);
            return 'Error occurred';
        })
    )
    .subscribe({
        next(message) {
            console.log(message);
        },
        error(err) {
            console.error(err);
        },
        complete() {
            console.log('Fetch complete!');
        }
    });
