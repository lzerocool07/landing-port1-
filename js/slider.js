window.onload = function(){
    var btns = document.querySelectorAll('.aboutSlider span'),
        imgs = document.querySelectorAll('.aboutSliderWrapper img');
    var b = 0;
    for(var i = 0 ; i<btns.length; i++){
        btns[i].onclick = function(){
            btns[b].className='';
            this.className='active';
            imgs[b].className='';
            b=this.getAttribute('data-number');
            imgs[b].className+='show';
        }
    }
}