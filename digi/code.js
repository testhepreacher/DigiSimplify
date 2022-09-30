const togglebtn = document.querySelector(".toggle-btn")
const navbarlinks = document.querySelector(".navbar-links")

togglebtn.addEventListener('click', () => {
    navbarlinks.classList.toggle('active')
})