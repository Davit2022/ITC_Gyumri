#Any program we create is also a module
# There are also different tasks
#We are studying standart moudule
#It can also be written in other languages and work quietly in python


#Example:| can also be written with a comma։ not desirable
import math
import time
import os


#If we have a problem, we can ignore it by noting the problem
try:
	import nonmodule
except ImportError:
	print ("@tpes modul chka")

#We can change the name of the called module
import random as r
#Gives a random number

print (r.random ())

print (time.time ())

#Indicates the location of the file
print (os.getcwd ())
#print (math.cos (1))
#Computer data:
print (os.uname ())
