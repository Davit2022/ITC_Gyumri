
x=int(input("Enter searching number"))
arr=[2,5,7,1]
n = len(arr)

def search(arr, n, x):
 
    for i in range(0, n):
        if (arr[i] == x):
            return i
    return -1
 
 


res = search(arr, n, x)
if(res == -1):
    print("Number is not in array")
else:
    print("Number index is ", res)