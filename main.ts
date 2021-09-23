basic.showString("ASK ME A QUESTION")
input.onButtonPressed(Button.A, function on_button_pressed_a() {
    basic.showString("Yes")
})
input.onButtonPressed(Button.B, function on_button_pressed_b() {
    basic.showString("NO")
})
