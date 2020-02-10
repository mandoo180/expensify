// array destructuring
const address = ['Seoul', 'Geumchoen-gu', 'gasan street', '101'];

const [city, gu, street, stnum] = address;

console.log(city, gu, street, stnum);

const names = [];
const [first, second, third = 'tom'] = names;

console.log(first, second, third);

// object destructuring
// const person = {
//   name: undefined,
//   age: 28,
//   location: {
//     city: 'Seoul',
//     temperature: -30,
//   },
// };

// const { name: nm = 'Anonymous', age } = person;
// const { city, temperature: temp } = person.location;

// console.log(`${name} is ${age}`);
// console.log(`${name} lives in ${city} and there temp is ${temp}`);

// const book = {
//   title: 'ego is the enemy',
//   author: 'rayan holiday',
//   publisher: {
//     name: 'penguin',
//   },
// };

// const { title: t = 'unknown', author: a = 'unknown', publisher: pub = 'unknown' } = book;
// const { name: pubName = 'unknown' } = pub;

// console.log(`title ${t}, author ${a}, publisher ${pubName}`);
