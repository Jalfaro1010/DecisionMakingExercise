// 1 A
let randomNum = Math.floor(Math.random() * 5 +1);

console.log(randomNum);

// 1 B
// From Matt's explanation for future reference because I missed this badly
if (randomNum >= 4) {
    console.log("Greater than or equal to 4");
} else if (randomNum >= 2) {
    console.log("Equal to 2 or 3");
} else {
    console.log("Equal to 1");
}

// 1 C
if (randomNum != 3){
    console.log("Not equal to 3");
}

// 1 D
if (randomNum !== 3 && randomNum !== 5){
    console.log("NOT equal to 3 AND not equal to 5");
}


// 1 E 
// Missed an "=" on both sides
if (randomNum === 2 || randomNum === 4){
    console.log("Equal to 2 or equal to 4");
}
