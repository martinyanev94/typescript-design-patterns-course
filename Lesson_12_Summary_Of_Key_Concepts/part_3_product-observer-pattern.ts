interface Observer {
    update(data: any): void;
}

class ProductObserver implements Observer {
    update(data: any): void {
        console.log(`Product updated: ${data}`);
    }
}

class Product {
    private observers: Observer[] = [];
    private name: string;

    constructor(name: string) {
        this.name = name;
    }

    addObserver(observer: Observer): void {
        this.observers.push(observer);
    }

    changeName(newName: string): void {
        this.name = newName;
        this.notifyObservers();
    }

    private notifyObservers(): void {
        this.observers.forEach(observer => observer.update(this.name));
    }
}

const product = new Product("Old Product");
const observer = new ProductObserver();

product.addObserver(observer);
product.changeName("New Product");
