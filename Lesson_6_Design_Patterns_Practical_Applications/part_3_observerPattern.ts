interface Observer {
    update: (data: string) => void;
}

class Subject {
    private observers: Observer[] = [];

    public subscribe(observer: Observer): void {
        this.observers.push(observer);
    }

    public unsubscribe(observer: Observer): void {
        this.observers = this.observers.filter(obs => obs !== observer);
    }

    public notify(data: string): void {
        this.observers.forEach(observer => observer.update(data));
    }
}

// Implementing Concrete Observers 
class ConcreteObserverA implements Observer {
    public update(data: string): void {
        console.log(`ConcreteObserverA received: ${data}`);
    }
}

class ConcreteObserverB implements Observer {
    public update(data: string): void {
        console.log(`ConcreteObserverB received: ${data}`);
    }
}

// Usage
const subject = new Subject();
const observerA = new ConcreteObserverA();
const observerB = new ConcreteObserverB();

subject.subscribe(observerA);
subject.subscribe(observerB);

subject.notify('Hello Observers!');
// Output:
// ConcreteObserverA received: Hello Observers!
// ConcreteObserverB received: Hello Observers!
