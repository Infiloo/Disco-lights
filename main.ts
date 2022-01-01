music.playMelody("C D E - E D C - ", 120)
music.playMelody("C D E F - F E D ", 120)
music.playMelody("C C C C C C C C ", 120)
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
