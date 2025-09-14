interface Order {
    id: string;
    productId: string;
    customerId: string;
    quantity: number;
}

class OrderService {
    private orders: Order[] = [];

    public createOrder(order: Order): void {
        this.orders.push(order);
    }

    public getOrder(id: string): Order | undefined {
        return this.orders.find(order => order.id === id);
    }
}

const orderService = new OrderService();
orderService.createOrder({ id: '101', productId: '1', customerId: 'C001', quantity: 2 });
const order = orderService.getOrder('101');
console.log(order); // Outputs: { id: '101', productId: '1', customerId: 'C001', quantity: 2 }
