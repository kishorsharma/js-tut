// var a = 5;
// var str = 'Some string';
// var strDblQuote = "Some string in double quote";
// var mixInDblStr = "Jeetu's is a master's degree holder";
// var mixInSingStr = 'We want to have a book "Harry Potter" to be borrowed';
// var joinedStr = mixInDblStr + ' ' + mixInSingStr;

// var stuRec = {
//     name: 'Jeetu',
//     highestQualification: 'Dumb'
// }

function abc() {
    var a = "Functional a";
    console.log('First statement');
    if (!a) { // true b define
        let b = "inside if block";
    }
    console.log(a, b,c, ' d: ', d);
    var c = 1;
    var d = 2;
    console.log('c', c, ' d: ', d);
}
function abc1 () {
    var a = "Functional a";
    var c;
    var d;
    if (!a) {
        let f = "inside if block";
        if (true) {
            let b = "inside if block" + f;
        }
       
    }
    console.log(a, b,c, ' d: ', d);
    c = 1;
    d = 1;
    console.log('c', c, ' d: ', d);
}

abc();
//abc1();

// Object.create

// brij.highestQualification = 'dbl dumb';

//console.log("abc: " ,a, stuRec);