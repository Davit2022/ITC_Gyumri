

def printMatrix(size):
    for j in range(0,size*size):
        mat = [[7 for _ in range(size)] for _ in range(size)]
    for i in mat:
        print(i)
    


def printRight(mat,size):
    for i in range(size):
        for j in range(size):
            if (i == j):
                print(mat[i][j], end = ", ")
            else:
                print(" ", end='')
        print("")    
    

def printLeft(mat,size):
    for i in range(size):
        for j in range(size):
            if ((i + j) == (size - 1)):
                print(mat[i][j], end = ", ")
            else:
                print(" ", end='')
        print("")

if __name__ == "__main__":
    size = int(input("Enter size"))
printMatrix(size)
mat = [[7 for _ in range(size)] for _ in range(size)]

diagonal=input("Enter type diagonal to right=R or to left=L:")
if diagonal == "R":
    printRight(mat,size)
if diagonal == "L":   
    printLeft(mat,size)
else:
    print("incorrect input")    