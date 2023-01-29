let index = 1;
mainfunction(index)

function counterfunc(i){
    mainfunction(index += i);
}

function mainfunction(i){
    let slides = document.getElementsByClassName('slideitms');
    if(i > slides.length){index = 1};
    if(i < 1){index = slides.length};
    for(let i = 0; i < slides.length; i++){
        slides[i].style.display = 'none';
    }
    slides[index-1].style.display = 'block';
}