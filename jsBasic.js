
console.log('Hello Adnan');
// Object
let selectColor = {color1:'red',color2: 'blue'};
console.log(selectColor);
console.log(selectColor['color1']);
// Array
let selectCountry = ['USA','India','France','Iran'];
console.log(selectCountry);
selectCountry[4]='Dubai';
console.log(selectCountry);
console.log("length of array after adding iran is "+selectCountry.length);

//Function
function greet(name,lastname){
    console.log('Hello '+name+' '+lastname);
}
greet('Adnan','Salvatore');
greet('Michael','Jordan')