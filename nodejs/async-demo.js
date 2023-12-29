async function asyncTask() {
    console.log('2. Async task started');
    // await new Promise(resolve => setTimeout(resolve, 2000)); // Simulate a 2-second async operation
    new Promise(resolve => setTimeout(resolve, 2000)); // Simulate a 2-second async operation
    console.log('4. Async task finished');
}

console.log('1. Before asyncTask call');
asyncTask();
console.log('3. After asyncTask call');

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