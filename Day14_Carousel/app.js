const carouselObject = {
    index: 0,
    mainImg: document.querySelector(".carousel-image img"),
    imgList: document.querySelectorAll(".image-list li img"),

    next: function () {
        this.imgList[this.index].parentElement.classList.remove("selected");
        this.index = (this.index + 1) >= this.imgList.length ? 0 : this.index + 1;
        this.imgList[this.index].parentElement.classList.add("selected");
        this.mainImg.src = this.imgList[this.index].getAttribute("src");
    },
    previous: function () {
        this.imgList[this.index].parentElement.classList.remove("selected");
        this.index = (this.index - 1) < 0 ? this.imgList.length - 1 : this.index - 1;
        this.imgList[this.index].parentElement.classList.add("selected");
        this.mainImg.src = this.imgList[this.index].getAttribute("src");
    },
    select: function (selectedIndex) {
        this.imgList[this.index].parentElement.classList.remove("selected");
        this.mainImg.src = this.imgList[selectedIndex].getAttribute("src");
        this.index = selectedIndex;
        this.imgList[this.index].parentElement.classList.add("selected");
    }
}

window.addEventListener("load", eventHandler);

function eventHandler() {
    document.querySelector(".bx-chevron-left").onclick = carouselObject.previous.bind(carouselObject);
    document.querySelector(".bx-chevron-right").onclick = carouselObject.next.bind(carouselObject);
    carouselObject.imgList.forEach((element, index) => {
        element.addEventListener("click", function (e) {
            carouselObject.select.call(carouselObject, index);
        })
    });
}

