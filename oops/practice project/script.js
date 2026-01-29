class User {
    constructor(name) {
        this.name = name;
        this.role = "user";
    }

    send(text) {
        createMessage(this.name, this.role, text);
    }
}

class Admin extends User {
    constructor(name) {
        super(name);
        this.role = "admin";
    }
}

// users
const users = [
    new User("Abhi"),
    new User("Ankur"),
    new User("Rahul")
];

const admin = new Admin("Admin");

// dropdown
const select = document.getElementById("userSelect");
[...users, admin].forEach((u, i) => {
    let option = document.createElement("option");
    option.value = i;
    option.textContent = `${u.name} (${u.role})`;
    select.appendChild(option);
});

// send message
function sendMessage() {
    let text = document.getElementById("message").value;
    if (text.trim() === "") return;

    let sender = [...users, admin][select.value];
    sender.send(text);

    document.getElementById("message").value = "";
}

// message UI
function createMessage(name, role, text) {
    let div = document.createElement("div");
    div.className = `msg ${role}`;
    div.textContent = `${name}: ${text}`;
    document.getElementById("chatBox").appendChild(div);
}
