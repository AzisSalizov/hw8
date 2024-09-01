const $loginForm = document.querySelector('#loginForm');
const $emailInput = $loginForm.querySelector('#email');
const $passwordInput = $loginForm.querySelector('#password');

const users = [
    {
        email: "john@doe.com",
        password: "123test"
    },
    {
        email: "mentor@geeks.kg",
        password: "geeks_2020"
    },
    {
        email: "support@geeks.kg",
        password: "qwerty"
    }
];

$loginForm.addEventListener("submit", function(e) {
    e.preventDefault();

    const email = $emailInput.value;
    const password = $passwordInput.value;

    let isAuthenticated = false;


    for (let i = 0; i < users.length; i++) {
        if (users[i].email === email && users[i].password === password) {
            isAuthenticated = true;
            break;
        }
    }

    if (isAuthenticated) {

        document.body.style.backgroundImage = "url('images/welcome.jpg')";
        document.body.style.backgroundSize = 'cover';
        setSuccess($emailInput);
        setSuccess($passwordInput);
    } else {
        document.body.style.backgroundImage = "url('images/denied.jpg')";
        document.body.style.backgroundSize = 'cover';
        setError($emailInput, "Неверный логин или пароль");
        setError($passwordInput, "Неверный логин или пароль");
    }
});

function setError(inputElement, errorText) {
    const $formControl = inputElement.parentElement;
    $formControl.classList.add("error");
    $formControl.querySelector("small").textContent = errorText;
}

function setSuccess(inputElement) {
    const $formControl = inputElement.parentElement;
    $formControl.classList.add("success");
    $formControl.querySelector("small").textContent = '';
}
