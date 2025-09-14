interface User {
  name: string;
  age: number;
  phone?: string; // Optional property
}

const user: User = {
  name: "Alice",
  age: 30,
  // phone is optional
};
