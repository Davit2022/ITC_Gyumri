
filename = input("Enter filename: ")
 
with open(filename,'r') as f:
    data = f.readlines()
    for i in data:
        print(i.replace('a','u').replace(" ","_").lower().capitalize())
        punctuations = "!()-[]{};:\,<>./?@#$%^&*_~"
        for char in punctuations:
            print(i.replace(char," "))
     

         