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


// let r = prompt("Enter a radius")
// console.log(r)

// function circleArea (radius)
// {
//     const radiusP = document.querySelector("#radius");
//     const resultP = document.querySelector("#result");
//     radiusP.textContent = radius;

//     let calculatedArea = Math.PI * radius * radius;

//     resultP.textContent = calculatedArea.toFixed(2)
//     return calculatedArea
// }

// let area = circleArea(r);
// alert(`The area of ${r} is ${area.toFixed(2)}`);

const unorderedList = document.querySelector(".shopping"); 

function populateList(list)
{
    for (let i = 0; i < list.length; i++)
    {
        let listItem = document.createElement("li");
        listItem.textContent = list[i]
        unorderedList.append(listItem);
    }
}

const shoppingList = ["cheese", "bread", "green pepper"];
populateList(shoppingList);

function changeListStyle()
{
    unorderedList.classList.remove("circleList");
    unorderedList.classList.add("squareList");

}

changeListStyle()

const listItems = document.querySelectorAll(".shopping li");

function greenItem()
{
    for (let i = 0; i < listItems.length; i++)
    {
        if (listItems[i].textContent.includes("green"))
        {
            listItems[i].classList.add("green");
        }

    }

}
greenItem();
