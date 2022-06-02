let x = 0
let y = 0
input.onButtonPressed(Button.A, function on_button_pressed_a() {
    let i: number;
    while (true) {
        
        for (i = 0; i < 5; i++) {
            for (i = 0; i < 5; i++) {
                led.plot(x, y)
                basic.pause(500)
                led.unplot(x, y)
                x = x + 1
                if (x > 4) {
                    x = 0
                }
                
            }
            y = y + 1
            led.plot(x, y)
            led.unplot(x, y)
            if (y > 4) {
                y = 0
            }
            
        }
    }
})
