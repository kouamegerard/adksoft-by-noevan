function emailjs_sender(serviceid, templateid, btn_id) {
    // const YOUR_SERVICE_ID = "service_is5q9br";
    // const YOUR_TEMPLATE_ID = "template_snjul5o";
    const YOUR_SERVICE_ID = serviceid;
    const YOUR_TEMPLATE_ID = templateid;
    const BUTTON_ID = btn_id;

    // emailjs.send(YOUR_SERVICE_ID, YOUR_TEMPLATE_ID, templateParams)
    //     .then(function(response) {
    //     console.log('SUCCESS!', response.status, response.text);
    //     }, function(error) {
    //     console.log('FAILED...', error);
    //     }
    // );

    emailjs.sendForm(YOUR_SERVICE_ID, YOUR_TEMPLATE_ID, '#contact-form')
        .then(function(response) {
            document.querySelector("#name").value = "";
            document.querySelector("#prenom").value = "";
            document.querySelector("#email").value = "";
            document.querySelector("#phone").value = "";
            document.querySelector("#message").value = "";
            
            BUTTON_ID.classList.remove('secondary-color');
            BUTTON_ID.classList.add('customizer-btn');
            BUTTON_ID.removeAttribute('disabled');

            console.log('SUCCESS!', response);

            if (response.status === 200) {
                
                Swal.fire({
                    title: 'Envoyé!',
                    text: 'Merci de nous avoir contacté, nous revenons vers vous dans les 48H !',
                    icon: 'success',
                    confirmButtonText: 'Fermer'
                })
                    
            } else {
                
                Swal.fire({
                    title: 'Error!',
                    text: 'OUPS! une erreur est survenue,\nveuillez réessayer plus tard.',
                    icon: 'error',
                    confirmButtonText: 'Fermer'
                })
            }

        }, function(error) {
        console.log('FAILED...', error);
        }
    );
}