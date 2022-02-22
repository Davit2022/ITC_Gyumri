
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
        print(eval(st))


if __name__ == "__main__":
    st = input("Enter the number: ")
    print(evalFun(st))