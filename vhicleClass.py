from datetime import date

class Data():
    def __init__(self,day,month,year):
        self.day = day
        self.month = month
        self.year = year

    def getValue(self):
        return "%s/%s/%s" %(self.day, self.month, self.year)
    
    @staticmethod
    def dateValodator(day , month, year):
        return "%s.%s.%s"%(day, month, year)

currentdate = Data("10", "02","2022")
currentdate.day = 15
currentdate.month = 10
currentdate.year = 2020
print(currentdate.getValue())
print(currentdate.day)
date =  date.today()
print(currentdate.dateValodator(date.day,date.month,date.year))
""" ------------------------------------------------------------------------------------------------------------------------"""
class Car:
    __engine = "no"
    __color = "White"

    def __init__(self, engine, doorsCount):
        self.engine = engine
        self.doorsCount = doorsCount
    
    def isRun(self):
        if self.engine == 'yes':
            return "Car is running "
        else:
            return "Car is staying"

class Niva(Car):
    def __init__(self):
        def __init__(self):
            print ("Niva")

car = Car("yes",5)
print(car.isRun())
niva = Niva("no", 2)
print(niva.isRun())
