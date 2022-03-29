const App = ()=>{
    const table = document.getElementById("myTable");
    function restClient() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => { return res.json() })
            .then(res => {
                drawTable(res)
            })
    }
restClient()
function drawTable(data){
    let count = 0
    for(let i = 0; i< 3; i++){
        let tr = document.createElement("tr")
        table.appendChild(tr)
        for(let j = 0; j < 3; j++){
        let td = document.createElement("td")
        if(j == 0){
            td.innerText = data[count].name
        }else if(j == 1){
            td.innerText = data[count].username
        }else{
            td.innerText = data[count].email
        }
        count += 1
        tr.appendChild(td)
        }
    }
}
const input = document.getElementById("myInput");
function myfilter() {
    
    const filter = input.value.toUpperCase();
    const tr = table.getElementsByTagName("tr");
  
   
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[0];
        if (td) {
            if (td.innerText.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }    
}

input.addEventListener('keyup', myfilter)
}

(function main(){
    window.document.addEventListener("DOMContentLoaded", App)
}())








