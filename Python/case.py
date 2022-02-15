my_str = (input ("Enter kay "))

words = [word.lower() for word in my_str.split()]

words.sort()

for word in words:
	print(word)

