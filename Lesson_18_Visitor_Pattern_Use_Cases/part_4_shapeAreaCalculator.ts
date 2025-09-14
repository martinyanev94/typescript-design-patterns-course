const shapes: Shape[] = [
    new Circle(5), 
    new Rectangle(10, 20)
];

const areaCalculator = new AreaCalculator();

shapes.forEach(shape => {
    const area = shape.accept(areaCalculator);
    console.log(`Area: ${area}`);
});
