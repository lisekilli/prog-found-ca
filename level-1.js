// Question 1

var string = "Hello Everyone";

// Question 2

var person = {
    name: "Lise",
    age: 28
};

// Question 3

var outOfStock = true;

if (outOfStock === true) {
    console.log("Out of stock");
} else {
    console.log("In stock");
}

// Question 4

var numbers = [2, 18, 34, 48, 60];

for (var i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}

// Question 5

for (var i = 15; i <= 25; i++) {
    console.log(i);
}

// Question 6

for (var i = 15; i <= 25; i++) {
    if (i === 20) {
        console.log(i);
    }
}

// Question 7

var clothes = [
    {
        product: "coat",
        price: 1400,
        inStock: true
    }, 
    {
        product: "sneakers",
        price: 900,
        inStock: true
    }    
];
for (var i = 0; i < clothes.length; i++) {
    console.log(clothes[i].price);
    console.log(clothes[i].inStock);
}

// Question 8

function whatIDontLike(dislikes) {
    console.log("I don't like " + dislikes); 
}

whatIDontLike("snakes"); 

// Question 9

function subtract (no1, no2) {
    var sum = no1 - no2;
    console.log(sum);
}

subtract(6, 2);

// Question 10

var emptyArray = [];

function OneArg(coat) {
    emptyArray.push(coat);
}

OneArg("Order is placed");
console.log(emptyArray);
