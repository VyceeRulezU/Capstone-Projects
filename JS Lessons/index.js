
let testName = "Vycee"

console.log(testName)

let num = 42;
console.log(num);


let taskNumber = 100

console.log(5 + 3);

let sub = 10 - 20;
console.log(sub)

let mul = 7 * 8;
console.log(mul)

let div = 50 / 5;
console.log(div)

let x = 10;
let y = x * 2;
console.log(y)

let disp = 0.4567958;
let result = Math.round(disp * 10)/10
console.log(result)

let num2 = 12.34;
console.log(Math.floor(num2));

let num3 = 5.7;
let result2 = Math.ceil(num3)
console.log(result2)

let result3 = 5 > 3;
console.log(result3);

let xy = 10;
console.log(xy === 10);

console.log(3 < 2)

console.log(true && false)

const number1 = 15;
const isLessThan20 = number1 < 20;
console.log(isLessThan20);

const number2 = 10; 
const isPositive = number2 > 0;
console.log(isPositive); 

let number3 = 73;

if (number3 % 2 === 0) {
  console.log("The number is even.");
} else {
  console.log("The number is odd.");
}

let number4 = 0;

if (number4 === 0) {
  console.log("The number is equal to 0.");
} else {
  console.log("The number is not equal to 0.");
}

console.log(7 <= 3)

let age = 8;
if (age >= 18){
    console.log("You are an Adult")
}else {
    console.log("your are a Minor")
}

let str = ""; 

if (str === "") {
  console.log("The string is empty.");
} else {
  console.log("The string is not empty.");
}

let number5 = 75;

if (number5 < 100) {
  console.log("The number is less than 100.");
} else {
  console.log("The number is not less than 100.");
}


let isTrue = false;

if (isTrue) {
  console.log("Yes");
} else {
  console.log("No");
}

let score = 85;
if (score >= 90) {
    console.log("Grade A");
}else if (score >= 75) {
    console.log("Grade B");
} else {
    console.log("Grade C")
}

let number = 24;

if (number % 5 === 0) {
  console.log("The number is divisible by 5.");
} else {
  console.log("The number is not divisible by 5.");
}

let person = {
    name: "John Doe",  
    age: 30,           
    city: "New York"   
  };
  
  console.log(person);
  

  let numbers = [1, 2, 3];

console.log(numbers);

function sayHappyBirthday(userName){
    console.log(`Happy Bithday ${userName}`);
}

sayHappyBirthday("Collins")

function addNumbers(num1, num2) {
    let sumTotal = Number(num1) + Number(num2);
    console.log(sumTotal);
    return sumTotal;
}

addNumbers(15, 45);

// Generate an array of student information
const students = [
  { fullname: "Alice Johnson", studentId: "S001", score: 85 },
  { fullname: "Bob Smith", studentId: "S002", score: 90 },
  { fullname: "Catherine Brown", studentId: "S003", score: 78 },
  { fullname: "Daniel Wilson", studentId: "S004", score: 92 },
  { fullname: "Emily Davis", studentId: "S005", score: 88 }
];

// Loop through the students array and display their full names
for (let i = 0; i < students.length; i++) {
  console.log(`Student Full Name: ${students[i].fullname}`);
}

const customerDB = [
  {
    customerName: "Joseph Brendan",
    customerAccNo: 5390275302,
    customerBalance: 1000000,
  },
  {
    customerName: "Victor Ironali",
    customerAccNo: 53902342302,
    customerBalance: 2000000,
  },
  {
    customerName: "Gift Okoye",
    customerAccNo: 5390275982,
    customerBalance: 3000000,
  },
  {
    customerName: "Morayo Efuntoye",
    customerAccNo: 5390398702,
    customerBalance: 4000000,
  },
];

