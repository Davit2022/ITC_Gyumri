def bubble_sort(list1):
    ok = False
    for i in range(0,len(list1)-1):
        ok = False
        for index in range(len(list1)-1):  
            if(list1[index]>list1[index+1]):  
                temp = list1[index]  
                list1[index] = list1[index+1]  
                list1[index+1] = temp  
                ok = True
        if ok == False:
            break
        
    return list1
if __name__ == "__main__":
    arr = [] 
    element = 1
    array = int(input("Enter number of elements: "))
    if array > 1:
        for i in range(0, array):
            ele = int(input(f"input element for {element}: "))
            element +=1
            arr.append(ele)
    else:
        print("Please write a number greater than 1")
        exit(0)

    print("The unsorted list is: ", arr)  
    print("The sorted list is: ", bubble_sort(arr))  