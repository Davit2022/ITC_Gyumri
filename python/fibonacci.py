
num = int(input("Enter number: "))
def fib(n):
    if n <= 1:
        return n
    else:  
        return fib(n-1) + fib(n-2)
print(fib(num))


def fib1(n):
    a = 0
    b = 1
    c = b + a
    print("Fibonacci series: ")
    for i in range(n):
      print(a)
      k = a + b
      a = b
      b = k
fib1(num)      