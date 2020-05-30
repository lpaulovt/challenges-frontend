document.querySelector('.nav-icon').addEventListener('click', function(){
    this.classList.toggle('active')
    document.querySelector('.overlay-menu').classList.toggle('active')
})