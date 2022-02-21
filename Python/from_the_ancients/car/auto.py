class Car:
	__color = 0
	__engine = 0
	__door_count = 0

	def __init__(self, color, engine, door_count):
		self.__color = color
		self.__engine = engine
		self.__door_count = door_count

	def setcolor(self, color):
		self.__color = color
	
	def setengine(self, engine):
		self.__engine = engine
	
	def setdoor_count(self, door_count):
		self.__door_count = door_count

	def getcolor(self, color):
		return color

	def getengine(self, engine):
		return engine

	def getdoor_count(self, door_count):
		return door_count

class Niva (Car):
	pass

a = Niva("blac", "4.5", "4")




	
	
	
	
	
		
