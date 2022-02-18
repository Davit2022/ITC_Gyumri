str = 'OSOSOSOOSSSOSSO'
n = 3

sos = []

i = 0
while i < len(str):
    if i+n < len(str):
        sos.append(str[i:i+n])
    else:
        sos.append(str[i:len(str)])
    i += n
   
print(sos)
l = len(sos)
sos2 = ['S', 'O', 'S']
k = 0
a = 0
while a < l:
	index = sos[k][a]
	print(index)
	print("K ", k, "a", a)
	j = sos2[k]
	#print(j)
	print("j/K ", k, "j/a", a)
	k+=1
	print('verjnakan', k)


#while k < l:
#	print ("this is k and l ", k, l)
#	if sos[k][index] != sos2[j]:
#		print ("this is sos[k] -", sos[k])
#		print ("this is sos[j] -", sos[j])
#		print ("this is sos2[j] -", sos2[j])
#		print (sos[j])
#		j+=1
#		print ("this is k and l ", k, l)
#	k+=1
#	print ("this is k and l ", k, l)
