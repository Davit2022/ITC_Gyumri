n=5
for line in range(1, n + 1):  
    c = 1   
    x=n
    y=line
    
    print("  "*(n-line), end="") 
    for i in range(1, line + 1):
        print(str(c).center(4), end = "")
        c = int(c * (line - i) / i)
    print(" ")
