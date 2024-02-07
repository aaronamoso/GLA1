const h1 = document.createElement("h1"); //creates the element
const node = document.createTextNode("Aaron Amoso");
h1.appendChild(node); // appendchild adds a new child node to an existing parent node. this case the parent is <body>
// const element = document.getElementsByTagName("body"); //finds an existing element
document.body.appendChild(h1);

h1.style.color = "#A9A9A9";
h1.style.textAlign = "center"; 

//creates INPUT CHILDREN elements
const input1 = document.createElement("input"); // num1
const input2 = document.createElement("input"); // num2
const div = document.createElement("div");

//first number input
const label1 = document.createElement("label");
const node1 = document.createTextNode("Enter the first number:");
label1.appendChild(node1);
document.body.appendChild(label1);
document.body.appendChild(input1);

document.body.appendChild(div); // to create space

//second number input
const label2 = document.createElement("label");
const node2 = document.createTextNode("Enter the second number:");
label2.appendChild(node2);
document.body.appendChild(label2);
document.body.appendChild(input2);

//INPUT ID
input1.id = 'num1'; // adds and id element to input tag
input2.id = 'num2'; // adds and id element to input tag 
div.id = "result"; // result for both input

//BUTTON
const btn = document.createElement("btn"); //creates a div for the button         
btn.innerHTML = "<input type = 'button'  value = 'Click To View Result' onClick = 'calculate()'>";  //inserting properties within the div button
document.body.appendChild(btn); //shows the button on the page itself//
btn.id = 'sumButton';

document.getElementById("sumButton").addEventListener("click", function() {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    var sum = num1 + num2;
    
    document.getElementById("result").innerHTML = "Sum: " + sum;
 });

 const validateInputs = () => {
    try {
       const num1 = parseFloat(document.getElementById("num1").value);
       const num2 = parseFloat(document.getElementById("num2").value);
 
       if (isNaN(num1)) {
          document.getElementById("num1").style.border = "2px solid red";
          throw new Error("Input 1 is not a valid number");
       }
 
       if (isNaN(num2)) {
          document.getElementById("num2").style.border = "2px solid red";
          throw new Error("Input 2 is not a valid number");
       }
 
       return true;
    } catch (error) {
       document.getElementById("result").innerHTML = error.message;
       return false;
    }
 };
 
 document.getElementById("sumButton").addEventListener("click", () => {
    if (validateInputs()) {
       const num1 = parseFloat(document.getElementById("num1").value);
       const num2 = parseFloat(document.getElementById("num2").value);
       const sum = num1 + num2;
 
       document.getElementById("result").innerHTML = "Sum: " + sum;
    }
 });
 
 // STYLING THE WHOLE PAGE
 document.body.style.backgroundColor = "beige";