const form = document.getElementById("profileForm");
const cardContainer = document.getElementById("cardContainer");

// make cards appear in a row
cardContainer.style.display = "flex";
cardContainer.style.gap = "15px";
cardContainer.style.flexWrap = "wrap";

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const profession = document.getElementById("profession").value;
    const bio = document.getElementById("bio").value;
    const photo = document.getElementById("photo").value;

    // card
    const card = document.createElement("div");
    card.style.border = "1px solid #333";
    card.style.width = "220px";
    card.style.padding = "15px";
    card.style.textAlign = "center";
    card.style.borderRadius = "10px";
    card.style.boxShadow = "0 2px 6px rgba(0,0,0,0.2)";
    card.style.backgroundColor="gray"

    // profile image (circle)
    const img = document.createElement("img");
    img.src = photo;
    img.style.width = "100px";
    img.style.height = "100px";
    img.style.borderRadius = "50%";   // 👈 circle
    img.style.objectFit = "cover";
    img.style.marginBottom = "10px";

    // name
    const h3 = document.createElement("h3");
    h3.innerText = name;

    // profession
    const p1 = document.createElement("p");
    p1.innerText = profession;
    p1.style.fontWeight = "bold";

    // bio
    const p2 = document.createElement("p");
    p2.innerText = bio;
    p2.style.fontSize = "14px";

    // append
    card.appendChild(img);
    card.appendChild(h3);
    card.appendChild(p1);
    card.appendChild(p2);

    cardContainer.appendChild(card);

    form.reset();
});
