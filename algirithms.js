// ______________________________________________________________

const leanear = (arr, target) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) return i
    }
    console.log('not Found');
}
// ______________________________________________________________

const binarySearch = (arr, target) => {
    let left = 0;
    let right = arr.length - 1;
    while (left < right) {
        let middle = Math.floor((left + right) / 2);
        if (arr[middle] === target) return middle;
        if (arr[middle] < target) right = middle - 1
        else left = middle + 1
    }
    return -1;
}

// ______________________________________________________________

const reqersieveBinarySearch = (arr, target, left = 0, right = arr.length - 1) => {
    if (left > right) return -1
    const middle = Math.floor((left + right) / 2);
    if (arr[middle] === target) return middle;
    if (target > arr[middle]) return reqersieveBinarySearch(arr, target, middle + 1, right)
    else return reqersieveBinarySearch(arr, target, left, middle - 1)
}

// ______________________________________________________________

const bubble = arr => {
    let n = arr.length
    let swapped;
    do {
        swapped = false;
        for (let i = 0; i < n - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]]
                swapped = true
            }
        }
        n--;
    } while (swapped);
    return arr
}
// ______________________________________________________________

const selectionSort = arr => {
    arr = arr.slice();
    for (let i = 0; i < arr.length - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];

    }

    return console.log('Selction Sort', arr);
}
// ______________________________________________________________

const insertionSort = arr => {
    for (let i = 1; i < arr.length; i++) {
        for (let j = i; j > 0 && arr[j] < arr[j - 1]; j--) {
            [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]];
        }
    }
    return console.log('Insertion Sort :', arr);
};

// ______________________________________________________________

const quickSort = (arr) => {
    if (arr.length <= 1) {
        return arr;
    }

    let pivot = arr[0];
    let leftArr = [];
    let rightArr = [];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < pivot) {
            leftArr.push(arr[i]);
        } else {
            rightArr.push(arr[i]);
        }
    }

    return [...quickSort(leftArr), pivot, ...quickSort(rightArr)];
};


// ______________________________________________________________

const mergeSort = arr => {
    if (arr.length <= 1) {
        return arr;
    }

    const middle = Math.floor(arr.length / 2);
    const left = arr.slice(0, middle);
    const right = arr.slice(middle);
    return merge(mergeSort(left), mergeSort(right));
}


function merge(left, right) {
    const res = [];
    while (left.length && right.length) {
        if (left[0] <= right[0]) {
            res.push(left.shift())
        } else {
            res.push(right.shift())
        }
    }
    return [...res, ...left, ...right]
}

// ______________________________________________________________

const heapify = (arr, n, i) => {
    let largest = i;
    const left = 2 * i + 1;
    const right = 2 * i + 2;
    if (left < n && arr[left] > arr[largest]) {
        largest = left;
    }
    if (right < n && arr[right] > arr[largest]) {
        largest = right;
    }
    if (largest !== i) {
        [arr[i], arr[largest]] = [arr[largest], arr[i]];
        heapify(arr, n, largest);
    }
}

const heapSort = (arr) => {
    const n = arr.length;
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
        heapify(arr, n, i);
    }
    for (let i = n - 1; i > 0; i--) {
        [arr[0], arr[i]] = [arr[i], arr[0]];
        heapify(arr, i, 0);
    }
    return arr;
}

// ______________________________________________________________

var arr = [15, 16, 8, 75, 2, 20, 11.12, 1222, 13, 147, 18, 193, 4, 5, 6, 7, 1];
var nestedArray = [23, [3, 3, 32, 2], [[112, 21], 12,], 123]
var randomObjArray = [
    { a: [1, 2, 5], b: 12 },
    { ba: [1, 2, 5], ss: 12 },
    { aw: [1, 2, 5], qw: 12 }
];
var objArray = [
    { a: [1, 2, 5], b: 12 },
    { a: [1, 2, 5], b: 12 },
    { a: [1, 2, 5], b: 12 }
];

// * reverse stack 
const insertAtBottom = (stack, element) => {
    if (stack.length === 0) {
        stack.push(element);
    } else {
        let temp = stack.pop();
        insertAtBottom(stack, element);
        stack.push(temp);
    }
};
const reverseStack = (stack) => {
    if (stack.length > 0) {
        let temp = stack.pop();
        reverseStack(stack);
        insertAtBottom(stack, temp);
    }
};

// * DP fibonacci
const fib = (n, memo = {}) => {
    if (n <= 1) return n;
    if (memo[n]) return memo[n];
    memo[n] = fib(n - 1, memo) + fib(n - 2, memo);
    return memo[n];
}

// * merging tow objects without dup
const mergeObjects = (obj1, obj2) => {
    for (const key in obj2) {
        if (!(key in obj1)) {
            obj1[key] = obj2[key]
        }
    }
    return obj1
}

// * shuffling an array
const shuffle = arr => {
    for (let i = 0; i < arr.length; i++) {
        const random = Math.floor(Math.random() * (i + 1));
        [arr[random], arr[i]] = [arr[i], arr[random]];
    }
    return arr;
}

// * sum of each integer in a number // 232  = (2+3+2 = 7)
const getSum = num => {
    num = Math.abs(num);
    if (num === 0) return num
    return num % 10 + getSum(Math.floor(num / 10))
};

// * for reversing an nested array
const reverseNestedArray = nestedArray => {
    if (!Array.isArray(nestedArray)) return nestedArray;
    nestedArray = nestedArray.reverse();
    nestedArray = nestedArray.map(el => reverseNestedArray(el));
    return nestedArray
};

// * sum of numbers in a nested array 
const sumOfNestedArray = arr => {
    let total = 0;
    arr.forEach(el => {
        if (!Array.isArray(el)) {
            total += el;
        } else {
            total += sumOfNestedArray(el);
        }
    })
    return total
}

// * sum of objects values in a array with random field
const sumOfRandomObjArray = arr => {
    let sum = 0;
    arr.forEach(el => {
        Object.values(el).forEach(val => {
            if (Array.isArray(val)) {
                sum += val.reduce((total, cur) => total + cur)
            } else if (typeof val === 'number') {
                sum += val
            }
        });
    })
    return sum;
}

// * two pointers palindrome 
const isPali = str => {
    for (let i = 0, j = str.length - 1; i <= j; i++, j--) {
        if (str[i] !== str[j]) {
            return console.log(false);
        }
    }
    console.log(true);
}

// * Multiplication table
const multiplication = (num,power=1)=>{
   if(power>10)return;
    console.log(`${num} x ${power} = ${power*num}`);
    return multiplication(num,++power)
}