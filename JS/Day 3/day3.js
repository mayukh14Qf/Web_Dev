
function sumOfTwo(a,b){
    return a + b;
}

function showOutput(){

    //Document Object Model
    document.getElementById("para1").innerHTML="<b>I am Clicked</b>";
    document.querySelector("#para2").innerHTML="Paragraph 2";

    document.querySelector("#para2").style.backgroundColor="red";
    document.querySelector("#para2").style.color="yellow";
    document.querySelector("#para2").style.fontSize="20px";
    document.querySelector("#para2").style.padding="10px";
    

}
let count=0;
function countValue(){

    // document.querySelector("#button-two").innerHTML="<b>2</b>"; // This will allow me to add HTML tags

    count =count + 1;
    document.querySelector("#button-two").innerText=count;

}

function plusValue(){

    count =count + 1;
    document.querySelector("#button-two").innerText=count;

}

function minusValue(){
    
    count =count - 1;
    document.querySelector("#button-two").innerText=count;
}

function resetValue(){
    count=0;
    document.querySelector("#button-two").innerText="Start";
}

// document.getElementById("para2").innerHTML="<b>Paragraph 2</b>";

let sum1= sumOfTwo(5, 10);
console.log(sum1); // 15

let sum2= sumOfTwo(10, 20);
console.log(sum2); // 30

let sum3= sumOfTwo("Mayukhjit"," Chakraborty");
console.log(sum3); // Mayukhjit Chakraborty