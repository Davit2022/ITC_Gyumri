let obj = {}

let name = document.getElementById('name')
let surname = document.getElementById('surname')
let password = document.getElementById('password')
let email = document.getElementById('email')
let male = document.getElementById('male')
let female = document.getElementById('female')
let p = document.getElementsByTagName('p')

document.getElementById("user").addEventListener('click', function(){
    document.getElementById('sub-form').style.display = 'block';
})


document.getElementById('submit').addEventListener('click',function(e){
    e.preventDefault()

    if(name.value == ''){
        p[0].style.display = 'block'
        name.style.border = '3px solid'
        name.style.borderColor = 'red'
    } else{
        p[0].style.display = 'none'
        name.style.border= '3px solid'
        name.style.borderColor = '#5cd1df'
    }

    if(surname.value == ''){
        p[1].style.display = 'block'
        surname.style.border = '3px solid'
        surname.style.borderColor = 'red'
    } else{
        p[1].style.display = 'none'
        surname.style.border= '3px solid'
        surname.style.borderColor = '#5cd1df'
    }

    if(password.value == ''){
        p[2].style.display = 'block'
        password.style.border = '3px solid'
        password.style.borderColor = 'red'
    } else{
        p[2].style.display = 'none'
        password.style.border= '3px solid'
        password.style.borderColor = '#5cd1df'
    }

    if(email.value == ''){
        p[3].style.display = 'block'
        email.style.border= '3px solid'
        email.style.borderColor = 'red'
    } else {
       p[3].style.display = 'none'
       email.style.border= '3px solid'
       email.style.borderColor = '#5cd1df'
    }

    if(male.checked == '' && female.checked == ''){
        p[4].style.display = 'block'
    } else{
        if(male.checked){
            obj.gender = male.value
        }else if(female.checked) {
            obj.gender = female.value
        }
        p[4].style.display = 'none'
    }

    obj.name = name.value
    obj.surname = surname.value
    obj.password = password.value
    obj.email = email.value

    if(name.value != '' && surname.value != '' && password.value != '' && 
    email.value !='' && (male.checked != '' || female.checked != '')){
       console.log(obj)
    } 
})