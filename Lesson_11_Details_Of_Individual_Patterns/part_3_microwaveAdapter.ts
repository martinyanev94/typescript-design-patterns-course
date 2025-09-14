class Microwave {
    getTime(): string {
        return "Time remaining: 30 seconds";
    }
}

class MicrowaveAdapter extends Microwave implements TemperatureFetcher {
    getTemperature(): number {
        // Returning a static value as an example
        return 90; // Random temperature
    }
}

const microwaveAdapter = new MicrowaveAdapter();
console.log(microwaveAdapter.getTime());
console.log(`Microwave internal temperature: ${microwaveAdapter.getTemperature()}°C`);
