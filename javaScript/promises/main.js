const promis = new Promise((resolve,reject)=>{
    resolve("Hi promises")
})


promis.then((result)=>{
    return result
}).then((result)=>{
    return result +" "+ "from js"
}).then((result)=>{
    console.log(result)
})

const goodBye = new Promise((resolve,reject)=>{
    reject(new Error("good bye"))
})

 goodBye.catch((error)=>{
    console.log(error)
})


async function hiPromis(){
    return "Hi promises"
    // throw new Error("esim")
}

async function fromJs(){
    try{
        const res = await hiPromis()
        return res + " " + "from js"
    }catch(error){
        throw new Error("good by")
    }finally{
        console.log("ok")
    }
  
}


fromJs().then((result)=>{
    console.log(result)
}).catch((error)=>{
    console.log(error)
})