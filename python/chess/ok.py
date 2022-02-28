matrix = []
lenMat = len(matrix)
age = 9

for i in range(age):
    matrix.append(['*']*age)
    
for i in range(age):
    for j in range(age):
        if(i == j):
            matrix[0][1] = 'A'
            matrix[0][2] = 'B'
            matrix[0][3] = 'C'
            matrix[0][4] = 'D'
            matrix[0][5] = 'E'
            matrix[0][6] = 'F'
            matrix[0][7] = 'G'
            matrix[0][8] = 'H'
            matrix[1][0] = '1'
            matrix[2][0] = '2'
            matrix[3][0] = '3'
            matrix[4][0] = '4'
            matrix[5][0] = '5'
            matrix[6][0] = '6'
            matrix[7][0] = '7'
            matrix[8][0] = '8'
            matrix[8][2] = '♞'
            matrix[8][4] = '♚'
for i in matrix:
    print(i)

result = int(input("A(1),B(2),C(3),D(4),E(5),F(6),G(7),H(8)"))
result1 = int(input("1(1),2(2),3(3),4(4),5(5),6(6),7(7),8(8)"))
if result < 9 and result > 0 and result1 < 9 and result1 > 0:
    matrix[result1][result] = '♜'
else: 
     print("There is no such number in chess")
     exit(0)

for i in matrix:
    print(i)
result2 = int(input("A(1),B(2),C(3),D(4),E(5),F(6),G(7),H(8)"))
result3 = int(input("1(1),2(2),3(3),4(4),5(5),6(6),7(7),8(8)"))
if result2 < 9 and result2 > 0 and result3 < 9 and result3 > 0:
    if result == result2 and result1 != result3:
        for i in matrix:
            if result1 > result3:
                while result1 != result3:
                    result1 = result1 - 1
                    matrix[result1][result] = '♜'
                    matrix[result1 + 1][result] = '*'
            elif result1 < result3:
                result1 = result1 + 1
                matrix[result1][result] = '♜'
                matrix[result1 - 1][result] = '*'
    elif result != result2 and result1 == result3:
        for i in matrix:
            if result > result2:
                while result != result2:
                    result = result - 1
                    matrix[result1][result] = '♜'
                    matrix[result1][result + 1] = '*'
            elif result < result2:
                result = result + 1
                matrix[result1][result] = '♜'
                matrix[result1][result - 1] = '*'
    else:
        print("the boat can not go through those coordinates")
        exit(0)
else:
    print("There is no such number in chess")
    exit(0)
for i in matrix:
    print(i)