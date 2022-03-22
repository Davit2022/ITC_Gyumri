const LOCAL_STORAGE = {
    NAME:'name'
}

const objClass = {
    disable: 'disable',
    active: 'active',
    borderRed: 'border-red',
    borderGreen: 'border-green'
}
  
const App = () => {
    const obj = {}
    const p1 = document.getElementById('p1')
    const p2 = document.getElementById('p2')
    const p3 = document.getElementById('p3')
    const p4 = document.getElementById('p4')
    const p5 = document.getElementById('p5')
    const p6 = document.getElementById('p6')

    const user = document.getElementById("user")
    const submitBtn = document.getElementById("submit")
    const subForm =  document.getElementById('sub-form')
    subForm.classList.add(objClass.disable)

    function clickMe() {
        subForm.classList.remove(objClass.disable)
        subForm.classList.add(objClass.active)
    }

    user.addEventListener('click', clickMe)

    p1.classList.add(objClass.disable)

    function checkName(){
        const nameinp = document.getElementById('nameinp')
        const regExp = /^[A-z][a-z\s]*$/;


        if(nameinp.value == '') {
            p1.classList.remove(objClass.disable)
            nameinp.classList.add(objClass.borderRed)
         }    
         if(nameinp.value.match(regExp) == null){
            nameinp.classList.add(objClass.borderRed)
            p1.classList.add(objClass.active)
            p1.innerText = "Name isn't contain this character"
        }
       
        // } else {
        //     p1.classList.add(objClass.disable)
        //     nameinp.classList.add(objClass.borderGreen)

        //     localStorage.setItem(LOCAL_STORAGE.NAME, nameinp.value)
        //     sessionStorage.setItem("name", nameinp.value)
        //     document.cookie = "k=kyle"
        // }
       
    }
    



    function checkSurename(){
        const surname = document.getElementById('surname')
        const regEx = /^[A-z][a-z\s]*$/;
        if(surname.value == ''){
            p2.style.display = 'block'
            surname.style.border = '3px solid'
            surname.style.borderColor = 'red'
        } else {
            if(surname.value.match(regEx) == null){
                surname.style.border = '3px solid'
                surname.style.borderColor = 'red'
                p2.style.display = 'block'
                p2.innerText = "Name isn't contain this character"
            } else {
                p2.style.display = 'none'
                surname.style.border = '3px solid'
                surname.style.borderColor = '#5cd1df'  
            }
        }
    }

    function checkPassword(){
        const password = document.getElementById('password')
        if(password.value == ''){
            p3.style.display = 'block'
            password.style.border = '3px solid'
            password.style.borderColor = 'red'
        } else {
            p3.style.display = 'none'
            password.style.border = '3px solid'
            password.style.borderColor = '#5cd1df'
        }
    }

    function checkPassword1(){
        const password = document.getElementById('password')
        const password1 = document.getElementById('password1')
        if(password1.value == ''){
            p4.style.display = 'block'
            password1.style.border = '3px solid'
            password1.style.borderColor = 'red'
        } else {
            if(password.value == password1.value){
                p4.style.display = 'none'
                password1.style.border = '3px solid'
                password1.style.borderColor = '#5cd1df'
            } else {
                p4.style.display = 'block'
                password1.style.border = '3px solid'
                password1.style.borderColor = 'red'
                p4.innerText = 'Password is incorrect'
            }
        }
    }

    function checkEmail(){
        const email = document.getElementById('email')
        if(email.value == ''){
            p5.style.display = 'block'
            email.style.border= '3px solid'
            email.style.borderColor = 'red'
        } else {
            const regex = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');
            if(regex.test(email.value)){
                p5.style.display = 'none'
                email.style.border = '3px solid'
                email.style.borderColor = '#5cd1df'
            } else {
                p5.style.display = 'block'
                email.style.border = '3px solid'
                email.style.borderColor = 'red'
                p5.innerText = 'Email is incorrect'
            }
        
        }
    }

    function checkGender(){
        const male = document.getElementById('male')
        const female = document.getElementById('female')
        if(male.checked == '' && female.checked == ''){
            p6.style.display = 'block'
        } else {
            if(male.checked){
                obj.gender = male.value
            }else if(female.checked) {
                obj.gender = female.value
            }
            p6.style.display = 'none'
        }
    }

    submitBtn.addEventListener('click',(e) => {
        e.preventDefault()
        checkName()
        checkSurename()
        checkPassword()
        checkPassword1()
        checkEmail()
        checkGender()

        obj.name = nameinp.value
        obj.surname = surname.value
        obj.password = password.value
        obj.email = email.value

        if(nameinp.value != '' && surname.value != '' && password.value != '' && 
        email.value !='' && (male.checked != '' || female.checked != '')){
            console.log(obj)
        } 
    })
}

window.document.addEventListener("DOMContentLoaded", App)