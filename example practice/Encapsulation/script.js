function clickLimiter(){
  let click=0;
  return function()
  {
    if(click<5)
    {
      click++;
      console.log(`clicked:${click}times`);
    }else{
      console.error("LIMIT EXCEEDED, Try After Some Time");
    }
  };
}
let fnc =clickLimiter();
fnc();
fnc();
fnc();
fnc(); 
fnc();
fnc();