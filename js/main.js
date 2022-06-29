const toggle = document.getElementById('toggle');
const navbar = document.getElementById('navbar');
toggle.onclick = function(){
    toggle.classList.toggle('active');
    navbar.classList.toggle('active');
}