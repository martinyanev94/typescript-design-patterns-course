function firstElement<T>(arr: T[]): T {
  return arr[0];
}

let numArray = [1, 2, 3];
let strArray = ["a", "b", "c"];

console.log(firstElement(numArray)); // Outputs: 1
console.log(firstElement(strArray)); // Outputs: "a"
