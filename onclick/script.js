function submit() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;
    document.getElementById("aero2").style.right = "5%"
    document.getElementById("sent").style.right = "5%"
    document.getElementById("namesent").innerHTML = name
    document.getElementById("emailsent").innerHTML = email
    document.getElementById("messagesent").innerHTML = message
    console.log(name);
    console.log(email);
    console.log(message);
}