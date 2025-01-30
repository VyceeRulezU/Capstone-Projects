
// Color Generator

const hexadecimalNumberSystem = [0,1,2,3,4,5,6,7,8,9, "A", "B", "C", "D", "E", "F"]
let button = document.getElementById("button")
let hexCode1 = document.getElementById("first-hex-code")
let hexCode2 = document.getElementById("second-hex-code")

function generateRandomNumber(){
    let randomNumber = Math.floor( Math.random() * hexadecimalNumberSystem.length )
    return randomNumber
}

button.addEventListener("click", function(){
    let hexCodeForFirstBox = "#"
    for(let x = 0; x < 6; x++){
        let hexCodeForFirstBox += hexadecimalNumberSystem[generateRandomNumber()]
    }

    firstColorBox.style.backgroundColor = hexCodeForFirstBox
    hexCode1.textContent = hexCodeForFirstBox
})




