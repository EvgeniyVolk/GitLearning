integer_1.value=getRandom();
integer_2.value=getRandom();

function getRandom() {
    let genValue;
    return genValue=Math.round(Math.random() * 20);
}   

function getSum(first, second) {
    let result = parseInt(first) + parseInt(second);
    return result;
}

let sumButton = document.querySelector("#myButton");
sumButton.addEventListener("click", checkResult, false);
window.addEventListener("keypress", checkEnterPressed, false);
sumButton.addEventListener("mousemove", mouseMoving, false);

function checkResult() {
    let expectedNumber = getSum(integer_1.value, integer_2.value);
    let actualNumber = parseInt(actualResult.value);

    if(actualNumber == expectedNumber){
        alert("ПРАВИЛЬНО! МОЛОДЕЦ!!!")
    }
    else {
        alert("НЕ ПРАВИЛЬНО. БУДЬ ВНИdМАТЕЛЬНЕЕ");
    }
}

function checkEnterPressed(e) {
    if(e.charCode == 13) { 
        checkResult();
    }
}

function mouseMoving(e) {
    console.log(e.clientX + " " + e.clientY);
}