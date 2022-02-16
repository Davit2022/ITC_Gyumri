str = 'SSOSOSOOSSSOSSO'
n = 3

sos = []

i = 0
j = 0
while i < len(str):
    if i+n < len(str):
        sos.append(str[i:i+n])
    else:
        sos.append(str[i:len(str)])
    i += n
   
print(sos)
a = 'SOS'
k = 0
for sos[k][j] != a[j]:
	print (sos[j])
	j+=1
