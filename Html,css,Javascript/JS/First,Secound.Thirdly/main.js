debugger
let body = document.getElementById("body")
let div = document.createElement('div')
body.append(div);
let h1 = document.createElement('h1')
h1.innerText = "Accordion"
fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        console.log(data);
        draw(data)
    });


function draw(data) {
    let j = 0;
    for (let i = 0; i < 3; i++) {
        div.className = "accordionItem";
        let h2 = document.createElement('h2')
        h2.className = "accordionTitle"
        if (i === 0) {
            h2.innerText = "First"
        } else if (i === 1) {
            h2.innerText = "Secound"
        } else {
            h2.innerText = "Third"
        }
        div.appendChild(h2)
        let div1 = document.createElement('div')
        div1.className = "accordionContent";
        div.appendChild(div1)

        for (let i = 0; i < data.length; i++) {
            if (i != 3) {
                let tag = document.createElement("p");
                let text = document.createTextNode(data[j].name)
                tag.appendChild(text);
                div1.appendChild(tag);
                j += 1;
            } else {
                break
            }
        }
    }


    const accordion = document.querySelectorAll(".accordionTitle");

    accordion.forEach((accordionTitle) => {
        accordionTitle.addEventListener("click", () => {
            if (accordionTitle.classList.contains("is-open")) {
                accordionTitle.classList.remove("is-open");
            } else {
                const accordionOpening = document.querySelectorAll(".is-open");
                accordionOpening.forEach((accordionOpen) => {
                    accordionOpen.classList.remove("is-open");
                });
                accordionTitle.classList.add("is-open");
            }
        });
    });
};