def evalFun(st):
    count = 0
    for i in st:
        if i == "(":
            count+=1
        if i == ")":
            count-= 1
        if count < 0:
            pass
    if count == 0:
        l = list(st)
        for i in l:
            if i == '+' or i == '-' or i == '/' or i == '*':
                op = i
        arr = st.split(op)
        print(arr)
        if op == '+':
            return add(arr)       
        if op == '-':
            return minus(arr)
        if op == '/':
            return divide(arr)
        if op == '*':
            return multiplication(arr)
        else:
            pass

def add(arr):
    s = 0
    for i in arr:
        s=s + int(i)
    return s  

def minus(arr):
    res = 0
    for i in range(len(arr)):
        res = int(arr[i-1]) - int(arr[i])
    return res

def divide(arr):
    for i in arr:
        res = int(i / i)
    return res

def multiplication(arr):
    res = 1
    for i in arr:
        res = res * int(i)     
    return res

if __name__ == "__main__":
    st = input("Enter the number: ")
    print(evalFun(st))

