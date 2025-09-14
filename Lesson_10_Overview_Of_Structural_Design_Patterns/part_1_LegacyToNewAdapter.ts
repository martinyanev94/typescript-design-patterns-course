interface LegacyService {
    getValue(): number;
}

class OldService implements LegacyService {
    getValue(): number {
        return 42; // Legacy logic returns 42
    }
}

interface NewService {
    fetchValue(): string;
}

class ExternalApiService implements NewService {
    fetchValue(): string {
        return "The answer is 42"; // New logic
    }
}

class LegacyServiceAdapter implements NewService {
    private legacyService: LegacyService;

    constructor(legacyService: LegacyService) {
        this.legacyService = legacyService;
    }

    fetchValue(): string {
        return `The answer is ${this.legacyService.getValue()}`; // Adapting old to new
    }
}

const legacyService = new OldService();
const adapter = new LegacyServiceAdapter(legacyService);
console.log(adapter.fetchValue()); // Output: "The answer is 42"
