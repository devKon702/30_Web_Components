window.addEventListener("load", eventHandler);


function eventHandler() {
    usingObserver();
}

function usingObserver() {
    const observer = new IntersectionObserver(callback, { threshold: 0.2 });
    observer.observe(document.querySelector(".part1"));
    observer.observe(document.querySelector(".part2"));
    observer.observe(document.querySelector(".part3"));
    function callback(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("appear");
            }
            else {
                entry.target.classList.remove("appear");
            }
        });
    }

}