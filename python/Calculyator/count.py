
from ast import Raise
from unittest import result

opr = input("Enter opr + - / *: ")
punctuation = '''+-/*'''
for ele in opr:
    if ele not in punctuation:
        print('please write correct operator: + - / *')
        exit(0)
try:
    a = int(input("Enter first number: "))
    b = int(input("Enter secomd number: "))
except ValueError:
    print('please write integer number')
    exit(0)
    
res = 0

def add_numbers(a, b):
    return a+b

def sub_numbers(a, b):
    return a-b

def divid_numbers(a, b):    
    return a/b

def multi_numbers(a, b):
    return a*b
try:
    if opr == "/":
        res = divid_numbers(a, b)
except ZeroDivisionError:
    print("You can't divide by zero!")
if opr == "-":
        res = sub_numbers(a, b)    
elif opr == "+":      
        res = add_numbers(a, b)
elif opr == "*":
        res = multi_numbers(a, b)

print(res)
