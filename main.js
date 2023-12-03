/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {
    let arr2 = [];
    for(let i = 0; i < arr.length; i++){
        if(fn(arr[i],i)){
            arr2.push(arr[i]);
        }
    }
    return arr2;
};

function greaterThan10(n) { return n > 10; };

function firstIndex(n, i) { return i === 0; };

function plusOne(n) { return n + 1 };