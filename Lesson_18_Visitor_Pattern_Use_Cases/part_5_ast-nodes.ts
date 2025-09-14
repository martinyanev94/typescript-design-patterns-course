interface ASTNode {
    accept(visitor: CodeAnalyzer): void;
}

class ClassNode implements ASTNode {
    constructor(public name: string, public methods: MethodNode[]) {}

    accept(visitor: CodeAnalyzer): void {
        visitor.visitClass(this);
    }
}

class MethodNode implements ASTNode {
    constructor(public name: string) {}

    accept(visitor: CodeAnalyzer): void {
        visitor.visitMethod(this);
    }
}

class VariableNode implements ASTNode {
    constructor(public name: string, public used: boolean) {}

    accept(visitor: CodeAnalyzer): void {
        visitor.visitVariable(this);
    }
}
