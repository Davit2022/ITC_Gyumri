
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
            s = 0
            for i in arr:
                s=s + int(i)
            print(s)         
        if op == '-':
            res = 0
            for i in range(len(arr)):
                res = int(arr[i]) - int(arr[i-1])
            print(res)
        if op == '/':
            for i in arr:
                res = int(i / i)
            print(res)
        if op == '*':
            res = 1
            for i in arr:
                res = res * int(i)     
            print(res)
        else:
            pass

if __name__ == "__main__":
    st = input("Enter the number: ")
    print(evalFun(st))