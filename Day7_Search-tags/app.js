const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
window.addEventListener("load", eventHandler);

function eventHandler(event) {
    $(".search-container").addEventListener("click", function (e) {
        if (e.target.matches(".item span")) {
            e.target.parentElement.parentElement.removeChild(e.target.parentElement)
        }
    })

    $(".search-input").addEventListener("keydown", function (e) {
        if (e.key === "Enter") {
            const newItem =
                `<div class="item">${this.value}
                <span>x</span>
            </div>`;
            $(".search-items").insertAdjacentHTML("beforeend", newItem);
            this.value = "";
        }
    });

    $(".bx.remove").addEventListener("click", function (e) {
        if (confirm("Sure to remove all?")) {
            $(".search-items").innerHTML = "";
        }
    });

}