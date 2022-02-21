n = 6
mas = [5, 7, 4, 3, 8, 2]
for run in range(n-1):
    for i in range (n-1):   #dont take last number
        if mas[i] > mas[i+1]:   #checking is our number smaller then next number
            mas[i],mas[i+1] = mas[i+1],mas[i]
print(*mas)