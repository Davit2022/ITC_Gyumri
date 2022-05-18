var Wine = /** @class */ (function () {
    function Wine() {
        this.n = 5;
        this.price = 200;
        this.date = '10/6/2022';
        this.term = '20/7/2022';
    }
    ;
    Wine.getInstance = function () {
        if (!this.instance) {
            this.instance = new Wine();
            return this.instance;
        }
        return this.instance;
    };
    Wine.prototype.onClick = function () {
        if (this.n == 0) {
            return false;
        }
        console.log(this.n - 1);
        this.n = this.n - 1;
        return true;
    };
    return Wine;
}());
var Bread = /** @class */ (function () {
    function Bread() {
        this.n = 10;
        this.price = 200;
        this.date = '10/6/2022';
        this.term = '20/7/2022';
    }
    ;
    Bread.getInstance = function () {
        if (!this.instance) {
            this.instance = new Bread();
            return this.instance;
        }
        return this.instance;
    };
    Bread.prototype.onClick = function () {
        if (this.n == 0) {
            return false;
        }
        console.log(this.n - 1);
        this.n = this.n - 1;
        return true;
    };
    return Bread;
}());
var Cheese = /** @class */ (function () {
    function Cheese() {
        this.n = 15;
        this.price = 200;
        this.date = '10/6/2022';
        this.term = '20/7/2022';
    }
    ;
    Cheese.getInstance = function () {
        if (!this.instance) {
            this.instance = new Cheese();
            return this.instance;
        }
        return this.instance;
    };
    Cheese.prototype.onClick = function () {
        if (this.n == 0) {
            return false;
        }
        console.log(this.n - 1);
        this.n = this.n - 1;
        return true;
    };
    return Cheese;
}());
var readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
readline.question('Which product are you interested in?', function (name) {
    if (name == 'Wine') {
        var w = Wine.getInstance();
        console.log(w.onClick());
        console.log(w.onClick());
    }
    else if (name == 'Bread') {
        var b = Bread.getInstance();
        console.log(b.onClick());
        console.log(b.onClick());
    }
    else if (name == 'Cheese') {
        var c = Cheese.getInstance();
        console.log(c.onClick());
        console.log(c.onClick());
    }
    readline.close();
});
