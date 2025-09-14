const character = new Character();

character.setMovementStrategy(new Walk());
character.moveCharacter(); // Output: Walking...

character.setMovementStrategy(new Run());
character.moveCharacter(); // Output: Running...

character.setMovementStrategy(new Fly());
character.moveCharacter(); // Output: Flying...
