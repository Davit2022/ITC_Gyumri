def evo(exp):
    count = 0

    try:
        for char_index in range(len(exp)):
            if exp[char_index] == '(':
                count += 1 
            if exp[char_index] == ')':
                count -= 1        
            if count  < 0:
                pass
            if count == 0:
                print(eval(exp))
    except Expector as e:
        print("Error", e)
x = 10
st ="(x + 10) + 10 "
evo(st)

