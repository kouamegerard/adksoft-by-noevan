function emailjs_sender() {
    const YOUR_SERVICE_ID = "service_is5q9br";
    const YOUR_TEMPLATE_ID = "template_snjul5o";

    var templateParams = {
        name: 'James',
        notes: 'Check this out!'
    };
    
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
            
            sender.classList.remove('secondary-color');
            sender.classList.add('customizer-btn');
            sender.removeAttribute('disabled');

            console.log('SUCCESS!', response);

            if (response.status === 200) {
                
                Swal.fire({
                    title: 'Success!',
                    text: 'Merci de nous avoir contacté,\nnous vous revenons le plus tôt possible',
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