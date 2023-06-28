// Q1: Use Logical operator to find whether the age of a person lives between 10 and 20.
/*
let age = ("What is your age?") 
age = Number.parseInt(age)
if(age>10 &&  age<=20){
    console.log("Your age lies between 10 and 20")
}
else{
    console.log("Your age doesn't lies between 10 and 20")

}*/

// Q2: Demonstrate the use of switch case statements in javascript
/*
let age = ("What is your age?") 
switch(age){
    case 12:
        console.log("Your age is 12")
        break
    case 13:
        console.log("Your age is 13")
        break
    case 14:
        console.log("Your age is 14")
        break
    case 15:
        console.log("Your age is 15")
        break
    default:
        console.log("Your age is not special")
}*/

// Q3: Write a javascript program to find  whether a number is Divisible by 2 and 3.

let num = ("What is your age?") 
num = Number.parseInt(num)
if(num%2==0 && num%3==0 ){
    console.log("Your number is divisible by 2 and 3")
}
else{
    console.log("Your number is not divisible by 2 and 3")
    
}

// Q4: print you can Drive or you cannot drive based on  age being greater than 18 using ternary operator.

let age = 19
let a = age>18? "You can drive" : "You cannot drive"
console.log(a)

