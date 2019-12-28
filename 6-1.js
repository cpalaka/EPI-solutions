//naive solution
const swap = (arr, i, j) => {
    arr[i] ^= arr[j]
    arr[j] ^= arr[i]
    arr[i] ^= arr[j]
}

// WRONG
// attempted to solve via single array traversal (L->R) and method of swapping incorrectly placed elements around the pivot
// const partitionArray = (arr, i) => {
//     const val = arr[i]
//     let ind = i

//     for(let j = 0; j < arr.length ; j++) {
//         //lower than ind, but greater
//         if(j < ind && arr[j] > val) {
//             swap(arr, ind-1, j)
//             swap(arr, ind, ind-1)
//             ind--
//             continue
//         }

//         //greater than ind, but lesser
//         if(j > ind && arr[j] < val) {
//             swap(arr, ind+1, j)
//             swap(arr, ind, ind+1)
//             ind++
//             continue
//         }

//         //not ind, but equal
//         if(j !== ind && arr[j] === val) {
//             if(j < ind) swap(arr, ind-1, j)
//             if(j > ind) swap(arr, ind+1, j)
//             continue
//         }
//     }
// }

//attempt 2, traverse array from both sides, swapping when incorrect
// const partitionArray = (arr, i) => {
//     const val = arr[i]
//     let ind = i

//     let l = 0
//     let r = arr.length -1

//     while ( l !== r) {
//         if( arr[l] > val && arr[r] < val) {
//             swap(arr, l, r)
//             l++
//             r--
//             continue
//         }

//         if( arr[l] < val && arr[r] < val) {
//             l++
//             continue
//         }

//         if(arr[l] > val && arr[r] > val) {
//             r--
//             continue
//         }

//         l++
//         r--
//     }
// }

//attempt 3
//implement partition step of quicksort
const partitionArray = (arr, k) => {
    const val = arr[k]
    //move pivot to end
    swap(arr, k, arr.length-1)

    let s = 0 // low - high split index
    let sameCount = 0 // count of values = val

    for(let i = 0; i < arr.length-2; i++) {
        if(arr[i] <= val) {
            if(arr[i] === val) {
                swap(arr, i, s)
                sameCount++
            }
            else {
                swap(arr, i, s-sameCount)
            }
            s++
        }
    }
    swap(arr, arr.length-1, s)
    return arr
}

console.log(partitionArray([4,21,13,15,13,22,13,7,64,9], 4))