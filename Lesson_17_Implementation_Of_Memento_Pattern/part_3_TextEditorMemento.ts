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
