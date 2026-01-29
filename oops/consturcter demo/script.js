class Vehical
{
    constructor(name,brand,price,color)
    {
        this.name=name;
        this.brand=brand;
        this.price=price;
        this.color=color;
    }
    write(text)
    {
        let h1 = document.createElement("h1");
        h1.textContent=text;
        h1.style.color=this.color;
        document.body.appendChild(h1);
    }
    erase()
    {
        document.body.querySelectorAll("h1").forEach((elem) =>{
            if(elem.style.color === this.color)
            {
                elem.remove();
            }
        })
    }
}
   let v1= new Vehical("Car","BMW",2000000,"red");
   let v2 = new Vehical("Bike","Maruti",600000,"black");