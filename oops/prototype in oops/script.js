function Person(name,role)
{
    this.name=name;
    this.role=role;
}
Person.prototype.intro = function()
{
    console.log("hii, i am "+ this.name+" and I am a " + this.role); 
};
let p1 = new Person("Abhishek","Devloper");
let p2 = new Person("Harsh","Designer");
p1.intro();
p2.intro();