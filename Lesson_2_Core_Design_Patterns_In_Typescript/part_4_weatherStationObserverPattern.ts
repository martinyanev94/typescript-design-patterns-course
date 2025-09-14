interface Observer {
    update(temperature: number): void;
}

class WeatherStation {
    private observers: Observer[] = [];
    private temperature: number;

    addObserver(observer: Observer): void {
        this.observers.push(observer);
    }

    removeObserver(observer: Observer): void {
        this.observers = this.observers.filter(o => o !== observer);
    }

    setTemperature(temperature: number): void {
        this.temperature = temperature;
        this.notifyObservers();
    }

    private notifyObservers(): void {
        this.observers.forEach(observer => observer.update(this.temperature));
    }
}

class TemperatureDisplay implements Observer {
    update(temperature: number): void {
        console.log(`Temperature Display: Current temperature is ${temperature}°C`);
    }
}

// Usage
const weatherStation = new WeatherStation();
const tempDisplay = new TemperatureDisplay();

weatherStation.addObserver(tempDisplay);
weatherStation.setTemperature(25); // Outputs: Temperature Display: Current temperature is 25°C
