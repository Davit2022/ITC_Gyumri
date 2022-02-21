list1 = []
num = int(input("how many number you want to enter:"))
for k in range(num):
	list1.append(int(input()))
print("unsorted list:", list1)

for j in range(len(list1)-1):
	for i in range(len(list1)-1):
		if list1[i] > list1[i+1]:
			list1[i], list1[i+1]= list1[i+1], list1[i]
			print(list1)
		

print("sorted list:" , list1)
