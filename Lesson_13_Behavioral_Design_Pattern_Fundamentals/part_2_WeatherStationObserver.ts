interface Observer {
    update(data: any): void;
}

class WeatherStation {
    private observers: Observer[] = [];
    private weatherData: any;

    addObserver(observer: Observer): void {
        this.observers.push(observer);
    }

    removeObserver(observer: Observer): void {
        this.observers = this.observers.filter(obs => obs !== observer);
    }

    notifyObservers(): void {
        for (const observer of this.observers) {
            observer.update(this.weatherData);
        }
    }

    setWeatherData(data: any): void {
        this.weatherData = data;
        this.notifyObservers();
    }
}

class TemperatureDisplay implements Observer {
    update(data: any): void {
        console.log(`Temperature updated: ${data.temperature}`);
    }
}

class HumidityDisplay implements Observer {
    update(data: any): void {
        console.log(`Humidity updated: ${data.humidity}`);
    }
}

// Usage
const weatherStation = new WeatherStation();
const tempDisplay = new TemperatureDisplay();
const humidityDisplay = new HumidityDisplay();

weatherStation.addObserver(tempDisplay);
weatherStation.addObserver(humidityDisplay);

weatherStation.setWeatherData({ temperature: 25, humidity: 70 });
