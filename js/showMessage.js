
;(function(){
   
    var persons = document.querySelectorAll('.personStyle'),
        msgs = document.querySelectorAll('.message');
    for(var i = 0 ; i <persons.length; i++){
        persons[i].onmouseover = function(){
            msgs[this.getAttribute('data-number')].style.opacity=1;
        }
        
           persons[i].onmouseout = function(){
            msgs[this.getAttribute('data-number')].style.opacity=0;
        }
    }
     
  

}());


