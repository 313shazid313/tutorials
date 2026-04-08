import fs from "fs";
import readline from "readline";

const FILE = "task.json";

if (!fs.existsSync(FILE)) {
  fs.writeFileSync(FILE, JSON.stringify([]));
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const loadTasks = () => {
  const data = fs.readFileSync(FILE, "utf8");
  return JSON.parse(data);
};

const saveTask = (tasks) => {
  fs.writeFileSync(FILE, JSON.stringify(tasks, null, 2));
};

const showMenu = () => {
  console.log("------TODO APPLICATION------");
  console.log("1. Add Task");
  console.log("2. View Task");
  console.log("3. Delete Task");
  console.log("4. EXIT\n");

  rl.question("Choose an option: ", handleMenu);
};

const handleMenu = (option) => {
  switch (option) {
    case "1":
      rl.question("Enter task: ", (task) => {
        const tasks = loadTasks();
        tasks.push({ task, done: false });
        saveTask(tasks);
        console.log("Task added successfully!");
        showMenu();
      });
      break;
    case "2":
      const task = loadTasks();
      if (task.length === 0) {
        console.log("no task found");
        showMenu();
      } else {
        task.forEach((t, index) => {
          console.log(`${index + 1} ${t.task}`);
        });
        showMenu();
      }
      break;
    case "3":
      const allTasks = loadTasks();
      if (allTasks.length === 0) {
        console.log("No task to delete.");
        showMenu();
        return;
      }
      console.log("Tasks : ");
      allTasks.forEach((t, index) => {
        console.log(`${index + 1} ${t.task}`);
      });

      rl.question("Enter task number to delete: ", (num) => {
        const index = parseInt(num) - 1;
        if (index >= 0 && index < allTasks.length) {
          allTasks.splice(index, 1);
          saveTask(allTasks);
          console.log(allTasks);
        } else {
          console.log("invalid task number");
        }
        showMenu();
      });
      break;

    case "4":
      rl.close();
      break;
    default:
      console.log("invalid option");
      showMenu();
      break;
  }
};
showMenu();
