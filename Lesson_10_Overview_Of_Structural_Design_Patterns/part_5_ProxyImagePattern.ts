interface Image {
    display(): void;
}

class RealImage implements Image {
    private fileName: string;

    constructor(fileName: string) {
        this.fileName = fileName;
        this.loadImageFromDisk();
    }

    private loadImageFromDisk(): void {
        console.log(`Loading image: ${this.fileName}`);
    }

    display(): void {
        console.log(`Displaying image: ${this.fileName}`);
    }
}

class ProxyImage implements Image {
    private realImage: RealImage | null = null;
    private fileName: string;

    constructor(fileName: string) {
        this.fileName = fileName;
    }

    display(): void {
        if (!this.realImage) {
            this.realImage = new RealImage(this.fileName);
        }
        this.realImage.display();
    }
}

const image = new ProxyImage("pic.jpg");
image.display(); // Loads image on first call
image.display(); // Does not load again
