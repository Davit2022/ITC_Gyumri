const Acc = () => {
    document.querySelectorAll(".acordeon").forEach((el) => {
        el.addEventListener("click", () => {
            const content = el.nextElementSibling;
            if(content.style.maxHeight){
                document.querySelectorAll(".content").forEach((el) => el.style.maxHeight = null)
            }else{
                document.querySelectorAll(".content").forEach((el) => el.style.maxHeight = null)
                content.style.maxHeight = content.scrollHeight + "px"
            }
        })
    })
}
window.document.addEventListener('DOMContentLoaded', Acc)