const products = [];


async function loadData() {
    await fetch('https://fakestoreapi.com/products?limit=20')
        .then(res => res.json())
        .then(data => data.forEach(element => {
            products.push({
                title: element.title,
                price: element.price,
                image: element.image
            })
        }));
    document.querySelector(".container").innerHTML = "";
    products.forEach(item => createCard(item));
}

function createCard({ image, title, price }) {
    const template =
        `<div class="card">
    <div class="card-image">
        <img src="${image}" alt="">
    </div>
    <div class="desc">
        <p class="title">
            ${title}
        </p>
        <p class="price">
            ${price}$
        </p>
    </div>
    <div class="actions">
        <button class="buy">Buy</button>
        <button class="cart">Add to Card</button>
    </div>
    </div>`;
    document.querySelector(".container").insertAdjacentHTML("beforeend", template);
}



window.addEventListener("load", eventHandler);

async function eventHandler() {
    await loadData();
    const debouncedKeydown = debounce(function () {
        let value = this.value.trim().toLowerCase();
        document.querySelector(".container").innerHTML = '';
        products.forEach(item => {
            if (item.title.toLowerCase().includes(value) || item.price.toString().includes(value)) {
                createCard(item);
            };
        });
    }, 1000);
    document.querySelector(".search-bar input").addEventListener("keyup", debouncedKeydown);
    // if using keydown, input.value will not contain that e.key because trigger keydown event then input default event
}

function debounce(fn, delay) {
    let timer;
    return function (...arg) {
        clearTimeout(timer);
        timer = setTimeout(fn.apply(this, arg), delay);
    };
}   