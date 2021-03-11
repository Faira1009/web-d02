console.log(a);
var a = 'Hoisting';

say_something('something');
function say_something (a) {
    console.log(a)
}
do_something();
function do_something() {
    console.log(a);
    var a = 'fly';
}