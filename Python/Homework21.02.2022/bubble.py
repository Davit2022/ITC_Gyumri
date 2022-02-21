from random import randint

N = 10
a = []

#lcrelm em randint i shnoriv patahakan tver mer arrayi mej 
for i in range(N):
	a.append(randint(1,50))
print("before sorting", a)

i = 0
while i < N -1:
	j = 0
	while j < N -1 -i:
		if a[j] > a[j+1]:
			a[j], a[j+1] = a[j+1], a[j]
		j += 1
	i += 1
print ("after sorting", a)
