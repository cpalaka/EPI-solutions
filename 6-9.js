//naive 
//sieve of erastothenes?

//do 2's, then all odd starting from 3

function primesToN(n) {
    let arr = new Array(n).fill(true)

    //do 2s first
    let j = 4
    while(j < n) {
        arr[j-1] = false
        j+=2
    }

    for(let i = 3; i <= n; i += 2) {
        let mul = 2*i
        while(mul <= n) {
            arr[mul-1] = false
            mul += i
        }
    }

    let sol = []
    arr.forEach((el, i) => el ? sol.push(i+1) : null)
    return sol
}

//better sieve
// eliminate multiples of primes
function primesToN2(n) {
    let arr = new Array(n+1).fill(true)
    arr[0] = false
    arr[1] = false

    let i = 2
    while( i < n+1) {
        let mul = 2*i
        while(mul < n+1) {
            arr[mul] = false
            mul += i
        }

        do {
            i++
        } while(arr[i] === false)
    }


    let sol = []
    arr.forEach((el, i) => el ? sol.push(i) : null)
    return sol
}

console.log(primesToN2(100))