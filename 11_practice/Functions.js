let a = 1;
let b = 2;
let c = 3;

function onePluseAvg(x, y){
    return Math.round (1 + (x + y)/2) 
}

console.log("Average of a and b is ", onePluseAvg(a, b))
console.log("Average b and c is ",onePluseAvg(b, c))
console.log("Average a and c is ",onePluseAvg(a, c))
 