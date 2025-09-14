class CurrentConditionsDisplay implements Observer {
    private temperature: number = 0;
    private humidity: number = 0;

    update(temperature: number, humidity: number, pressure: number): void {
        this.temperature = temperature;
        this.humidity = humidity;
        this.display();
    }

    display(): void {
        console.log(`Current conditions: ${this.temperature}°C and ${this.humidity}% humidity`);
    }
}

class StatisticsDisplay implements Observer {
    private temperatures: number[] = [];

    update(temperature: number, humidity: number, pressure: number): void {
        this.temperatures.push(temperature);
        this.display();
    }

    display(): void {
        const average = this.temperatures.reduce((sum, temp) => sum + temp, 0) / this.temperatures.length;
        console.log(`Average temperature: ${average.toFixed(2)}°C`);
    }
}
