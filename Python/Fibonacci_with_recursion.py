def Fibonacci(number): #create function
	if number == 0: #if my number is equal 0, then print 0
        	return (0)
	elif number == 1: #if my number is equal 1, then print 1
        	return (1)
	else:
        	return (Fibonacci(number - 1) + Fibonacci(number - 2)) #if my number is not equal 1 and 0, then to sum the previous two numbers   
print(Fibonacci(6)) #print function with number

