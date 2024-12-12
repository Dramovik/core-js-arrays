// 1,2
[0,0]
// 2,2
[[],[]]
// [,]
function createNDimensionalArray(n, size) {
    let arr = Array(size);
    if (n === 1) {
        // console.log(arr.fill(0, 0, size));
        return arr.fill(0, 0, size);
    } else {
        for( let i = 0; i < size; i += 1){
            arr[i] = createNDimensionalArray(n - 1, size);
        }
        // console.log(arr.length);
    }
    return arr;
}

// function createNDimensionalArray(n, size) {
//     if (n === 1) {
//         let arr = Array(size).fill(0, 0, size);
//         return arr;
//     } else {
//         let arr = Array(size).fill([], 0, size)
//             .forEach((item) => {
//                 item = createNDimensionalArray(n - 1, size);
//             });
//         return arr;
//     }
// }

// console.log(createNDimensionalArray(2, 3));


function createChunks(arr, chunkSize) {
    let arrResult = [];
    arr.map((item, index) => {
        if (!Array.isArray(arrResult[Math.floor(index / chunkSize)])) {
            arrResult[Math.floor(index / chunkSize)] = [];
        }
        arrResult[Math.floor(index / chunkSize)].push(item);
    });
    return arrResult;
}
//   0-2
//   3-5
//   6-8

// 0 0
// 1 0.3
// 2 0.6
// 3 1
// 4 1.3
// 5
// 6


// console.log(createChunks([1,2,3,4,5,6,7,8,9,10], 3));

function generateOdds(len) {
  let arr = [];
  function recurs(len, num, arr) {
    if (len > 0) {
        arr.push(num);
        recurs(len - 1, num + 2, arr);
    }
  }
  recurs(len, 1, arr);
  return arr;
}

// console.log(generateOdds(10));

function getElementByIndices(arr, indices) {
  const indicesReverse = indices.reverse()

    function recurs(array, arrIndex) {
        if (arrIndex.length > 1) {
            const index = arrIndex[arrIndex.length - 1];
            arrIndex.pop();
            return recurs(array[index], arrIndex);
        }
        return array[arrIndex[0]];
    }

  return recurs(arr, indicesReverse);
}

// console.log(getElementByIndices(
//     ['one', 'two', 'three'], [2]
// ));

function getIdentityMatrix(n) {
    const arr = [];
    let count = 0;

    function rec() {
        if (count < n) {
            arr[count] = Array(n).fill(0, 0, n);
            arr[count][count] = 1;
            count += 1;
            rec();
        }
    }
    rec();
    return arr;
}


//   console.log(getIdentityMatrix(2));

function getIndicesOfOddNumbers(numbers) {
    const arr = [];
  
    function rec(count) {
      if (count < numbers.length) {
        if (numbers[count] % 2 > 0) {
          arr.push(count);
        }
        rec(count + 1);
      }
    }
  
    rec(0);
    return arr;
  }

//   console.log(getIndicesOfOddNumbers([1, 2, 3, 4, 5]));
// console.log((16777215).toString(16));

function getHexRGBValues(arr) {
    return arr.map((item) => {
      return `#${item.toString(16).toUpperCase().padStart(6, 0)}`;
    });
  }

  // console.log(getHexRGBValues([0, 255, 16777215]));

  function findLongestIncreasingSubsequence(nums) {
    let temp = 0;
    let result = 0;
    let num = 0;
  
    function rec(index) {
      if (index < nums.length) {
        if (nums[index] > temp) {
          num += 1;
        } else {
          if (num > result) {
            result = num;
          }
          num = 1;
        }
        temp = nums[index];
        rec(index + 1);
      } else {
        if (num > result) {
          result = num;
        }
      }
    }
  
    rec(0);
    return result;
  }

  // console.log(findLongestIncreasingSubsequence([10, 22, 9, 33, 21, 50, 41, 60, 80]));

  function propagateItemsByPositionIndex(arr) {
    let arrResult = [];

    function rec(index) {
      if (index < arr.length){
        arrResult = arrResult.concat(Array(index + 1).fill(arr[index]));
        rec(index + 1);
      }
    }
    rec(0);
    return arrResult;
  }

  // console.log(propagateItemsByPositionIndex(['a', 'b', 'c', null]));
  // console.log(Array(4).fill('a'))

  let a = {
    aaa: 2
  }
  let b = ['aaa']

  // console.log(a[b[0]])

  function swapHeadAndTail(arr) {
    const arr1 = arr.slice(0, Math.floor(arr.length / 2));
    const arr2 = arr.slice(Math.ceil(arr.length / 2), arr.length);
    if (arr.length % 2 > 0) {
      return [...arr2, arr[Math.floor(arr.length / 2)], ...arr1];
    }
    return [...arr2, ...arr1];
  }

  console.log(swapHeadAndTail([1, 2, 3, 4, 5, 6]));