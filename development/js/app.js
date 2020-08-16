//close info in dash board
const closeInfo = document.querySelectorAll(".widget");
closeInfo.forEach ( el => {
    el.lastElementChild.addEventListener("click", ev => {
        el.parentElement.removeChild(el);
    });
});
//add plan
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
    console.log(tableFilled);
    tableFill.forEach ((el, i) => {
        el.querySelectorAll("td").forEach ((el, j) => {
            el.innerText = tableFilled[i][j];
        });
    });
});