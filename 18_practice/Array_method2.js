// let num = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let num_more = [11, 12, 13, 14, 15, 16, 17, 18, 19]
let num_even_more = [211, 212, 213, 214, 215, 216, 217, 218, 219]

delete num [0]
console.log(num.length) 

let newArray = num.concat(num_more, num_even_more)
console.log(newArray)
console.log(num, num_more)

// sort method
let compare = (a, b) => {
    return a - b 
}
// let num = [554, 25, 5, 48, 61, 7, 256, 4]
num.sort(compare)
num.reverse()
console.log(num)

//Splice and slice method

let num = [256, 487, 56, 125, 47, 23, 458 ]
num.splice(2, 23, 12, 14)
console.log(num)