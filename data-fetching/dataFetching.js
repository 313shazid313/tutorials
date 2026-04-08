// const https = require("https");

// https.get("https://jsonplaceholder.typicode.com/posts/1", (res) => {
//   let data = "";

//   res.on("data", (chunk) => {
//     data = data + chunk;
//   });

//   res
//     .on("end", () => {
//       console.log("API response", JSON.parse(data));
//     })
//     .on("error", (error) => {
//       console.log("Error : ", error.message);
//     });
// });

const fetch = require("node-fetch")

const fetchData = async () => {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts/1",
    );

    const data = await response.json()
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

fetchData();
