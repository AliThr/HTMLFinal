module.exports = {
    ValidateEmail: function(inputText){
        let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;  
        if(inputText.match(mailformat)){  
            return true;
        }
        return false;
    }
};