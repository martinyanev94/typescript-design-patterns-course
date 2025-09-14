interface ShapeVisitor {
    visitCircle(circle: Circle): number;
    visitRectangle(rectangle: Rectangle): number;
}

class AreaCalculator implements ShapeVisitor {
    visitCircle(circle: Circle): number {
        return Math.PI * circle.radius ** 2;
    }

    visitRectangle(rectangle: Rectangle): number {
        return rectangle.width * rectangle.height;
    }
}
