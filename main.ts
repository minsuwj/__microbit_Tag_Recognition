function Tag_Recognition () {
    huskylens.initI2c()
    huskylens.initMode(protocolAlgorithm.ALGORITHM_TAG_RECOGNITION)
    while (Mood < 100) {
        huskylens.request()
        if (huskylens.isAppear(1, HUSKYLENSResultType_t.HUSKYLENSResultBlock)) {
            basic.showLeds(`
                . # . # .
                . # . # .
                . . . . .
                # . . . #
                . # # # .
                `)
            music.playTone(262, music.beat(BeatFraction.Whole))
            basic.pause(2000)
            basic.clearScreen()
            Mood += 1
        }
        if (huskylens.isAppear(2, HUSKYLENSResultType_t.HUSKYLENSResultBlock)) {
            basic.showLeds(`
                . # . # .
                . # . # .
                . . . . .
                . # # # .
                # . . . #
                `)
            music.playTone(294, music.beat(BeatFraction.Whole))
            basic.pause(2000)
            basic.clearScreen()
            Mood += 1
        }
    }
}
let Mood = 0
Tag_Recognition()
