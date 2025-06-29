const person = {
    firstName: "Vitaliy",
    lastName: "Sokolov",
    age: 39
};

person.email = "sokolov@i.ua";
delete person.age;

console.log(person);