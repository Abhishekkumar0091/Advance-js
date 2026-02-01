// Callback Hell 😵‍💫..............
// function profileLekarAao(username,cb)
// {
//     console.log("Fatching Profile Data....");
//     setTimeout(() => {
//         cb({ _id: 1122, username,age: 23, email: "abhi@gamil.com"});
//     },2000);
// }
// function saarePostLekarAao(id, cb)
// {
//     console.log("Fetching all posts....");
    
//     setTimeout(() => {
//         cb({_id: id,post: ["hey","hello","goodmorning"] });
//     }, 3000);
// }
// function savePostsNikaalo(id,cb )
// {
//     console.log("Fetching saved data....");
    
//     setTimeout(() => {
//         cb({ _id: id, saved: [1,2,3,4,55,445,45,342]})
//     },3000);
// }
// profileLekarAao("Abhishek",function(data) {
//     console.log(data);
//     saarePostLekarAao(data._id, function (post) {
//         console.log(post);
//         savePostsNikaalo(data._id, function(saved){
//               console.log(saved);         
//         });
//     });
// });

// Promises ✅...............
// function profileLekarAao(username) {
//     return new Promise((resolve) => {
//         console.log("Fetching Profile Data....");
//         setTimeout(() => {
//             resolve({ _id: 1122, username, age: 23, email: "abhi@gmail.com" });
//         }, 2000);
//     });
// }

// function saarePostLekarAao(id) {
//     return new Promise((resolve) => {
//         console.log("Fetching all posts....");
//         setTimeout(() => {
//             resolve({ _id: id, post: ["hey", "hello", "goodmorning"] });
//         }, 3000);
//     });
// }

// function savePostsNikaalo(id) {
//     return new Promise((resolve) => {
//         console.log("Fetching saved data....");
//         setTimeout(() => {
//             resolve({ _id: id, saved: [1,2,3,4,55,445,45,342] });
//         }, 3000);
//     });
// }
// // 🔹 Using .then() (Promise chaining)
// profileLekarAao("Abhishek")
// .then(data => {
//     console.log(data);
//     return saarePostLekarAao(data._id);
// })
// .then(post => {
//     console.log(post);
//     return savePostsNikaalo(post._id);
// })
// .then(saved => {
//     console.log(saved);
// })
// .catch(err => console.log(err));

// Promises ✅...............
function profileLekarAao(username) {
    return new Promise((resolve) => {
        console.log("Fetching Profile Data....");
        setTimeout(() => {
            resolve({ _id: 1122, username, age: 23, email: "abhi@gmail.com" });
        }, 2000);
    });
}

function saarePostLekarAao(id) {
    return new Promise((resolve) => {
        console.log("Fetching all posts....");
        setTimeout(() => {
            resolve({ _id: id, post: ["hey", "hello", "goodmorning"] });
        }, 3000);
    });
}

function savePostsNikaalo(id) {
    return new Promise((resolve) => {
        console.log("Fetching saved data....");
        setTimeout(() => {
            resolve({ _id: id, saved: [1,2,3,4,55,445,45,342] });
        }, 3000);
    });
}
// Async / Await (🔥 Interview Favorite)
async function getUserData() {
    const profile = await profileLekarAao("Abhishek");
    console.log(profile);

    const posts = await saarePostLekarAao(profile._id);
    console.log(posts);

    const saved = await savePostsNikaalo(profile._id);
    console.log(saved);
}
getUserData();
