KSB045.onBtnChanged(KSB045.btnName.C, KSB045.pushType.down, function () {
    radio.sendString("c")
})
input.onButtonPressed(Button.A, function () {
    basic.showNumber(KSB045.getJoystickValue(KSB045.valueType.Y))
})
KSB045.onBtnChanged(KSB045.btnName.D, KSB045.pushType.down, function () {
    radio.sendString("d")
})
KSB045.onBtnChanged(KSB045.btnName.SW, KSB045.pushType.down, function () {
    radio.sendNumber(0)
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(KSB045.getJoystickValue(KSB045.valueType.X))
})
KSB045.onBtnChanged(KSB045.btnName.F, KSB045.pushType.down, function () {
    radio.sendString("f")
})
KSB045.onBtnChanged(KSB045.btnName.E, KSB045.pushType.down, function () {
    radio.sendString("e")
})
radio.setGroup(98)
basic.forever(function () {
    if (KSB045.getJoystickValue(KSB045.valueType.Y) <= 250) {
        radio.sendNumber(5)
        basic.showLeds(`
            . . # . .
            . # # # .
            # . # . #
            . . # . .
            . . # . .
            `)
    }
    if (KSB045.getJoystickValue(KSB045.valueType.Y) > 250 && KSB045.getJoystickValue(KSB045.valueType.Y) <= 450) {
        radio.sendNumber(6)
        basic.showLeds(`
            . . # . .
            . # . # .
            # . # . #
            . . . . .
            . . # . .
            `)
    }
    if (KSB045.getJoystickValue(KSB045.valueType.Y) > 550 && KSB045.getJoystickValue(KSB045.valueType.Y) <= 750) {
        radio.sendNumber(7)
        basic.showLeds(`
            . . # . .
            . . . . .
            # . # . #
            . # . # .
            . . # . .
            `)
    }
    if (KSB045.getJoystickValue(KSB045.valueType.Y) > 750 && KSB045.getJoystickValue(KSB045.valueType.Y) <= 1022) {
        radio.sendNumber(8)
        basic.showLeds(`
            . . # . .
            . . # . .
            # . # . #
            . # # # .
            . . # . .
            `)
    }
})
basic.forever(function () {
    if (KSB045.getJoystickValue(KSB045.valueType.X) <= 250) {
        radio.sendNumber(1)
        basic.showLeds(`
            . . # . .
            . # . . .
            # # # # #
            . # . . .
            . . # . .
            `)
    }
    if (KSB045.getJoystickValue(KSB045.valueType.X) > 250 && KSB045.getJoystickValue(KSB045.valueType.X) <= 450) {
        radio.sendNumber(2)
        basic.showLeds(`
            . . # . .
            . # . . .
            # . # . #
            . # . . .
            . . # . .
            `)
    }
    if (KSB045.getJoystickValue(KSB045.valueType.X) > 550 && KSB045.getJoystickValue(KSB045.valueType.X) <= 750) {
        radio.sendNumber(3)
        basic.showLeds(`
            . . # . .
            . . . # .
            # . # . #
            . . . # .
            . . # . .
            `)
    }
    if (KSB045.getJoystickValue(KSB045.valueType.X) > 750 && KSB045.getJoystickValue(KSB045.valueType.X) <= 1022) {
        radio.sendNumber(4)
        basic.showLeds(`
            . . # . .
            . . . # .
            # # # # #
            . . . # .
            . . # . .
            `)
    }
})
