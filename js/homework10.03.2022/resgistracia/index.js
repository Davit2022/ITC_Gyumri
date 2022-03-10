function valid(form) {
    var fali = false;
    var name = form.name.value;
    var password = form.password.value;
    var RePassword = form.RePassword.value;
    var state = form.state.value;
    var email = form.email.value;

    var adr_pattern = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;


    if (name == "" || name == " ")
        fali = "Error name, plees input name ";
        //aranc reguliar
    // else if (email.split('@').length - 1 == 0)
    //     fali = "Error Email";
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