// array of object destructuring
const dummyData = [
  { id: 1, name: "asd123" },
  { id: 2, name: "asdasd" },
  { id: 3, name: "asddasads" },
];

const [asd] = dummyData;
console.log(asd);

// array destructuring
const data = [123, 14, 6, 35, 6];

const [asd2] = data;
console.log(asd2);

// object destructuring
const data2 = {
  username: "shazid",
  age: 5,
  id: "123",
};

const { username } = data2;
const { age: myAge } = data2;
console.log(username);
console.log(myAge);
