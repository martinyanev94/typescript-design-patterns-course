interface CodeAnalyzer {
    visitClass(classNode: ClassNode): void;
    visitMethod(methodNode: MethodNode): void;
    visitVariable(variableNode: VariableNode): void;
}

class UnusedVariableAnalyzer implements CodeAnalyzer {
    private unusedVariables: string[] = [];

    visitClass(classNode: ClassNode): void {
        classNode.methods.forEach(method => method.accept(this));
    }

    visitMethod(methodNode: MethodNode): void {
        // In a real-world scenario, we would check for variable usage
        console.log(`Analyzing method: ${methodNode.name}`);
    }

    visitVariable(variableNode: VariableNode): void {
        if (!variableNode.used) {
            this.unusedVariables.push(variableNode.name);
        }
    }

    reportUnusedVariables(): void {
        if (this.unusedVariables.length > 0) {
            console.log("Unused Variables:", this.unusedVariables.join(", "));
        } else {
            console.log("No unused variables found.");
        }
    }
}
