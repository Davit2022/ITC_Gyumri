#Bubble sort

#create function with array argument
def bubble_sort(arr):
	#Assign the length of the array to the variable n
	n = len(arr)
	#rotates on all numbers with i in the array	
	for i in range(n-1):
		#creates a new array sequence
		for j in range(0, n-i-1):
			if arr[j] > arr[j + 1] :
				#change places
				arr[j], arr[j + 1] = arr[j + 1], arr[j]

#clreate and print previous array
arr = [64, 34, 25, 12, 22, 11, 90]
print("Previous array:")
print(*arr, end = " \n")

#call function
bubble_sort(arr)

#print sorted array
print ("\nSorted array is:")
for i in range(len(arr)):
	print (arr[i], end = " ")

print("\n")
