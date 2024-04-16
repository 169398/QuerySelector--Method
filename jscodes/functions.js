//the two functions in javascript

function showText(){
    alert('Hi Idris');
}
//using the function
showText();

let game='tabletennis';

function play(){
    let text= 'idris'+ game;
    console.log(text);
}
play();

//parameters
function showText(age,game ="no age specified"){
    console.log(age   +'years old should play'+ game);
}
showText('20','Tabletennis');



//mullish coalescing operator ??
function showCount(){
    alert(count??"unknown");
}
showCount(0);
showCount(null);
showCount();


function product( a,b){
    return a *b;
}

let result = product(3,5);
console.log(result);



function buyCar(car){
    if(car=="Ferrari"|| car==="BMW"|| car==="Ford Mustang")
    {
        return true;

}
else{
    return false;
}
}

let car = prompt('Which car do you wanna buy?', 'Enter the name of the car:');
if(buyCar(car)){
    alert('Car avilable for  purchase');
}
else{
   alert( "Go raise some f***ng money ");
}


function checkAge(age){
return  (age<=18) ? true: confirm ('are you allowed ');
}


function  min(a,b){
    return a<b? a: b;
}

 let  input =prompt('Enter two numbers','a,b','');
 let numbers=input.split(',');
 let  a= parseFloat(numbers[0]);
 let  b= parseFloat(numbers[1]);



 return ( (!isNaN(a)&& !isNaN(b)) , smallest=min(a,b))? alert("the smallest number is", ''+ smallest):     alert('Invalid Input .Please nter valid numbers');



 function pow(x,n){

    let result =x;


    for (let i = 1; i < n; i++) {
        result *= x;
      }
    
      return result;
    


 let x= prompt('x?','');
 let n= prompt('n?','');

return (n<1)? alert('power ${n} is not suppoprted'): alert(pow(x,n));