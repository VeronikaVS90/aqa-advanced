const numberList = [1, 10, 14, 2, 4, 5, 43, 34];

const sortedList = [...numberList];

sortedList.sort((a, b) => a - b);

console.log(numberList);
console.log(sortedList);