//naive
function deleteDuplicates(arr) {
    let prev = null
    let s = null
    for(let i =0; i < arr.length ; ++i) {
        if(arr[i] === prev) {
            if(!s) {
                s = i
                continue
            } else {
                continue
            }
        }

        if(s) {
            arr[s] = arr[i]
            s++
        }
        prev = arr[i]
    }

    if(s < arr.length-1) {
        for(let j = s; j< arr.length; j++) {
            arr[j] = 0
        }
    }

    return arr
}

console.log(deleteDuplicates([2,3,5,5,7,11,11,11,13]))