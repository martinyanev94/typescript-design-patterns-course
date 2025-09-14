const editor = new TextEditor();
editor.type("Hello, ");
editor.type("world!");
console.log(editor.getContent());  // Output: Hello, world!

editor.undo();
console.log(editor.getContent());  // Output: Hello,
