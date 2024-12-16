let rating = document.querySelector(".title__user-review__header__rating").querySelectorAll("img[src='icons/star.png']");
let clicked = false;
rating.forEach((element, index) => {
    
    element.addEventListener("mouseover", () => {
        if (clicked == false){
        for (let i = 0; i <= index; i++) {
            rating[i].src = "icons/star-filled.png";
        }
    }
    });
    element.addEventListener("mouseout", () => {
        if (clicked == false) {
            for (let i = 0; i <= index; i++) {
                rating[i].src = "icons/star.png";
            }
        }
    });
    element.addEventListener("click", () => {
        if (clicked == false){
        for (let i = 0; i <= index; i++) {
            rating[i].src = "icons/star-filled.png";
        }
        clicked = true;
        document.querySelector(".title__user-review__header__rating img[src = 'icons/restart.png']").style.display = "inline";
    }

    });

});
function renewRating(){
        for(let i = 0; i < rating.length; i++){
            rating[i].src = "icons/star.png";
        }
        document.querySelector(".title__user-review__header__rating img[src = 'icons/restart.png']").style.display = "none";
        clicked = false;
    } 