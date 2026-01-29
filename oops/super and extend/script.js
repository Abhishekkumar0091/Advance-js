class User {
    constructor(name, address, username, email) {
        this.name = name;
        this.address = address;
        this.username = username;
        this.email = email;
        this.role = "user";
    }

    write(text) {
        let div = document.createElement("div");
        div.className = "chat user";

        let time = new Date().toLocaleTimeString();

        div.innerHTML = `
            <strong>${this.name}</strong>
            <span class="time">${time}</span>
            <p>${text}</p>
        `;

        document.body.appendChild(div);
    }
}

class Admin extends User {
    constructor(name, address, username, email) {
        super(name, address, username, email);
        this.role = "admin";
    }

    write(text) {
        let div = document.createElement("div");
        div.className = "chat admin";

        let time = new Date().toLocaleTimeString();

        div.innerHTML = `
            <strong>${this.name} (ADMIN)</strong>
            <span class="time">${time}</span>
            <p>${text}</p>
        `;

        document.body.appendChild(div);
    }

    remove() {
        document.querySelectorAll(".chat").forEach(elem => {
            elem.remove();
        });
    }
}

// objects
let u1 = new User("Abhi", "Delhi", "Abhi123", "abhi@gmail.com");
let u2 = new User("Ankur", "Noida", "Ankur123", "ankur@gmail.com");
let a1 = new Admin("Admin", "Ayodhya", "admin123", "admin@gmail.com");

// send message
document.getElementById("postBtn").addEventListener("click", () => {
    let text = document.getElementById("msg").value;
    let selected = document.getElementById("userSelect").value;

    if (text.trim() === "") return;

    if (selected === "u1") u1.write(text);
    else if (selected === "u2") u2.write(text);
    else a1.write(text);

    document.getElementById("msg").value = "";
});

// admin remove
document.getElementById("removeBtn").addEventListener("click", () => {
    a1.remove();
});
