// function greet (user) {
//     console.log(`Whats up guys its yah boi ${user}`);

// }
// greet("Saad");


// const greet = function (user) {
//     console.log(`Hello ${user}`);
// }
// greet("Saad");

// // Arrow functions
// const greet = (user) => {
//     console.log(`Hello ${user}`);
// }
// greet("Saad");


// function greet (user, time = "day") {
//     console.log(`Good ${time} ${user}`);

// }
// greet("Saad");
// greet("Saad", "Night");


// let r = prompt("Enter a radius")
// console.log(r)

// function circleArea (radius)
// {
//     return Math.PI * radius * radius;
// }

// let area = circleArea(r);
// alert(`The area of ${r} is ${area.toFixed(2)}`);

let r = prompt("Enter a radius")
console.log(r)

function circleArea (radius)
{
    const radiusP = document.querySelector("#radius");
    const resultP = document.querySelector("#result");
    radiusP.textContent = radius;

    let calculatedArea = Math.PI * radius * radius;
    
    resultP.textContent = calculatedArea.toFixed(2)
    return calculatedArea
}

let area = circleArea(r);
alert(`The area of ${r} is ${area.toFixed(2)}`);