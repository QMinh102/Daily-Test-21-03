let array = [0, 1, 4, 5, 6, 7, 1, 9];
let array2 = [1, 2, 3, 4, 5, 6, 7, 8];
let array3 = [1000, 204, 142, 98724, 19421841, 1];
let array4 = [100, 204, 142, 4, 194241, 50];
let array5 = [200, 100, 19, 199, 322, 320, 400];
let array6 = [];
let increasingTest = false;
let biggestNumber = 0;


function testingArrayIncrementIncrease(array) {
    let arrayCheck = new Map();

    if (array.length === 0) {
        console.log(`The array has no value`);
    } else {
        for (let arrayIndexing = 0; arrayIndexing < array.length; arrayIndexing++) {
            if (arrayCheck.get(array[arrayIndexing]) === undefined) {
                increasingTest = true;
                arrayCheck.set(arrayCheck.size, array[arrayIndexing]);
            } else {
                increasingTest = false;
            }
        }
        if (increasingTest === true) {
            console.log(`The array does increase in value in order`);
        } else {
            console.log(`The array doesn't increase in value in order`);
        }
    }
}

testingArrayIncrementIncrease(array);
testingArrayIncrementIncrease(array2);
testingArrayIncrementIncrease(array3);
testingArrayIncrementIncrease(array4);
testingArrayIncrementIncrease(array5);
testingArrayIncrementIncrease(array6);


function testingFrontBigValue(array) {
    let bigNumber = new Map();
    let bigNumberCount = 0;
    let valid = false;

    if (array.length <= 0 ) {
        biggestNumber = `The array has no value`;
        console.log(biggestNumber);
    } else if (array.length === 1) {
        biggestNumber = array[0];
        bigNumberCount = 1;
        console.log(bigNumberCount);
        valid = true;
    } else {
        biggestNumber = array[0];
        for (let indexing = 0; indexing < array.length; indexing++) {
            if (array[indexing] > biggestNumber) {
                if (bigNumber.get(array[indexing]) === undefined) {
                    bigNumber.set(array[indexing], 1);
                    bigNumberCount++;
                    valid = true;
                } else {
                    bigNumber.set(array[indexing], bigNumber.get(array[indexing]));
                    bigNumberCount++;
                    valid = true;
                }
            }
        } if (bigNumber.size === 0) {
            biggestNumber = `The array has no value`;
            console.log(biggestNumber);
        }
    }
    if (valid === true) {
        console.log(`The amount of number that is bigger than all the value in front of it is ${bigNumberCount}`);
    }
}

testingFrontBigValue(array);
testingFrontBigValue(array2);
testingFrontBigValue(array3);
testingFrontBigValue(array4);
testingFrontBigValue(array5);
testingFrontBigValue(array6);
