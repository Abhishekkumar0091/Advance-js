// function profileLekarAao(username,cd)
// {
//     setTimeout(() => {
//         console.log(`profile fetched of ${username}`);
//     },2000)
// }
// profileLekarAao("Abhishek",function() {});
//--------------------------------------------------------------------
// function profileLekarAao(username,cb)
// {
//     setTimeout(() => {
//         console.log(`profile fetched of ${username}`);
//         cb({username});
//     },2000);
// }
// profileLekarAao("Abhishek",function(profiledata) {
//     console.log(profiledata);
// });
//--------------------------------------------------------------------
// function profileLekarAao(username,cb)
// {
//     setTimeout(() => {
//         cb({username,age: 23, email: "abhi@gamil.com"});
//     },2000);
// }
// profileLekarAao("Abhishek",function(data) {
//     console.log(data);
// });
//--------------------------------------------------------------------
function profileLekarAao(username,cb)
{
    console.log("Fatching Profile Data....");
    setTimeout(() => {
        cb({ _id: 1122, username,age: 23, email: "abhi@gamil.com"});
    },2000);
}
function saarePostLekarAao(id, cb)
{
    console.log("Fetching all posts....");
    
    setTimeout(() => {
        cb({_id: id,post: ["hey","hello","goodmorning"] });
    }, 3000);
}
function savePostsNikaalo(id,cb )
{
    console.log("Fetching saved data....");
    
    setTimeout(() => {
        cb({ _id: id, saved: [1,2,3,4,55,445,45,342]})
    },3000);
}
profileLekarAao("Abhishek",function(data) {
    console.log(data);
    saarePostLekarAao(data._id, function (post) {
        console.log(post);
        savePostsNikaalo(data._id, function(saved){
              console.log(saved);         
        });
    });
});