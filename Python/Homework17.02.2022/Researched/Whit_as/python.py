#Opens the file Otherwise create։ inFILE Needed to work with a file
#this option automatically closes the file

with open('test.txt', 'wt', encoding='utf-8') as inFile:
	# Input in integer
	num = int(input())

	#Saves the result in a file։։։ deletes the old one every time it works
	line = str('1/ ' + str(num) + ' = ' + str(1 / num))
	print(line)
	inFile.write (line)
