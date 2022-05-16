interface Product {
    n: number;
    price: number;
    date: string;
    term: string;
    onClick(): boolean;
}

class Wine implements Product {
    n: number = 5;
    price: number = 200;
    date: string = '10/6/2022';
    term: string = '20/7/2022';
    onClick(): boolean {
        if(this.n == 0){
            return false
        } 
        console.log(this.n - 1)
        return true
    }
}

class Bread implements  Product {
    n: number = 10;
    price: number = 200;
    date: string = '10/6/2022';
    term: string = '20/7/2022';
    onClick(): boolean {
        if(this.n == 0){
            return false
        } 
        console.log(this.n - 1)
        return true
    }
}

class Cheese implements  Product {
    n: number = 15;
    price: number = 200;
    date: string = '10/6/2022';
    term: string = '20/7/2022';
    onClick(): boolean {
        if(this.n == 0){
            return false
        } 
        console.log(this.n - 1)
        return true
    }
}

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  readline.question('Which product are you interested in?', name => {
      if(name == 'Win'){
          const w = new Wine();
          console.log(w.onClick());
      } else if(name == 'Bread'){
          const b = new Bread();
          console.log(b.onClick());
      } else if(name == 'Cheese'){
          const c = new Cheese();
          console.log(c.onClick())

      }
    readline.close();
  });




