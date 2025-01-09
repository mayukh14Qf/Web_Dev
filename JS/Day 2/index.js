let a=6;
a=a+1;
console.log(a);

const b=6;
// b=7;
// console.log(b);

for(i=1;i<=2;i++){
    var d=30;
    console.log(d);
}
console.log(d);


// true -> true
// 1 -> true
// 12,6,89,45.89,90.67 any number -> true
//"Any String" ->True

// 0 -> False
// "" (empty String) ->False
// undefined -> False
// NaN -> Not a Number  ->False
// nuLL -> False


if(""){
    console.log("True Condition");
}
else{
    console.log("false Condition");
}

// Ternary Operator
let age=11;
console.log((age)>18 ? "Adult" :"Not An Adult");

// Guard Operator
let value=76;
let output= "" || 90;
console.log(output);

// Default Operator (Null and Undefined as falsy )

let output1= undefined ?? 90;
console.log(output1);