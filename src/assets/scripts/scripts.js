const popQr = document.getElementById('div-qr');
const openQr = document.getElementById('open-qr');
const closeQr = document.getElementById('close-qr');

openQr.addEventListener('click',function(){
    popQr.style.display = 'block';
});
//sai do modal quando clicar fora 
window.addEventListener('click',function(event){
    if (event.target == popQr){
        popQr.style.display = 'none';
    }
});
