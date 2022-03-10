// const btn = document.querySelector(".btn")
// btn.addEventListener("click", () => {
//     const nums = document.querySelector('.nubers').value;
//     const result = document.querySelector(".res")
//     inputArr = nums.split('').map((i) => {
//         return +(i);
//     });

//     function insertionSort(inputArr) {
//         let n = inputArr.length;
//         for (let i = 1; i < n; i++) {
//             let current = inputArr[i];
//             let j = i - 1;
//             while ((j > -1) && (current < inputArr[j])) {
//                 inputArr[j + 1] = inputArr[j];
//                 j--;
//             }
//             inputArr[j + 1] = current;
//         }
//         return inputArr;
//     }
//     let res = insertionSort(arr)
//     result.innerHTML = res
// })

let inputArr = [];
let size = prompt("Size");
for (var i = 0; i < size; i++) {
    inputArr.push(prompt("Enter a number for " + (i + 1)))
}

function insertionSort(inputArr) {
    let n = inputArr.length;
    for (let i = 1; i < n; i++) {
        let current = inputArr[i];
        let j = i - 1;
        while ((j > -1) && (current < inputArr[j])) {
            inputArr[j + 1] = inputArr[j];
            j--;
        }
        inputArr[j + 1] = current;
    }
    return inputArr;
}

insertionSort(inputArr);
alert(inputArr);