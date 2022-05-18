interface Product {
    n: number;
    price: number;
    date: string;
    term: string;
    onClick(): boolean;
}

class Wine implements Product {
    n: number;
    price: number;
    date: string;
    term: string;
    private static instance: Wine;
    private constructor(){
        this.n= 5;
        this.price = 200;
        this.date = '10/6/2022';
        this.term = '20/7/2022';
    };
    
    public static getInstance(): Wine {
        if (!this.instance) {
            this.instance = new Wine();
            return this.instance;
        }
        return this.instance;
    }

    public onClick(): boolean {
        if(this.n == 0){
            return false
        } 
        console.log(this.n - 1)
        this.n = this.n -1
        return true
    }
}

class Bread implements Product {
    n: number;
    price: number;
    date: string;
    term: string;
    private static instance: Bread;
    private constructor(){
        this.n= 10;
        this.price = 200;
        this.date = '10/6/2022';
        this.term = '20/7/2022';
    };
    
    public static getInstance(): Bread {
        if (!this.instance) {
            this.instance = new Bread();
            return this.instance;
        }
        return this.instance;
    }

    public onClick(): boolean {
        if(this.n == 0){
            return false
        } 
        console.log(this.n - 1)
        this.n = this.n -1
        return true
    }
}

class Cheese implements  Product {
    n: number;
    price: number;
    date: string;
    term: string;
    private static instance: Cheese;
    private constructor(){
        this.n= 15;
        this.price = 200;
        this.date = '10/6/2022';
        this.term = '20/7/2022';
    };
    
    public static getInstance(): Cheese {
        if (!this.instance) {
            this.instance = new Cheese();
            return this.instance;
        }
        return this.instance;
    }

    public onClick(): boolean {
        if(this.n == 0){
            return false
        } 
        console.log(this.n - 1)
        this.n = this.n -1
        return true
    }
}

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
  
readline.question('Which product are you interested in?', name => {
    if(name == 'Wine'){
        const w = Wine.getInstance();
        console.log(w.onClick());
        console.log(w.onClick())
    } else if(name == 'Bread'){
        const b = Bread.getInstance();
        console.log(b.onClick());
        console.log(b.onClick())
    } else if(name == 'Cheese'){
        const c = Cheese.getInstance();
        console.log(c.onClick())
        console.log(c.onClick())
    }
    readline.close();
});




