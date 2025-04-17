const correctPassword = "16/10/2021";

function checkPassword() {
    const input = document.getElementById("password").value;
    const error = document.getElementById("error-msg");

    if (input.toLowerCase() === correctPassword.toLowerCase()) {
        document.getElementById("password-screen").style.display = "none";
        document.getElementById("content").style.display = "block";
    } else {
        error.textContent = "¡INCORRECTO!";
    }
}
