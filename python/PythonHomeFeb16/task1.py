import re
file = open('test.txt')
f=file.read()

res = re.sub(r'[^\w\s]', '', f).replace("a","u").capitalize()
arr=res.split(" ")
x="-".join(arr)
print(x)