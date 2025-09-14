interface Printer {
    print(): void;
    scan(): void;
    fax(): void;
}

class SimplePrinter implements Printer {
    print(): void {
        console.log("Printing...");
    }

    scan(): void {
        throw new Error("Scanning not supported.");
    }

    fax(): void {
        throw new Error("Faxing not supported.");
    }
}
interface Printable {
    print(): void;
}

interface Scannable {
    scan(): void;
}

class SimplePrinter implements Printable {
    print(): void {
        console.log("Printing...");
    }
}
