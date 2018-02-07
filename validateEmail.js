function ValidateAndClose(inputText){  
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;  
    if(inputText.value.match(mailformat)){  
        alert("Thank you! You are now subscribed to our news letters!")
        return true; 
    } else {  
        alert("You have entered an invalid email address!");  
        return false;  
    }
}  
function close(ValidateAndClose){
    if (ValidateAndClose === true){
        document.getElementById("popup1").style.display = "none";
    }
}