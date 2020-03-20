var index = 0;
var myVar;

function myFunction() {
    myVar = setTimeout(autoSlide, 4000);
  }
  
function myStopFunction() {
    clearTimeout(myVar);
}

function autoSlide() {
    var list = document.getElementsByClassName('item');
    for(var i = 0; i < list.length; i++){
        list[i].style.display = 'none';
    }
    if(index >= list.length){
        index = 0;
    }
    if(index < 0){
        index = list.length - 1;
    }
    list[index].style.display = 'flex';
    index++;  
    myFunction();
}

function plusSlide(val){
    myStopFunction()
    index += val;
    autoSlide();
}

autoSlide();

// show menu 

function showMenu() {
    var bg = document.getElementsByClassName('bg__menu')[0];
    var menu = document.getElementsByClassName('menu__wrap')[0];
    if(menu.className.indexOf(' menu__show') == -1){
        bg.className += ' bg__show';
        menu.className += ' menu__show';
        menu.className = menu.className.replace(' menu__collapse','');
    }
    else{
        menu.className += ' menu__collapse';
        menu.className = menu.className.replace(' menu__show','');
        bg.className = bg.className.replace(' bg__show','');
    }
}

window.onclick = function(){
    var bg = document.getElementsByClassName('bg__menu')[0];
    var menu = document.getElementsByClassName('menu__wrap')[0];
    if(this.event.target == bg){
        bg.className = bg.className.replace(' bg__show','');
        menu.className = menu.className.replace(' menu__show','');
    }
}

//show item menu 

function showItem(){
    var item = document.getElementsByClassName('room__list')[0];
    if(item.className.indexOf(' room__active') == -1){
        item.className += ' room__active';
        item.previousElementSibling.className += ' item__active';
    }
    else{
        item.className = item.className.replace(' room__active','');
        item.previousElementSibling.className = item.previousElementSibling.className.replace(' item__active','');
    }
}


