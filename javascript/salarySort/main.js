
let table = document.getElementById("table")

function restClient(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => {return res.json()})
    .then(res => {
        drawTable(res)
    })
}

restClient()


function drawTable(data){
    let arr = []
    let trhead = document.createElement("tr") 
    let th = document.createElement("th")
    let th1 = document.createElement("th")
    let th2 = document.createElement("th")
    let th3 = document.createElement("th")
    th.innerText = 'id'
    th1.innerText = 'Name'
    th2.innerText = 'Surname'
    th3.innerText = 'Salary'
    trhead.append(th)
    trhead.append(th1)
    trhead.append(th2)
    trhead.append(th3)
    table.append(trhead)
    for (let i = 0; i < data.length;i++) {
        let tr = document.createElement("tr")
        let td = document.createElement("td")
        let td1 = document.createElement("td") 
        let td2 = document.createElement("td") 
        let td3 = document.createElement("td") 
        td.innerText = data[i].id
        td1.innerText = data[i].name
        td2.innerText = data[i].username
       
        arr.push(data[i].address.geo.lng)
        td3.innerText = data[i].address.geo.lng
        td3.className = 'td'

        tr.append(td)
        tr.append(td1)
        tr.append(td2)
        tr.append(td3)
        table.append(tr)
    }

    let tdNum = document.getElementsByClassName('td')
    let sortArr = quick(arr)
    console.log(sortArr)

    for(let i = 0;i < sortArr.length;i++){
        tdNum[i].innerText = sortArr[i]
    } 
}


function quick(data){
    if (data.length <= 1) { 
		return data;
	} else {
		let left = [];
		let right = [];
		let newArray = [];
		let pivot = data.pop();
		let length = data.length;

		for (let i = 0; i < length; i++) {
			if (data[i] <= pivot) {
				left.push(+data[i]);
			} else {
				right.push(+data[i]);
			}
		}
		return newArray.concat(quick(left), +pivot, quick(right));
	}
}

