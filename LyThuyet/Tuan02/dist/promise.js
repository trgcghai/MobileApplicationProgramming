"use strict";
// const delaySeconds = 1;
Object.defineProperty(exports, "__esModule", { value: true });
// const promise = new Promise<string>((resolve, reject) => {
//   setTimeout(() => {
//     const success = false;
//     if (success) {
//       resolve(`Thành công sau ${delaySeconds}s`);
//     } else {
//       reject(`Thất bại sau ${delaySeconds}s`);
//     }
//   }, delaySeconds * 1000);
// });
// promise
//   .then((result) => console.log(result))
//   .catch((error) => console.error(error));
// function createPromise(): Promise<string> {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const success = Math.random() > 0.5;
//       if (success) {
//         resolve(`Thành công sau ${delaySeconds}s`);
//       } else {
//         reject(`Thất bại sau ${delaySeconds}s`);
//       }
//     }, delaySeconds * 1000);
//   });
// }
// async function handlePromise() {
//   try {
//     const result = await createPromise();
//     console.log(result);
//   } catch (error) {
//     console.error(error);
//   }
// }
// handlePromise();
// function simulateIO<T>(value: T, delay: number): Promise<T> {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(value);
//     }, delay);
//   });
// }
// function now(label: string) {
//   console.log(`[${label}]: ${new Date().toISOString()}`);
// }
// async function runSequential() {
//   now("Start sequential");
//   const a = await simulateIO("Task 1", 1000);
//   const b = await simulateIO("Task 2", 1000);
//   const c = await simulateIO("Task 3", 1000);
//   now("End sequential");
//   console.log("Sequential results:", [a, b, c]);
// }
// runSequential();
// async function runKickOffThenAwait() {
//   now("Start kickoff then await");
//   const pUser = simulateIO("User Data", 1000);
//   const pOrders = simulateIO("Order Data", 1000);
//   const pProducts = simulateIO("Product Data", 1000);
//   now("End kickoff then await");
//   const [user, orders, products] = await Promise.all([
//     pUser,
//     pOrders,
//     pProducts,
//   ]);
//   console.log("Kickoff then await results:", { user, orders, products });
// }
// runKickOffThenAwait();
// async function runParallelWithError() {
//   now("Start parallel with error");
//   const pUser = simulateIO("User Data", 1000);
//   const pOrders = new Promise((_, reject) =>
//     setTimeout(() => reject("Order Error"), 500)
//   );
//   now("End parallel with error");
//   const settled = await Promise.allSettled([pUser, pOrders]);
//   settled.forEach((r, i) => {
//     if (r.status === "fulfilled") console.log(`[#${i}] OK:`, r.value);
//     else console.warn(`[#${i}] Failed:`, r.reason);
//   });
// }
// runParallelWithError();
const fetchData = async (url) => {
    const response = await fetch(url);
    if (!response.ok)
        throw new Error("Network response was not ok");
    return response.json();
};
async function main() {
    const user = await fetchData("https://jsonplaceholder.typicode.com/users/1");
    const posts = await fetchData("https://jsonplaceholder.typicode.com/posts");
    console.log("User:", user);
    console.log("Post:", posts);
}
main();
//# sourceMappingURL=promise.js.map