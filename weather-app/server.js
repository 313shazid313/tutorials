import axios from "axios";
import readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter City Name ", async () => {
  const city = "Dhaka";
  const apiKey = "d682ed9c7b625a2c3244a16a342769d8";
  const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const res = await axios.get(url);

    console.log(res.data.main);
  } catch (error) {
    console.log(error);
  }
});
