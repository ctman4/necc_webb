const hamburger = document.getElementById('hamburger');
const navUL = document.getElementById('nav-ul');

//when hamburger is clicked, the nav ul gets the 'show' class
hamburger.addEventListener('click', () => {
    navUL.classList.toggle('show');
});

//make sticky navbar, when scrolling, 
window.addEventListener("scroll", function(){
    var header = document.querySelector("header");
    //make sticky when user starts scrolling the header gets the sticky class
    header.classList.toggle("sticky", window.scrollY > 0 )
})