var modal = document.getElementById('id01');

window.addEventListener('click', (e)=>{
    if(e.target === modal){
        modal.style.display = 'none';
    }
})