def imput_elements():
    matrix_row = int(input("Enter the number of matrix:"))
    matrix_column = matrix_row

    matrix = []
    print("Enter the entries rowwise:")

    for i in range(matrix_row):
        array = []
        for j in range(matrix_column):
            array.append(int(input(f"input array element for line {i} and for index {j}: ")))
        matrix.append(array)

    for i in range(matrix_row):
        for j in range(matrix_column):
            print(matrix[i][j], end=" ")
        print()
    return matrix

def midline_from_right_to_left(matrix):
    for i in range(len(matrix)):
        for j in range(len(matrix[i])):
            if i == j:
                print(matrix[i][j], end = '')
            else:
                print(" ", end = '')
        print("")

def midline_from_left_to_right(matrix):
    for i in range(len(matrix)):
        for j in range(len(matrix[i])):
            if i + j == len(matrix) - 1:
                print(matrix[i][j], end = '')
            else:
                print(" ", end = '')
        print("")

def triange_lower_left(matrix):
    for i in range(len(matrix)):
        for j in range(len(matrix)):
            if i >= j:
                print((matrix[i][j]), end='')
            else:
                print(" ", end = '')
        print("")

def triangle_right_lower(matrix):
    for i in range(len(matrix)):
        for j in range(len(matrix)):
            if i + j >= len(matrix)-1:
                print((matrix[i][j]), end ='')
            else:
                print(" ", end = '')
        print("")

def triangle_Upper_right(matrix):
    for i in range(len(matrix)):
        for j in range(len(matrix)):
            if i <= j:
                print((matrix[i][j]), end='')
            else:
                print(" ", end = '')
        print("")

def triangle_Upper_left(matrix):
    for i in range(len(matrix)):
        for j in range(len(matrix)):
            if i + j <= len(matrix)-1:
                print((matrix[i][j]), end='')
            else:
                print(" ", end = '')
        print("")

matrix = imput_elements()
print("Please select one of the options")
result = True
while result == True:
    quation_result = int(input("midline from right to left(1)\nmidline from left to right(2)\ntriange lower left(3)\ntriangle right lower(4)\ntriangle  Upper right(5)\ntriangle Upper left(6)\nchoose one: "))
    if quation_result == 1:
        midline_from_right_to_left(matrix)
    elif quation_result == 2:
        midline_from_left_to_right(matrix)
    elif quation_result == 3:
        triange_lower_left(matrix)
    elif quation_result == 4:
        triangle_right_lower(matrix)
    elif quation_result == 5:
        triangle_Upper_right(matrix)
    elif quation_result == 6:
        triangle_Upper_left(matrix)
    else: 
        print("Please select one of the options. for example 1, 2, 3, 4")
    i = True
    while i == True:
        quation_result = int(input("Continue(1) or exit(0)"))
        if quation_result == 1:
            result = True
            i = False
        elif quation_result == 0:
            result = False
            print("Thanks for using my program 😁")
            break
        else:
            print("Please write 1 or 0")