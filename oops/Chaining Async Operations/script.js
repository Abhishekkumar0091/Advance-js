function step1() {
    return new Promise(resolve => {
        setTimeout(() => resolve("Step 1 done"), 1000);
    });
}

function step2(data) {
    return new Promise(resolve => {
        setTimeout(() => resolve(data + " → Step 2 done"), 1000);
    });
}

function step3(data) {
    return new Promise(resolve => {
        setTimeout(() => resolve(data + " → Step 3 done"), 1000);
    });
}
// Promise Chaining...................
// step1()
//   .then(step2)
//   .then(step3)
//   .then(result => console.log(result));

// Async/Await Chaining.................
async function runSteps() {
    const r1 = await step1();
    const r2 = await step2(r1);
    const r3 = await step3(r2);
    console.log(r3);
}

runSteps();
