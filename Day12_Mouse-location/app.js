window.addEventListener("load", eventHandler);

function eventHandler(e) {
    const box = document.querySelector(".box");
    box.addEventListener("mousemove", function (e) {
        let width = e.offsetX < 0 ? 0 : e.offsetX;
        let height = e.offsetY < 0 ? 0 : e.offsetY;
        const wrapper = document.querySelector(".wrapper");
        wrapper.style.width = width * 2 + "px";
        wrapper.style.height = height * 2 + "px";
    });
}