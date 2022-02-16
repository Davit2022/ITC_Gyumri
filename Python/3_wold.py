file = open("text_3_wold.txt")

data = file.read()

words = [word for word in data.split() if len(word) == 3]
print ('3 letters is', len(words))
