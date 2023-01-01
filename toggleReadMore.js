
document.addEventListener('click', (e)=>{
    
    if(e.target.classList.contains('btn')){
        e.target.parentElement.parentElement.children.item(1).classList.toggle('toggle');
        if(e.target.innerText === 'CONTIUE READING'){
            e.target.innerText = 'COLLAPSE';
        }else{
            e.target.innerText = 'CONTIUE READING';
        }
        // console.log(e.target);
    }
});