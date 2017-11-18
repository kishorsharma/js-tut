var foo = function () {
    console.log(bar);
}

function baa() {
    var bar = 'bar';
    foo();
}

baa();