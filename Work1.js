let array = [1,4,5,6,7,1];
let array2 = [1,2,3,4,5,6,7,8];
let array3 = [1000, 204, 142, 98724, 19421841, 1];
let array4 = [1000, 204, 142, 98724, 19421841];
let array5 = [];
let increasingTest = false;
let biggerFrontNumber = false;


function testingArrayIncrementIncrease(array) {
    let arrayCheck = new Map();

    if (array.length === 0) {
        console.log(`The array has no value`);
    } else {
        for (let arrayIndexing = 0; arrayIndexing < array.length; arrayIndexing++) {
            if (arrayCheck.get(array[arrayIndexing]) === undefined) {
                increasingTest = true;
                arrayCheck.set(arrayCheck.size, array[arrayIndexing]);
                console.log(arrayCheck);
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


function testingFrontBigValue(array) {
    let map2 = new Map();

    if (array.length === 0) {
        console.log(`The array has no value`);
    } else {
        for (let indexing = 0; indexing < array.length; indexing++) {
            if (map2.get(indexing - 1) === undefined || (map2.get(indexing - 1) < array[indexing])) {
                biggerFrontNumber = true;
                map2.set(map2.size, array[indexing]);
                console.log(map2);
            } else {
                biggerFrontNumber = false;
            }
        }
        if (biggerFrontNumber === true) {
            console.log(`The front value is always bigger than their previous value`);
        } else {
            console.log(`The front value isn't always bigger than their previous value`);
        }
    }
}

testingFrontBigValue(array);
testingFrontBigValue(array2);
testingFrontBigValue(array3);
testingFrontBigValue(array4);
testingFrontBigValue(array5);
