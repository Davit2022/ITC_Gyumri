const a = 5,
        b = 5;

function ab() {
    return a + b;
}

async function func(){
    const AB = await ab()*2;
    return AB;
}

const p = func();
p.then(function(result){
    console.log(result)
})