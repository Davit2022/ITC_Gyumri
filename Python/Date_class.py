from datetime import date 
class Data
      def __init__(self,day,month,year):
          self.day = day
          self.month = month
          self.year
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

