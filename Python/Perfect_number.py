Number = int(input(" Please Enter any Number: ")) #create input number
Sum = 0 #create variable called sum
for i in range(1, Number): #create for loop from 1 to input number
    if(Number % i == 0): # if the input number is divisible by i, and the remainder is equal to 0, then the sum i of the sum. This will be done until i is equal to the number entered.
        Sum = Sum + i
if (Sum == Number): #if my sum is equal my input number then print this, if not then in the else
    print(" %d is a Perfect Number" %Number)
else:
    print(" %d is not a Perfect Number" %Number)
