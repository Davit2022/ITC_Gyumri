# from emoji import emojize

# print(emojize(":grinning_face_with_big_eyes:"))

from turtle import *
# t = turtle.Turtle()  
  
# t.forward(100)  
# turtle.mainloop()  

color('red', 'yellow')
begin_fill()
while True:
    forward(200)
    left(170)
    if abs(pos()) < 1:
        break
end_fill()
done()



print(lambda a = 10: a * 5)

