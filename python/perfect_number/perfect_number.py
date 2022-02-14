
number = int(input("Enter number: "))
sum = 0
for i in range(1, number):
    if(number % i == 0):
        sum = sum + i
if(sum == number):
    print(number, "is a Perfect Number")
else:
    print( number, "is not the Perfect Number")