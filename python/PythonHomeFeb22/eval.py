        
def myEval(str):
    open=0
    close=0
    for i in str:
        if i == "(":
            open +=1
        elif i == ")":
            close += 1   
        elif close == open:
            arr = list(str)
        for i in range(0, len(arr)):
            if arr[i] == "+":
               res=int(arr[i-1]) + int(arr[i+1])
               return res+int(arr[i+3])

print(myEval("5+5+5"))               