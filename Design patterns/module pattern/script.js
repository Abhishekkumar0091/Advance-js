// module pattern
// iife
//Immediately Invoked Function Expression
// let fnc = (function(){
//     return 12;
// })();

let Bank = (function()
{
    let bankbalance = 12000;

    function checkBalance()
    {
        console.log(bankbalance);
    }
    function setBalance(val)
    {
        bankbalance = val;
    }
    function withdraw(val)
    {
        if(val <=bankbalance)
        {
            bankbalance -= val;
            console.log(bankbalance);
        }
    }
    return{
        checkBalance,
        setBalance,
        withdraw,
    };
})();

Bank.checkBalance();