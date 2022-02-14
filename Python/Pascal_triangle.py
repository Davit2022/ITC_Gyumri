def pascal_triangle(n): #create function
	line = [1] #create line
	index = [0] #create index

	for x in range(n): #create for cycle
		print(line) #print the line, that we have
		line = [l+r for l,r in zip(line+index, index+line)] #on the left number sum the right number, and add index/line to the right and left of line

pascal_triangle(6) #print function for 6
