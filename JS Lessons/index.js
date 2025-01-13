
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
