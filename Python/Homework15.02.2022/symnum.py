ini_list = "op:124 aa:55 opp:68 aa:10 uf:125"
  
word_1 = [word.lower() for word in ini_list.split()]

word_1.sort()

for word in word_1:
	print (word)
