def linerSearch(data,num):
    for i in range(len(data)):
        if data[i] == num:
            return i
    return -1   

if __name__ == "__main__":
    num = int(input("Enter number: "))
    arr = [1,2,8,9,7,4,9]
    print(linerSearch(arr, num))    

