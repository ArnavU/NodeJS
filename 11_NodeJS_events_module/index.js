// Events Module
// Node.js has a built-in module, called "events"
// where you can create-, fire-, and listen for- your own events.

// Eg 1 -- Registering for the event to be fired only one time using once.

// Eg 2 -- Create an event emitter instance and register a couple of callbacks

// Eg 3 -- Registering for the event with callback parameters

const events = require("events");
const eventEmitter = new events.EventEmitter();

eventEmitter.on("sayMyName", () => {
    console.log("My name is Arnav.");
})

eventEmitter.emit("sayMyName"); // named event

/* This is also valid */
// const events = require("events");

// const eventEmitter = new events();

// eventEmitter.on("sayMyName", () => {
//     console.log("MY NAME IS ARNAV");
// })

// eventEmitter.emit("sayMyName");

// giving callback parameter to the event listener
eventEmitter.on("checkPage", (sc, msg) => {
    console.log(`Status code is "${sc}" and the page is "${msg}"`)
})

eventEmitter.emit("checkPage", 200, "ok");