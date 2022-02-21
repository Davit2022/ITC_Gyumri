#Task  liner search

def liner_search(arr, x):
	# range veradarcnum e tvyal tiv@ hajorakanutyan mej
	for i in range(len(arr)):
		if arr[i] == x:
			return i
	return print("Not elements")

arr = [7, 5, 9, 74, 3, 71, 5]
x = 71
print ("Element found at index", liner_search(arr,x))
