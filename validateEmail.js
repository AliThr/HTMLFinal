function ValidateAndClose(event){  
    let name = document.getElementById("inputName")
    let email = document.getElementById("email")
    if(ValidateName(name) && ValidateEmail(email)){  
        alert("Thank you! You are now subscribed to our news letters!")
        Close(); 

    } else {  
        alert("You have entered an invalid name or email address!");  
        return true;  
    }
}  
function ValidateName(inputText){
    console.log(inputText);
    if(inputText != ""){
        return true;
    }
    return false;
}
function ValidateEmail(inputText){
    let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;  
    if(inputText.value.match(mailformat)){  
        return true;
    }
    return false;
}
function EnableSubmitButton(){
    let name = document.getElementById("inputName")
    let email = document.getElementById("email")
    if (ValidateName(name) && ValidateEmail(email)){
        document.getElementById("submit").disabled = false;
    }
    else{
        document.getElementById("submit").disabled = true;
    }
}
function Close(){
        window.location.hash = "";
}