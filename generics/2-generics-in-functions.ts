/**
 * Using a generic type in a function is like saying,
 * "I don't care what this is exactly, so I'm going to let it be anything"
 */

/**
 * In this case we really don't care what T is because the structure of input is not inspected.
 * (Could also say `any` or `unknown` here)
 */
// function log<T>(input: T[]) {
//   input.map((i) => console.log(i));
// }

/**
 * T changes as we type. It is _inferred_ by TypeScript
 */
// log(...)

/**
 * In this case we don't care about the input or output type in the body of the function.
 * (Wouldn't actually recommend this use of fetch).
 */
// function apiCall<T>(input: T): Promise<unknown> {
//   return fetch("unbounce.com", { body: JSON.stringify(input) }).then((b) => b.json());
// }

/**
 * Same thing here. The input inferred by TypeScript
 */
// apiCall({ name: "Gabe", bald: true });

/**
 * We can lock this down if we want by actually providing types as arguments to
 * the call as I'm using it.
 *
 * I'm the checker that I actually expect the input T to be of a certain shape!
 */
// type Person = {
//   name: string;
//   age: number;
//   bald: boolean;
// }

// apiCall<Person>({ name: "Gabe", bald: true });

/**
 * Using multiple generics
 */
// function apiCall2<T, U>(input: T): Promise<U> {
//   return fetch("unbounce.com", { body: JSON.stringify(input) }).then((b) => b.json());
// }

/**
 * Here I'm also specifying the response of the request here
 */
// function apiCall3<T, U>(input: T): Promise<U> {
//   return fetch("unbounce.com", { body: JSON.stringify(input) }).then((b) => b.json());
// }

// type MyResponse = {
//   success: boolean;
// }

// const result = apiCall3<Person, MyResponse>({ name: "Gabe", age: 400, bald: true });

/**
 * This is essentially what Array#map does under the hood
 */
// function map<T, U>(arr: T[], fn: (t: T) => U): U[] {
//   return arr.map(fn);
// }

/**
 * What happens if do care about the input? We can describe the input without giving the whole thing away
 * (Introducing type constraints)
 */
// function getNames<T>(people: T[]) {
//   return people.map((person) => person.name);
// }

// getNames([{ name: "Gabe" }, { name: "Chelsea" }]);

// getNames([
//   { name: "Gabe", bald: true, hobbies: ["Computer"] },
//   { name: "Chelsea", friendly: true },
// ]);

/**
 * Constraints can be defined ahead of time to ensure a specific shape is used
 * as long as it matches the constraint.
 */
// getNames<{ name: string; hobbies: string[] }>([
//   { name: "Gabe", bald: true, hobbies: ["Computer"] },
//   { name: "Chelsea", friendly: true },
// ]);

/**
 * Using generics to ensure multiple types "line-up" with constraints
 * and that there is a continuity between values
 */
// type StarbucksCard = {
//   points: number;
//   balance: number;
// };

// function buyCoffee(card: StarbucksCard): StarbucksCard {
//   const newCard = {
//     balance: card.balance - 10,
//     points: card.points + 200,
//     electronic: true, // oopsiedoodle
//   };

//   return newCard;
// }

/**
 * When should you use generics in functions?
 *
 * When you want to write a GENERAL purpose function that is
 * capable of take more GENERIC inputs
 */
