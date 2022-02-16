def Fibonacci(number):

    if number < 0:
        print("Incorrect input")
 
    elif number == 0:
        return 0
 
    elif number == 1 or number == 2:
        return 1
 
    else:
        return Fibonacci(number-1) + Fibonacci(number-2)
 
def Print_elements(number): 
  a = 0
  b = 1
  i = 0
  for i in range(number):
    print(a, " ")
    k = a + b
    a = b;
    b = k;
input_number = int(input("Please enter any number: "))
Fibonacci(input_number)
Print_elements(input_number)