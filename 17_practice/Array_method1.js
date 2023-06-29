let num = [1, 2, 3, 45, 5]
let b = num.toString()
console.log(b, typeof b)
let c = num.join("_")
console.log(c, typeof c)

let r = num.pop() // Pop returns the pop element
console.log(num, r)

let A = num.push(56) // Push returns the new array length.
console.log(num, A)

let B = num.shift() // Removes an elements  from the start of the array
console.log(num, B)

let a = num.unshift(78)
console.log(num, a)