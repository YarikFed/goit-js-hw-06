const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const formData = new FormData(loginForm);
    const userData = {};
    formData.forEach((value, key) => {
        userData[key] = value;
    })

if (userData.email.trim() === "" || userData.password.trim() === "") {
    alert("Усі поля повинні бути заповнені!");
} else {
    console.log(userData);
    loginForm.reset();
}
});
