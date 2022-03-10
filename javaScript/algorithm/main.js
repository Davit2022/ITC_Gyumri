
    const btn= document.querySelector(".btn")

    btn.addEventListener("click",()=>{
        const nums = document.querySelector('.nubers').value;
        const result = document.querySelector(".res")
        
        arr = nums.split('').map((i)=> {
            return +(i);
        });
        function bubbleSort(arr){
    
                for (let i = 0; i < arr.length; i++) {
                    for (let j = 0; j < arr.length; j++) {
                        if (arr[j] > arr[j + 1]) {
                            let tmp = arr[j];
                             arr[j] = arr[j + 1];
                              arr[j + 1] = tmp;
                        }
                    }
                }
                return arr;
            
            }
            
            
            let res = bubbleSort(arr)
            result.innerHTML = res
        
    })
   
  

