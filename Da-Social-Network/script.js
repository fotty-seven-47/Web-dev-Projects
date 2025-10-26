document.querySelector('.button1').addEventListener('click',function(){
document.querySelector('.createapost').classList.add('show')
})

document.querySelector('.post69').addEventListener('click',function(e){
  e.preventDefault();
document.querySelector('.createapost').classList.remove('show')
})

document.querySelector('.fixedbtn').addEventListener('click',function(){
  document.querySelector('.helpdude1').classList.toggle('show')
})


document.querySelector('.deletebtn').addEventListener('click',function(){
document.querySelector('.message2').classList.add('hide')
})