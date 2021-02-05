/**
 * Using a generic type in a class is ALSO like saying,
 * "I don't care what this is exactly, so I'm going to let it be anything"
 * but at a class level
 */

// class Person {
//   constructor(public name: string, public age: number, public hobbies: string[]) {}
// }

// const person = new Person("Gabe", 400, ["Computer"]);

/**
 * Maybe we want to extend what hobbies can be.
 */
// class Person2<Hobby> {
//   constructor(public name: string, public age: number, public hobbies: Hobby[]) {}
// }

// const person2 = new Person2("Gabe", 400, ["Computer"]);
// const person22 = new Person2("Gabe", 400, [{ name: "Computer" }]);

// person22.hobbies;

/**
 * Introducing constraints
 */
// class Person3<Hobby> {
//   constructor(public name: string, public age: number, public hobbies: Hobby[]) {}

//   getHobbyNames() {
//     return this.hobbies.map((hobby) => hobby.name);
//   }
// }

/**
 * Class members can take generics as well
 */
// class Person4<Hobby extends { name: string }> {
//   constructor(public name: string, public age: number, public hobbies: Hobby[]) {}

//   getHobbyNames() {
//     return this.hobbies.map((hobby) => hobby.name);
//   }

//   mapHobbies<NewHobby>(fn: (hobby: Hobby) => NewHobby) {
//     return this.hobbies.map(fn);
//   }
// }

// const person4 = new Person4("Gabe", 400, [{ name: "Computer" }]);

// const result = person4.mapHobbies((hobby) => hobby.name + "!!!!!!!!");

/**
 * Extending the definition of a hobby
 */
// const person42 = new Person4("Gabe", 400, [{ name: "Computer" }]);

// person42.mapHobbies((hobby) => hobby.difficulty + 10);

/**
 * Again, generics can be use to ensure a continuity of the values stored in a class
 */
