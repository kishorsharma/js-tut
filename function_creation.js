var foo = function bar () {
    var foo = "bar";
    function baz () {
        foo = bar;
        console.log("inner function : ", foo);
    }
    baz();
};


function test() {

};

var foo;


console.log(foo);
console.log(bar);