const a = 5,
        b = 5;

function ab() {
    return a + b;
}

function func(){
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            resolve(ab())
        }, 1000);
    });
}

const p = func();
p.then(function(resolve, reject){
    console.log(resolve);
});