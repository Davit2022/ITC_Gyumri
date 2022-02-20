class Car:
   

    def __init__(self, engine,doorsCount,color):

        self.engine=engine
        self.doorsCount=doorsCount
        self.color = color

    def __str__ (self):
        return 'Engine = ' + str(self.engine) + 'Door count = ' + self.doorsCount + 'color = '+self.color    


    def is_run(self):
        print("good car")

        
niva=Car("100","5","black")

print(niva.__str__())
niva.is_run()