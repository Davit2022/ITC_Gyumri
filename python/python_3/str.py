str = 'SSOSOSOOSSSOS0S'
n = 3
chunks = []  
i = 0
while i < len(str):
    if i+n < len(str):
        chunks.append(str[i:i+n])
    else:
        chunks.append(str[i:len(str)])
    i += n
data = chunks

for i in range(len(chunks)):
    if data[i] != 'SOS':
        print(i)

 

