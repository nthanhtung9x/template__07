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

window.onclick = function(){
    var bg = document.getElementsByClassName('bg__menu')[0];
    var menu = document.getElementsByClassName('menu__wrap')[0];
    var bg__modal = document.getElementsByClassName('modal__collapse')[0];
    var modal = document.getElementsByClassName('modal__book')[0];

    var preview = document.getElementsByClassName('modal__preview')[0];
    var bg__preview = document.getElementsByClassName('modal__preview__collapse')[0];
  
    if(this.event.target == bg){
        bg.className = bg.className.replace(' bg__show','');
        menu.className = menu.className.replace(' menu__show','');
    }
    else if(this.event.target == bg__modal){
        modal.className = modal.className.replace(' modal__show','');
    }
    else if(this.event.target == bg__preview){
        preview.className = preview.className.replace(' modal__preview__show','');

    }
}


// modal

function closeModal(){
    var modal = document.getElementsByClassName('modal__book')[0];
    modal.className = modal.className.replace(' modal__show','');
}

function showModal(){
    var modal = document.getElementsByClassName('modal__book')[0];
    if(modal.className.indexOf(' modal__show') == -1){
        modal.className += ' modal__show';
    }else {
        modal.className = modal.className.replace(' modal__show','');
    }
}

// preview

function showPreview(){
    var modal = document.getElementsByClassName('modal__preview')[0];
    if(modal.className.indexOf(' modal__preview__show') == -1){
        modal.className += ' modal__preview__show';
    }else {
        modal.className = modal.className.replace(' modal__preview__show','');
    }
}

function closePreview(){
    var preview = document.getElementsByClassName('modal__preview')[0];
    preview.className = preview.className.replace(' modal__preview__show','');
}

// show item preview

var indexView = 0;

function currentView(index) {
    indexView = index;
    changeView();
}


function changeView(){
    var item = document.getElementsByClassName('preview__img');
    var img = document.getElementsByClassName('preview__item__img');
    for(var i = 0; i < item.length; i++){
        item[i].style.display = 'none';
    }

    for(var i = 0; i < img.length; i++){
        img[i].className = img[i].className.replace(' active','');
    }

    if(indexView >= item.length){
        indexView = 0;
    }
    if(indexView < 0){
        indexView = item.length - 1;
    }

    item[indexView].style.display = 'block';
    img[indexView].className += ' active';
}

function plusView(val) {
    indexView += val;
    console.log(indexView);
    changeView();
}

changeView();