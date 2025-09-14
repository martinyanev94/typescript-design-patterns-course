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
paymentContext.executePayment(100); // Output: Paying $100 using Credit Card.

paymentContext.setStrategy(new PayPalPayment());
paymentContext.executePayment(150); // Output: Paying $150 using PayPal.
