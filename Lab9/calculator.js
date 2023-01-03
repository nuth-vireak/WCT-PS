var dot = false;
var operator = false;

var symbol = ["+", '-', '*', '/'];
var symbolIdx = 0;

var num1 = "0";
var num2 = "0";

function numOne() {
    if (!operator) {
        if (num1 == '0') {
            num1 = "1";
        }
        else
            num1 += 1;

        document.getElementById("display").value = num1;
    } else {
        if (num2 == '0') {
            num2 = "1";
        }
        else
            num2 += 1;

        document.getElementById("display").value = num1 + symbol[symbolIdx] + num2;
    }
}

function numTwo() {
    if (!operator) {
        if (num1 == '0') {
            num1 = "2";

        }
        else
            num1 += 2;

        document.getElementById("display").value = num1;
    } else {
        if (num2 == '0') {
            num2 = "2";

        }
        else
            num2 += 2;

        document.getElementById("display").value = num1 + symbol[symbolIdx] + num2;
    }
}

function numThree() {
    if (!operator) {
        if (num1 == '0') {
            num1 = "3";
        }
        else
            num1 += 3;

        document.getElementById("display").value = num1;
    } else {
        if (num2 == '0') {
            num2 = "3";

        }
        else
            num2 += 3;

        document.getElementById("display").value = num1 + symbol[symbolIdx] + num2;
    }
}

function numFour() {
    if (!operator) {
        if (num1 == '0') {
            num1 = "4";

        }
        else
            num1 += 4;

        document.getElementById("display").value = num1;
    } else {
        if (num2 == '0') {
            num2 = "4";

        }
        else
            num2 += 4;

        document.getElementById("display").value = num1 + symbol[symbolIdx] + num2;
    }
}

function numFive() {
    if (!operator) {
        if (num1 == '0') {
            num1 = "5";

        }
        else
            num1 += 5;

        document.getElementById("display").value = num1;
    } else {
        if (num2 == '0') {
            num2 = "5";

        }
        else
            num2 += 5;

        document.getElementById("display").value = num1 + symbol[symbolIdx] + num2;
    }
}

function numSix() {
    if (!operator) {
        if (num1 == '0') {
            num1 = "6";

        }
        else
            num1 += 6;

        document.getElementById("display").value = num1;
    } else {
        if (num2 == '0') {
            num2 = "6";

        }
        else
            num2 += 6;

        document.getElementById("display").value = num1 + symbol[symbolIdx] + num2;
    }
}

function numSeven() {
    if (!operator) {
        if (num1 == '0') {
            num1 = "7";

        }
        else
            num1 += 7;

        document.getElementById("display").value = num1;
    } else {
        if (num2 == '0') {
            num2 = "7";

        }
        else
            num2 += 7;

        document.getElementById("display").value = num1 + symbol[symbolIdx] + num2;
    }
}

function numEight() {
    if (!operator) {
        if (num1 == '0') {
            num1 = "8";

        }
        else
            num1 += 8;

        document.getElementById("display").value = num1;
    } else {
        if (num2 == '0') {
            num2 = "8";

        }
        else
            num2 += 8;

        document.getElementById("display").value = num1 + symbol[symbolIdx] + num2;
    }
}

function numNine() {
    if (!operator) {
        if (num1 == '0') {
            num1 = "9";

        }
        else
            num1 += 9;

        document.getElementById("display").value = num1;
    } else {
        if (num2 == '0') {
            num2 = "9";

        }
        else
            num2 += 9;

        document.getElementById("display").value = num1 + symbol[symbolIdx] + num2;
    }
}

function numZero() {
    if (!operator) {
        if (num1 == '0') {
            num1 = "0";

        }
        else
            num1 += 0;

        document.getElementById("display").value = num1;
    } else {
        if (num2 == '0') {
            num2 = "0";

        }
        else
            num2 += 0;

        document.getElementById("display").value = num1 + symbol[symbolIdx] + num2;
    }
}

