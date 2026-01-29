function CreatePanci(name,price,color,company){
    this.name=name;
    this.price=price;
    this.color=color;
    this.company=company;
    // this.write = function()
    this.write = function(text)
    {
        let h1 = document.createElement("h1")
        h1.textContent=text;
        h1.style.color=color;
        document.body.append(h1);
    };
}
let paincil1 = new createPanci("paincil",10,"black","netraj");
let paincil2 = new createPanci("paincil",5,"red","Doms");