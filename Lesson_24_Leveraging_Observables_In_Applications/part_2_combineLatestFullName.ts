import { combineLatest, of } from 'rxjs';

const firstName$ = of('John');
const lastName$ = of('Doe');

const fullName$ = combineLatest([firstName$, lastName$]);

fullName$.subscribe({
    next([firstName, lastName]) { 
        console.log(`Full Name: ${firstName} ${lastName}`); 
    }
});
