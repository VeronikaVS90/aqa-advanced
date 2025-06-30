car1 = {
    brand: "BMW",
    model: "X5",
    year: 2018
};

car2 = {
    brand: "Audi",
    model: "Q8",
    owner: "Veronika"
};

car3 = {
    ...car1,
    ...car2
};

console.log(car3);