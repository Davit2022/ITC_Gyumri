
def bubbleSort(data):
    for i in range(len(data)):
        for j in range(i+1,len(data)):
            if data[j] < data[i]:
                temp = data[i]
                data[i] = data[j] 
                data[j] = temp
    return data

if __name__ == "__main__":
    arr = [6,10,5,1,2,9,-1]
    print(bubbleSort(arr))     