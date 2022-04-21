console.log("working");

//Create 2 objects - parent and child. Attach methods to parent and use those methods in child object using parents prototype
let parent ={
    fname:"neha",
    lname:"Bhageriya",  
     age : 23,
    showDetails : function(){
        console.log(`my name is ${this.fname} and surname ${this.lname}and age is ${this.age}`);
    }
}
parent.showDetails();
let child ={
    age:24
}
child.__proto__ = parent;
child.showDetails();

console.log(parent);
console.log(child);



//question2: Write code to explain prototype chaining

let parent1 = {
    Name : "Neha",
    Place : "Amravati",
    Age : 23,

    ShowDetails : function (){
        console.log(this.Name+ " " + this.Place + " "+ this.Age);
        
    }
}

parent1.ShowDetails();


let child1 = {
    Name : "Nehu"
}

child1.__proto__ = parent1;
child1.ShowDetails();
console.log(child1);


// Question 3) Add a method to calculate sum of all elements in Array in array's protype, use that method to calculate sum for multiple arrays

let array =[1,2,3,4,5];
let arr = {
    arrayName:function(){
        let arr1 = array.reduce((acc,cur)=>acc = acc + cur,0);
        console.log(arr1);
    }
}
arr.arrayName();


//q4 Write a JavaScript function to retrieve all the names of object's own and inherited properties.

function allKeys(obj) {
    if (!isObject(obj)) return [];
    var keys = [];
    for (var key in obj) keys.push(key);
    return keys;
}
function isObject(obj) 
{
    var type = typeof obj;
    return type === 'function' || type === 'object' && !!obj;
  }
function Student(name) {
  this.name = name;
}
Student.prototype.rollno = true;
console.log(allKeys(new Student("Neha")));