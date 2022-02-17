opr = input("enterr opr + - / *")

try:
    a=int(input("enter first number"))
    b=int(input("enter secomd number"))
except ValueError:
    print("please enter number ")
    a=0
    b=0

finally:
    print("Thank you for using our calculator")    
    
res = 0

def addNumbers(a,b):
    return a+b

def subNumbers(a,b):
    return a-b

def dividNumbers(a,b):
    try:
        return a/b
    except ZeroDivisionError:
        print("Can't divide by zero")
         
def multiNumbers(a,b):
    return a*b

    
if opr == "/":
    res=dividNumbers(a,b)
if opr =="-":
    res = subNumbers(a,b)    
if opr == "+":      
    res = addNumbers(a,b)
if opr == "*":
    res = multiNumbers(a,b)
print(f"Result ={res}")
