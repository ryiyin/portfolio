const darkMode = document.querySelector('.btn-dark-mode')
const body = document.querySelector('.body')

darkMode.addEventListener("click", ()=>{
    body.classList.toggle('dark-mode');
})