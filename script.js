const  info = document.querySelectorAll('.info li');
console.log(info);
const about = document.querySelector('.about');
const lightColorArr= ['red', 'green', 'blue', 'yellow', 'purple', 'orange', 'pink', 'brown', 'grey', 'black'];

function shuffleArray(arr){
    let currentIndex = arr.length;
    let randomIndex;

    while (currentIndex !==0){
        randomIndex = math.floor(math.random() * currentIndex);
        currentIndex--;
        [arr[currentIndex], arr[randomIndex],arr[randomIndex],];
    }
    return arr;
}
 

about.addEventListener('click',()=>{
    const shuffledColors = shuffleArray(lightColorArr);


    about.forEach((list,index)=>{
        list.style.backgroundColor = shuffledColors[index];
    });
});

home = document.querySelector ('.home');
console.log(home);
