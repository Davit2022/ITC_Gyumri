from string import punctuation


file = open("file1.txt")
test_str = file.readline()
print("The original string is : " + test_str)
 
punctuation = '''!()-[]{};:'"\,<>./?@#$%^&*_~'''
 
for ele in test_str:
    if ele in punctuation:
        test_str = test_str.replace(ele, "")

print("The string after punctuation filter : " + test_str)
file.close()