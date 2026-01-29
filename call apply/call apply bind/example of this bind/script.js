let form  = document.querySelector("form");
const userManager = {
    user : [],
    init : function()
    {
        form.addEventListener("submit", this.submitForm.bind(this));
    },
    submitForm : function(e){
           e.preventDefault();
           console.log("form submitted");
    }
    addUser : function() {},
    
        removeUser : function() {},  
};
userManager.init();