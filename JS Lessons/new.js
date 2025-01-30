// JSON and Local Storage
// JSON = JavaScript Object Notation
localStorage.setItem

const jsonData =
{
    "name" : "John",
    "age" : 30,
    "city" : "Lagos",
    "isCitizen" : true,
}



const javaScriptObject = {
    name : "John",
    age : 30,
    city : "Lagos",
    isCitizen : true,
}

// Convert regular JavaScript Object to JSON

let convertedData = JSON.stringify(javaScriptObject)

// convert JSON back to regular JS

// let parsedData = JSON.parse(javaScriptObject)
// console.log(javaScriptObject)

localStorage.setItem("myData", JSON.stringify(javaScriptObject))