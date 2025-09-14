interface PaymentStrategy {
    pay(amount: number): void;
}

class CreditCardPayment implements PaymentStrategy {
    public pay(amount: number): void {
        console.log(`Paid ${amount} using Credit Card.`);
    }
}

class PayPalPayment implements PaymentStrategy {
    public pay(amount: number): void {
        console.log(`Paid ${amount} using PayPal.`);
    }
}

class ShoppingCart {
    private paymentStrategy: PaymentStrategy;

    constructor(paymentStrategy: PaymentStrategy) {
        this.paymentStrategy = paymentStrategy;
    }

    public setPaymentStrategy(paymentStrategy: PaymentStrategy): void {
        this.paymentStrategy = paymentStrategy;
    }

    public checkout(amount: number): void {
        this.paymentStrategy.pay(amount);
    }
}

// Usage
const cart = new ShoppingCart(new CreditCardPayment());
cart.checkout(100); // Output: Paid 100 using Credit Card.

cart.setPaymentStrategy(new PayPalPayment());
cart.checkout(200); // Output: Paid 200 using PayPal.
