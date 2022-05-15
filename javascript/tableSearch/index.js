debugger
const App = () => {
let table = document.getElementById("myTable")
    const HOST = "https://jsonplaceholder.typicode.com/";
    function restClient() {
        const get = (url) => fetch(url).then((res) => res.json())
        return { get: get }
    }
     
    restClient().get(HOST + "users")
     .then(res => {
        console.log(res)
        drawTable(res)        
    })
     


function drawTable(data){
    let count = 0
    for(let i = 0; i<data.length; i++){
        let tr = document.createElement("tr")
        table.appendChild(tr)
        for(let j = 0; j < 2; j++){
            let td = document.createElement("td")
            if(j == 0){
                td.innerText = data[i].name
            }else{
                td.innerText = data[i].username
            }
            tr.appendChild(td)
        }
        count += 1
    
    }
}

    // function drawTable(data) { 
    //    const table = document.createElement("table")
    //    const thName = document.createElement("th")
    //    const thSurname = document.createElement("th")
    //    const tr0 = document.createElement("tr")

    //    const trInput = document.createElement("tr")
       
    //    const tdName = document.createElement("td")
    //    const tdSurname = document.createElement("td")

    //    const tdInputName = document.createElement("input")
    //    const tdInputSurename = document.createElement("input")

    //    tdInputName.setAttribute("id", "inputName")
    //    tdInputSurename.setAttribute("id", "inputSurename")


    //    tdName.append(tdInputName)
    //    tdSurname.append(tdInputSurename)

    //    thName.innerText = "Name"
    //    thSurname.innerText = "Surname"

    //    trInput.append(tdName)
    //    trInput.append(tdSurname)

    //    tr0.append(thName)
    //    tr0.append(thSurname)
    //    table.append(trInput)
    //    table.append(tr0)

    //    const arr = []
    //    table.classList.add("table")
    //    for (let i = 0; i < data.length; i++) {
    //        const tr = document.createElement("tr")
    //        const td = document.createElement("td")
    //        const td1 = document.createElement("td")
    //        tr.append(td)
    //        tr.append(td1)
    //        arr.push(data[i].name)
    //        td.innerText = data[i].name
    //        td1.innerText = data[i].username
    //        table.append(tr)
    //    } 
    //    body.append(table)
    //    searchTable(arr)
    // } 
    
    // function myFunction(){
    //     var input, filter, table, tr, td, i, txtValue;
    //     input = document.getElementById("myInput");
    //     filter = input.value.toUpperCase();
    //     table = document.getElementById("myTable");
    //     tr = table.getElementsByTagName("tr");
    //     for (i = 0; i < tr.length; i++) {
    //       td = tr[i].getElementsByTagName("td")[0];
    //       if (td) {
    //         txtValue = td.textContent || td.innerText;
    //         if (txtValue.toUpperCase().indexOf(filter) > -1) {
    //           tr[i].style.display = "";
    //         } else {
    //           tr[i].style.display = "none";
    //         }
    //       }       
    //     }
       
    // }  
    

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



(function(){
    window.document.addEventListener("DOMContentLoaded", App)
})();