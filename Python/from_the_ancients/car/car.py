class Car:
	day = 0
	month = 0
	year = 0
	
	def __init__(self, day, month, year):
		self.day = day
		self.month = month
		self.year = year

bmw = Car ("15", "09", "1990")
print (bmw.day, "/" , bmw.month, "/", bmw.year)
