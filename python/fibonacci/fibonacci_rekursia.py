def fib(number):
  if(number < 2): 
     return 1
  
  return fib(number - 1) + fib(number - 2) 
   
def fibonacci(number): 
  a = 0
  b = 1
  i = 0
  while i < number:
    print(a, " ")
    k = a + b
    a = b;
    b = k;
    i = i+1
    
input_number = int(input("Please enter number: "))
fib(input_number)
fibonacci(input_number)
