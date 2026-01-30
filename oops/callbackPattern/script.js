// function getUser(callback)
// {
//     setTimeout(() =>
//     {
//         callback("user data featched")
//     },2000);
// }
// getUser(function (data) 
//     {
//         console.log(data);
//   });
//   console.log("fatech User ......");
//   --------------------------------------------------------------------------------------------------------------
  function placeOrder(order, callback) {
    console.log("Order placed for:", order);

    // food preparation takes time
    setTimeout(() => {
        callback("🍕 Your food is ready!");
    }, 2000);
}
function notifyCustomer(message) {
    console.log(message);
}

placeOrder("Pizza", notifyCustomer);

console.log("Customer is doing other work...");
