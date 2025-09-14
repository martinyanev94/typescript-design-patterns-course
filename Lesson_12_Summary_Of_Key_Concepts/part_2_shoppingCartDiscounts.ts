interface DiscountStrategy {
    applyDiscount(amount: number): number;
}

class NoDiscount implements DiscountStrategy {
    applyDiscount(amount: number): number {
        return amount;
    }
}

class SeasonalDiscount implements DiscountStrategy {
    applyDiscount(amount: number): number {
        return amount * 0.9; // 10% discount
    }
}

class ShoppingCart {
    private discountStrategy: DiscountStrategy;

    constructor(discountStrategy: DiscountStrategy) {
        this.discountStrategy = discountStrategy;
    }

    calculateTotal(amount: number): number {
        return this.discountStrategy.applyDiscount(amount);
    }
}

const cart = new ShoppingCart(new SeasonalDiscount());
console.log(`Total after discount: $${cart.calculateTotal(100)}`);
