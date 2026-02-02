// fetch("https://randomuser.me/api/")
// .then((rawdata) => {
// return rawdata.json();
// })
// .then((data) => {
//     console.log(data.results[0].name.first); 
// })
// .catch((err) => {
//     console.log(err);    
// })
fetch("https://randomuser.me/api/?results=5")
  .then((raw) => raw.json())
  .then((data) => {
    console.log(data.results); // array of users
  })
  .catch((error) => {
    console.error("Error fetching users:", error);
  });
