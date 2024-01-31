window.addEventListener("load", eventHandler);
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

function eventHandler(e) {
  $(".file-container").addEventListener(
    "dragenter",
    function (e) {
      e.preventDefault();
      e.stopPropagation();
      this.classList.add("active");
    },
    false
  );
  $(".file-container").addEventListener("dragleave", function (e) {
    e.preventDefault();
    e.stopPropagation();
    this.classList.remove("active");
  });
  $(".file-container").addEventListener("dragover", function (e) {
    e.preventDefault();
    e.stopPropagation();
    this.classList.add("active");
  });

  $(".file-container").addEventListener("drop", function (e) {
    e.preventDefault();
    e.stopPropagation();
    const file = e.dataTransfer.files[0];
    const url = URL.createObjectURL(file);
    $(".image-review img").src = url;
  });

  $$(".card-list .card").forEach((element) => {
    element.addEventListener("dragenter", function (e) {
      e.preventDefault();
      e.stopPropagation();
      this.querySelector("img").src = URL.createObjectURL(
        e.dataTransfer.files[0]
      );
    });
    element.addEventListener("dragover", function (e) {
      e.preventDefault();
      e.stopPropagation();
    });
    element.addEventListener("dragleave", function (e) {
      e.preventDefault();
      e.stopPropagation();
      // this.querySelector("img").src = "";
    });
    element.addEventListener("drop", function (e) {
      e.preventDefault();
      e.stopPropagation();
      this.querySelector("img").src = "";
    });
  });
}
