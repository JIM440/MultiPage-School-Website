// change navbar style onscroll
window.addEventListener("scroll", () => {
    document.querySelector('header').classList.toggle('window-scroll', window.scrollY > 0)
})

// faq show/hide
const faqs = document.querySelectorAll('.faq');
faqs.forEach(faq => {faq.addEventListener("click", () => {
    faq.classList.toggle("open"); 

// change icon
const icon = faq.querySelector('.faq__icon i');
if(icon.className === 'bx bx-minus'){
icon.className = 'bx bx-plus';
} else{
    icon.className = 'bx bx-minus'
}
})
})

// open and close navbar
let nav = document.querySelector('.nav');
const close = document.querySelector('.close');
const open = document.querySelector('.nav_button');
close.addEventListener('click', () => {
    nav.classList.toggle('open')
})
open.addEventListener('click', () => {
    nav.classList.toggle('open')
})