interface PaymentStrategy {
    pay(amount: number): void;
}

class CreditCardPayment implements PaymentStrategy {
    pay(amount: number): void {
        console.log(`Paying $${amount} using Credit Card.`);
    }
}

class PayPalPayment implements PaymentStrategy {
    pay(amount: number): void {
        console.log(`Paying $${amount} using PayPal.`);
    }
}

class BankTransferPayment implements PaymentStrategy {
    pay(amount: number): void {
        console.log(`Paying $${amount} via Bank Transfer.`);
    }
}

class PaymentContext {
    private strategy: PaymentStrategy;

    setStrategy(strategy: PaymentStrategy): void {
        this.strategy = strategy;
    }

    executePayment(amount: number): void {
        this.strategy.pay(amount);
    }
}

// Usage
const paymentContext = new PaymentContext();

paymentContext.setStrategy(new CreditCardPayment());
paymentContext.executePayment(100);

paymentContext.setStrategy(new PayPalPayment());
paymentContext.executePayment(150);
