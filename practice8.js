//Arrays are objects!



var fruits=[];
fruits.push("apple");
fruits.push("pear");

console.log(fruits);

fruits.pop();
console.log(fruits);

function arrayBuilder(one,two,three){
  var arr = [];
  arr.push(one);
  arr.push(two);
  arr.push(three);
  return arr;
}
 var simpleArr=arrayBuilder("apple","pear","plum");

 console.log(simpleArr);