/*const listMenu = document.getElementsByClassName('nav_item');
listMenu.each(i, el) = {
    el.find
    el.click(() => {

    })


} 

const header = document.querySelector('.header');
window.addEventListener('scroll', () => {
    if(scrollY > 80) {
        //header.style.position = 'fixed';
        //header.style.background = '#fff';
        header.setAttribute("style", "position:fixed; background-color: #fff; height: 60px; transform: translate(25%,-100%);")
    } else {
       //header.style.position = 'relative';
        //header.style.background = '';
        //header.style.heigth = '140px';
        header.removeAttribute("style", "position:fixed; background-color: #fff; height: 60px; transform: translate(25%,-100%);")
    }

}) */




const feedbackForm = document.querySelectorAll('#feedback-form');
const sendFrom = document.querySelectorAll('#sendFrom')[0];




sendFrom.addEventListener('click', (event) => {
    event.preventDefault();

    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const message = document.getElementById('message');

    const alertName = document.createElement('p');
    const alertMessage = document.createElement('p');
    const alertEmail = document.createElement('p');

    const modalHtml = `<div id="modal">
<div class="overlay">
    <div class="content">
        <div class="modal_title">Form has been sent!</div>
        <div class="modal_text">We will contact you soon...
        <p> <span>Your name:</span> ${name.value}</p>
        <p> <span>Your email:</span> ${email.value}</p>
        <p> <span>Message:</span> ${message.value}</p>
        </div>
        <button class="modal_btn">Ok</button>
    </div>
</div>
</div>`;

    const emailReqepx = new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g);
    
    if(!name.value.length || name.value.length <3) { 
        name.nextSibling ? name.nextSibling.remove() : '';
        alertName.classList = 'alert-message';
        alertName.innerHTML = 'Name is too short...';
        //name.classList = 'not-valid';
        name.style.border = '1px solid #d14343';
        name.after(alertName);
    } else {
        alertName.classList = '';
        name.style.border = 'none';
        name.nextSibling ? name.nextSibling.remove() : '';
    }
    

    if(!message.value.length || message.value.length <3) { 
        message.nextSibling ? message.nextSibling.remove() : '';
        alertMessage.classList = 'alert-message';
        alertMessage.innerHTML = 'Message is too short...';
        //message.classList = 'not-valid';
        message.style.border = '1px solid #d14343';
        message.after(alertMessage);
    } else {
        alertMessage.classList = '';
        message.style.border = 'none';
        message.nextSibling ? message.nextSibling.remove() : '';
    }

    if(!email.value.length) { 
        email.nextSibling ? email.nextSibling.remove() : '';
        alertEmail.classList = 'alert-message';
        alertEmail.innerHTML = 'Fill email...';
        //name.classList = 'not-valid';
        email.style.border = '1px solid #d14343';
        email.after(alertEmail);
        
    } else {
        if(emailReqepx.test(email.value)) {
            alertEmail.classList = '';
            email.style.border = 'none';
            email.nextSibling ? email.nextSibling.remove() : '';    
        } else { 
            email.nextSibling ? email.nextSibling.remove() : '';
            alertEmail.classList = 'alert-message';
            alertEmail.innerHTML = 'Email is not valid, try format: example@mail.com';
            email.style.border = '1px solid #d14343';
            email.after(alertEmail);
        }
    }
    
    if(alertName.classList == '' && alertMessage.classList == '' && alertEmail.classList == '') {
        setTimeout(() => {
            let dom = document.createElement('div');
            dom.innerHTML = modalHtml;
            document.getElementsByTagName('body')[0].appendChild(dom);
            document.querySelector('.modal_btn').addEventListener('click', () => {
                document.getElementsByTagName('body')[0].removeChild(dom);
            })
        }, 1000)
    }
    

    



});

