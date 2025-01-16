let var1;

console.log("Mayukhjit Chakraborty");
console.log('Mayukhjit '+var1+ ' Chakraborty');
console.log(`Mayukhjit ${var1} Chakraborty `); // Only Appicable in Backticks


let studentOne={
    firstName: "Soumo",
    age : 20,
    id : "34BCA2"
};
let studentTwo={
    firstName: "Sachali",
    age : 19,
    id : "38BCA2"
};

// Accessing the value according to key
// Dot notation
console.log(studentOne.firstName);
console.log(studentOne.age);

// Bracket Notation
console.log(studentOne["firstName"]);
console.log(studentOne["age"]);

//adding
studentOne.email="soumosanchali@gmail.com";
console.log(studentOne);

studentTwo["email"]="sanchalisoumo@gmail.com";
console.log(studentTwo);

// update 

studentOne.age=23;
studentTwo["age"]=21;
console.log(studentOne);
console.log(studentTwo);

//delete

delete studentOne.age;
delete studentTwo["age"];
console.log(studentOne);
console.log(studentTwo);

let college={
    collegeName: "SVU",
    studentNo : 1007,
    teachersCount:121,
    Rating:{
        reviews : "23",
        likes : "5k"
    },
    alumni : function(){
        console.log("Our College is Best ");
    },
    date: function (){
        return "12-87-5666";
    }
};

console.log(college.studentNo);

console.log(college.Rating.likes);
// console.log(college["Rating"]);
console.log(college["Rating"]["likes"]);

college.alumni();
console.log(college.date());

console.log(college["alumni()"]);