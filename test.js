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

console.log(createNDimensionalArray(2, 3));