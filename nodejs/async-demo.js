// await example
async function asyncTask1() {
    console.log('12. Async task started');
    await new Promise(resolve => setTimeout(resolve, 2000)); // Simulate a 2-second async operation
    console.log('14. Async task finished');
}

console.log('11. Before asyncTask call');
asyncTask1();
console.log('13. After asyncTask call');

// without await example
async function asyncTask2() {
    console.log('22. Async task started');
    new Promise(resolve => setTimeout(resolve, 2000)); // Simulate a 2-second async operation
    console.log('23. Async task finished');
}

console.log('21. Before asyncTask call');
asyncTask2();
console.log('24. After asyncTask call');

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