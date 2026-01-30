//callback function .....................
function kuchDareBaadChalunga(fnc)
{
    setTimeout(fnc,Math.floor(Math.random() * 20) * 1000);
}
kuchDareBaadChalunga(function()
{
    console.log("hey");
    
});

//callback with data....
// function fetchData(callback)
// {
//     setTimeout(() => {
//         callback("Server Data");

//     },1500);
// }
// fetchData(function (data) { 
//     console.log(data);
//  });
//  console.log("Loading.....");
 