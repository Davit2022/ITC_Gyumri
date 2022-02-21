arr=[2,5,7,1]
def bubbleSort(arr):
    
    change = True
    while change:
        change = False
        for i in range(len(arr)-1):
            if arr[i] > arr[i+1]:
                arr[i],arr[i+1] = arr[i+1],arr[i]
                change = True
                return arr

print(bubbleSort(arr))