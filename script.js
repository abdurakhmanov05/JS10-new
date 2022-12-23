// 1 //

let name = (...arr) => {
    let nameTwo = 'Michael'

    for(let item of arr) {
        if (item.lenght > nameTwo.lenght) {
            nameTwo = item
        }
    }
    console.log(nameTwo);
}

name('Alex', 'George', 'Michael')

// 2 //

let min = (a, b) => {
    if (typeof (a, b) === 'number') {
        return Math.min(a, b)
    } else if (Array.isArray(a) === true) {
        return Math.min(...a)
    } else if (typeof (a) === 'object') {
        let val = Object.values(a, b)
        return Math.min(...val)
    }
}

console.log(min(1, 2));
console.log(min([1, 2]));
console.log(min({a: 1, b: 2}));
console.log(min({a: 1, b: 2}, {a: 11, b: 22}));

// 3 //

function bubbleSort (arr) {
    let i, j
    let len = arr.length;
    let isSwapped = false;

    for(i = 0; i < len; i++) {
        isSwapped = false; 
        for(j = 0; j < len; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j]
                arr[j] = arr[j +1];
                arr[j + 1] = temp;
                isSwapped = true;
            }
        }
        if (!isSwapped) {
            break
        }
    }
    console.log(arr)
}

let arr = [-243, 45, 23, 356, 3, 5346, 35, 5];

bubbleSort(arr)