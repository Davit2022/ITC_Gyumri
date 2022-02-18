while True:
    try:
        num1 = int(input('Enter first number: '))
        break
    except ValueError:
        print('Please enter a integer number.')

op = input("Enter Operation (+,-,*,/): ")

while True:
    try:
        num2 = int(input('Enter second number: ')) 
        break
    except ValueError:
        print('Please enter integer number.')

if op == "+":
	print("Answer - ", num1 + num2)
elif op == "-":
	print("Answer - ", num1 - num2)
elif op == "*":
	print("Answer - ", num1 * num2)
elif op == "/":
	sub = int(num1 / num2)
	try:
		op == "/"
		print("Answer - ", sub)
	except ZeroDivisionError:
		print("Can't divide by zero")
else:
	print("Not a valid math problem")
