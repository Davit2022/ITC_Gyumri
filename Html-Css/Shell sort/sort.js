
const btn= document.querySelector(".btn")

    btn.addEventListener("click",()=>{
        const nums = document.querySelector('.numbers').value;
        const result = document.querySelector(".res")
        
        arr = nums.split(" ").map((i)=> {
            return i;
        });
		
    function shellSort(arr) {
		let n = arr.length;
		
		for (let gap = Math.floor(n/2); gap > 0; gap = Math.floor(gap/2))	{
			for (let i = gap; i < n; i += 1)  {
				let temp = arr[i];
					
				let j;
				for (j = i; j >= gap && arr[j-gap] > temp; j-=gap)  {
					arr[j] = arr[j-gap];
				}
		
				arr[j] = temp;
			}
		}
		return arr;
	}
            
        let res = shellSort(arr)
        result.innerHTML = res
})