interface FileSystemComponent {
    display(): string;
}

class File implements FileSystemComponent {
    private name: string;

    constructor(name: string) {
        this.name = name;
    }

    display(): string {
        return `File: ${this.name}`;
    }
}

class Directory implements FileSystemComponent {
    private name: string;
    private components: FileSystemComponent[] = [];

    constructor(name: string) {
        this.name = name;
    }

    add(component: FileSystemComponent): void {
        this.components.push(component);
    }

    display(): string {
        let result = `Directory: ${this.name} {\n`;
        for (const component of this.components) {
            result += `  ${component.display()}\n`;
        }
        result += '}';
        return result;
    }
}

const root = new Directory("root");
const file1 = new File("file1.txt");
const subDir = new Directory("subDir");
const file2 = new File("file2.txt");

subDir.add(file2);
root.add(file1);
root.add(subDir);

console.log(root.display());
