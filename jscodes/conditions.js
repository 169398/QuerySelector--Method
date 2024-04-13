//Implementation of the while and for loops

//while loop syntax
while(condition){
    //code
}

{


 let i = 0;
 while(i<5){
    alert(i);
    i++;
 }
}

 //shorthand
{
    let i = 3;
    while(i){
        alert(i)
        i--;
    }
}
//The do... while
do{
    //loop body
}
while(condition);


//for loop
for(begin;condition;step){
    //loop body
}

for( let i = 0;i<4;i++)(
    alert(i)
)
let sum = 0;
while(true){
    let value =+ prompt("Enter a number")
    if (!value) break;
    sum += value;

}
alert('sum: ' + sum);

{
    //this outer enables us to break the whole loop not just the inner loop
    outer:for(let i =0;i<7;i++){ 
        for(let j=0;j<4;j++){
            let input = prompt(`Value at coords (${i},${j})`, '');
    if(!input) 
        break  outer
    
        }
    }
    alert('okay!');
}

let i=0;
do{
    alert('number ${i}!');
i++;
}
while(i<4);
//asking user to enter value more than 100 in a while loop
let k ;
do{
   k= prompt('Enter number greater than 100');


}
while (k<=100 && k);


let n=10;
do{
    console.log('n');

}
while(n%2&&n++);


let l =10;
prime:
for(let i =2;i<=l ;i++){
    for(let j=2;j,i;j++){
        if(i%j ==0) continue prime;
    }
    alert (i);
}