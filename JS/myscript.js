
            // function Print(m){
            //     for (let i = 1; i <= m; i++)
            //         document.write(i + " ");
            // }
            // let m = 5;
            // Print(m);

            // function PrintRev(n){
            //     for (let i = n; i > 0; i--)
            //         document.write(i + " ");
            // }
            // let n = 5; 
            // PrintRev(n);
       
            // function PrintNum(start, end){
            //     document.write(`${start}`);
            
            //     if(start < end){
            //         PrintNum((start + 1), end);
            //     }
            // }
            // PrintNum(1, 5);

            // document.write('<br>');

            // function PrintRevNum(end, start){
            //     document.write(`${end}`);
            
            //     if(start < end){
            //         PrintRevNum((end - 1), start);
            //     }
            // }          
            // PrintRevNum(5, 1);
       
            // function Print(k){
            //     if(k>=1){
            //         document.write(`${k}`)
            //         Print(k-1)
            //         document.write(`${k}`)
            //     }
            // }
            // Print(5);
       
            // const obj = {
            //     name:"Hayk"
            // }
            // function print(){
            //     console.log(this.name)
            // }
        
            // let x = print.bind(obj)
            // x()
            
            // for(var e=0; e<10; e++){
            //     let i=e
            //     setTimeout(()=>{
            //         console.log(i)
            //     },0)
            // }

            // var variables = 10;
            // (function(){
            //     console.log(variables)
            //     var variables = 20
            //     console.log(variables)
            // })()
      
            // Promise.resolve("")
            // .then(function(param) {
            //     console.log(param + "than")
            //     return "then"
            // }).then(function(param1) {
            //     console.log(param1 + "-then")
            //     return "then-then"
            // }).then(function(res){
            //     throw new Error("then-then-catch");
            // }).catch(function(err) {
            //     console.log(err.message)
            //     return err.message
            // }).then(function(param2){
            //     console.log(param2 + "-catch")  
            //     return "then-then-catch-catch"       
            // }).then(function(param3){
            //     console.log(param3 + "-then")
            //     return "then-then-catch-catch-then"
            // }).then(function(err1){
            //     throw new Error('then-then-catch-catch-then-catch')
            // }).catch(function(err2){
            //     console.log(err2.message)
            // })

            // Object.prototype.hello = function(){
            //     console.log("hello")
            // }

            // class Car{
            //     constructor(name, color){
            //         this.name = name
            //         this.color = color
            //     }
            //     static year = 2020
            // }
            // const Mercedes = new Car("Mercedes", "Black")

     