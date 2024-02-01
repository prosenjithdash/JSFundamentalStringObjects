const cource = "Programming Problem Sloving";
console.log(cource);
//Lowercase
console.log(cource.toLowerCase());

//Uppercase
console.log(cource.toUpperCase());


//Comparision Uppercase & Lowercase
const Book = 'Math';
const Subject = 'math';

if (Book.toLowerCase() === Subject.toLowerCase()) {
    console.log('You get Math class');
}

else {
        console.log('You did not get Math class.');

}

//Trim (space remove)

const drink = 'Water';
const liquid = ' Water ';

if (drink.trim() === liquid.trim()) {
    console.log('You drink water');
}

else {
        console.log('You did not drink water');

}