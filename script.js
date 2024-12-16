// function sayHello() {
//     console.log("Salom")
// };

// sayHello();


// const bill = function () {
//     alert("Salom, hammaga")
// };

// bill();


// const ArrowFun = () => {
//     console.log("Salom !")
// };

// ArrowFun();


// const add = (a, b) => a + b;
// console.log(add(2, 3));



const body = document.getElementById("body");
body.style.backgroundColor = "#C4B5A5";
body.style.margin = "0 auto";
body.style.width = "1483px";
body.style.height = "831px";

// ==========================================================

function changeColor() {
    
    const btn2 = document.getElementById("btn2");
    const currentColorBtn2 = window.getComputedStyle(btn2).backgroundColor;

    if (currentColorBtn2 === "rgb(0, 0, 0)") {  
    
        btn2.style.backgroundColor = "#FA9021";
        btn2.style.boxShadow = "0px 4px 4px 0px rgba(255, 255, 255, 0.4)";
        
        
        const btn1 = document.getElementById("btn1");
        btn1.style.backgroundColor = "#C4C4C4"; 
        btn1.style.boxShadow = "none";  
        
        
        body.style.backgroundColor = "black";  
        body.style.color = "white";  
    } else if (currentColorBtn2 === "rgb(250, 144, 33)") {  
        
        const btn1 = document.getElementById("btn1");
        btn1.style.backgroundColor = "#FA9021";  
        btn1.style.boxShadow = "0px 4px 4px 0px rgba(255, 255, 255, 0.4)";  
        
        
        body.style.backgroundColor = "#C4B5A5";  
        body.style.color = "black";
        
        
        btn2.style.backgroundColor = "#000000";  
        btn2.style.boxShadow = "0px 4px 4px 0px #00000040";  
    }
};

// ==========================================================

function changeColor2() {
    
    body.style.backgroundColor = "#C4B5A5";  
    body.style.color = "black";  
    
    const btn1 = document.getElementById("btn1");
    btn1.style.backgroundColor = "#FA9021";  
    btn1.style.boxShadow = "0px 4px 4px 0px rgba(255, 255, 255, 0.4)"; 
    
    const btn2 = document.getElementById("btn2");
    btn2.style.backgroundColor = "#000000";  
    btn2.style.boxShadow = "0px 4px 4px 0px #00000040";  
};

