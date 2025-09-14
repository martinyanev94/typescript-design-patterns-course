import { Subject } from 'rxjs';

// Create a subject that can multicast to many subscribers
const subject = new Subject<number>();

// First subscriber
subject.subscribe(value => console.log(`Subscriber 1: ${value}`));

// Second subscriber
subject.subscribe(value => console.log(`Subscriber 2: ${value}`));

// Emit values
subject.next(1);
subject.next(2);