for (let x = 0; x < customerDB.length; x++) {
  let customers = customerDB[x];
  let nameOfCustomer = customers.customerName;
  let accNoOfCustomer = customers.customerAccNo;
  let balanceOfCustomer = customers.customerBalance;

  if (accNoOfCustomer === 5390398702) { // Corrected comparison operator
    console.log(
      `This account belongs to ${nameOfCustomer} and their account balance is ${balanceOfCustomer}`
    );
  }
}


const africanCountries = [
  {
      country: "Egypt",
      capital: "Cairo",
      tourism: "Pyramids of Giza and The Sphinx"
  },
  {
      country: "South Africa",
      capital: "Pretoria",
      tourism: "Kruger National Park and Table Mountain"
  },
  {
      country: "Kenya",
      capital: "Nairobi",
      tourism: "Masai Mara and Mount Kenya"
  },
  {
      country: "Morocco",
      capital: "Rabat",
      tourism: "Medina of Fez and Hassan II Mosque"
  },
  {
      country: "Tanzania",
      capital: "Dodoma",
      tourism: "Mount Kilimanjaro and Serengeti National Park"
  },
  {
      country: "Nigeria",
      capital: "Abuja",
      tourism: "Yankari National Park and Lekki Conservation Centre"
  },
  {
      country: "Rwanda",
      capital: "Kigali",
      tourism: "Volcanoes National Park and Lake Kivu"
  },
  {
      country: "Botswana",
      capital: "Gaborone",
      tourism: "Okavango Delta and Chobe National Park"
  },
  {
      country: "Namibia",
      capital: "Windhoek",
      tourism: "Namib Desert and Etosha National Park"
  },
  {
      country: "Uganda",
      capital: "Kampala",
      tourism: "Bwindi Impenetrable Forest and Murchison Falls"
  }
];

// Using forEach to loop through the array and display countries with their index
africanCountries.forEach((country, index) => {
  console.log(`${index + 1}. ${country.country}`);
});

// Alternative method using Object.entries() to show both index and full details
console.log("\nFull details with index:");
Object.entries(africanCountries).forEach(([index, data]) => {
  console.log(`
  Index: ${parseInt(index) + 1}
  Country: ${data.country}
  Capital: ${data.capital}
  Tourism: ${data.tourism}
  `);
});


const marketPrice = [
  {
      nameOfItem: "Soap",
      oldPrice: 15,
      newPrice: 25,
  },
  {
      nameOfItem: "Drink",
      oldPrice: 15,
      newPrice: 25,
  },
  {
      nameOfItem: "Bread", 
      oldPrice: 10,
      newPrice: 20,
  }
];


for (let x = 0; x < marketPrice.length; x++) {
  let store = marketPrice[x];
  
  let oldPrice = store.oldPrice;
  let newPrice = store.newPrice;
  let nameOfItem = store.nameOfItem;
  let difference = newPrice - oldPrice;
  
  
  console.log(`
  Item ${x + 1}: ${nameOfItem}
  The Old Price is $${oldPrice} and the new price is $${newPrice}
  Price Increase: $${difference}
  -------------------------`);
}


const donors = [
  {
    dName: "Lindsay Lohan",
    dAmount: 10000,
  },
  {
    dName: "Andrew Yung",
    dAmount: 5000,
  },
  {
    dName: "Micheal Paul",
    dAmount: 100000,
  },
];

donors.forEach(function(donor) {
  let donorName = donor.dName;
  let message = `Thank You ${donorName} for your generous donation.`;
  console.log(message);
});

let returnedData = donors.map(function(item) {
  let donorName = item.dName;
  return `${donorName}`;
});

console.log(returnedData);


const products = [
  {
    itemName: "Laptops",
    price: 2000,
  },
  {
    itemName: "Phone",
    price: 500,
  },
  {
    itemName: "Tablets",
    price: 700,
  },
];

const increasedPrices = products.map((product) => ({
  itemName: product.itemName,
  price: parseFloat((product.price * 1.1).toFixed(2)),
}));

console.log(increasedPrices);

