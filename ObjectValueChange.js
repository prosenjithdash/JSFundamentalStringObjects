//Object Value Change

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


console.log(person)
person.Salary = 100000;

person['Email'] = 'prosenjith.edu@gmail.com';
console.log(person)

// person['Hobby'] = ['Dhaka', 'Bandorban', 'CTG'];
// console.log(person)