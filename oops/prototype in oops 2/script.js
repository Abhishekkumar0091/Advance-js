function CreatePencil(name, price,color,company)
{
    this.name=name;
    this.price=price;
    this.color=color;
    this.company=company;
}
CreatePencil.prototype.write = function (text) {  
    let h1 = document.createElement("h1");
    h1.textContent = text;
    h1.style.color = this.color;
    console.log(h1);
    document.body.append(h1);
};
let pencil1 = new CreatePencil("Natraj", 10, "black","natraj");
let pencil2 = new CreatePencil("Natraj", 5, "red","natraj");