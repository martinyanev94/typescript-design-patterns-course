class TextEditor {
    private state: TextEditorState = { content: "", cursorPosition: 0 };
    private mementos: EditorMemento[] = [];

    type(text: string): void {
        this.state.content += text;
        this.save();
    }

    save(): void {
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
