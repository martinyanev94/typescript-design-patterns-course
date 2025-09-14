interface Event {
    eventType: string;
    data: any;
}

class EventBus {
    private listeners: { [key: string]: Array<(data: any) => void> } = {};

    public subscribe(eventType: string, listener: (data: any) => void): void {
        if (!this.listeners[eventType]) {
            this.listeners[eventType] = [];
        }
        this.listeners[eventType].push(listener);
    }

    public publish(event: Event): void {
        const eventTypeListeners = this.listeners[event.eventType] || [];
        eventTypeListeners.forEach(listener => listener(event.data));
    }
}

const eventBus = new EventBus();

eventBus.subscribe('OrderCreated', (data) => {
    console.log(`Order created for product ID: ${data.productId}, Quantity: ${data.quantity}`);
});

const orderData = { productId: '1', customerId: 'C001', quantity: 2 };
eventBus.publish({ eventType: 'OrderCreated', data: orderData });
// Outputs: Order created for product ID: 1, Quantity: 2
