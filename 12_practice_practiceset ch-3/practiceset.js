let marks = {
    Angel:90,
    Allence:95,
    Khush:45,
    Monika:4
}
// Problem no: 1

for (let i=0; i<Object.keys(marks).length; i++){
    console.log("The marks of " + Object.keys(marks)[i] + "are" + marks[Object.keys(marks)[i]])
}

// Problem no: 2

for (let key in marks){
    console.log("The mark of " + key + " are " + marks[key])
}

//Problem no:3

let cn = 43
let i
while (i != cn) {
    console.log("Try again")
    i = ("Enter the number")
}
console.log("You have enter a correct number")

// Problem: 4

const mean = (a, b, c, d) => {
    return(a + b + c + d) /4
}
console.log(mean(4, 5, 6, 7))



