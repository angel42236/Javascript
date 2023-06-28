// nn bb ss u - primitive datatype in js
let a = null;
let b = 345;
let c = true; // can also be false
let d = BigInt("5670") + BigInt("5")
let e = "Angel"
let f = Symbol("Very nice symbol")
let g = undefined
console.log(a, b, c, d, e, f, g)
console.log(typeof d)

// Non primitive Data Type - Objects

const item = {
    "Angel": true,
    "Allence": false,
    "Sneha": 55,
    "Dipak": undefined
}
console.log(item["Sneha"])