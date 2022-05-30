// click iPhone case plus and minus button click

/* 
document.getElementById('case-plus').addEventListener('click', function () {
    const inputCount = document.getElementById('case-count');
    const inputCountNum = inputCount.value;
    inputCount.value = parseInt(inputCountNum) + 1;
    // console.log(inputCount.value);
});

document.getElementById('case-minus').addEventListener('click', function () {
    const inputCount = document.getElementById('case-count');
    const inputCountNum = inputCount.value;
    inputCount.value = parseInt(inputCountNum) - 1;
});
*/



// click iPhone case plus and minus button click. can't get negative number.

/* 
function updateCaseNumber(isIncreasing) {
    const inputCount = document.getElementById('case-count');
    const inputCountNum = inputCount.value;
    if (isIncreasing) {
        inputCount.value = parseInt(inputCountNum) + 1;
    }
    else if (inputCountNum > 0) {
        inputCount.value = parseInt(inputCountNum) - 1;
    }
};
document.getElementById('case-plus').addEventListener('click', function () {
    updateCaseNumber(true);
});

document.getElementById('case-minus').addEventListener('click', function () {
    updateCaseNumber(false);
    // inputCount.value = parseInt(inputCountNum) - 1;
}); 
*/



// case money amount will increse with increase input value
/* 
function updateCaseNumber(isIncreasing) {
    const inputCount = document.getElementById('case-count');
    let inputCountNum = inputCount.value;
    if (isIncreasing) {
        inputCountNum = parseInt(inputCountNum) + 1;
        // inputCount.value = parseInt(inputCountNum) + 1;
    }
    else if (inputCountNum > 0) {
        inputCountNum = parseInt(inputCountNum) - 1;
        // inputCount.value = parseInt(inputCountNum) - 1;
    }
    // repeat use but exchange
    inputCount.value = inputCountNum;
    // update case total
    const caseTotal = document.getElementById('case-total');
    caseTotal.innerText = inputCountNum * 59;

};

document.getElementById('case-plus').addEventListener('click', function () {
    updateCaseNumber(true);
});

document.getElementById('case-minus').addEventListener('click', function () {
    updateCaseNumber(false);
    // inputCount.value = parseInt(inputCountNum) - 1;
});
 */



// handle phone and case increase and decrease 
/* 
function updateCaseNumber(product, price, isIncreasing) {
    const inputCount = document.getElementById(product + '-count');
    let inputCountNum = inputCount.value;
    if (isIncreasing) {
        inputCountNum = parseInt(inputCountNum) + 1;
    }
    else if (inputCountNum > 0) {
        inputCountNum = parseInt(inputCountNum) - 1;
    }
    inputCount.value = inputCountNum;
    const caseTotal = document.getElementById(product + '-total');
    caseTotal.innerText = inputCountNum * price;

};

// handle phone increase decrease events
document.getElementById('phone-plus').addEventListener('click', function () {
    updateCaseNumber('phone',1219, true);
})
document.getElementById('phone-minus').addEventListener('click', function () {
    updateCaseNumber('phone',1219, false);
})

// handle case increase decrease events
document.getElementById('case-plus').addEventListener('click', function () {
    updateCaseNumber('case', 59, true);
});

document.getElementById('case-minus').addEventListener('click', function () {
    updateCaseNumber('case', 59, false);
});
*/



// meaningfull variable name like ==  caseTotal to productTotal
/* 
function updateProductNumber(product, price, isIncreasing) {
    const inputCount = document.getElementById(product + '-count');
    let inputCountNum = inputCount.value;
    if (isIncreasing) {
        inputCountNum = parseInt(inputCountNum) + 1;
    }
    else if (inputCountNum > 0) {
        inputCountNum = parseInt(inputCountNum) - 1;
    }
    inputCount.value = inputCountNum;

    const productTotal = document.getElementById(product + '-total');
    productTotal.innerText = inputCountNum * price;

};
// handle phone increase decrease events
document.getElementById('phone-plus').addEventListener('click', function () {
    updateProductNumber('phone', 1219, true);
})
document.getElementById('phone-minus').addEventListener('click', function () {
    updateProductNumber('phone', 1219, false);
})

// handle case increase decrease events
document.getElementById('case-plus').addEventListener('click', function () {
    updateProductNumber('case', 59, true);
});

document.getElementById('case-minus').addEventListener('click', function () {
    updateProductNumber('case', 59, false);
});  
*/


// subtotal,tax,total amount count

function updateProductNumber(product, price, isIncreasing) {
    const inputCount = document.getElementById(product + '-count');
    let inputCountNum = inputCount.value;
    if (isIncreasing) {
        inputCountNum = parseInt(inputCountNum) + 1;
    }
    else if (inputCountNum > 0) {
        inputCountNum = parseInt(inputCountNum) - 1;
    }
    inputCount.value = inputCountNum;

    const productTotal = document.getElementById(product + '-total');
    productTotal.innerText = inputCountNum * price;
    // update total
    calculateTotal();

};
function getInputValue(product) {
    const productCount = document.getElementById(product + '-count');
    const productCountValue = productCount.value;
    return productCountValue;
}
function calculateTotal() {
    const phoneTotal = getInputValue('phone') * 1219;
    const caseTotal = getInputValue('case') * 59;
    const subTotal = phoneTotal + caseTotal;
    const tax = subTotal / 10;
    const totalPrice = subTotal + tax;
    // console.log(subTotal);
    document.getElementById('sub-total').innerText = subTotal;
    document.getElementById('tax-amount').innerText = tax;
    document.getElementById('total-price').innerText = totalPrice;
}

// handle phone increase decrease events
document.getElementById('phone-plus').addEventListener('click', function () {
    updateProductNumber('phone', 1219, true);
})
document.getElementById('phone-minus').addEventListener('click', function () {
    updateProductNumber('phone', 1219, false);
})

// handle case increase decrease events
document.getElementById('case-plus').addEventListener('click', function () {
    updateProductNumber('case', 59, true);
});

document.getElementById('case-minus').addEventListener('click', function () {
    updateProductNumber('case', 59, false);
});
