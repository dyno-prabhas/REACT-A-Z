function getName(name) {
    return name;
}

let a = true;
let b = true;

console.log(a && getName('Prabhas')); // Its print Prabhas

a = false;

console.log(a && getName('Prabhas')); // Its doesnt print Prabhas

console.log(a || getName('Prabhas')); // Here it prints Prabhas


//  Template Literals

let name1 = "Prabhas";
let name2 = "Varma";

console.log(`${name1} ${name2}`); // John Doe 


// Ternary Operator

let showRecipeOne = false;

function getRecipeOneName(recipeName) {
    return recipeName
}

function getRecipeTwoName(recipeName) {
    return recipeName
}

if (showRecipeOne) {
    console.log(getRecipeOneName('Pizza'));
} else {
    console.log(getRecipeTwoName('Coke'));
}

// Alternate for IF-ELSE block

// Syntax: condition ? statement1 : statement2

showRecipeOne 
    ? console.log(getRecipeOneName("Pizza")) 
    : console.log(getRecipeTwoName("Coke"));


const id = 1;
const productName = "Product Apple Watch";
const rating = 5;

// Short Hand Property

const product = {
    id,            // id: id
    productName,   // productName: productName
    rating,        // rating : rating 
}

console.log(product);

// Array Destructuring 

const product2 = {
    description: "Product 2 description",
    id, productName, rating,
}

const getProductTwoDescription = product2.description;
console.log(getProductTwoDescription);

// Alternate way in Array is Destructuring

const { description } = product2;
console.log(description);

const array = [1, 2, 3];

const [first, second, third] = array;
console.log(first, second, third); 


// Default Parameters, Spread and Rest Operators

function mulOfTwoNumbers(num1 = 1, num2 = 2) {
    return num1 * num2;
}
console.log(mulOfTwoNumbers(10));

const array2 = [2, 3, 4];
const array3 = [10, 11, 12];
console.log([ 999, ...array2, 90, ...array3, 10000 ]);

// Spread Operator

function getInfo ( a, b, ...c ) {

    console.log( a, b, c );
    

    return "Prabhas"
}

console.log( getInfo( 1, 2, 3, 4, 5 ) );


// Map, Filter, Find, Some, Every, Include, IndexOf, FindIndex

const personsArray = [

    {
        name: "Person 1",
        age: 30,
        country: 'USA',
    },
    {
        name: "Person 2",
        age: 40,
        country: 'RUSSIA',
    },
    {
        name: "Person 3",
        age: 50,
        country: 'INDIA',
    }
];

// Its print all the details in personsArray
let getAllNames = personsArray.map( (singlePerson, index) => {      
    return singlePerson.name
})

let getPersonFromUSA = personsArray.find((singlePerson, index) => {
    return singlePerson.country === 'USA'
})

let getAllPersonsFromUSA = personsArray.filter((singlePerson, index) => {
    return singlePerson.country === 'USA'
})

let checkSomeArrayMethodWithExample = personsArray.some(singlePerson => {
    return singlePerson.age > 40
})

let checkEveryArrayMethodWithExample = personsArray.every(singlePerson => {
    return singlePerson.age > 40
})


const fruitsArray = ['apple', 'banana', 'orange'];

console.log(fruitsArray.includes('apple')); // true
console.log(fruitsArray.includes('prabhas')); // false


fruitsArray.indexOf('apple'); // 0
fruitsArray.indexOf('banana'); // 1

let getIndexOfPersonWhoIsFromRussia = personsArray.findIndex(singlePerson => {
    return singlePerson.country === 'RUSSIA' // 1
})




let getListOfProducts = document.querySelector('.list-of-products')


async function fetchListOfProducts() {
    try{
        const apiResponse = await fetch('https://dummy.json.com/products', {
            method: 'GET',
        })

        const result = await apiResponse.json();

    } catch (e) {
        console.log(e);
        
    }
}

fetchListOfProducts()

