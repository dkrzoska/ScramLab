//reload
const userName = document.querySelector(".user-name");
userName.addEventListener("click", ev => {
    location.reload();
});

// add name
const a = document.querySelector(".mesage_form_button");
const b = document.querySelector(".message_form_container").querySelector("input")
const messageForm = document.querySelector(".message_form");
const dashboard = document.querySelector(".app__dashboard");
a.addEventListener ("click", ev => {
    userName.innerText = b.value;
    if (b.value.length < 0){
        dashboard.style.display = "none";
        messageForm.style.display = "block";
    } else {
        dashboard.style.display = "block";
        messageForm.style.display = "none";
    }

    // const savedUserName =  b.value;
    // localStorage.setItem('savedName' , savedUserName);
    // console.log("Twoje imię to: ", localStorage.savedUserName);
});

// desktop.addEventListener ("click", ev => {
//     dashboard.style.display = "block";
//     messageForm.style.display = "none";
// });

//close info in dash board
const closeInfo = document.querySelectorAll(".widget");
closeInfo.forEach ( el => {
    el.lastElementChild.addEventListener("click", ev => {
        el.parentElement.removeChild(el);
    });
});

//add recipie
const addRecipes = document.querySelector(".add__recipes");
const newRecipes = document.querySelector(".new_recipes");
addRecipes.addEventListener ("click", ev => {
    dashboard.style.display = "none";
    newRecipes.style.display = "block";
});

//close and save new recipe
const newRecipesButton = document.querySelector(".new_recipes_button");
newRecipesButton.addEventListener ("click", ev => {
    newRecipes.style.display = "none";
    appRecipies.style.display="block";
});

//add plan
const addPlanDashboard = document.querySelector(".add__plan");
addPlanDashboard.addEventListener ("click", ev => {
    addPlan.style.display = "block";
    dashboard.style.display = "none";
});

const addPlan = document.querySelector(".addplan");
const saveClose = document.querySelector(".addplan").querySelector(".button");
const tablePlan = document.querySelector(".addplan").querySelector("tbody").querySelectorAll("tr");
const tableFill = document.querySelector(".yourplan").querySelector("tbody").querySelectorAll("tr");

saveClose.addEventListener ("click", ev => {
    let tableFilled = [[], [], [], [], []];
    tablePlan.forEach (el => {
        el.querySelectorAll("td").forEach ((el, i) => {
            tableFilled[i].push(el.querySelector("select").value);
        });
    });
    // console.log(tableFilled);
    tableFill.forEach ((el, i) => {
        el.querySelectorAll("td").forEach ((el, j) => {
            el.innerText = tableFilled[i][j];
        });
    });
    addPlan.style.display = "none";
    appPlan.style.display = "block";
});

//left site buttons
const desktop = document.querySelector(".desktop");
const recipes = document.querySelector(".recipes");
const plans = document.querySelector(".plans");
const appPlan = document.querySelector(".app__plan");
const appRecipies = document.querySelector(".app__recipies");
desktop.addEventListener ("click", ev => {
    dashboard.style.display = "block";
    messageForm.style.display = "none";
    appRecipies.style.display="none";
    appPlan.style.display="none";
    addPlan.style.display="none";
    newRecipes.style.display="none";
});
recipes.addEventListener ("click", ev => {
    appRecipies.style.display="block";
    dashboard.style.display = "none";
    messageForm.style.display = "none";
    appPlan.style.display="none";
    addPlan.style.display="none";
    newRecipes.style.display="none";
});
plans.addEventListener ("click", ev => {
    appPlan.style.display="block";
    dashboard.style.display = "none";
    messageForm.style.display = "none";
    appRecipies.style.display="none";
    addPlan.style.display="none";
    newRecipes.style.display="none";
});

const appRecipiesClose = document.querySelector(".app__recipies__close");
appRecipiesClose.addEventListener ("click", ev => {
    appRecipies.style.display="none";
    newRecipes.style.display = "block";
});

const appPlansClose = document.querySelector(".app__plans__close");
appPlansClose.addEventListener ("click", ev => {
    appPlan.style.display="none";
    addPlan.style.display = "block";
});

//remove recipe and plan
const actionRemove = document.querySelectorAll(".action__remove");
actionRemove.forEach( el => {
    el.addEventListener ("click", ev => {
        const recipieToRemove = el.parentElement.parentElement;
        recipieToRemove.parentElement.removeChild(recipieToRemove);
    });
});
