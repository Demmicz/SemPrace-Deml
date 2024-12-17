let inputs = document.querySelector("form").querySelectorAll("input");
let errors_span = document.querySelectorAll("#error");
        
function loginValuesControl(){
    for (let i = 0; i < inputs.length; i++){
        inputs[i].style.outline = "none";
        errors_span[i].innerHTML = "";
    }
    if(requiredFields()){
        location.href = 'index.html';
    }
}

function registrationValuesControl(){
    for (let i = 0; i < inputs.length; i++){
        inputs[i].style.outline = "none";
        errors_span[i].innerHTML = "";
    }
    if(requiredFields() &&  registrationPasswordControl()){
        location.href = 'index.html';
    }
}

function registrationPasswordControl(){
    let ok = true;
    let password = document.getElementById("password");
    let confirm_password = document.getElementById("Confirm_password");
    if( password.value != confirm_password.value){
        ok = false;
        password.style.outline = "3px solid red";
        confirm_password.style.outline = "3px solid red";
        errors_span[errors_span.length - 1].innerHTML = "Passwords don't match";
        errors_span[errors_span.length - 2].innerHTML = "Passwords don't match";
    }
    return ok;
}
function requiredFields(){
    let ok = true;
    for (let i = 0; i < inputs.length; i++){
        inputs[i].style.outline = "none";
    }
    for (let i = 0; i < inputs.length; i++){
        if(inputs[i].value == ""){
            ok = false;
            inputs[i].style.outline = "3px solid red";
            errors_span[i].innerHTML = "This field is required.";
        }
    }
    return ok;
}