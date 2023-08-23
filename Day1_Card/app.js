const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

window.addEventListener("load", function () {
    $$(".card__head > .bx:first-child").forEach(element => {
        element.addEventListener("click", function (e) {
            this.classList.toggle("bxs-heart");
            this.classList.toggle("bx-heart");
            this.style.color = this.style.color == "red" ? "white" : "red";
        })
    });

    $$(".card__head > .bx:last-child").forEach(element => {
        element.addEventListener("click", function (e) {
            const productName = this.parentElement.parentElement.querySelector(".card__infor .card__name").textContent;
            alert(`You've added ${productName} to your cart`);
        })
    })

    $$(".card__buttons button").forEach(element => {
        element.addEventListener("click", function (e) {
            alert(`This feature haven't ready yet`);
        })
    })

})