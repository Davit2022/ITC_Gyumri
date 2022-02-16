file1 = open("test.txt", "r+")

for test in file1:
	file1.write("_".join(test))
	file1.write(test.title())
	file1.write(test.upper())
	file1.write(test.replace("a","u"))

