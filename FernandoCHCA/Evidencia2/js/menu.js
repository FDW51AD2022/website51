// const nav = document.querySelector('.nav');

//     window.addEventListener('scroll', function(){
//         nav.classList.toggle('active', window.scrollY > 0)
//     })

var header = document.getElementById('Hero')

window.addEventListener('scroll', ()=>{
    var scroll = window.scrollY
    if (scroll>10){
        header.style.backgroundColor = '#121212'
    }else{
        header.style.backgroundColor = 'transparent'
    }
})