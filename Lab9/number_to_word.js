// ****** number to word ******

let convertBtn = document.getElementById("convert");
let words = document.getElementById("words");

convertBtn.addEventListener("click", function () {
    let number = document.getElementById("Number").value;

    words.value = doConvert(number).toUpperCase() + ' DOLLARS';

    //words.value = inWords(number) + ' DOLLARS';

    // if (String(number).length === 1) {
    //     words.value = oneDigitEvaluation(number) + " DOLLARS";
    // }
    // else if (String(number).length === 2) {
    //     twoDigitEvaluation(number);
    // }
    // else if (String(number).length === 3) {

    // }
});

// this function handle the conversion of 1 digit number (0-9)
function oneDigitEvaluation(number) {
    let word;
    if (number === '0') {
        word = "ZERO";
    } else if (number === '1') {
        word = "ONE";
    } else if (number === '2') {
        word = "TWO";
    } else if (number === '3') {
        word = "THREE";
    } else if (number === '4') {
        word = "FOUR";
    } else if (number === '5') {
        word = "FIVE";
    } else if (number === '6') {
        word = "SIX";
    } else if (number === '7') {
        word = "SEVEN";
    } else if (number === '8') {
        word = "EIGHT";
    } else if (number === '9') {
        word = "NINE";
    }
    return word;
}

// this function handle the conversion of some uniqe number
function uniqeDigitEvaluation(number) {
    let word;
    if (number === "10") {
        word = "TEN";
    } else if (number === "11") {
        word = "ELEVEN";
    } else if (number === "12") {
        word = "TWELVE";
    } else if (number.charAt(0) === '3' || number === "13") {
        word = "THIR";
    } else if (number.charAt(0) === '5' || number === "15") {
        word = "FIFT";
    } else if (number.charAt(0) === '2') {
        word = "TWEN";
    }
    return word;
}

// this function handle the conversion of 2 digit number (10-99)
function twoDigitEvaluation(number) {
    if (number.charAt(0) === '1') {
        if (number === "10" || number === "11" || number === "12") {
            words.value = uniqeDigitEvaluation(number) + " DOLLARS";
        }
        else {
            if (number === "13" || number === "15")
                words.value = uniqeDigitEvaluation(number) + "TEEN DOLLARS";
            else {
                if (number.charAt(1) !== '8')
                    words.value = oneDigitEvaluation(number.charAt(1)) + "TEEN DOLLARS";
                else
                    words.value = oneDigitEvaluation(number.charAt(1)) + "EEN DOLLARS";
            }
        }
    }
    else {
        if (number.charAt(1) === '0') {
            if (number.charAt(0) === '2' || number.charAt(0) === '3' || number.charAt(0) === '5')
                words.value = uniqeDigitEvaluation(number) + "TY DOLLARS";
            else {
                if (number.charAt(0) !== '8')
                    words.value = oneDigitEvaluation(number.charAt(0)) + "TY DOLLARS";
                else
                    words.value = oneDigitEvaluation(number.charAt(0)) + "Y DOLLARS";
            }
        }
        else {
            if (number.charAt(0) === '2' || number.charAt(0) === '3' || number.charAt(0) === '5')
                words.value = uniqeDigitEvaluation(number) + "TY " + oneDigitEvaluation(number.charAt(1)) + " DOLLARS";
            else {
                if (number.charAt(0) !== '8')
                    words.value = oneDigitEvaluation(number.charAt(0)) + "TY " + oneDigitEvaluation(number.charAt(1)) + " DOLLARS";
                else
                    words.value = oneDigitEvaluation(number.charAt(0)) + "Y " + oneDigitEvaluation(number.charAt(1)) + " DOLLARS";
            }
        }
    }
}
var a = ['','one ','two ','three ','four ', 'five ','six ','seven ','eight ','nine ','ten ','eleven ','twelve ','thirteen ','fourteen ','fifteen ','sixteen ','seventeen ','eighteen ','nineteen '];
var b = ['', '', 'twenty','thirty','forty','fifty', 'sixty','seventy','eighty','ninety'];

function inWords (num) {
    if ((num = num.toString()).length > 9) return 'overflow';
    n = ('000000000' + num).substr(-9).match(/^(\d{2})(\d{2})(\d{2})(\d{1})(\d{2})$/);
    if (!n) return; var str = '';
    str += (n[1] != 0) ? (a[Number(n[1])] || b[n[1][0]] + ' ' + a[n[1][1]]) + 'crore ' : '';
    str += (n[2] != 0) ? (a[Number(n[2])] || b[n[2][0]] + ' ' + a[n[2][1]]) + 'lakh ' : '';
    str += (n[3] != 0) ? (a[Number(n[3])] || b[n[3][0]] + ' ' + a[n[3][1]]) + 'thousand ' : '';
    str += (n[4] != 0) ? (a[Number(n[4])] || b[n[4][0]] + ' ' + a[n[4][1]]) + 'hundred ' : '';
    str += (n[5] != 0) ? ((str != '') ? 'and ' : '') + (a[Number(n[5])] || b[n[5][0]] + ' ' + a[n[5][1]]) + '' : '';
    return str == '' ? '' : str.toUpperCase();
}

// ref = https://codepen.io/saqib1144/pen/vbGEyd?editors=1010
function doConvert (numberInput){

    let oneToTwenty = ['','one ','two ','three ','four ', 'five ','six ','seven ','eight ','nine ','ten ',
    'eleven ','twelve ','thirteen ','fourteen ','fifteen ','sixteen ','seventeen ','eighteen ','nineteen '];
    let tenth = ['', '', 'twenty','thirty','forty','fifty', 'sixty','seventy','eighty','ninety'];

    if(numberInput.toString().length > 7) return myDiv.innerHTML = 'overlimit' ;
    console.log(numberInput);
    //let num = ('0000000000'+ numberInput).slice(-10).match(/^(\d{1})(\d{2})(\d{2})(\d{2})(\d{1})(\d{2})$/);
  let num = ('0000000'+ numberInput).slice(-7).match(/^(\d{1})(\d{1})(\d{2})(\d{1})(\d{2})$/);
    console.log(num);
    if(!num) return;

    let outputText = num[1] != 0 ? (oneToTwenty[Number(num[1])] || `${tenth[num[1][0]]} ${oneToTwenty[num[1][1]]}` )+' million ' : ''; 
  
    outputText +=num[2] != 0 ? (oneToTwenty[Number(num[2])] || `${tenth[num[2][0]]} ${oneToTwenty[num[2][1]]}` )+'hundred ' : ''; 
    outputText +=num[3] != 0 ? (oneToTwenty[Number(num[3])] || `${tenth[num[3][0]]} ${oneToTwenty[num[3][1]]}`)+' thousand ' : ''; 
    outputText +=num[4] != 0 ? (oneToTwenty[Number(num[4])] || `${tenth[num[4][0]]} ${oneToTwenty[num[4][1]]}`) +'hundred ': ''; 
    outputText +=num[5] != 0 ? (oneToTwenty[Number(num[5])] || `${tenth[num[5][0]]} ${oneToTwenty[num[5][1]]} `) : ''; 

    return outputText;
}

