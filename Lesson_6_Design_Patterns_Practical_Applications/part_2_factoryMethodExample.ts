interface Product {
    operation(): string;
}

class ConcreteProductA implements Product {
    public operation(): string {
        return 'Result of ConcreteProductA';
    }
}

class ConcreteProductB implements Product {
    public operation(): string {
        return 'Result of ConcreteProductB';
    }
}

class Creator {
    public static factoryMethod(type: string): Product {
        if (type === 'A') {
            return new ConcreteProductA();
        } else if (type === 'B') {
            return new ConcreteProductB();
        }
        throw new Error('Unknown product type');
    }
}

// Usage
const productA = Creator.factoryMethod('A');
console.log(productA.operation()); // Output: Result of ConcreteProductA

const productB = Creator.factoryMethod('B');
console.log(productB.operation()); // Output: Result of ConcreteProductB
