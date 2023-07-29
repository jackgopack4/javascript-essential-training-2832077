/**
 * Practice: Building objects
 *
 * - Create JavaScript objects based on objects in your current environment.
 * - Give each object an identifiable name.
 * - Create properties to describe the objects and set their values.
 * - Find an object that has another object inside of it to create a nested object.
 * - Test your objects in the browser console by accessing the entire object and its specific properties.
 */

const bird = {
  name: "Pistachio",
  breed: "Quaker Parakeet",
  color: {
    primary: "green",
    alternate: "blue",
  },
  weight: 100,
  feed: function (amount) {
    this.weight += amount / 4;
    return this.weight;
  },
  weigh: function (grams) {
    this.weight = grams;
    return this.weight;
  },
};
