
const mapping = {
    "1": [],
    "2": ['a', 'b', 'c'],
    "3": ['d','e','f'],
    "4": ['g','h','i'],
    "5": ['j','k','l'],
    "6": ['m','n','o'],
    "7": ['p','q','r','s'],
    "8": ['t','u','v'],
    "9": ['w','x','y','z'],
    "0": [],
}

let sols = []
// "2276696"
function allPossibleStrings(number, sol=[]) {

    if(number.length > 0) {
        const letters = mapping[number[0]]
        letters.forEach(l => allPossibleStrings(number.substring(1), sol.concat([l])))
    } else {
        // console.log(sol.join(''))
        sols.push(sol.join(''))
        return
    }
    // recurseNumber()
}

allPossibleStrings('2276696')
console.log(sols)