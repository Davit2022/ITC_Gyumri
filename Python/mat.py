R = int(input("Enter the number of rows: "))
C = int(input("Enter the number of columns: "))

print("Enter ", R*C, "for matrix number: ")
matrix = []
for r in range(R):	 
	a = []
	for c in range(C):	
		a.append(int(input("Input matrix number: ")))
	matrix.append(a)
print ("\nYour matrix")

for r in range(R):
	for c in range(C):
		print(matrix[r][c], end = " ")
	print()
print ()

def printPrincipalDiagonal(matrix, R):
	print("Principal Diagonal: ", end = "")
	for r in range(R):
		print(matrix[r][r], end = ", ")
	print()
					#Please see below
	#try:
	#	R == C
	#except ValueError:
	#	print ("I don't much principal. Please input C = R")

def printSecondaryDiagonal(matrix, C):
	print("Secondary Diagonal: ", end = "")
	k = C - 1
	for i in range(C):
		print(matrix[i][k], end = ", ")
		k -= 1
	print()

					#Please this function
def printTriangleOne(matrix, R):
	print("Triangel: ", end = "")
	g = 0
	r = 0
	for r in range(R):
		print(matrix[r][g], end = ", ")
		r=+1
		print ("r = ", r)
		g=+1
		print("g = ", g)
	print()

printPrincipalDiagonal(matrix, R)
printSecondaryDiagonal(matrix, C)
printTriangleOne(matrix, R)
