window.addEventListener('scroll', (e)=>{
    let winscry = window.scrollY;
    console.log(winscry);
    const par = document.querySelectorAll('main p');

    par[0].style.transform = 'translateY('+ winscry*0.5 +'px)';
})