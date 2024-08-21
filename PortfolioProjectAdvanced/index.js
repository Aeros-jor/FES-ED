// public key = FaS0mwfLDEDkby8yG
// serviceID = service_me8zm8y
// templateID = template_y2ic17m

function contact(event) {
    event.preventDefault();
    const loading = document.querySelector('.modal__overlay--loading')
    const success = document.querySelector('.modal__overlay--success')
    loading.classList += " modal__overlay--visible"    
    emailjs
        .sendForm(
            'service_me8zm8y',
            'template_y2ic17m',
            event.target,
            'FaS0mwfLDEDkby8yG'
        ).then(() => {
            loading.classList.remove("modal__overlay--visible");
            success.classList += " modal__overlay--visible";
        }).catch(() => {
            loading.classList.remove("modal__overlay--visible") ;
            alert("The email service is temporarily unavailable. Please contact me directly at edpritchard.dev@gmail.com."
            ); 


        })
}

let isModalOpen = false;
function toggleModal() {
    if (isModalOpen) {
        isModalOpen = !isModalOpen;
        return document.body.classList.remove("modal--open")
    }
    isModalOpen = !isModalOpen;
    document.body.classList += " modal--open";
}
