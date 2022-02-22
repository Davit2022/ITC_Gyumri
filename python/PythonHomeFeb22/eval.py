def myEval(str):
    isTrue=True
    while isTrue:
        isTrue=False
        arr = list(str)
        for i in range(0, len(arr)):
            if arr[i] == "+":
               res=int(arr[i-1]) + int(arr[i+1])
               isTrue=True
               return res
            
print(myEval("1+4+9"))
