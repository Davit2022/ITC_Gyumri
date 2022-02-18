class Car:
    def __init__(self,name,engine,doorsCount,color):
        self.__name = name
        self.__engine = engine
        self.__doorsCount= doorsCount
        self.__color = color

    def setName(self, name):
        self.__name  = name

    def setEngine(self, engine):
        self.__engine  = engine

    def setDoorsCount(self,doorsCount):
        self.__doorsCount  = doorsCount  
   
    def setColor(self,color):
        self.__color = color
     
    def getName(self):
        return self.__name

    def getEngine(self):
        return self.__engine

    def getDoorsCount(self):
        return self.__doorsCount

    def getColor(self):  
        return self.__color

    def isRun(self):
        return "Car is worked"
    
def main():
    name = str(input('Enter the car name: '))
    engine = int(input('Enter the car engine: '))
    doorsCount = int(input('Enter the car doors count: '))
    color = str(input('Enter the car color: '))

    mycar = Car(name,engine,doorsCount, color)
    print(mycar.getName())
    print(mycar.getEngine())
    print(mycar.getDoorsCount())
    print(mycar.getColor())
    print(mycar.isRun())
main()    

