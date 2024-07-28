const arr = [15, 16, 8, 75, 2, 20, 11.12, 1222, 13, 147, 18, 193, 4, 5, 6, 7, 1];
// ! reverse stack using recursion 
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

// ! sortingAlgorithms

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

const fib = (n, memo = {}) => {
    if (n <= 1) return n;
    if (memo[n]) return memo[n];
    memo[n] = fib(n - 1, memo) + fib(n - 2, memo);
    return memo[n];
}

const mergeObjects = (obj1, obj2) => {
    for (const key in obj2) {
        if (!(key in obj1)) {
            obj1[key] = obj2[key]
        }
    }
    return obj1
}

const shuffle = arr => {
    for (let i = 0; i < arr.length; i++) {
        const random = Math.floor(Math.random() * (i + 1));
        [arr[random], arr[i]] = [arr[i], arr[random]];
    }
    return arr;
}



const getSum = num => {
    num = Math.abs(num)
    if (num === 0) return num
    return num % 10 + getSum(Math.floor(num / 10))
}

const neste = [23, [3, 3, 32, 2], [[112, 21], 12,], 123]

const reverse = nestedArray => {
    if (!Array.isArray(nestedArray)) return nestedArray;
    nestedArray = nestedArray.reverse();
    nestedArray = nestedArray.map(el => reverse(el));
    return nestedArray
};


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


(function (num = 5) {
    for (let i = 1; i <= num; i++) {
        let str = ''
        for (let j = 1; j <= i; j++) {

        }
    }
})()


const print = n => {
    function product(n) {
        let result = 1;
        for (let i = 1; i <= n; i++) {
            result *= i;
        }
        return result;
    }
    for (let i = 1; i <= n; i++) {
        let str = '';
        for (let j = 1; j <= i; j++) {
            if (j === 1) {
                str += `${j}`;
            } else {
                str += ` * ${j}`;
            }
        }
        str += ` = ${product(i)}`;
        console.log(str);
    }
}
