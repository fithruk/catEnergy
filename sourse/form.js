
const formButton = document.querySelector('.form_button');
const forms = document.getElementById('form_wrapper');
const url = 'server.php';
const mw = window.innerWidth;
formButton.addEventListener('click', () => {
    postData (forms);
});

if (mw <= 481){
    activateMobileMenu ();
}

function activateMobileMenu () {
    const burger = document.getElementById('burger');
    const menu = document.querySelector('.phone_nav');
    burger.addEventListener('touchstart', () => {
        menu.classList.toggle('active');
    })
}

function postData (form) {
    let formArray = Object.values(form);
    let formCollection = {};
    formArray.forEach(element => {
        fillForm(element);
        function fillForm (element) {
            let { name , type, checked } = element;
             if (type == "radio" && "checkbox") {
                formCollection[name] = checked;
             } else {
                formCollection[name] = element.value;
             }
        }
        
    })
    console.log(formCollection);
    const request = new XMLHttpRequest();
        request.open('POST', url);
        // request.setRequestHeader('Content-type', 'multypart/form-data');
        
        request.send(formCollection);
    
        request.addEventListener('load', () => {
            if (request.status === 200) {
                console.log(request.response);
            }
        })
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        
    })
}