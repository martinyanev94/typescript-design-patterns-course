abstract class Shape implements Prototype {
    public abstract clone(): Shape;
}

class Circle extends Shape {
    constructor(private radius: number) {
        super();
    }

    public clone(): Shape {
        return new Circle(this.radius);
    }

    public getRadius(): number {
        return this.radius;
    }
}

class Square extends Shape {
    constructor(private side: number) {
        super();
    }

    public clone(): Shape {
        return new Square(this.side);
    }

    public getSide(): number {
        return this.side;
    }
}
