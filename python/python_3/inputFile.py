
filename = input("Enter filename: ")
 
with open(filename,'r') as f:
    data = f.readlines()
    for i in data:
        print(i.replace('a','u').capitalize())
             
with open(filename,"r") as f:
    data = f.read()
    print(data.replace(" ","_"),'\n')
    
with open(filename,"r") as f:
    data = f.read()
    punctuations = '''!()-[]{};:'"\,<>./?@#$%^&*_~'''
    no_punct = ""
    for char in data:
        if char not in punctuations:
            no_punct = no_punct + char
    print(no_punct,'\n')
    

         