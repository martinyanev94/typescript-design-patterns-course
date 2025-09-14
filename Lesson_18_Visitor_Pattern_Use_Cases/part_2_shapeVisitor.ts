interface Shape {
    accept(visitor: ShapeVisitor): void;
}

class Circle implements Shape {
    constructor(public radius: number) {}
    
    accept(visitor: ShapeVisitor): void {
        visitor.visitCircle(this);
    }
}

class Rectangle implements Shape {
    constructor(public width: number, public height: number) {}

    accept(visitor: ShapeVisitor): void {
        visitor.visitRectangle(this);
    }
}
