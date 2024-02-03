const man = {
    name: 'pappu',
    sex: 'male',
    place: {
        thana: 'sreemangal',
        distric: 'Moulvibazar',
        division: 'Sylhet',
        Village: {
            v1: 'Vujpur',
            v2: 'Jamshi',
            v3:'Horinakhandi'
        }
    }

}

man.place.Village.v1 = 'Rogunatpur';

console.log(man);
console.log(man.place.division);
console.log(man.place.Village.v3)
console.log(man.place.Village.v1)

//Dellete
delete man.place.Village.v2;

console.log(man.Village)
