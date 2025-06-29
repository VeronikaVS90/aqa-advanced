const users = [
    { name: "Anna", email: "anna@i.ua", age: 28 },
    { name: "Dmytro", email: "dmytro@i.ua", age: 35 },
    { name: "Svitlana", email: "svitlana@i.ua", age: 22 }
];

for (const { name, email, age } of users) {
    console.log(`Name: ${name}, Email: ${email}, Age: ${age}`);
}
