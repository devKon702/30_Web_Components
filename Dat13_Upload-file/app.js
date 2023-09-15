const $ = document.querySelector.bind(document);

$(".click-box").addEventListener("click", function (e) {
    this.querySelector("input").click();
})

$("input").addEventListener("change", function (e) {
    let file = this.files[0];
    if (file.size / 1024 / 1024 > 2) {
        console.log("File không được vượt quá 2MB");
        return;
    }
    if (!["image/png", "image/jpg"].includes(file.type)) {
        console.log("File không thuộc định dạng png, jpg");
        return;
    }
    const img = document.createElement("img");
    img.src = URL.createObjectURL(file);
    $(".click-box").appendChild(img);
})