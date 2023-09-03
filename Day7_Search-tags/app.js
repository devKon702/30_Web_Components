const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
let searchValues = [];
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
            if (!searchValues.includes(this.value)) {
                $(".search-items").insertAdjacentHTML("beforeend", newItem);
                searchValues.push(this.value);
            }
            this.value = "";
        }
    });

    $(".bx.remove").addEventListener("click", function (e) {
        if (confirm("Sure to remove all?")) {
            $(".search-items").innerHTML = "";
            searchValues = [];
        }
    });

    $(".search-btn").addEventListener("click", function (e) {
        console.log(searchValues);
    })

}