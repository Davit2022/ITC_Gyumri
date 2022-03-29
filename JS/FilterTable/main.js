debugger
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
    for(let i = 0; i<200; i++){
        let tr = document.createElement("tr")
        table.appendChild(tr)
        for(let j = 0; j < 5; j++){
        let td = document.createElement("td")
        if(j == 0){
            td.innerText = data[count].id
        }else if(j == 1){
            td.innerText = data[count].name
        }else if(j == 2){
            td.innerText = data[count].username
        }else if(j == 3){
            td.innerText = data[count].phone
        }else{
            td.innerText = data[count].email
        }
        tr.appendChild(td)
        }
        count += 1

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