function dotBtn() {
    if (dot == false) {
        if (!operator) {
            num1 += '.';
            document.getElementById("display").value = num1;
        } else {

            num2 += '.';
            document.getElementById("display").value = num1 + symbol[symbolIdx] + num2;
        }
        dot = true;
    }
}

function delBtn() {
    if (num1.charAt(num1.length - 1) == '.' ||
        num2.charAt(num1.length - 1) == '.') {
        dot = false;
    }
    if (!operator) {
        if (num1.length == 1) {
            num1 = '0';
        } else {
            num1 = num1.substring(0, num1.length - 1);
        }
        document.getElementById("display").value = num1;
    }
    else {
        if (num2.length == 1) {
            num2 = '0';
        } else {
            num2 = num2.substring(0, num2.length - 1);
        }
        document.getElementById("display").value = num2;
    }
}

function clearAll() {
    document.getElementById("display").value = '0';
    num1 = '0';
    num2 = '0';

    operator = false;
    dot = false;
}

function plus() {
    if (!operator) {
        if (num1 == '0' || num1 == '.0') { // summation, symbolIdx = 0
        } else {
            operator = true;
            dot = false;
            symbolIdx = 0;

            document.getElementById("display").value += String(symbol[symbolIdx]);
        }
    }
}

function sub() {
    if (!operator) {
        if (num1 == '0' || num1 == '.0') { // summation, symbolIdx = 0
        } else {
            operator = true;
            dot = false;
            symbolIdx = 1;

            document.getElementById("display").value += String(symbol[symbolIdx]);
        }
    }
}
function mul() {
    if (!operator) {
        if (num1 == '0' || num1 == '.0') { // summation, symbolIdx = 0
        } else {
            operator = true;
            dot = false;
            symbolIdx = 2;

            document.getElementById("display").value += String(symbol[symbolIdx]);
        }
    }
}
function divide() {
    if (!operator) {
        if (num1 == '0' || num1 == '.0') { // summation, symbolIdx = 0
        } else {
            operator = true;
            dot = false;
            symbolIdx = 3;

            document.getElementById("display").value += String(symbol[symbolIdx]);
        }
    }
}

function equal() {
    if (num2 == '0' || num2 == '0.') {
    } else {
        operator = false;
        switch (symbolIdx) {
            case 0: { // +
                var resultNum = parseFloat(num1) + parseFloat(num2);
                var result;
                // check number is integer
                if (resultNum % 1 == 0){
                    result = String(Math.round(resultNum));
                    dot = false;
                }
                else
                    result = String(resultNum);

                num1 = result;
                num2 = '0';
                document.getElementById("display").value = num1;           
                break;
            }
            case 1: { // -
                var resultNum = parseFloat(num1) - parseFloat(num2);
                var result;
                // check number is integer
                if (resultNum % 1 == 0){
                    result = String(Math.round(resultNum));
                    dot = false;
                }
                else
                    result = String(resultNum);

                num1 = result;
                num2 = '0';
                document.getElementById("display").value = num1; 
                break;
            }
            case 2: { // *
                var resultNum = parseFloat(num1) * parseFloat(num2);
                var result;
                // check number is integer
                if (resultNum % 1 == 0){
                    result = String(Math.round(resultNum));
                    dot = false;
                }
                else
                    result = String(resultNum);

                num1 = result;
                num2 = '0';
                document.getElementById("display").value = num1; 
                break;
            }
            case 3: { // /
                var resultNum = parseFloat(num1) / parseFloat(num2);
                var result;
                // check number is integer
                if (resultNum % 1 == 0){
                    result = String(Math.round(resultNum));
                    dot = false;
                }
                else
                    result = String(resultNum);

                num1 = result;
                num2 = '0';
                document.getElementById("display").value = num1; 
                break;
            }
        }
    }
}
