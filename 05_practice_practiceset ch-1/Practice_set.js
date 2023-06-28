// Chapter 1: Q1- Create a variable of type string and  try to add  number.

let a = "Angel"
let b = 5
console.log(a + b)

//Q2: Use typeof operator to find the datatype of string in last Question:

console.log(typeof (a + b))

//Q3: Create a Const object in js can you change  it to hold a number later

const c = {
    name: "Angel",
    section: 1,
    isPrincipal: false
}
// c1 = "Angel"

//Q4: Try to add a new key to the const object in problem 3 were you able to do it?

const c1 = {
    name: "Angel",
    section: 1,
    isPrincipal: false
}

c1['friend'] = "Prashant"
c1['name'] = "Sneha"

console.log(c1)

// Q5: Write a program to create a word meaning dictionary to 5 words.

const dict = {
    ipsedixit: "an assertion without proof.",
    pervicacious: "adjective. extremely willful",
    proceleusmatic: "inciting, animating, or inspiring.",
    ferdutzt: "confused",
    mauka:"toward the mountains"
}

console.log(dict.proceleusmatic)
console.log(dict['mauka'])