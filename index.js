const btn=document.getElementById('btn');
const color=document.querySelector('.color');
const colors=["red","blue","green","white","purple","gray","black","orangered","pink"];
btn.addEventListener('click',function(){
    let randno=getRandomNumber();
    console.log(randno);
    document.body.style.backgroundColor=colors[randno];
    color.textContent=colors[randno];
})
function getRandomNumber(){
    return Math.floor(Math.random()*8);
}