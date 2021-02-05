/**
 * Definition: A higher-order type is a type that takes another type as an argument.
 */

// type ArrayOfStrings = Array<string>;

// type Car<Engine, Fuel> = {
//   id: string;
//   engine: Engine;
//   fuel: Fuel;
// };

// type Cars<Engine, Fuel> = Array<Car<Engine, Fuel>>;

/**
 * Using generics to assist with type constraints
 */
// type Hobby<Details extends {}> = {
//   name: string;
//   difficult: number;
//   details: Details;
// };

// class Person<H extends Hobby<any>> {
//   constructor(public name: string, public age: number, public hobbies: H[]) {}

//   getHobbyNames() {
//     return this.hobbies.map((hobby) => hobby.name);
//   }
// }

// type CatHobby = Hobby<{ furriness: number }>;

// const personWhoLikesCatsTooMuch = new Person<CatHobby>("Karen", 46, []);

/**
 * When should you use higher-order types?
 *
 * 1. When you have a type that requires sharing on shape (Hobby)
 * 2. When you need to apply constraints for a specific type
 * 3. ???
 */
