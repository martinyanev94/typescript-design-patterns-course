class Animal {
    move() {
        console.log("Animal is moving");
    }
}

class Mammal extends Animal {
    giveBirth() {
        console.log("Mammal is giving birth");
    }
}

class Dog extends Mammal {
    bark() {
        console.log("Woof!");
    }
}
interface Canine {
    bark(): void;
}

class Dog implements Canine {
    bark() {
        console.log("Woof!");
    }
}

class Fish {
    swim() {
        console.log("Fish is swimming");
    }
}
