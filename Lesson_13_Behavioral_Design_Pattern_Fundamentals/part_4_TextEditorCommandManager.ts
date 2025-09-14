interface Command {
    execute(): void;
    undo(): void;
}

class TextEditor {
    private text: string = '';

    write(value: string): void {
        this.text += value;
    }

    undoWrite(value: string): void {
        this.text = this.text.slice(0, this.text.length - value.length);
    }

    getText(): string {
        return this.text;
    }
}

class WriteCommand implements Command {
    private editor: TextEditor;
    private value: string;

    constructor(editor: TextEditor, value: string) {
        this.editor = editor;
        this.value = value;
    }

    execute(): void {
        this.editor.write(this.value);
    }

    undo(): void {
        this.editor.undoWrite(this.value);
    }
}

class CommandManager {
    private commands: Command[] = [];
    
    executeCommand(command: Command): void {
        command.execute();
        this.commands.push(command);
    }

    undoCommand(): void {
        const command = this.commands.pop();
        if (command) {
            command.undo();
        }
    }
}

// Usage
const editor = new TextEditor();
const commandManager = new CommandManager();

const command1 = new WriteCommand(editor, 'Hello, ');
commandManager.executeCommand(command1);

const command2 = new WriteCommand(editor, 'world!');
commandManager.executeCommand(command2);

console.log(editor.getText()); // Output: Hello, world!

commandManager.undoCommand(); // Undo the last command
console.log(editor.getText()); // Output: Hello,
