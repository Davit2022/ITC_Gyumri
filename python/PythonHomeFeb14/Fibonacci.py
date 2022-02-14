




n = int(input("Enter number"))


def fibRecursion (n):
    if n<0:
        print("Enter a positive number")

    elif n==1 or n==2:
        return 1
    else:
        return fibRecursion(n-1)+fibRecursion(n-2)


def fibLoop(n):
    for i in range(2, n):
     arr =[0,1]
     next = arr[i-1] + arr[i-2]
     arr.append(next)
     print(arr[-1])

print(fibRecursion(n))
#fibLoop(n)