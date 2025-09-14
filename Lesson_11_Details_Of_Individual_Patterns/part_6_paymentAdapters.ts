interface PaymentProcessor {
    process(amount: number): void;
}

class PayPal {
    makePayment(amount: number): void {
        console.log(`Processing payment of $${amount} through PayPal.`);
    }
}

class Stripe {
    charge(amount: number): void {
        console.log(`Charging $${amount} via Stripe.`);
    }
}

class PayPalAdapter implements PaymentProcessor {
    private paypal: PayPal;

    constructor(paypal: PayPal) {
        this.paypal = paypal;
    }

    process(amount: number): void {
        this.paypal.makePayment(amount);
    }
}

class StripeAdapter implements PaymentProcessor {
    private stripe: Stripe;

    constructor(stripe: Stripe) {
        this.stripe = stripe;
    }

    process(amount: number): void {
        this.stripe.charge(amount);
    }
}

const payPal = new PayPal();
const stripe = new Stripe();

const payPalProcessor = new PayPalAdapter(payPal);
const stripeProcessor = new StripeAdapter(stripe);

payPalProcessor.process(100);
stripeProcessor.process(200);
