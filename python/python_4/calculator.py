
num = float(input("Enter number: " ))
num1 = float(input("Enter number: "))
op  = str(input("Enter sign (+,-,/,*): "))

def add(a,b):
    try:  
        return a + b
    except Exception as e:
        print("Error",e)

def sub(a,b):
    try:
        return a-b
    except Exception as e:
        print("Error",e)   

def divide(a,b):
    try:
        return a/b
    except ZeroDivisionError as z:
        print("Error",z)    

def mult(a,b):
    try:
        return a*b
    except Exception as e:
        print("Error",e)    

def calc(a,b,op):
    if op == '+':
        return add(a,b)
    if op == '-':
        return sub(a,b)
    if op == '/':
        return divide(a,b)
    else:
        return mult(a,b)
print(calc(num,num1,op))    

  
