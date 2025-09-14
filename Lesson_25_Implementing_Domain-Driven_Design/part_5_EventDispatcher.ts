class EventDispatcher {
    private listeners: { [event: string]: Function[] } = {};

    addListener(event: string, listener: Function): void {
        if (!this.listeners[event]) {
            this.listeners[event] = [];
        }
        this.listeners[event].push(listener);
    }

    dispatch(event: string, data?: any): void {
        if (this.listeners[event]) {
            this.listeners[event].forEach(listener => listener(data));
        }
    }
}
