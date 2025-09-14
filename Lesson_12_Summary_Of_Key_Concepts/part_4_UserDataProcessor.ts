abstract class UserDataProcessor {
    process(data: string): void {
        const validatedData = this.validate(data);
        const sanitizedData = this.sanitize(validatedData);
        console.log(`Processed Data: ${sanitizedData}`);
    }

    protected abstract validate(data: string): string;
    protected abstract sanitize(data: string): string;
}

class DefaultUserDataProcessor extends UserDataProcessor {
    protected validate(data: string): string {
        if (!data) {
            throw new Error("Data cannot be empty.");
        }
        return data;
    }

    protected sanitize(data: string): string {
        return data.trim().toLowerCase();
    }
}

const processor = new DefaultUserDataProcessor();
processor.process(" SAMPLE User Data ");
