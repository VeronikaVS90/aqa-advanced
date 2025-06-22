function handleEven() {
    console.log("number is even");
};

function handleOdd() {
    console.log("number is odd");
};

function handleNum(number, evenCallback, oddCallback) {
    if (number % 2 === 0) {
        return evenCallback();
    };
    return oddCallback();
};

handleNum(8, handleEven, handleOdd);