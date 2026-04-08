import axios from "axios";
import readline from "readline";
// const data = axios.get("https://open.er-api.com/v6/latest");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const axiosData = async () => {
  const response = await axios.get("https://open.er-api.com/v6/latest");
  // console.log(response.data?.rates?.BDT);

  return response.data?.rates?.BDT;
};

// axiosData();

const handleQuestion = () => {
  rl.question("Enter the amount of TAKA to convert in USD : ", async (amount) => {
    const result = amount * (1 / (await axiosData()));

    console.log (result)

    // return result;
    handleQuestion()
  });
};

handleQuestion();
