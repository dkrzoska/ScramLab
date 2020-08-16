//close app recipies
const appRecipies = document.querySelector(".app__recipies");
const appRecipiesClose = document.querySelector(".app__recipies__close");
appRecipiesClose.addEventListener("click", (event) => {
    appRecipies.style.display="none";
});

//remove recipie
const actionRemove = document.querySelectorAll(".action__remove");
actionRemove.forEach( el => {
    el.addEventListener ("click", ev => {
        const recipieToRemove = el.parentElement.parentElement;
        recipieToRemove.parentElement.removeChild(recipieToRemove);
    });
});