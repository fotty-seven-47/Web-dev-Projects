document.querySelector('.button1').addEventListener('click',function(){
document.querySelector('.createapost').classList.add('show')
})

document.querySelector('.editprofile1').addEventListener('click',function(){
document.querySelector('.createapost1').classList.add('show')
document.querySelector('.helpdude1').classList.remove('show');
})

document.querySelector('.post69').addEventListener('click',function(e){
  e.preventDefault();
document.querySelector('.createapost').classList.remove('show')
})

document.querySelector('.post70').addEventListener('click',function(e){
  e.preventDefault();
document.querySelector('.createapost1').classList.remove('show');
})

document.querySelector('.fixedbtn').addEventListener('click',function(){
  document.querySelector('.helpdude1').classList.toggle('show')
})

// COUNTER
let countlikes=0;
let countdislikes=0;
document.querySelector('.likes1').addEventListener('click',function(){
  countlikes=countlikes+1;
  document.querySelector(".counter").textContent=countlikes;
})

document.querySelector('.dislikes1').addEventListener('click',function(){
countdislikes=countlikes+1;
document.querySelector(".counter").textContent=countdislikes;
})



