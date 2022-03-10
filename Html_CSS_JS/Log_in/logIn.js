// console.log(window)

// let text = prompt ("Input case");
// let result = text.toUpperCase();
// console.log(result)
// console.log(typeof(result), result)

// let text1 = confirm()
// if (text1 == true){
//     console.log(true, "Yes")
// } else {
//     console.log(false, "No")
// }

// let text1 = confirm()

// function Yes() {
//     console.log("sucsess")
// }

// function No() {
//     console.log("error")
// }

// if (text1 == true){
//     Yes()
// } else {
//     No()
// }

// function handleOrdick() {
//     console.log("Hello")
//     alert("Hello")
// }

let btn = document.getElementById("myBtn")
let p = document.getElementById("demo")
btn.addEventListener("click", displayDate)

function displayDate(e) {
    console.log(e.target)
}

