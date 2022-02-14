inputNumber = int(input("Input number "))

n1, n2 = 0, 1
count = 0

if inputNumber <= 0:
   print("Please enter a positive integer")
else:
   print("Fibonacci number:")
   while count < inputNumber:
       print(n1)
       nth = n1 + n2
       n1 = n2
       n2 = nth
       count += 1
