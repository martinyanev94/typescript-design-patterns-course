interface Color {
    applyColor(): string;
}

class Red implements Color {
    applyColor(): string {
        return "Applying red color.";
    }
}

class Blue implements Color {
    applyColor(): string {
        return "Applying blue color.";
    }
}

abstract class Shape {
    protected color: Color;

    constructor(color: Color) {
        this.color = color;
    }

    abstract draw(): void;
}

class Circle extends Shape {
    draw(): void {
        console.log(`Circle drawn. ${this.color.applyColor()}`);
    }
}

class Rectangle extends Shape {
    draw(): void {
        console.log(`Rectangle drawn. ${this.color.applyColor()}`);
    }
}

const redCircle = new Circle(new Red());
const blueRectangle = new Rectangle(new Blue());

redCircle.draw();
blueRectangle.draw();
