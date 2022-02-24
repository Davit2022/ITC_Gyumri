R = int(input("Enter the number of rows:"))
C = int(input("Enter the number of columns:"))

matrix = []
print("\n_________________________\n")
print("\nEnter the entries rowwise:\n")

for i in range(R):		 
	a =[]
	for j in range(C):	
		a.append(int(input()))
	matrix.append(a)

for i in range(R):
	for j in range(C):
		print(matrix[i][j], end = " ")
	print()
print("\n_________________________\n")

def principal(matrix, R):
        print("Principal Diagonal: ", end = "")
        for i in range(R):
                print(matrix[i][i], end = ", ")
        print()

def secondary(matrix, C):
        print("Secondary Diagonal: ", end = "")
        k = C - 1
        for i in range(C):
                print(matrix[i][k], end = ", ")
                k -= 1
        print()

principal(matrix, R)
secondary(matrix, C)


def lower(matrix, R, C):
        for i in range(0, R):
                for j in range(0, C):
                        if (i < j):
                                print(end = " ");
                        else:
                                print(matrix[i][j], end = " " );
                print(" ");             

def upper(matrix, R, C):
        for i in range(0, R):
                for j in range(0, C):
                        if (i > j):
                                print(end = " ");
                        else:   
                                print(matrix[i][j],
                                        end = " " );
                print(" ");    

print("\n_________________________\n")
print("\nLower triangular matrix: ");
lower(matrix, R, C);

print("\n_________________________\n")
print("\nUpper triangular matrix: ");
upper(matrix, R, C);

