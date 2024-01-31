window.addEventListener("load", eventHandler);

function startCouting(node, duration) {
    let goal = Number(node.dataset.value);
    let step = goal / duration;
    let count = 0;
    let timer = setInterval(function () {
        // Tăng dần giá trị
        count += step;
        if (count >= goal) {
            count = goal;
            clearInterval(timer);
        }
        node.querySelector(".number").textContent = Math.round(count);
    }, 1)
}

function eventHandler() {
    // Tiến hành count animation cho các tag có class .counting
    document.querySelectorAll(".counting").forEach(item => {
        startCouting(item, 300);
    })
}