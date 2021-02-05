/**
 * 🧙‍♂️🧙‍♂️🧙‍♂️🧙‍♂️🧙‍♂️🧙‍♂️🧙‍♂️🧙‍♂️🧙‍♂️🧙‍♂️🧙‍♂️🧙‍♂️🧙‍♂️🧙‍♂️🧙‍♂️🧙‍♂️🧙‍♂️🧙‍♂️🧙‍♂️🧙‍♂️🧙‍♂️🧙‍♂️🧙‍♂️🧙‍♂️🧙‍♂️🧙‍♂️🧙‍♂️🧙‍♂️🧙‍♂️🧙‍♂️🧙‍♂️🧙‍♂️🧙‍♂️🧙‍♂️🧙‍♂️🧙‍♂️🧙‍♂️🧙‍♂️🧙‍♂️🧙‍♂️🧙‍♂️🧙‍♂️🧙‍♂️🧙‍♂️
 *
 * TypeScript introduces the `infer` ternary as a way to deconstruct types.
 * We can use this to deconstruct types
 */

type Hobby2<Details extends {}> = {
  name: string;
  difficult: number;
  details: Details;
};

// type GetHobbyDetails<T> = T extends Hobby2<infer Details> ? Details : never;

type GetDetails<T> = T extends { details: infer Details } ? Details : never;

/**
 * `infer` can be chained
 */

// type GetFuriness<T> = T extends { details: infer Details } ? (Details extends { furiness: infer F } ? F : never) : never;

/**
 * `infer` can be used on nested values in higher-order types (arrays, objects, classes)
 */
// type HobbyMap = {
//   cats: Hobby2<{ furiness: number }>,
//   rockClimbing: Hobby2<{ gripStrenth: number }>
// }

// type DetailsMap<T> = { [K in keyof T]: GetDetails<T[K]> };

// type ResultA = DetailsMap<HobbyMap>;

// type DetailsMap2<T> = { [K in keyof T]: T[K] extends { details: infer Details } ? Details : never; };

// type ResultB = DetailsMap2<HobbyMap>;
