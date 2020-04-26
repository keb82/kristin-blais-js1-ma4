function isInputValid(inputText){
    var inputTextAsString = "" + inputText;
    if(inputTextAsString.length < 2)
        return false;
    else
        return true;
}

function validateForm(event){
    event.preventDefault();
    const inputText = document.querySelector("#firstname").value;
    
    const inputError = document.querySelector("#firstNameError");

    if(isInputValid(inputText) === true){
         inputError.style.display = "none";
    
    }
    else
        inputError.style.display = "block";
    
}

const form = document.querySelector("#contactform");
form.addEventListener("submit", validateForm);