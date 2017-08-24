console.log('quiz 1');
function begin() {
  console.log('begin');
}
begin();

function echo(a) {
  return (a);
}
echo('iron yard');

function math(a,b,c) {
return (a+b*c)
}
math(3,4,2);

let words=['hello','world']
function toString(words) {
return(

)
}
toString(words);

function callMe(){
  function second() {
console.log('in second function');
  }
console.log('in first function');
}
callMe();


function callMe2(second,str) {
  function callMe(second){
    function second() {
  console.log('in second function');
    }
  console.log('in first function');
  }
}
callMe2('hello')

function reverse(str) {
return(reverse.str)
}
reverse('hello')


setTimeout(function sleep () {
console.log('after sleep loop');
}, 1000);
console.log('before sleep loop');
