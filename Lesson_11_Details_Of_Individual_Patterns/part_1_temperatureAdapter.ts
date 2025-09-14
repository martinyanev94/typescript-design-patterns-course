interface TemperatureFetcher {
    getTemperature(): number;
}

class FahrenheitThermometer implements TemperatureFetcher {
    getTemperature(): number {
        return 80; // Temperature in Fahrenheit
    }
}

class CelsiusAdapter implements TemperatureFetcher {
    private fahrenheitThermometer: FahrenheitThermometer;

    constructor(fahrenheitThermometer: FahrenheitThermometer) {
        this.fahrenheitThermometer = fahrenheitThermometer;
    }

    getTemperature(): number {
        const fahrenheit = this.fahrenheitThermometer.getTemperature();
        return (fahrenheit - 32) * 5 / 9; // Convert to Celsius
    }
}

const legacyThermometer = new FahrenheitThermometer();
const celsiusThermometer = new CelsiusAdapter(legacyThermometer);
console.log(`Temperature in Celsius: ${celsiusThermometer.getTemperature().toFixed(2)}°C`);
