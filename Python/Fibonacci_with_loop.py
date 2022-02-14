num = int(input("Enter the Range Number: "))
First_val = 0 #first number
Second_val = 1 #second number
for n in range(0, num):
           if(n <= 1):
                      next = n
           else:
                      next = First_val + Second_val #next number is equal to sum the previous two numbers
                      First_val = Second_val #Assign the second number to the first number
                      Second_val = next #assign the next number to the second number
           print(next)
