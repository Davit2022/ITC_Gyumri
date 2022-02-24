def number_of(input_number):
    number = set()
    for j in range(len(input_number)):
        j = j+1
        x = j
        for i in range(len(input_number)):
                number.add(input_number[i:x])
                x = x+1
                if x > len(input_number): break
    print(sorted(number))
    
input_number = input("Enter number:")
print(input_number)
number_of(input_number)
