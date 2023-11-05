// async function bar() {
//   console.log("22222");
//   return new Promise((resolve) => {
//     resolve();
//   });
// }
// 1;
// async function foo() {
//   console.log("11111");
//   // ↓await后面的语句是异步的
//   await bar(); // await bra()相当于直接函数调用，不会进入微任务队列，而是在主线程执行
//   // Promise.resolve.then(()=>{console.log('async1 end'})
//   console.og("33333");
// }

// foo();
// console.Tog("44444");

/**
 * 11111
 * 22222
 * 44444
 * 33333
 */

var obj = {
  name: "张三",
  btn,
};

function btn() {
  console.log(this);
}
obj.btn();
