//this in Global
console.log(this);
//this in function
function abc ()
{
   console.log(this);
}
abc();
//this in method
let obj = {
    name : "Abhi",
    age : 26,
    sayHello :function()
    {
     console.log(this.name);
     console.log(this.age);
     
    }  
}
obj.sayHello();

// this in Event handler
  document.querySelector("h1").addEventListener("click", function ()
{
       console.log((this.style.color ="red"));   
})
//this in class

class abcd {
    constructor()
    {
        console.log("heyhe");
        this.a=12;
    }
}
let val = new abcd();
