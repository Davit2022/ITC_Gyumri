function valid(form) {
    var fali = false;
    var name = form.name.value;
    var phone = form.phone.value;
    var password = form.password.value;
    var RePassword = form.RePassword.value;
    var state = form.state.value;
    var email = form.email.value;

    var adr_pattern = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    var adr_phone = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
    var adr_name = /^[a-zA-Z'][a-zA-Z-' ]+[a-zA-Z']*$/;


    if (adr_name.test(name) == false)
        fali = "Error name, plees input name ";
    else if (adr_phone.test(phone) == false)
        fali = "Error the number";
    else if (adr_pattern.test(email) == false)
        fali = "Error Email";
    else if (password == "" || password == " ")
        fali = "Error password, plees input password ";
    else if (password != RePassword)
        fali = "Error password, try again";
    else if (state == "")
        fali = "Error gender";
    if (fali)
        alert(fali);
    else
        window.location = "https://www.youtube.com";

}