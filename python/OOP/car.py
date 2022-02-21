from pickle import TRUE
from tokenize import Number


class Car:
    def __init__(self, engine, doorsCount, color_car):
        self.__engine = engine  
        self.__doorsCount = doorsCount
        self.__color = color_car

    def get_color(self):
        return self.__color

    def get_engine(self):
        return self.__engine

    def get_doorsCount(self):
        return self.__doorsCount

    def isRun(self):
        print ("SHNORHAVOR")

class Niva(Car):
    pass

def main():
    engine = input('Enter the car engine: ')
    doorsCount = int(input('Enter the car doors count: '))
    color_car = str(input('Enter the car color: '))
    color_car1 = color_car.isdigit()
    print (color_car1)
    if (color_car1 == True ):
        print("Pleace write Red or Blue or green ...")    
    else:
        mycar = Niva(engine, doorsCount, color_car)
        print("The car engine is: ", mycar.get_engine())
        print("The car doors count is: ", mycar.get_doorsCount())
        print("The car color is: ", mycar.get_color())
        
main()    