// Array map Method.
let arr = [20, 21, 24]
let a = arr.map((value, index, array)=>{
    console.log(value, index, array)
    return value + index
})
console.log(a)

// Array Filter Method

let arr2 = [20, 21, 24, 0, 3, 2 ]
let a2 = arr2.filter((a)=>{
    return a<10
})
console.log(a2)

// Array reduce Method

let arr3 = [1, 2, 3, 4, 5, 2]

const reduc_func = (a1, a2) => {
    return a1 + a2
}
let newarr3 = arr3.reduce(reduc_func)

console.log(newarr3)