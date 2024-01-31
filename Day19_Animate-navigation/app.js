window.addEventListener("load", loadHandler);
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
function loadHandler() {
  const navItem = $$(".navigation li");
  let checkedItem = $(".navigation li.active");
  const partition = $(".partition");
  navItem.forEach((element, index) => {
    element.addEventListener("click", (event) => {
      if (element !== checkedItem) {
        checkedItem.classList.remove("active");
        element.classList.add("active");
        checkedItem = element;
        partition.style.transform = `translateX(${index * 70}px)`;
      }
    });
  });
}
