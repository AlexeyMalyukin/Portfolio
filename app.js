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

    const emailReqepx = new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g);
    
    if(!name.value.length || name.value.length <3) { 
        name.nextSibling ? name.nextSibling.remove() : '';
        alertName.classList = 'alert-message';
        alertName.innerHTML = 'Name too short...';
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
        alertMessage.innerHTML = 'Message too short...';
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
            console.log('invalid email')
        }
    }




});

