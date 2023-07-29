/**
 * Practice: Making classes and objects
 *
 * - Find a type of object you have more than one of in your house (eg. clothing, writing tools, etc).
 * - Create a class describing this object type - its properties and methods.
 * - Create several objects using the class.
 * - Test the objecs by calling their properties and using their methods in the console.
 */
/**
 * Creating classes:
 *
 * Class declaration: class Name {}
 * Class expression:  const Name = class {}
 */

import Backpack from "./Backpack.js";

class Bird {
  constructor(
    // Defines parameters:
    name,
    weight,
    breed,
    primaryColor,
    alternateColor
  ) {
    // Define properties:
    this.name = name;
    this.weight = weight;
    this.breed = breed;
    this.color = {
      primary: primaryColor,
      alternate: alternateColor,
    };
  }
  // Add methods like normal functions:
  feed(amount) {
    this.weight += amount / 4;
    return this.weight;
  }
  weigh(grams) {
    this.weight = grams;
    return this.weight;
  }
}

const markup = (Backpack) => {
  return `
  <div>
    <h3>${Backpack.name}</h3>
    <ul>
      <li>Volume: ${Backpack.volume}</li>
      <li>Color: ${Backpack.color}</li>
      <li>Number of pockets: ${Backpack.pocketNum}</li>
      <li>Strap lengths: L: ${Backpack.strapLength.left}, R: ${
    Backpack.strapLength.right
  } </li>
      <li>Top lid: ${Backpack.lidOpen ? "Open" : "Closed"}</li>
    </ul>
  </div>
`;
};

const main = document.createElement("main");
main.innerHTML = markup(Backpack);
document.body.appendChild(main);
