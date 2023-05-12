let storage = "",
    clrBtn = document.getElementById("clear"),
    negatorBtn = document.getElementById("plusOrMinus"),
    probArea = document.getElementById("display__prob"),
    ansArea = document.getElementById("display__ans"),
    numBtns = document.querySelectorAll(".num"),
    operators = document.querySelectorAll(".operators"),
    equalBtn = document.getElementById("equals"),
    eqDisp = document.getElementById("evalDisp"),
    sqrBtn = document.getElementById("square"),
    point = document.querySelectorAll(".point");
console.log(numBtns);
let computed = false;


function handlr(arg, argHandler) {
    arg.forEach(element => {
        element.addEventListener("click", () => {
            argHandler(element);
        });
        console.log(element);
    });
}

function prtNum(btn) {
    if (btn.classList.contains("num") && !btn.classList.contains("point")) {
        if (computed == true) {
            probArea.innerHTML = "";
            ansArea.innerHTML = 0;
            storage = 0;
            probArea.innerHTML += btn.innerHTML;
            storage += String(btn.innerHTML);
            console.log(storage);
            computed = false;
            eqDisp.innerHTML = "";

        } else {
            probArea.innerHTML += btn.innerHTML;
            storage += String(btn.innerHTML);
            console.log(storage);
            computed == false;
            eqDisp.innerHTML = "";

        }
    }
}

function prtPt(btn) {
    let lastInput = probArea.innerHTML[probArea.innerHTML.length - 1];
    if (probArea.innerHTML.includes(".") &&
        !(probArea.innerHTML.includes("+") ||
            probArea.innerHTML.includes("-") ||
            probArea.innerHTML.includes("×") ||
            probArea.innerHTML.includes("÷"))) {
        console.log("nope!")
    } else {
        if (isNaN(lastInput)) {
            if (lastInput == ".") {
                console.log("invalid input!");
            } else {
                probArea.innerHTML += 0 + btn.innerHTML;
                storage += 0 + String(btn.innerHTML);
                console.log("ptsec");
            }
        }
        else {
            probArea.innerHTML += btn.innerHTML;
            storage += String(btn.innerHTML);
            console.log("ptsec2");
        }
    }
    computed = false;
    eqDisp.innerHTML = "";
    console.log(storage);
}

function prtOps(btn) {
    let lastInput = probArea.innerHTML[probArea.innerHTML.length - 1];
    computed = false;
    eqDisp.innerHTML = "";
    if (probArea.innerHTML == 0) {
        probArea.innerHTML += 0 + btn.innerHTML;
    } else if (isNaN(lastInput)) {
        if (lastInput != ".") {
            probArea.innerHTML = probArea.innerHTML.slice(0, -1) + btn.innerHTML;
            storage += btn.value;
        } else {
            probArea.innerHTML += 0 + btn.innerHTML;
            storage += btn.value;
        }
    } else {
        probArea.innerHTML += btn.innerHTML;
        storage += btn.value;
    }
}

function clear() {
    computed = false;
    ansArea.innerHTML = 0;
    eqDisp.innerHTML = "";
    probArea.innerHTML = probArea.innerHTML.slice(0, -1);
    storage = probArea.innerHTML;
}

function compute() {
    let lastInput = probArea.innerHTML[probArea.innerHTML.length - 1];
    
    if (isNaN(lastInput)){
        ansArea.innerHTML = "error: invalid input!";
        computed = true;

    } else {
        // storage = eval(storage);
        ansArea.innerHTML = eval(storage);
        eqDisp.innerHTML = equalBtn.value;
        storage = ansArea.innerHTML;
        console.log(eqDisp.innerHTML, equalBtn.value)
        computed = true;
    }
}

function square() {
    storage = eval(storage);
    storage = storage * storage;
    probArea.innerHTML = `(${probArea.innerHTML})${sqrBtn.value}`
    ansArea.innerHTML = storage;
    computed = true;
}

function negator() {
    computed = false;
    probArea.innerHTML += negatorBtn.value;
    storage = storage + negatorBtn.value;
}

negatorBtn.addEventListener("click", negator)
sqrBtn.addEventListener("click", square);
clrBtn.addEventListener("click", clear);
equalBtn.addEventListener("click", compute);
handlr(numBtns, prtNum);
handlr(point, prtPt);
handlr(operators, prtOps);

console.log("Hello"); 



