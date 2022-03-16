
const App = () => {
    const obj = {}
    const p = document.getElementsByTagName('p')
    const submitBtn = document.getElementById("submit")
    document.getElementById("user").addEventListener('click', function(){
        document.getElementById('sub-form').style.display = 'block';
    })
    
    function checkName(){
        const nameinp = document.getElementById('nameinp')
        const regExp = /^[A-z][a-z\s]*$/;
        if(nameinp.value == '') {
            p[0].style.display = 'block'
            nameinp.style.border = '3px solid'
            nameinp.style.borderColor = 'red'
        } else {
            if(nameinp.value.match(regExp) == null){
                nameinp.style.border = '3px solid'
                nameinp.style.borderColor = 'red'
                p[0].style.display = 'block'
                p[0].innerText = "Name isn't contain this character"
            } else {
                p[0].style.display = 'none'
                nameinp.style.border = '3px solid'
                nameinp.style.borderColor = '#5cd1df'  
            }
        }
    }

    function checkSurename(){
        const surname = document.getElementById('surname')
        const regEx = /^[A-z][a-z\s]*$/;
        if(surname.value == ''){
            p[1].style.display = 'block'
            surname.style.border = '3px solid'
            surname.style.borderColor = 'red'
        } else{
            if(surname.value.match(regEx) == null){
                surname.style.border = '3px solid'
                surname.style.borderColor = 'red'
                p[1].style.display = 'block'
                p[1].innerText = "Name isn't contain this character"
            } else {
                p[1].style.display = 'none'
                surname.style.border = '3px solid'
                surname.style.borderColor = '#5cd1df'  
            }
        }
    }

    function checkPassword(){
        const password = document.getElementById('password')
        if(password.value == ''){
            p[2].style.display = 'block'
            password.style.border = '3px solid'
            password.style.borderColor = 'red'
        } else{
            p[2].style.display = 'none'
            password.style.border = '3px solid'
            password.style.borderColor = '#5cd1df'
        }
    }

    function checkPassword1(){
        const password = document.getElementById('password')
        const password1 = document.getElementById('password1')
        if(password1.value == ''){
            p[3].style.display = 'block'
            password1.style.border = '3px solid'
            password1.style.borderColor = 'red'
        } else{
            if(password.value == password1.value){
                p[3].style.display = 'none'
                password1.style.border = '3px solid'
                password1.style.borderColor = '#5cd1df'
            } else {
                p[3].style.display = 'block'
                password1.style.border = '3px solid'
                password1.style.borderColor = 'red'
                p[3].innerText = 'Password is incorrect'
            }
        }
    }

    function checkEmail(){
        const email = document.getElementById('email')
        if(email.value == ''){
            p[4].style.display = 'block'
            email.style.border= '3px solid'
            email.style.borderColor = 'red'
        } else {
            const regex = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');
            if(regex.test(email.value)){
                p[4].style.display = 'none'
                email.style.border = '3px solid'
                email.style.borderColor = '#5cd1df'
            } else {
                p[4].style.display = 'block'
                email.style.border = '3px solid'
                email.style.borderColor = 'red'
                p[4].innerText = 'Email is incorrect'
            }
        
        }
    }

    function checkGender(){
        const male = document.getElementById('male')
        const female = document.getElementById('female')
        if(male.checked == '' && female.checked == ''){
            p[5].style.display = 'block'
        } else{
            if(male.checked){
                obj.gender = male.value
            }else if(female.checked) {
                obj.gender = female.value
            }
            p[5].style.display = 'none'
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