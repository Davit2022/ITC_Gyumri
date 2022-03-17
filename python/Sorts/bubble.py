#Bubble sort
def bubblesort(arr):
	for n in range(len(arr)-1, 0, -1):
		for i in range(n):
			if arr[i] > arr[i + 1]:
				arr[i], arr[i + 1] = arr[i + 1], arr[i]

arr = [74, 25, 48, 46, 71, 24, 3, 10]
print("Before:")
print (arr)
bubblesort(arr)
print("After:")
print (arr)
