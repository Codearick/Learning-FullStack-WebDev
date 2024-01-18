// 9. The Asynchronous Shopper:
//Imagine you are building an online shopping application. Write an asynchronous function called placeOrder that simulates placing an order and returns a promise. The promise should resolve with an order confirmation message after a random delay.
async function placeOrder(){
    let randomDelay = Math.floor(Math.random()*(5001-1)+1);
    return await new Promise(resolve =>{
        setTimeout(() => {
        resolve("Your order has been placed!");
        }, randomDelay);
    });
}
(async function getMessage(){
    try{
        let message = await placeOrder();
        console.log(message);
    }
    catch(error){
        console.error(error);
    }
})();
