//getting familiar with bitwise operations in js
const printBitsAsList = (n) => { // int -> [bool]
    let sol = []
    while (n > 0) {
        let a = n & 1
        n = n >> 1
        sol.unshift(a)
    }
    return sol
}

/*
    5.1 solution
*/
// using xors property that the xor of a group of bits is its parity
const calculateParity = x => { //where x is 64bit
    x ^= x >> 32
    x ^= x >> 16
    x ^= x >> 8
    x ^= x >> 4
    x ^= x >> 2
    x ^= x >> 1
    return x & 1
}

/*
    5.2 solution
*/
const swapBits = (word, i, j) => { //64 bit word
    if ((word >> i) & 1 !== (word >> j) & 1) { //if relevant bits are not equal
        const bitmask = (1 << i) | (1 << j) //make bitmask where ith and jth bits are set
        word ^= bitmask //xor with bitmask will flip those bits
    }
    return word
}

const swapBitsTerse = (word, i, j) =>
    (word >> i) & 1 !== (word >> j) & 1
        ? word ^ (1 << i) | (1 << j)
        : word

/*
    5.3 soln
*/
// 2^16 lookup table , reverse 16bits at a time, reconstruct backwards, blah blah
