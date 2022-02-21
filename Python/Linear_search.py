# Linear search

#create array, n which is the number of the array, and x which must be found from the array
def search(arr, n, x):
	#rotates on all numbers in the array
	for i in range(0, n):
		#if x is equal something number in the array, then return index of number, and if is not equal, then return -1
		if (arr[i] == x):
			return i
	return -1

#create array, insert x, and lenght of array
arr = [2, 3, 4, 10, 40]
x = 10
n = len(arr)

#give the function a variable called result
result = search(arr, n, x)

#print result by return value
if(result == -1):
	print("Element is not present in array")
else:
	print("Element is present at index", result)

