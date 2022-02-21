def linearsearch(arr, x):
   for i in range(len(arr)):
      if arr[i] == x: 
         return i
   return -1
arr = [74,45,13,68,56,8,9]
x = 13
print("Element found at index " + str(linearsearch(arr,x)))