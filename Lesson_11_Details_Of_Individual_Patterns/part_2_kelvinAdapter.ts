class KelvinThermometer {
    getTemperature(): number {
        return 300; // Temperature in Kelvin
    }
}

class KelvinAdapter implements TemperatureFetcher {
    private kelvinThermometer: KelvinThermometer;

    constructor(kelvinThermometer: KelvinThermometer) {
        this.kelvinThermometer = kelvinThermometer;
    }

    getTemperature(): number {
        const kelvin = this.kelvinThermometer.getTemperature();
        return kelvin - 273.15; // Convert to Celsius
    }
}

const kelvinThermometer = new KelvinThermometer();
const kelvinCelsiusAdapter = new KelvinAdapter(kelvinThermometer);
console.log(`Temperature in Celsius from Kelvin: ${kelvinCelsiusAdapter.getTemperature().toFixed(2)}°C`);
