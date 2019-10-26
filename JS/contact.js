function getMensaje(){
    let nombre, email, mensaje;
    nombre= document.getElementById('form_name').value;
    email= document.getElementById('form_email').value;
    mensaje= document.getElementById('form_message').value;
    


    Email.send({
        Host : "smtp.gmail.com",
        Username : "ptoo.49ab@gmail.com",
        Password : "Antjenn19",
        To : 'ptoo.49ab@gmail.com',
        From :email,
        Subject : nombre,
        Body : mensaje
    }).then(
      message => alert(message)
    );}