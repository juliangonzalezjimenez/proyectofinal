input.onButtonPressed(Button.A, function () {
    maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 50)
})
input.onButtonPressed(Button.B, function () {
    maqueen.motorStop(maqueen.Motors.All)
})
basic.showString("Hola")
music.playMelody("C5 B A G F E D C ", 120)
basic.forever(function () {
	
})
