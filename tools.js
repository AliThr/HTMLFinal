module.exports = {
    ValidateEmail: function(inputText){
    let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;  
    if(inputText != undefined)
        {
            if(inputText.match(mailformat)){  
                return true;
            }  
        }
        return false;
    },
    ValidateName: function(inputText){
        console.log(inputText);
        if(inputText != undefined && inputText != ""){
            return true;
        }
        return false;
    }
};