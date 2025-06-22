function divide(numerator, denominator) {
    if (typeof numerator !== "number" || typeof denominator !== "number") {
        throw new Error("Both arguments must be numbers");
    };

    if (denominator === 0) {
        throw new Error("Division by zero is prohibited");
    };

    return numerator / denominator;
}

// correct case
try {
    const result = divide(8, 2);
    console.log(result);
} catch (error) {
    console.error(error.message);
} finally {
    console.log("Work is completed");
};

// division on zero
try {
    const result = divide(8, 0);
    console.log(result);
} catch (error) {
    console.error(error.message);
} finally {
    console.log("Work is completed");
}

// one of arguments is not a number
try {
    const result = divide("8", 2);
    console.log(result);
} catch (error) {
    console.error(error.message);
} finally {
    console.log("Work is completed");
};