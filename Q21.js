var numbers = [1, 2, 3, 4, 5];
//create error
//console.log(numbers[5]);
//correcting the error
var A = 2;
if (A > numbers.length) {
    console.log('$[A]is out of index range');
}
else {
    console.log(numbers[A]);
}
