function processData(input) {
    input = input.split('\r\n');
    for (var inputElement = 0; inputElement < input.length; inputElement++) {

        let singleStr = input[inputElement].split(';');

        if (singleStr[0] === 'S') {

            let upperCaseElements = camelCaseChecker(singleStr[2]);
            // console.log("Camel Case Elements => ", upperCaseElements)

            if (singleStr[1] === 'M') {

                for (var i = 0; i < upperCaseElements.length; i++) {
                    singleStr[2] = singleStr[2].slice(0, upperCaseElements[i]) + " " + singleStr[2].slice(upperCaseElements[i])
                }
                console.log(singleStr[2].split('()')[0].toLowerCase())
            }
            else if (singleStr[1] === 'V') {
                for (var i = 0; i < upperCaseElements.length; i++) {
                    singleStr[2] = singleStr[2].slice(0, upperCaseElements[i]) + " " + singleStr[2].slice(upperCaseElements[i]);
                }
                console.log(singleStr[2].toLowerCase());
            }
            else if (singleStr[1] === 'C') {
                for (var i = 1; i < upperCaseElements.length; i++) {
                    singleStr[2] = singleStr[2].slice(0, upperCaseElements[i]) + " " + singleStr[2].slice(upperCaseElements[i]);
                }
                console.log(singleStr[2].toLowerCase());
            }

        }
        else if (singleStr[0] === 'C') {
            let combinedStringArray = singleStr[2].split(' ');
            let tempChar = '';
            if (singleStr[1] === 'M') {
                singleStr[2] = combinedStringArray[0];
                for (var i = 1; i < combinedStringArray.length; i++) {
                    tempChar = combinedStringArray[i][0].toUpperCase();
                    combinedStringArray[i] = tempChar + combinedStringArray[i].slice(1);
                    singleStr[2] += combinedStringArray[i];
                }
                console.log(singleStr[2] + "()");
            }
            else if (singleStr[1] === 'V') {
                singleStr[2] = combinedStringArray[0];
                for (var i = 1; i < combinedStringArray.length; i++) {
                    tempChar = combinedStringArray[i][0].toUpperCase();
                    combinedStringArray[i] = tempChar + combinedStringArray[i].slice(1);
                    singleStr[2] += combinedStringArray[i];
                }
                console.log(singleStr[2]);
            }
            else if (singleStr[1] === 'C') {
                singleStr[2]=''
                for (var i = 0; i < combinedStringArray.length; i++) {
                    tempChar = combinedStringArray[i][0].toUpperCase();
                    combinedStringArray[i] = tempChar + combinedStringArray[i].slice(1);
                    singleStr[2] += combinedStringArray[i];
                }
                console.log(singleStr[2]);
            }
        }
    }
}

function camelCaseChecker(singleStr) {
    let arr = [];
    for (var i = 0; i < singleStr.length; i++) {
        if (singleStr[i] === singleStr[i].toUpperCase()) {
            if (singleStr[i] === '(' || singleStr[i] === ')') {
                continue;
            }
            arr.push(i);
        }
    }
    return arr;
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
    processData(_input);
});
