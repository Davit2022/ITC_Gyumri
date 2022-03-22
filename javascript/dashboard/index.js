const App = ()=>{
    const board = document.getElementsByClassName("title")
    const subPanel = document.getElementsByClassName("sub-panel")

    for (let i = 0; i < board.length; i++){
        board[i].addEventListener("click", function(){
            var current = document.getElementsByClassName("active");
            if (current.length > 0) { 
              current[0].className = current[0].className.replace(" active", "");
            }
            subPanel[i].className += " active";
        })
    }
}

(function int(){
    window.document.addEventListener('DOMContentLoaded',App)
}())

