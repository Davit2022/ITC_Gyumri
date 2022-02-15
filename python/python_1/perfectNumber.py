
num = int(input("Enter number: "))
def perfectNumber(n):
    sum = 0
    for x in range(1, n):
        if n % x == 0:
            sum += x
    if sum == n:   
        return True
    else:
       return False    
print(perfectNumber(num))