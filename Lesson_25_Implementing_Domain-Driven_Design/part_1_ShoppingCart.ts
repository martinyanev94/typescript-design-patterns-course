class Cart {
    private items: CartItem[] = [];

    addItem(item: CartItem): void {
        this.items.push(item);
    }

    calculateTotal(): number {
        return this.items.reduce((total, item) => total + item.price, 0);
    }
}

class CartItem {
    constructor(public name: string, public price: number) {}
}
