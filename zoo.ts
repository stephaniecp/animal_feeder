import { Animal } from "./animal";
// This is where we take the class we created in animal and add our array of animals and their food. 
// Using the same structure that we set in animal we have name as a string type as a string and the preferedFoods which is a string array. 

// SCP - Instaces of Animals, created in advance (using "new") of the facotry function being called
let animals: Array<Animal> = [ // SCP - creates new vaiable "animals" | the type is an array of Animal(s)
  new Animal("Alex", "Lion", ["meat"]), // SCP - new calls the Constructor of Animal / see animals.ts for what the constructor takes for data
  // SCP - name value = "Alex" (string) / type value = "Lion" (string) / food value = "meat" (array of string(s))
  new Animal("Marty", "Zebra", ["grass", "leaves", "shrubs", "bark"]),
  new Animal("Melman", "Giraffe", ["leaves", "hay", "carrots"]),
  new Animal("Gloria", "Hippo", ["grass", "reeds", "shoots"]),
]; // SCP - End of Animal(s) array

// The getAnimal fuctions purpose is so we dont have to search for the animals using the array placement.

export function getAnimal(name: string): Animal {
  return animals.find((animal) => animal.name == name);
}
