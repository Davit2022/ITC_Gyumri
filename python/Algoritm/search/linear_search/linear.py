def LinearSearch(arr, size, number):
    for index in range(0, size):
        if (arr[index] == number):
            return index
    return -1

arr = [] 
element = 1
array = int(input("Enter number of elements: "))
if array > 0:
    for i in range(0, array):
        ele = int(input(f"input element for {element}: "))
        element +=1
        arr.append(ele)
else:
    print("Please write a number greater than 0")
    exit(0)
    
number = int(input("Enter number for found: "))
size = len(arr)
result = LinearSearch(arr, size, number)

if(result == -1):
    print("Element not found")
else:
    print("Element found at index:", result)