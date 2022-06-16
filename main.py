x=0
y=0

def on_button_pressed_a():
    while True:
        global x, y
        for i in range(5):
            for i in range(5):
                led.plot(x,y)
                basic.pause(500)
                led.unplot(x,y)
                x=x+1
                if x>4:
                    x=0
            y=y+1
            led.plot(x,y)
            led.unplot(x,y)
            if y>4:
                y=0
input.on_button_pressed(Button.A, on_button_pressed_a)
