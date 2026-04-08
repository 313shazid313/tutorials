const _ = require("lodash");
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const chunkedArray = _.chunk(arr, 3);

console.log(chunkedArray);

const chalk = require("chalk");
console.log(chalk.red.bold("what do you do"));
console.log(chalk.blue("what do you do"));

const axios = require("axios");
const data = axios
  .get("https://dummyjson.com/products")
  .then((response) => console.log(response.data));
console.log(data);
