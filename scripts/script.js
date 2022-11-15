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


let r = prompt("Enter a radius")
console.log(r)

function circleArea (radius)
{
    return Math.PI * radius * radius;
}

let area = circleArea(r);
alert(`The area of ${r} is ${area.toFixed(2)}`);