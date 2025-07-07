function delayedLog(text, milliseconds) {
    setTimeout(() => {
        console.log(text);
    }, milliseconds);
};

delayedLog("Hello, Veronika!", 2000);