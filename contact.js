const container = document.querySelectorAll('.container li');



const click = document.querySelector('.click');
 click.addEventListener('click',()=>{
    container.forEach((list)=>{
        list.style.backgroundColor = 'red';
        console.log('  Yeey  \u{1F60D}  clicked');
    });

});
const simple = document.querySelector('.simple');
click.addEventListener('click',()=>{
    container.forEach((ul) =>{
        ul.style.position= 'relative';
        ul.style.left = '100px';

    })});


    const myLink = document.querySelector('.myLink');
    myLink.href= 'https://www.google.com';