//naive solution
const exponentiate1 = (x, y) => { // x^y
    let sol = x
    while( y > 1) {
        sol *= sol
        y /= 2
    }
}

//attempt 2 naive
const exponentiate2 = (x, y) => {
    let mul = x
    let ans = x
    y >>= 1 
    while(y) {
        mul *= mul
        if (y & 1) ans *= mul
        y >>= 1 
    }
    return ans
}

console.log(exponentiate2(3.5, 9))