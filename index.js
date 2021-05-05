
function validation(email) {
    var errorText = document.getElementById('error-text');
    var email = document.getElementById('email');
    var regx = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if(!regx.test(email.value)) {
        errorText.style.display = "block";
        email.classList.add("invalid-border");
    } else {
        errorText.style.display = "none";
        email.classList.remove("invalid-border");
    }
}