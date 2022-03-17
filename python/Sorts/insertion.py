#insertion sort
def insertion(arr):
	for i in range(1, len(arr)):
		key = arr[i]
		j = i-1
		while j >= 0 and key < arr[j]:
				arr[j+1] = arr[j]
				j -= 1
		arr[j+1] = key
		
arr = [12, 32, 4, 52, 23]
print ("Before:") 
print (arr)
insertion(arr)
print ("After:")
for i in range(len(arr)):
	print (arr[i])
