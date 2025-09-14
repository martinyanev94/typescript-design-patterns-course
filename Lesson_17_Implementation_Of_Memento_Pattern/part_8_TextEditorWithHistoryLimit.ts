class TextEditorWithLimit {
    private state: TextEditorState = { content: "", cursorPosition: 0 };
    private mementos: EditorMemento[] = [];
    private limit: number;

    constructor(limit: number) {
        this.limit = limit;
    }

    type(text: string): void {
        this.state.content += text;
        this.save();
    }

    save(): void {
        if (this.mementos.length >= this.limit) {
            this.mementos.shift(); // Remove the oldest Memento
        }
        this.mementos.push(new EditorMemento(this.state));
    }

    undo(): void {
        if (this.mementos.length > 0) {
            const lastMemento = this.mementos.pop();
            this.state = lastMemento?.getState() || this.state;
        }
    }

    getContent(): string {
        return this.state.content;
    }
}
