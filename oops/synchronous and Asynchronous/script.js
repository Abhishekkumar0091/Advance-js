// Example of synchronous............
console.log("Synchronous runs...........");
console.log("Start");
function task()
{
    console.log("Task running");
}
task();
console.log("end");
// Example of aSynchronous................
console.log("Asynchronous runs...........");

console.log("Start");
setTimeout(() => {
console.log("async task")
},2000);
console.log("end");
