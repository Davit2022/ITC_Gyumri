def printMatrix(n):
    arr = []   
    for i in range(n):   
        row = []  
        for j in range(n): 
            num = int(input("Enter the matrix element: "))  
            row.append(num) 
        arr.append(row) 
    return arr    
       
    
def primaryDiagonal(n):
    data = printMatrix(n)   
    for i in range(len(data)):
        for j in range(len(data)):
            if i == j:
                print(data[i][j])

def secondaryDiagonal(n):
    data = printMatrix(n)
    for i in range(len(data)):
        for j in range(len(data)):
            if i + j == len(data) - 1:
                print(data[i][j])

def option(n):
    num = int(input("Enter number 1 and get primary diagonal or 2 and get second diagonal: "))
    if num == 1:
        primaryDiagonal(n)
    elif num == 2:    
        secondaryDiagonal(n)
    

if __name__ == "__main__":
    num = int(input("Enter number create to matrix: "))
    data = printMatrix(num)
    for i in range(len(data)):
        for j in range(len(data)):
            print(data[i][j], end=" ") 
        print("\n")
    option(num)


    
            
        
