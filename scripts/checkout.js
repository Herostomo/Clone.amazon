import { renderOrderSummary } from "./checkout/orderSummary.js";
import { renderPaymentSummary } from "./checkout/paymentSummary.js";
import { loadProductsFetch } from "../data/products.js";
import { loadCart } from "../data/cart.js";
// import '../data/cart-class.js';
// import '../data/backend-practice.js';


async function loadPage() {
    try{
        // throw 'error1';//use to create error manually

        await loadProductsFetch();

        const value = await new Promise((resolve, reject) => {
        // throw 'error1'; //use to throw error in promises
        loadCart(() => {
            // reject('error3'); // throw does not work in future hence we use reject function.
            resolve('value3');
        });
    });

  }catch (error) {
    console.log('unexpected error. Please try again later.');
  }
    

    renderOrderSummary();
    renderPaymentSummary();
}
loadPage();

// //best way
// Promise.all([
//     loadProductsFetch(),
//     new Promise((resolve) => {
//         loadCart(() => {
//             resolve();
//         });
//     })

// ]).then(() => {
    
//     renderOrderSummary();
//     renderPaymentSummary();
// });


// new Promise((resolve) => {
//     loadProducts(() => {
//         resolve('value1');
//     });
// //resolve work as done in jasmine test like it waits for the kaam to finish.
// }).then((value) => {
//     console.log(value)
    
//     return new Promise((resolve) => {
//         loadCart(() => {
//             resolve();
//         });
//     });

// }).then(() => {
//     renderOrderSummary();
//     renderPaymentSummary();
// });

// loadProducts(() => {
//     loadCart(() => {
//         renderOrderSummary();
//         renderPaymentSummary();
//     });
// });
