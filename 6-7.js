//naive
function maxProfit(arr) {
    let max = -1
    let low = 9999999999999
    for(let i = 0; i < arr.length; ++i) {
        if(arr[i] < low) {
            low = arr[i]
            continue
        }

        if(arr[i] - low >= max) {
            max = arr[i] - low
        }
    }
    return max
}

console.log(maxProfit([310,315,275,295,260,270,290,230,255,250]))