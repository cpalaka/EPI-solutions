//naive
function increment(arr) {
    let i = arr.length - 1

    while( i >= 0) {
        if(arr[i] !== 9) {
            arr[i] += 1
            break
        } else {
            arr[i] = 0
            i-=1
        }
    }

    if( i===-1 && arr[0] === 0) {
        arr = new Array(arr.length + 1 ).fill(0)
        arr[0] = 1
    }

    return arr
}

console.log(increment([9,2]))