basic.showString("Code")
if (input.logoIsPressed()) {
    basic.showLeds(`
        . # . # .
        . . . . .
        . . # . .
        # . . . #
        . # # # .
        `)
}
basic.showLeds(`
    . . . . .
    . . . . .
    . # . . .
    . . . . .
    . . . . .
    `)
basic.showLeds(`
    . . . . .
    . . . . .
    . . # . .
    . . . . .
    . . . . .
    `)
basic.showLeds(`
    . . . . .
    . . . . .
    . . . # .
    . . . . .
    . . . . .
    `)
basic.showLeds(`
    . . . . .
    . . . . .
    . # . . .
    . . . . .
    . . . . .
    `)
basic.showLeds(`
    . . . . .
    . . . . .
    . . # . .
    . . . . .
    . . . . .
    `)
basic.showLeds(`
    . . . . .
    . . . . .
    . . . # .
    . . . . .
    . . . . .
    `)
basic.showLeds(`
    . . . . .
    . . . . .
    . . . . .
    . # . . .
    . . . . .
    `)
basic.showLeds(`
    . . . . .
    . . . . .
    . . . . .
    . # . . .
    . . # . .
    `)
basic.showLeds(`
    . . . . .
    . . . . .
    . . . . .
    . # . . .
    . . # # .
    `)
basic.showLeds(`
    . . . . .
    . . . . .
    . . . . .
    . # . # .
    . . # # .
    `)
basic.showLeds(`
    . . . . .
    . . . . .
    . . . # .
    . # . # .
    . . # # .
    `)
basic.showLeds(`
    . . . . .
    . . . # .
    . . . # .
    . # . # .
    . . # # .
    `)
basic.showLeds(`
    . . . # .
    . . . # .
    . . . # .
    . # . # .
    . . # # .
    `)
basic.showString("Go")
basic.showIcon(IconNames.Ghost)
basic.forever(function () {
    led.setBrightness(input.soundLevel())
})
