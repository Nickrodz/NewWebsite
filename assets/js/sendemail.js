function sendMail() {
    let params = {
        name : document.getElementById("name").value,
        email : document.getElementById("email").value,
        message : document.getElementById("message").value,
    }

    emailjs.send("service_asro51p", "template_mppxq86",params).then(alert("Email Sent!!"));
}