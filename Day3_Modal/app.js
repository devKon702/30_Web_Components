let modalTemplate = `<div class="modal">
<div class="modal-content">
    <div class="modal-header">
        <span>Modal</span>
        <i class='bx bx-x'></i>
    </div>
    <div class="modal-body">
        <label for="input">Type some thing here:</label>
        <input type="text" id="input">
        <button>Finish</button>
    </div>
</div>
</div>`
const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)
window.addEventListener("load", (function (e) {

}))
function showModal() {
    document.body.insertAdjacentHTML("beforeend", modalTemplate)
    $(".modal").addEventListener("click", function (e) {
        if (e.target == this || e.target == $(".modal .bx-x")) {
            document.body.removeChild($(".modal"))
        }

    })
}