class ConfigurationManager {
    private static instance: ConfigurationManager;
    private settings: { [key: string]: string };

    private constructor() {
        this.settings = {};
    }

    public static getInstance(): ConfigurationManager {
        if (!ConfigurationManager.instance) {
            ConfigurationManager.instance = new ConfigurationManager();
        }
        return ConfigurationManager.instance;
    }

    public set(key: string, value: string): void {
        this.settings[key] = value;
    }

    public get(key: string): string {
        return this.settings[key];
    }
}
