class Car:
    __engine = 0
    __doorsCount = 0
    __color = 0
    def __init__(self, engine, doorsCount, color_car):
        self.__engine = engine  
        self.__doorsCount = doorsCount
        self.__color = color_car

    def set_color(self, color_car):
        self.__color = color_car   
        
    def set_engine(self, engine):
        self.__engine = engine

    def set_doorsCount(self, doorsCount):
        self.__doorsCount = doorsCount

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


engine = input('Enter the car engine: ')
doorsCount = input('Enter the car doors count: ')
color_car = str(input('Enter the car color: '))
mycar = Niva(engine, doorsCount, color_car)
# mycar.set_engine(engine)
# mycar.set_doorsCount(doorsCount)
# mycar.set_color(color_car)
print("The car engine is: ", mycar.get_engine())
print("The car doors count is: ", mycar.get_doorsCount())
print("The car color is: ", mycar.get_color())
