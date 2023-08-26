const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

window.addEventListener("load", generalHandler);
function generalHandler() {
    const leftArrowTemplate = `<i class='bx bx-chevron-left'></i>`;
    const rightArrowTemplate = `<i class='bx bx-chevron-right'></i>`;
    const wrapperTemplate = `<div class="wrapper">
        <i class='bx bx-chevron-left'></i>
        <div class="wrapper__img left-able">
            <img src="./images/img1.png" alt="">
        </div>
        <i class='bx bx-chevron-right'></i>
    </div>`
    const imgCollection = $$(".container img")
    let imgIndex;
    $$(".container img").forEach((element, index, array) => {
        element.addEventListener("click", function (e) {
            imgIndex = index;
            const imgSrc = this.getAttribute("src");
            document.body.insertAdjacentHTML("beforeend", wrapperTemplate);
            index != 0 && $(".bx-chevron-left").classList.add("show"); // !=0 thì ...
            index < array.length - 1 && $(".bx-chevron-right").classList.add("show");

            $(".wrapper").addEventListener("click", function (e) {
                e.target == this && document.body.removeChild(this);
            })
            $(".bx-chevron-left").addEventListener("click", previousImg);
            $(".bx-chevron-right").addEventListener("click", nextImg);
        })
    });

    function previousImg() {
        const src = imgCollection[--imgIndex].getAttribute("src");
        $(".wrapper__img img").setAttribute("src", src);
        $(".bx-chevron-right").classList.add("show");
        if (imgIndex == 0) {
            this.classList.remove("show");
        }
    }

    function nextImg() {
        const src = imgCollection[++imgIndex].getAttribute("src");
        $(".wrapper__img img").setAttribute("src", src);
        $(".bx-chevron-left").classList.add("show");
        if (imgIndex == imgCollection.length - 1) {
            this.classList.remove("show");
        }
    }
}