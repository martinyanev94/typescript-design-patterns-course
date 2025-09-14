const ast: ASTNode = new ClassNode("MyClass", [
    new MethodNode("myMethod"),
    new VariableNode("unusedVar1", false), // Unused variable
    new VariableNode("usedVar", true)      // Used variable
]);

const analyzer = new UnusedVariableAnalyzer();
ast.accept(analyzer);
analyzer.reportUnusedVariables();
