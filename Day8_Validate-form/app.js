const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

window.addEventListener("load", eventHandler);

function eventHandler(e) {
    $("form").addEventListener("submit", function (e) {
        e.preventDefault();
        const username = this.elements["username"].value;
        const email = this.elements["email"].value;
        const password = this.elements["password"].value;
        const confirmPass = this.elements["confirm"].value;

        setValidate(this.elements["confirm"], password === confirmPass, "Confirm wrong password");
        setValidate(this.elements["password"], !password.match(/\s/g), "Password not containt space");
        setValidate(this.elements["username"], !username.match(/\s/g), "Username not containt space");
    })
}

function setValidate(node, valid, error) {
    if (!valid) {
        node.classList.add("invalid");
        node.nextElementSibling.textContent = error;
        node.focus();
    }
    else {
        node.classList.remove("invalid");
        node.nextElementSibling.textContent = "";
    }
}
