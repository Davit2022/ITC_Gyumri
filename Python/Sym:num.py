my_str = "aa:55 aa:10 opp:68 uf:125 op:124"

words = [word.lower() for word in my_str.split()]

words.sort()

for word in words:
	print(word)

