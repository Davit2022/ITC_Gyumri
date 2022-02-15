num = int(input("Enter number: "))
def pascalTriangle(num): 
     arr = []  
     for i in range(num):  
          arr.append([])  
          arr[i].append(1)  
          for j in range(1, i):  
               arr[i].append(arr[i - 1][j - 1] + arr[i - 1][j])  
          if(num != 0):  
              arr[i].append(1)  
     for i in range(num):  
      print(" " *(num - i),end="")  
      for j in range(0, i + 1):  
          print('{0:2}'.format(arr[i][j]),end="")  
      print()
pascalTriangle(num)
