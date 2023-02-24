function miniMaxSum(array){
    // check if input is an array
    if (!Array.isArray(array)){
        console.log("The input is not an array.");
        return;
    } 
    // check if the array is not 5 elements
    if (array.length !== 5){
        console.log("The input is not an array of 5 elements.");
        return;
    }
    let minSum = 0;
    let maxSum = 0;
    for (let i = 0; i < array.length ; i++){
        // check if the elements in array are positive integers
        if (!Number.isInteger(array[i]) || array[i] <= 0 ){
            console.log("The array has one non-positive integer element.");
            return;
        }

        let sum = 0;
        for (let j = 0; j < array.length; j++){
            if (i !== j){
                sum += array[j];
            }
        }
        if (i == 0){
            maxSum = sum;
            minSum = sum;
        }else{
            if (sum > maxSum){
                maxSum = sum;
            }
            if (sum < minSum){
                minSum = sum;
            }
        }
    }
    console.log(`${minSum} ${maxSum}`);
}

function printTotalOfArr(array){
    // check if input is an array
    if (!Array.isArray(array)){
        console.log("The input is not an array.");
        return;
    }
    let total = 0;
    for (let i = 0; i < array.length; i++){
        if (!Number.isInteger(array[i])){
            console.log("There is an non-integer element in array.");
            return;
        }
        total += array[i];
    }

    console.log(total);
}

function printMinOfArray(array){
    if (!Array.isArray(array)){
        console.log("The input is not an array.");
        return;
    }
    let min = array[0];
    for (let i = 0; i < array.length; i++){
        if (!Number.isInteger(array[i])){
            console.log("There is an non-integer element in array.");
            return;
        }
        if( i !== 0){
            if (array[i] < min){
                min = array[i];
            }
        }
    }

    console.log(min);
}

function printMaxOfArray(array){
    if (!Array.isArray(array)){
        console.log("The input is not an array.");
        return;
    }
    let max = array[0];
    for (let i = 0; i < array.length; i++){
        if (!Number.isInteger(array[i])){
            console.log("There is an non-integer element in array.");
            return;
        }
        if( i !== 0){
            if (array[i] > max){
                max = array[i];
            }
        }
    }

    console.log(max);
}

function printEvenElements(array){
    if (!Array.isArray(array)){
        console.log("The input is not an array.");
        return;
    }
    let evenElements = [];
    for (let i = 0; i < array.length; i++){
        if (!Number.isInteger(array[i])){
            console.log("There is an non-integer element in array.");
            return;
        }
        if (array[i] % 2 == 0){
            evenElements.push(array[i]);
        }
    }

    console.log(evenElements.join(' '));
}

function printOddElements(array){
    if (!Array.isArray(array)){
        console.log("The input is not an array.");
        return;
    }
    let oddElements = [];
    for (let i = 0; i < array.length; i++){
        if (!Number.isInteger(array[i])){
            console.log("There is an non-integer element in array.");
            return;
        }
        if (array[i] % 2 != 0){
            oddElements.push(array[i]);
        }
    }

    console.log(oddElements.join(' '));
}

const input = [1, 3, 5, 7, 9];
miniMaxSum(input);
// printTotalOfArr(input);
// printMinOfArray(input);
// printMaxOfArray(input);
// printEvenElements(input);
// printOddElements(input);

