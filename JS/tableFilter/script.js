const App = () => {
    // myFunction = () => {
    //     var table = document.getElementById("employees");
    //     var row = table.insertRow(1);
    //     var cell1 = row.insertCell(0);
    //     var cell2 = row.insertCell(1);
    //     cell1.innerHTML = "";
    //     cell2.innerHTML = "";
    // }

    fetch("http://dummy.restapiexample.com/api/v1/employees").then(
        res => {
          res.json().then(
            data => {
              console.log(data.data);
              if (data.data.length > 0) {
      
                var temp = "";
                data.data.forEach((itemData) => {
                  temp += "<tr>";
                  temp += "<td>" + itemData.id + "</td>";
                  temp += "<td>" + itemData.employee_name + "</td>";
                  temp += "<td>" + itemData.employee_salary + "</td></tr>";
                });
                document.getElementById('data').innerHTML = temp;
              }
            }
          )
        }
      )

      myfunction = () => {
        var input, filter, maintable, tr, td, i, txtValue;
        input = document.getElementById("myInput");
        filter = input.value.toUpperCase();
        maintable = document.getElementById("emoloyees");
        tr = document.getElementsByTagName("tr");

        for (i = 0; i < tr.length; i++) {
          td = tr[i].getElementsByTagName("td")[1];
          if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
              tr[i].style.display = "";
            } else {
              tr[i].style.display = "none";
            }
          }       
        }
      }
}

window.document.addEventListener('DOMContentLoaded', App)

