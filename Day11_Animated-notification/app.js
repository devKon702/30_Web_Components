const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
window.addEventListener("load", eventHandler);

function eventHandler(e) {
    $("button.success").addEventListener("click", () => { showNotify("success", "Action successfully") });
    $("button.error").addEventListener("click", () => { showNotify("error", "Something went wrong") });
    $("button.warning").addEventListener("click", () => { showNotify("warning", "Please pay attention") });
}

function showNotify(type, message) {
    let item = document.createElement("div");
    item.className = `item ${type}`;
    let icon = document.createElement("i");
    icon.className = type === "success" ? "fa fa-check"
        : type === "error" ? "fa-solid fa-circle-xmark"
            : type === "warning" ? "fa-solid fa-triangle-exclamation" : "";
    item.insertAdjacentElement("afterbegin", icon);
    item.insertAdjacentHTML("beforeend", `<span>${message}</span>`);
    $(".notify-container").insertAdjacentElement("afterbegin", item);
    setTimeout(() => {
        $(".notify-container").removeChild(item);
    }, 5000);
}