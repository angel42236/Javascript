let num = [3, 54, 8, 6, 5]
// for (let i=0; i<num.length; i++){
//     console.log(num[i])
// }
// ForEach Loop
num.forEach((Element)=>{
    console.log(Element * Element)
})

//Array.form
let name = "Angel"
let arr = Array.from(name)
console.log(arr)

// For...of
for(let i of num){
    console.log(i)
}