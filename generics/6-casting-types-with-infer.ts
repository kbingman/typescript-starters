/**
 * 🧙‍♂️🧙‍♂️🧙‍♂️🧙‍♂️🧙‍♂️🧙‍♂️🧙‍♂️🧙‍♂️🧙‍♂️🧙‍♂️🧙‍♂️🧙‍♂️🧙‍♂️🧙‍♂️🧙‍♂️🧙‍♂️🧙‍♂️🧙‍♂️🧙‍♂️🧙‍♂️🧙‍♂️🧙‍♂️🧙‍♂️🧙‍♂️🧙‍♂️🧙‍♂️🧙‍♂️🧙‍♂️🧙‍♂️🧙‍♂️🧙‍♂️🧙‍♂️🧙‍♂️🧙‍♂️🧙‍♂️🧙‍♂️🧙‍♂️🧙‍♂️🧙‍♂️🧙‍♂️🧙‍♂️🧙‍♂️🧙‍♂️🧙‍♂️
 */

// type StringSchema = {
//   type: "string";
// };

// type NumberSchema = {
//   type: "number";
// };

// type ArraySchema = {
//   type: "array";
//   items: Schema;
// };

// type ObjectSchema = {
//   type: "object";
//   properties: {
//     [key: string]: Schema;
//   };
// };

// type Schema = StringSchema | NumberSchema | ArraySchema | ObjectSchema;

// // prettier-ignore
// type SchemaToConcrete<T extends Schema> =
//   T extends ObjectSchema ? { [K in keyof T['properties']]: SchemaToConcrete<T['properties'][K]> } :
//   T extends ArraySchema ? (SchemaToConcrete<T['items']>)[] :
//   T extends StringSchema ? string :
//   T extends NumberSchema ? number :
//   never;

// type Result = SchemaToConcrete<{
//   type: "object";
//   properties: {
//     name: { type: "string" };
//     age: { type: "number" };
//     hobbies: {
//       type: "array";
//       items: {
//         type: "object";
//         properties: {
//           name: { type: "string" };
//         };
//       };
//     };
//   };
// }>;
