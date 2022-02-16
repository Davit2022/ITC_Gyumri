def pascal_triangle(n):
	line = [1] 
	index = [0] 

	for x in range(n): 
		print(line)
		line = [l+r for l,r in zip(line+index, index+line)] 

pascal_triangle(6) 
