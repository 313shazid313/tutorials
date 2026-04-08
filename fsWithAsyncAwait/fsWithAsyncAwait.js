const fs = require("fs").promises;

async function writing() {
  try {
    await fs.writeFile("data.txt", "i am ok", "utf8");
  } catch (error) {
    console.error(error);
  }
}

writing();
