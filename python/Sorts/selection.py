def selectionsort(arr):
	for i in range(len(arr)):
		min = i
		for j in range(i+1, len(arr)):
			if arr[min] > arr[j]:
				min = j
		arr[i], arr[min] = arr[min], arr[i]

arr = [64, 74, 14, 31, 11]
selectionsort(arr)
for i in range(len(arr)):
	print(arr[i])
