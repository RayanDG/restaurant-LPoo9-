function filterSelection(category){

let plats=document.getElementsByClassName('menu-item');

for(let i=0;i<plats.length;i++){
plats[i].style.display='none';

if(category=='all' || plats[i].classList.contains(category)){
plats[i].style.display='block';
}
}

}