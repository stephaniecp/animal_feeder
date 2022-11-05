export class Animal {
    // This is our boilerplate for our class we have named it animal. 
    name: string;
    type: string;
    preferredFoods: Array<string>;
    // SCP? - name, type and preferredFoods are what we need in order to use that class
    constructor(name: string, type: string, preferredFoods: Array<string>) { // SCP - 1 name, 1 type, many foods
      this.name = name; // SCP - name of the new instance (only called when a new instance is created)
      // SCP - For Lion instance: this.name = "Alex" 
      this.type = type; //type of...
      // SCP - For Lion instance: this.type = "Lion" 
      this.preferredFoods = preferredFoods;
      // The constructor is saying that now name is expecting a string as well as type 
      // And that preferredFoods is looking for an array of strings but more on this later dont stress!
    }
    // SCP - The constructor would be called again to create the Zebra instance, etc...  It hold a string. 
    feed(food: string) {
        // This is our method for how we are getting our repsonses for the food we give the animals
        // If we give the animal food that it likes then it will say name of animal the type of animal likes type of food!
      if (this.preferredFoods.includes(food))
      // SCP - for Lion > .preferredFoods is ["meat"] (because set in preferredFood class instance) 
      // SCP - (food) is "meat" (string only, not array because only individual string are passed in from lionFood)
        return `${this.name} the ${this.type} likes ${food}!`;
        // SCP - returns a string with a bunch of stuff
        // SCP - Does the array of string ["meat"].includes("meat") == true
        // SCP - The result of ".include" is a boolean (True)
      else return `${this.name} the ${this.type} does not like ${food}!`;
    }
  }

 // SCP - Every class should have a constructor. Know that it is being called when there's "new" keyword 
  