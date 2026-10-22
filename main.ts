input.onButtonPressed(Button.A, function () {
    if (stato == 0) {
        stato = 1
    } else if (stato == 1) {
        stato = 2
    } else if (stato == 2) {
        stato = 3
    } else if (stato == 3) {
        stato = 1
    }
})
input.onButtonPressed(Button.B, function () {
    if (stato == 1) {
        stato = 2
    } else {
        stato = 0
    }
})
let stato = 0
stato = 0
basic.showNumber(0)
