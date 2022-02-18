
from ast import Raise
from unittest import result


opr = input("Enter opr + - / *: ")
try:
    a = int(input("Enter first number: "))
    b = int(input("Enter secomd number: "))
except ValueError:
    print('please write integer numbers')
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

if opr == "/":
        res = divid_numbers(a, b)
if opr == "-":
        res = sub_numbers(a, b)    
if opr == "+":      
        res = add_numbers(a, b)
if opr == "*":
        res = multi_numbers(a, b)

print(res)
