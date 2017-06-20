window.onload = function(){
    var btnsSlider = document.querySelectorAll('.sliderBtns span');
    
    var i = 0;
    btnsSlider[i].onclick = function(){
        this.className = 'active';
        
    }
    
}