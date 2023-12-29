async function asyncTask() {
    console.log('Async task started');
    // await new Promise(resolve => setTimeout(resolve, 2000)); // Simulate a 2-second async operation
    new Promise(resolve => setTimeout(resolve, 2000)); // Simulate a 2-second async operation
    console.log('Async task finished');
}

console.log('Before asyncTask call');
asyncTask();
console.log('After asyncTask call');

function resolveAfter2Seconds(x) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(x);
        }, 2000);
    });
}

async function f1() {
    const x = await resolveAfter2Seconds(10);
    console.log(x); // 10
}

f1();