// when button A is pressed, it counts up from 0 to 9
input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 10; index++) {
        basic.showIcon(IconNames.SmallSquare)
        basic.pause(100)
        basic.showIcon(IconNames.SmallDiamond)
        basic.pause(100)
    }
    basic.clearScreen()
    for (let index = 0; index <= 9; index++) {
        basic.showNumber(index)
        basic.pause(200)
    }
    basic.clearScreen()
})
// when button A+B is pressed, it shows sum of 1+2+3+4+5......+96+97+98+99+100 = 5050
// counts/add up
input.onButtonPressed(Button.AB, function () {
    for (let index = 0; index < 10; index++) {
        basic.showIcon(IconNames.Heart)
        basic.pause(100)
        basic.showIcon(IconNames.SmallHeart)
        basic.pause(100)
    }
    basic.clearScreen()
    for (let index = 0; index <= 100; index++) {
        sum += index
        basic.showNumber(sum)
    }
    basic.clearScreen()
})
// when button B is pressed, it counts down from 9 to 0
input.onButtonPressed(Button.B, function () {
    for (let index = 0; index < 10; index++) {
        basic.showIcon(IconNames.SmallDiamond)
        basic.pause(100)
        basic.showIcon(IconNames.SmallSquare)
        basic.pause(100)
    }
    basic.clearScreen()
    for (let index = 0; index <= 9; index++) {
        basic.showNumber(9 - index)
        basic.pause(200)
    }
    basic.clearScreen()
})
// on shake, it resets or stop the program
input.onGesture(Gesture.Shake, function () {
    for (let index = 0; index < 10; index++) {
        basic.showIcon(IconNames.Diamond)
        basic.pause(100)
        basic.showIcon(IconNames.Square)
        basic.pause(100)
    }
    basic.clearScreen()
    control.reset()
})
// on start, shows name of program with additional graphics
let sum = 0
basic.showString("For Loops")
basic.pause(200)
basic.clearScreen()
for (let index = 0; index < 10; index++) {
    basic.showIcon(IconNames.Square)
    basic.pause(100)
    basic.showIcon(IconNames.Diamond)
    basic.pause(100)
}
basic.clearScreen()
