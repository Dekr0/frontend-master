// function limitedRepeat() {
//     let counter = 0;
//     let id = Infinity;
// 
//     // Closure & Lexical Scoping
//     const repeat = () => {
//         if (counter++ < 5) {
//             console.log('hi for now');
//         } else if (id !== Infinity) {
//             clearInterval(id);
//         }
//     }
// 
//     id = setInterval(repeat, 1000);
//     console.log(id);
// }
// 
// limitedRepeat();

// function everyXsecsForYsecs(func: Function, interval: number, duration: number) {
//     let id: undefined | number = undefined;
// 
//     id = setInterval(() => {
//         if (duration - interval >= 0) {
//             func();
//             duration -= interval;
//         } else {
//             if (id !== undefined) {
//                 clearInterval(id);
//             }
//         }
//     }, interval);
// }
// 
// everyXsecsForYsecs(() => console.log('Hi'), 2000, 20000);

// No floating point
// function delayCounter(target: number, wait: number) {
//     let counter = 1;
//     return () => {
//         let id = setInterval(() => {
//             if (counter === target) clearInterval(id);
//             
//             console.log(counter > target ? counter-- : counter++);
//         }, wait);
//     }
// }
// 
// delayCounter(-5, 500)();

function promised(value: any) {
    return new Promise(
        (resolve, reject) => {
            setTimeout(() => { console.log('start'); resolve(value); }, 5000);
        }
    );
}

const p = promised(5);

p.then(v => console.log(v));

