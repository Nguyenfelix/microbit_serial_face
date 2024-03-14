function mouse () {
    if (data.includes("happy")) {
        basic.showLeds(`
            . . . . .
            . . . . .
            # . . . #
            . # # # .
            . . . . .
            `)
    }
    if (data.includes("sad") || data.includes("question")) {
        basic.showLeds(`
            . . . . .
            . # # # .
            # . . . #
            . . . . .
            . . . . .
            `)
    }
}
serial.onDataReceived(serial.delimiters(Delimiters.NewLine), function () {
    data = serial.readString()
    eyes()
})
function eyes () {
    if (data.includes("happy")) {
        basic.showLeds(`
            . . . . .
            . . # . .
            . # . # .
            # . . . #
            . . . . .
            `)
    }
    if (data.includes("sad")) {
        basic.showLeds(`
            . . . . .
            . . . . .
            # . . . #
            . # . # .
            . . # . .
            `)
    }
    if (data.includes("question")) {
        basic.showLeds(`
            . . # # .
            . # . . #
            . . . # .
            . . # . .
            . . # . .
            `)
    }
}
let data = ""
serial.redirect(
SerialPin.P0,
SerialPin.P1,
BaudRate.BaudRate115200
)
basic.forever(function () {
	
})
