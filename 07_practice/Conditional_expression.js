let a = ("Hey Whats your age?");

a = Number.parseInt(a); // converting the string to a number
if(a<0){
    ("This is an invalid age");
}

    else if(a<9){
        ("You are a kid")
    }    

    else if(a<18 && a>=9){
        ("You are a kid and you can drive after 18 ")
    }    

else{
    ("You can now drive as you are above 18");
}
console.log("Done")

console.log("You can", (a>18? "Not Drive" : "drive"))