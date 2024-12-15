let inputs = document.querySelector("form").querySelectorAll("input");
        
function loginControl(){
    let ok = true;
    for (let i = 0; i < inputs.length; i++){
        inputs[i].style.outline = "none";
    }
    for (let i = 0; i < inputs.length; i++){
        if(inputs[i].value == ""){
            ok = false;
            inputs[i].style.outline = "3px solid red";
        }
    }
    if(ok){
        location.href = 'index.html';
    }
}