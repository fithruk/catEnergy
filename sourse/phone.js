const burger = document.getElementById('burger');
const phoneNav = document.querySelector('.phone_nav');

burger.addEventListener('touchstart', () => {
    phoneNav.classList.toggle('active');
});
console.log("phone");