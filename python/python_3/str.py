str = 'ssososoosssosossoo'
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

print(data)
i = 0
while i != len(data):
    if data[i][0] == 's' and data[i][1] == 'o' and data[i][2] == 's':
        pass
    else:     
        print(i)          
    i+=1

