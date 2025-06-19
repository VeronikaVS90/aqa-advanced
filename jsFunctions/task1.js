// function declaration
function getSquare(width, height) {
    const multiple = width * height;
    return multiple;
}

const result1 = getSquare(5, 10);
console.log(result1);

// function expression
const getSquareExpression = function (width, height) {
    return width * height;
}

const result2 = getSquareExpression(5, 10);
console.log(result2);

// arrow function
const getSquareArrow = (width, height) => width * height;

const result3 = getSquareArrow(5, 10);
console.log(result3);