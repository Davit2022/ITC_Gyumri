import datetime

class Date:
    def __init__(self,day,mounth,year):
        self.day = day
        self.mounth = mounth
        self.year = year

    def getValue(self):
        return {"day": day,"mounth": mounth, "year": year}

    @staticmethod
    def dateValidator(mystr):
        if mystr[2] == '/' and mystr[5] == '/':
            print(True)
        else:
            print(False)    
        

mystr = "01/05/2022"
m = mystr.split('/')
day = m[0]
mounth = m[1]
year = m[2]
mydate = Date(m[0],m[1],m[2])
obj = mydate.getValue()
print(obj)
mydate.dateValidator(mystr)