interface TextEditorState {
    content: string;
    cursorPosition: number;
}

class EditorMemento {
    constructor(private readonly state: TextEditorState) {}
  
    getState(): TextEditorState {
        return this.state;
    }
}

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

// Client code
const editor = new TextEditor();
editor.type("Hello, ");
editor.type("world!");
console.log(editor.getContent());  // Output: Hello, world!
editor.undo();
console.log(editor.getContent());  // Output: Hello,
