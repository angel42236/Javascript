let num = [1, 2, 3, 45, 5]
let b = num.toString()
console.log(b, typeof b)
let c = num.join("_")
console.log(c, typeof c)

let r = num.pop() // Pop returns the pop element
console.log(num, r)

let A = num.push(56)
console.log(num, A)