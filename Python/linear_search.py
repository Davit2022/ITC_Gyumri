def linearSearch(array, n, x):
    for i in range(0, n):
        if (array[i] == x):
            return i
    return -1

array = []
n = int(input("Enter number of elements : "))

for i in range(0, n):
	ele = int(input("Input array index number: "))
	array.append(ele) 	
print(array)

x = 0
n = len(array)
result = linearSearch(array, n, x)
if(result == -1):
    print("Element not found")
else:
    print("Element found at index: ", result)
