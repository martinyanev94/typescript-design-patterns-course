interface PaymentStrategy {
    pay(amount: number): void;
}

class CreditCardPayment implements PaymentStrategy {
    pay(amount: number): void {
        console.log(`Paid ${amount} using Credit Card.`);
    }
}

class PayPalPayment implements PaymentStrategy {
    pay(amount: number): void {
        console.log(`Paid ${amount} using PayPal.`);
    }
}

class ShoppingCart {
    private paymentStrategy: PaymentStrategy;

    setPaymentStrategy(paymentStrategy: PaymentStrategy) {
        this.paymentStrategy = paymentStrategy;
    }

    checkout(amount: number): void {
        this.paymentStrategy.pay(amount);
    }
}

// Usage
const cart = new ShoppingCart();
cart.setPaymentStrategy(new CreditCardPayment());
cart.checkout(100); // Outputs: Paid 100 using Credit Card.

cart.setPaymentStrategy(new PayPalPayment());
cart.checkout(50); // Outputs: Paid 50 using PayPal.