const studentsRec = [
  {
    name : "Eunice",
    score : 85
  },

  {
    name : "Bob",
    score : 42
  },

  {
    name : "Charles",
    score : 68
  }
]

const passedStudents = studentsRec.filter(function(stud){
  return stud.score >= 50
})

console.log(passedStudents);

// Nsted Arrays

const firstArray = [1,2,3,4,5]
const secondArray = [6,7,8,9,10]

const arrayNest = [firstArray, secondArray]

// locating data from an array nest

let nestResult = arrayNest [0][3]

console.log(nestResult)

// Merging Arrays

const mergedArray = [...firstArray,...secondArray]
console.log(mergedArray)

// Destructuring Arrays

const names = ["Joseph", "Ben", "Ken"]
const [firstname, secondName, thirdName] = names

console.log(secondName)

// Destructuring Part 2

const [firstName, ...remainingName] = names
console.log(remainingName)
console.log(firstName)

// Destructuring Object Literals

const personTest = {
  nameTest : "Alice",
  age : 25,
  city : "New york"
}


// Sorting

const {nameTest, ...newDetails} = personTest
console.log(nameTest)
console.log(newDetails)


const namesSort = ["John", "Anna", "Zoe", "Bob"]
namesSort.sort()
console.log(namesSort)


const ageSort = [
  {
    user : "John",
    userAge : 25
  }, 
  
  {
    user : "Anna",
    userAge : 20
  }, 
  
  {
    user : "Zoe",
    userAge : 15
  }, 
  
  {
    user : "Bob",
    userAge : 35
  
  }]

  ageSort.sort((a, b)=>{
    return a.userAge - b.userAge
  })


console.log(ageSort, "Vycee Sorted this")

// JSON (JavaScript Objuect Notation)

// To get an element from html in javascript

let title = document.getElementById("title")
console.log(title)

// let header = document.querySelector("#header")
// header.textContent = `Victor Ironali`
// console.log(header)


// // To edit HTML on the browser

// let weather = `warm`

// if (weather === "warm"){
//   header.textContent = `The Weather is Warm`
// } 
// console.log(header)

// let textPara = document.getElementsByClassName("text")
// console.log(textPara)

// let button = document.getElementsByTagName("button")
// console.log(button)

// // querySelector 
// // QuerySelector can use Class Names and ID to retrieve elements
// let textPara2 = document.querySelector(".text")
// console.log(textPara2)

// // Modifying Element and Changing element

// let header = document.getElementById("header")

// // Adding, Removing and Manipulating Attributes
// header.classList.add("victor")
// header.classList.remove("victor")

// header.setAttribute("class", "22")



let namesContainer = document.getElementById("names-container")

const namesOfNoiseMakers = [
  "Andrew",
  "John",
  "Lindsay",
  "Mary",
  "Bose",
  "Paul"
]

namesOfNoiseMakers.forEach((noiseMakerName)=>{
  let paragraph = document.createElement("p")
  paragraph.textContent = noiseMakerName
  namesContainer.append(paragraph)

});

// Events

let button = document.getElementById("click-me")
button.addEventListener("click", function(){
  console.log("Victor Ironali")  
});

// Counter in JS

let countValue = document.getElementById("count")
let increaseButton = document.getElementById("increase")
let decreaseButton = document.getElementById("decrease")
let resetButton = document.getElementById("reset")

let count = 0
increaseButton.addEventListener("click", function(){
  count += 1 
  countValue.textContent = count
})

decreaseButton.addEventListener("click", function(){
    count -= 1
    countValue.textContent = count
})

resetButton.addEventListener("click", function(event){
    count = 0
    countValue.textContent = count
    console.log(event)
})


// form data collection

let form = document.getElementById("form")
let fullNameInput = document.getElementById("fullname")
let heading = document.getElementById("username")

form.addEventListener("submit", function(event){
  event.preventDefault() 
  let userFullName = fullNameInput.value
  heading.textContent = userFullName

  form.reset()
})