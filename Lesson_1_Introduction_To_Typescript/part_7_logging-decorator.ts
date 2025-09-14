function Log(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
  const originalMethod = descriptor.value;
  descriptor.value = function (...args: any[]) {
    console.log(`Calling ${propertyKey} with args: ${JSON.stringify(args)}`);
    return originalMethod.apply(this, args);
  };
  return descriptor;
}

class Calculator {
  @Log
  add(x: number, y: number): number {
    return x + y;
  }
}

const calc = new Calculator();
calc.add(5, 3); // Logs: Calling add with args: [5,3]
