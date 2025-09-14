interface Shape {
    area(): number;
}

class Circle implements Shape {
    constructor(private radius: number) {}

    area(): number {
        return Math.PI * this.radius * this.radius;
    }
}

class Rectangle implements Shape {
    constructor(private width: number, private height: number) {}

    area(): number {
        return this.width * this.height;
    }
}

class AreaCalculator {
    calculateTotalArea(shapes: Shape[]): number {
        return shapes.reduce((total, shape) => total + shape.area(), 0);
    }
}
