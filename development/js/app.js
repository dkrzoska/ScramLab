//reload
let ok = false;
const reload = document.querySelector(".user-logo");
reload.addEventListener ("click", ev => {
    location.reload();
    return false;
});
const recipiesList = document.querySelector(".recipies");
const planList = document.querySelector(".plans");



const desktop = document.querySelector(".desktop");
const messageForm = document.querySelector(".message_form");
//showdashboard
// desktop.addEventListener ("click", ev => {
//     dashboard.style.display = "block";
//     messageForm.style.display = "none";
// });
const a = document.querySelector(".mesage_form_button");
const b = document.querySelector(".message_form_container").querySelector("input")
const userName = document.querySelector(".user-name");
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
    // window.localStorage.setItem('savedName' , savedUserName);
    // console.log("Twoje imię to: ", window.localStorage.savedUserName);
});
//close info in dash board
const closeInfo = document.querySelectorAll(".widget");
closeInfo.forEach ( el => {
    el.lastElementChild.addEventListener("click", ev => {
        el.parentElement.removeChild(el);
    });
});
//add plan
const addPlanDashboard = document.querySelector(".add__plan");

addPlanDashboard.addEventListener ("click", ev => {
    addPlan.style.display = "block";
    dashboard.style.display = "none";
});

const addPlan = document.querySelector(".addplan");
const dashboard = document.querySelector(".app__dashboard");
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
    dashboard.style.display = "block";
});

// add name


