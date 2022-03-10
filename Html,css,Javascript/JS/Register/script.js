function getcube(event) {
    console.log(event);
    event.preventDefault();
    const name = document.getElementById("name").value;
    // console.log("Your name is ", name.value);
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const phoneNumber = document.getElementById("phoneNumber").value;
    // const gender = document.getElementById("gender").value
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const language = document.getElementById("language").value
    const about = document.getElementById("about").value

    console.log("Your name is ", name);
    console.log("Your email is ", email);
    console.log("Sorry, we can not show the password");
    console.log("is your phone number ", phoneNumber);
    console.log("You are a ", gender);
    console.log("You speak ", language);
    console.log("you About ", about);
}


// function formValidation() {

//     if (name.value.length < 2 || name.value.length > 20) {
//         alert("Name length should be more than 2 and less than 21");
//         name.focus();
//         return false;
//     }
//     // if (email.value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
//     //     alert("Please enter a valid email!");
//     //     email.focus();
//     //     return false;
//     // }
//     if (!password.value.match(/^.{5,15}$/)) {
//         alert("Password length must be between 5-15 characters!");
//         password.focus();
//         return false;
//     }
//     // if (!phoneNumber.value.match(/^[1-9][0-9]{9}$/)) {
//     //     alert("Phone number must be 10 characters long number and first digit can't be 0!");
//     //     phoneNumber.focus();
//     //     return false;
//     // }
//     if (gender.gender.value === "") {
//         alert("Please select your gender!");
//         return false;
//     }
//     if (language.value === "") {
//         alert("Please select your language!")
//         return false;
//     }
//     if (!zipcode.value.match(/^[0-9]{6}$/)) {
//         alert("Zip code must be 6 characters long number!");
//         zipcode.focus();
//         return false;
//     }
//     console.log(email)

//     return true;
// } // if (email.value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
//     alert("Please enter a valid email!");
//     email.focus();
//     return false;