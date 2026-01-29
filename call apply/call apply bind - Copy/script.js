// How to use call 
let obj = {
    name :"Abhishek",
    age : "24",

}
function abcd (){
    console.log(this);
}
abcd.call(obj);
// call example
let obj2 = {
    name:"abhi",
    age : "24",
}
function xyz(a,b,c)
{
    console.log(this,a,b,c);
}
xyz.call(obj2,1,2,3);
// How to use apply
let obj3 ={
    name :"akash",
}
function jfg(a,b,c)
{
    console.log(this,a,b,c);
}
jfg.apply(obj3, [1,2,3]);
//How to use bind

let obj4 = {
    name :"ansh",
}
    function lmn (a,b,c)
    {
        console.log(this,a,b,c);
    }
     let fnc = lmn.bind(obj4,1,2,3);
     fnc();


