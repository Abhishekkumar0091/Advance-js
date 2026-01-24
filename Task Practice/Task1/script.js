// // toaster
// function createToaster(config) {
//     return function (notification) {
//         const div = document.createElement("div");

//         div.className = `
//             fixed
//             ${config.theme === "dark" ? "bg-gray-800 text-white" : "bg-gray-100 text-black"}
//             px-6 py-3
//             rounded shadow-lg
//             ${config.positionX === "right" ? "right-10" : "left-10"}
//             ${config.positionY === "top" ? "top-10" : "bottom-10"}
//         `;

//         div.textContent = notification;
//         document.body.appendChild(div);

//         setTimeout(() => {
//             div.remove();
//         }, config.duration * 1000);
//     };
// }

// // usage
// const toaster = createToaster({
//     positionX: "left",   // left | right
//     positionY: "bottom", // top | bottom
//     theme: "light",      // light | dark
//     duration: 3,         // seconds
// });

// toaster("This is a dummy notification !");

function createToaster(config) 
{
    const parent = document.querySelector(".parent");
    parent.classList.add(
        config.positionX === "right" ? "right-5" : "left-5",
        config.positionY === "top" ? "top-5" : "bottom-5"
    );
    return function (message)
     {
        const div = document.createElement("div");
        div.textContent = message;
        div.className = `
            initial-block
            ${config.theme === "dark" ? "bg-gray-800 text-white" : "bg-gray-100 text-black"}
            px-6 py-3
            rounded shadow-lg
            pointer-events-none
            transition-opacity duration-300
        `;
        parent.appendChild(div);
        setTimeout(() => {
            div.remove();
        }, config.duration * 1000);
    };
}
// usage
const toaster = createToaster({
    positionX: "right",   // left | right
    positionY: "bottom",     // top | bottom
    theme: "dark",       // light | dark
    duration: 3,
});
toaster("Download now 🚀");
setTimeout(() => {
    toaster("Abhi accepted your request ✅");
}, 2000);
setTimeout(() => {
    toaster("Rahul send you a message 📩");
}, 1500);
