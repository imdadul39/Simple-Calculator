let resuldField = $('#result');

function insertNumber(number) {
    let currentNumber = resuldField.val();
    resuldField.val(currentNumber + number);
}

function clearElement() {
    resuldField.val('');
}


function calculate() {
    let result = eval(resuldField.val());
    resuldField.val(result);
}

function deleteData() {
    let value = resuldField.val();
    if (value != '') {
        resuldField.val(value.slice(0, -1));
    }
}