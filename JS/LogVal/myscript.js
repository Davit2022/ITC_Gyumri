function validateForm(){
    const x = document.forms["myForm"]["fname"].value;
    const nameerr = document.querySelector(".name-err");
    const main = document.querySelector(".main");
    if (x == ""){
        main.style.height="520px";
        nameerr.style.display='block';
        return false;
    }
}