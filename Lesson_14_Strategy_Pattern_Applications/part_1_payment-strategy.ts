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
