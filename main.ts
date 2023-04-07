basic.forever(function () {
    music.playMelody("C5 B A G F E D C ", 500)
    basic.pause(100)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . # . .
        `)
    basic.pause(100)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . # . .
        . # # # .
        `)
    basic.pause(100)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . # # # .
        # . # . #
        `)
    basic.pause(100)
    basic.showLeds(`
        . . . . .
        . . # . .
        . # # # .
        # . # . #
        . . # . .
        `)
    basic.pause(100)
    basic.showLeds(`
        . . # . .
        . # # # .
        # . # . #
        . . # . .
        . . # . .
        `)
    basic.pause(100)
    basic.showLeds(`
        . # # # .
        # . # . #
        . . # . .
        . . # . .
        . . . . .
        `)
    basic.pause(100)
    basic.showLeds(`
        # . # . #
        . . # . .
        . . # . .
        . . . . .
        . . . . .
        `)
    basic.pause(100)
    basic.showLeds(`
        . . # . .
        . . # . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.pause(100)
    basic.showLeds(`
        . . # . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.pause(200)
    basic.clearScreen()
    basic.pause(100)
    basic.showNumber(2)
    music.playMelody("C D E F G A B C5 ", 500)
})
