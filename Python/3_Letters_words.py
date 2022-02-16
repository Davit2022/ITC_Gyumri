file = open("test.txt", "r")

data = file.read()

words = [word for word in data.split() if len(word) == 3]
print ('The number of words consisting of 3 letters is', len(words))
