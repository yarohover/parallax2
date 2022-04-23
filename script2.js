const sec1 = document.querySelector('section:nth-child(1)');

window.addEventListener('scroll', function(e){
    let winy = window.scrollY;
    console.log(winy);
    sec1.style.backgroundPositionY = winy*0.7+'px';
})