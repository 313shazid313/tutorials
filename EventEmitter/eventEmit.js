const eventEmitter = require("events");

const event = new eventEmitter();

event.on("myEevent", (name) => {
  console.log(`i am ${name}`);
});

event.removeAllListeners("myEevent")

event.emit("event", "shazid");
event.emit("event", "shazid");


