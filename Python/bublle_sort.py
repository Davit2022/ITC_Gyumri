def bubbleSort(array):
  for i in range(len(array)):
    swapped = False
    for j in range(0, len(array) - i - 1):
      if array[j] > array[j + 1]:
        temp = array[j]
        array[j] = array[j+1]
        array[j+1] = temp
        swapped = True
    if not swapped:
      break

data = []
n = int(input('Enter number of elements: '))
for i in range(0, n):
	ele = int(input('Index number '))
	data.append(ele)
print('It is your array: ')
print (data)

bubbleSort(data)

print('Sorted Array in Ascending Order: ')
print(data)
