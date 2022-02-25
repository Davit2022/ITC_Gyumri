def printMatrix():
    n = int(input("Enter number create to matrix: "))
    arr = []
    for i in range(n):
        row = []
        for j in range(n):
            row.append(int(input("Enter the matrix element: ")))
        arr.append(row)
    for i in range(n):
        for j in range(n):
            print(arr[i][j], end=" ")
        print()
    return arr


def primaryDiagonal(data):
    for i in range(len(data)):
        for j in range(len(data)):
            if i == j:
                print(data[i][j], end='')
            else:
                print(" ", end='')
        print("")


def secondaryDiagonal(data):
    for i in range(len(data)):
        for j in range(len(data)):
            if i + j == len(data) - 1:
                print(data[i][j])
            else:
                print(" ", end='')
        print("")


def option(data):
    num = int(input("Enter number 1 and get primary diagonal or 2 and get second diagonal: "))
    if num == 1:
        primaryDiagonal(data)
    elif num == 2:
        secondaryDiagonal(data)


if __name__ == "__main__":
    data = printMatrix()
    option(data)
