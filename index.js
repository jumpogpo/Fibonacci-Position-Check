const prompt = require("prompt-sync")({ sigint: true });

console.clear()
process.stdout.write(
    String.fromCharCode(27) + "]0; Fibonacci Position Check" + String.fromCharCode(7)
);

function CheckFibonacci(Position) {
    console.clear()
    var One = 0
    var Two = 1
    var Three
    var OneLineNumber = "0 1 "

    for (let i = 3; i <= Position; i++) {
        Three = One + Two
        OneLineNumber += Three + " "
        One = Two
        Two = Three
    }

    console.log(OneLineNumber, "\n")
    console.log("The Fibonacci on position", Position, "is", Three)
}

function StartProgram() {
    const InputNumber = prompt('Please enter the number of position: ');

    if (!isNaN(InputNumber)) {
        CheckFibonacci(InputNumber)
    }else {
        console.log('Please enter the number not letter!!')
    }

    console.log()
    StartProgram()
}

StartProgram()