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
// fetch("https://randomuser.me/api/?results=5")
//   .then((raw) => raw.json())
//   .then((data) => {
//     console.log(data.results); // array of users
//   })
//   .catch((error) => {
//     console.error("Error fetching users:", error);
//   });
function getUser() {
      fetch("https://randomuser.me/api/?results=5")
        .then((raw) => raw.json())
        .then((data) => {
          const users = data.results.slice(0, 3);
          const container = document.getElementById("cards");

          container.innerHTML = "";

          users.forEach((user) => {
            const card = document.createElement("div");
            card.className =
              "bg-white rounded-xl shadow-md p-6 text-center";

            card.innerHTML = `
              <img
                src="${user.picture.large}"
                class="w-24 h-24 mx-auto rounded-full mb-4"
              />
              <h2 class="text-lg font-semibold">
                ${user.name.first} ${user.name.last}
              </h2>
              <p class="text-sm text-gray-500">${user.email}</p>
              <p class="text-sm text-gray-500">${user.location.country}</p>
            `;

            container.appendChild(card);
          });
        })
        .catch((error) => {
          console.error("Error fetching users:", error);
        });
    }

    // first load
    getUser();

    // refresh button
    document
      .querySelector("#btnRefrace")
      .addEventListener("click", getUser);