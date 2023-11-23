
function divide(num1, num2, ) {
    // Perform some calculation
    result = num1 / num2;}

// Define a function that takes two numbers and a callback function
function calculate(num1, num2, callback) {
    // Perform some calculation
    const result = num1 + num2;

    // Call the callback function with the result
    callback(result);
}

// Define a callback function that logs the result to the console
function logResult(result) {
    console.log(`The result is ${result}`);
}

// Call the calculate function with two numbers and the callback function
calculate(5, 10, logResult);

function okCallBack(result) {
    console.log(`The result is ${result}`);
}

function divideCall(success, error){
    try{
        let n1 = arguments[2];
        let n2 = arguments[3];
        if(n1==null||n2==null)
            throw("Faltan parametros");
        if(n2==0)
            throw("Division entre cero");
        let result=divide(n1,n2);
        success(result);
    } catch(ex){
        error(ex);
    }
}


// Define a function that takes two numbers and two callback functions
function calculate(num1, num2, successCallback, errorCallback) {
    // Perform some calculation
    const result = num1 + num2;

    // Call the first callback function with the result
    successCallback(result, function() {
        // If the first callback succeeds, call the second callback function
        console.log('Second callback function called');
    });
}

// Define a callback function that logs the result to the console
function logResult(result, nestedCallback) {
    console.log(`The result is ${result}`);

    // Call the nested callback function
    nestedCallback();
}

// Define an error callback function that logs the error to the console
function logError(error) {
    console.log(`Error: ${error}`);
}

// Call the calculate function with two numbers and the two callback functions
calculate(5, 10, logResult, logError);


function multiplyPromise(result){
    return new Promise((resolve, reject) => {
        // Perform some calculation
        if (result.num1 == null || result.num2 == null) 
            throw ("Faltan parametros");
        const result = num1 * num2;
        // If the calculation is successful, resolve the Promise with the result
        resolve(result);
    });
};


// Define a function that returns a Promise
function dividePromise(num1, num2) {
    return new Promise((resolve, reject) => {
        // Perform some calculation
        if (num2 === 0) {
            // If the second number is 0, reject the Promise with an error message
            reject("Division by zero");
        } else {
            const result = num1 / num2;
            // If the calculation is successful, resolve the Promise with the result
            resolve(result);
        }
    });
}

// Call the dividePromise function with two numbers
let numbers = new Object();
numbers.num1 = 10;
numbers.num2 = 2;

function errorCallback(error) {
    console.log(`Error: ${error}`);
}

multiplyPromise(numbers).then(okCallBack).catch(errorCallback);
    
let numbers = new Object();
numbers.num1 = 5;
numbers.num2 = 4;
//numbers.num3 = 10;
//numbers.num4 = 6;

multiplyPromise(numbers).then((data)=>{
    data.num2 = 10
    return dividePromise(data);
}).then(okCallBack).catch(errorCallback);

multiplyPromise(numbers).then((data)=>{
    data.num2 = 10
    return dividePromise(data);
}).then((data)=>{
    data.num2 = 6
    return multiplyPromise(data);
}).then(okCallBack).catch(errorCallback);



async function operations(){
    let numbers = new Object();
    numbers.num1 = 5;
    numbers.num2 = 4;
    //numbers.num3 = 10;
    //numbers.num4 = 6;
    let val1 = await multiplyPromise(numbers);
    val1.n2 = 10
    let val2 = await dividePromise(val1);
    val2.n2 = 6
    let val3 = await multiplyPromise(val2);
    console.log(val3);
}



//
//
//
//CLASE DEL 26 DE OCTUBRE
//Supuestamente poo
//
//
//
//vamos a hacer todo en otro archivo jeje

