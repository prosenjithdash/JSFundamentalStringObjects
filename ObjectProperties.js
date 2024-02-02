//Object Properties

const person = {
    Name: 'Prosenjith Dash Pappu',
    Email: 'prosenjith.p.w@gmail.com',
    Profession: 'Web Developer',
    Salary: 60000,
    Hobby: ['Bike Tour', 'Helping', 'Bike Ride', 'Car Drive'],
    University: {
        UniversityName: 'DIU',
        Id: '212-15-14749',
        Dipartment: 'CSE',
        Batch: '59 - D'
    }
}

console.log(person);

// Dot Notation
// Dot symbol use kore object er properties er value access kora

console.log(person.Name);
console.log(person.Email);
console.log(person.University.Id);

//Bracket Notation
//Third backet diye object er properties er value access kora

console.log(person['Name']);

