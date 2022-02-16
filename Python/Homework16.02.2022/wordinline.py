#find how many 3-letter words there are in a line
file = open("test.txt", "r")

#read the content of file
data = file.read()

#get the length of the data
#number_of_characters = len(data)
words = [word for word in data.split() if len(word) == 3]
print('Number of characters in text file :', words)
