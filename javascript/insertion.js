const arr = [1,5,-3,4,8,10] 

function insertionSort(data){
    for (let i = 1; i < data.length; i++) {
        let elem = data[i]
        let j = i-1
        while((j>-1) && (elem < data[j])){
            data[j+1] = data[j]
            j--
        }
        data[j+1] = elem
    }
    return data
}

console.log(insertionSort(arr))