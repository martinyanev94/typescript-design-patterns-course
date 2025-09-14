import { fromEvent } from 'rxjs';
import { map } from 'rxjs/operators';

const button = document.getElementById('myButton');

const clicks$ = fromEvent(button, 'click').pipe(
    map((event: MouseEvent) => ({
        x: event.clientX,
        y: event.clientY
    }))
);

clicks$.subscribe({
    next(position) { 
        console.log(`Button clicked at position: X: ${position.x}, Y: ${position.y}`); 
    }
});
