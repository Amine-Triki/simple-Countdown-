let myMain = document.querySelector('main');
let myDiv = document.querySelector('div');
// styles
myMain.style.cssText = "display:flex; justify-content:center; align-items:center;height:100vh;";
myDiv.style.cssText = "font-size:6em; font-weight:bold; color:white;   border-radius:50% ; padding:20px;background-color:blue;";
// function
function countdown() {
    myDiv.innerHTML -= 1;
    if (myDiv.innerHTML === "0") {
        clearInterval(counter);
    }
}

let counter = setInterval(countdown,1000);