/* Starting on line 27 is where you will begin your code. 
In this exercise you will be adding loops that contain the pre made arrays
EX./answer  test("Alex likes the food we expect", () => {
    lionFood.forEach((food) => {
      expect(alex.feed(food)).toBe(`Alex the Lion likes ${food}!`)
    })
You will find the animal class that we have created in the animal.ts
You will find the array of animals using that class in zoo.ts 
You do not need to edit those you are only editing the test here, but they are nice to look at. 
All other instructions are found in the read me file. Good luck and most importantly have fun! 
*/

//SCP - To run tests: npx jest feedTest

// SCP - Class = usually uppercase first letter 
// SCP - Imports from the animal module (the Animal class) - "./" in the path means "here" 
import { Animal } from "./animal";
// SCP - "Factory function" style - helps creating instances of a class = usually camelCased
import { getAnimal } from "./zoo";

const alex: Animal = getAnimal("Alex");
const marty: Animal = getAnimal("Marty");
const melman: Animal = getAnimal("Melman");
const gloria: Animal = getAnimal("Gloria");

//SCP - Creates arrays of strings, representing the types of food
const lionFood = ["meat"];
const zebraFood = ["grass", "leaves", "shrubs", "bark"];
const giraffeFood = ["leaves", "hay", "carrots"];
const hippoFood = ["grass", "reeds", "shoots"];

const badFood = ["shrimp", "potatoes", "pizza", "icecream"];

describe("feeding animals", () => {
// SCP - "describe" is a function - because of the () after
// SCP - () => is a short way to create a function that will be called later. Also called "anonymous function" or "arrow function"
// SCP - The body {} are all the steps of the test

  // SCP - Testing Alex the tiger
  test("Alex likes the food we expect", () => {
    lionFood.forEach((food) => { //SCP - lionFood = array of strings | .forEach repeats for each member/element of the array (once in this case)
      expect(alex.feed(food)).toBe(`Alex the Lion likes ${food}!`)
      // SCP - "expect" is a Jest function | it expects 
      // SCP - alex.feed is called with "meat" (as the first/only parameter)
      // SCP - "Alex" is an animal / wach Animal has a "feed" function
    })
  });
  badFood.forEach((food) => {
    // SCP - .for each will be called 4 times (4 elements in the badFood array)
    expect(alex.feed(food)).toBe(`Alex the Lion does not like ${food}!`)
  })

  // SCP - Testing Marty the zebra
  test("Marty likes the food we expect", () => {
    zebraFood.forEach((food) => {
      expect(marty.feed(food)).toBe(`Marty the Zebra likes ${food}!`)
    })
  });
  badFood.forEach((food) => {
    expect(marty.feed(food)).toBe(`Marty the Zebra does not like ${food}!`)
  })

  // SCP - Testing Melman the giraffe
  test("Melman likes the food we expect", () => {
    giraffeFood.forEach((food) => {
      expect(melman.feed(food)).toBe(`Melman the Giraffe likes ${food}!`)
    })
  });
  badFood.forEach((food) => {
    expect(melman.feed(food)).toBe(`Melman the Giraffe does not like ${food}!`)
  })

  // SCP - Testing Gloria the hippo
  test("Gloria likes the food we expect", () => {
    hippoFood.forEach((food) => {
      expect(gloria.feed(food)).toBe(`Gloria the Hippo likes ${food}!`)
    })
  });
  badFood.forEach((food) => {
    expect(gloria.feed(food)).toBe(`Gloria the Hippo does not like ${food}!`)
  })

});