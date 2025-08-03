let paymentPromise = new Promise((resolve, reject)=> {
    let paymentSuccessful = true;

    if (paymentSuccessful) {

        resolve("Payment Successful");
    } else {
        reject("Payment Failed");
    }
});

paymentPromise
.then((message)=> {
    console.log("Success: ", message);
})
.catch((error)=> {
    console.log("Error: ", error);
});
