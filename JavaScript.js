var popap = document.getElementById('popap')
var btn = document.getElementById('button-1')
var none = document.getElementById('scroll-none')
var span = document.getElementsByClassName('close')[0];


btn.onclick = function(){
    popap.style.display = "block";
    none.style.position = "fixed";
}
span.onclick = function(){
    popap.style.display = "none";
    none.style.position = "relative";
}

window.onclick = function(event){
    if (event.target == popap){
        popap.style.display = "none";
        none.style.position = "relative";
    }
}

window.onscroll = () => {
    const header = document.querySelector('.nav');
    const Y = window.scrollY;

    if (Y > 50) {
        header.classList.add('header-fix');
    }
    else if (Y < 300){
        header.classList.remove('header-fix');
    }
}
