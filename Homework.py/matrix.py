def matrixInput(row,column):
 
    # Initialize empty matrix  
    matrix = []  
    print("Grir matrixi andamnerin:")  
 
    # For user input  
    for i in range(row):         
        a =[]  
        for j in range(column):       
            a.append(int(input()))  
        matrix.append(a)  
         
    for i in range(row):  
        for j in range(column):  

            print(matrix[i][j], end = " ")  
        print()
    return matrix 

def printPrincipalDiagonal(mat,n):
    print("Glxavor ankyunagits ", end ="")

    for i in range(n):
        for j in range(n):

            if (i == j):
                print(mat[i][j], end =", ")
    print()

def printSecondaryDiagonal(mat,n):
	print("Erkrordakan ankyunagits: ", end ="")
	for i in range(n):
		for j in range(n):

			if ((i + j) == (n - 1)):
                print(mat[i][j],end ="")
	print()

if __name__=="__main__":
    row = int(input("Enter the number of rows:"))  
    column = int(input("Enter the number of columns:"))  

    n = row
    g = matrixInput(row,column)
	printPrincipalDiagonal(g,n)
