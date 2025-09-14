class Memento {
    constructor(private state: string) {}

    getState(): string {
        return this.state;
    }
}

class Editor {
    private content: string = '';

    setContent(content: string): void {
        this.content = content;
    }

    getContent(): string {
        return this.content;
    }

    save(): Memento {
        return new Memento(this.content);
    }

    restore(memento: Memento): void {
        this.content = memento.getState();
    }
}

// Usage
const editor = new Editor();
editor.setContent('First draft');

const savedState = editor.save(); // Save state
editor.setContent('Second draft');

console.log(editor.getContent()); // Output: Second draft
editor.restore(savedState); // Restore to saved state
console.log(editor.getContent()); // Output: First draft
