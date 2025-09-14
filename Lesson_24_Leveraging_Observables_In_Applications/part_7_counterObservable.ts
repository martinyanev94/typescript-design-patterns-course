import { BehaviorSubject } from 'rxjs';

const counter$ = new BehaviorSubject(0);

counter$.subscribe({
    next(value) { 
        console.log(`Counter value: ${value}`); 
    }
});

// Increment counter
counter$.next(counter$.getValue() + 1);
counter$.next(counter$.getValue() + 1);
