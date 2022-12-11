function receivesAFunction(callbackFunction) {
    callbackFunction();
}

function returnsANamedFunction() {
    return function namedFunction () {
        console.log("Hello world, I am named!")
    }
}

function returnsAnAnonymousFunction() {
    return function () {
        console.log("Hello world, I am anonymous!")
    }
}