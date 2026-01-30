let pr = new Promise(function(res,rej)
{
    setTimeout(() => {
        let rn = Math.floor(Math.random() * 10);
        if(rn > 5)
        {
            res("resolve with "+rn);
        }
        else
        {
            rej("reject with "+rn);
        }
    },3000);
});
pr.then(function (val)
{
    console.log(val)
});
pr.catch(function (val)
{
    console.log(val);
    
});


// let promise = new Promise((resolve,reject) => 
// {
//     let success = true;
//     if(success)
//     {
//         resolve("Task complited Successfully");
//     }
//     else
//     {
//         reject("task rejected");
//     }
// });
// promise
//   .then((result) => {
//       console.log(result);
//   })
//   .catch((error) => {
//       console.log(error);
//   });



