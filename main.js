const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");

const menuHamIcon = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");

const menuCarritoIcon = document.querySelector(".navbar-shopping-cart");
const shoppingCartContainer = document.querySelector("#shoppingCartContainer");
const productDetailContainer = document.querySelector("#productDetail");
const productDetailCloser = document.querySelector(".product-detail-close");

const cardsContainer = document.querySelector(".cards-container");

menuEmail.addEventListener("click", toggleDesktopMenu);
menuHamIcon.addEventListener("click", toggleMobileMenu);
menuCarritoIcon.addEventListener("click", toggleCarritoAside);
productDetailCloser.addEventListener("click", closeProdDetailAside)

function toggleDesktopMenu() {
    const isAsideClosed = shoppingCartContainer.classList.contains("inactive");
    const isProdDetailClosed = productDetailContainer.classList.contains("inactive");

    if (!isAsideClosed) {
        shoppingCartContainer.classList.add("inactive");
    } if (!isProdDetailClosed) {
        productDetailContainer.classList.add("inactive");
    }

    desktopMenu.classList.toggle("inactive");
}

function toggleMobileMenu() {
    const isAsideClosed = shoppingCartContainer.classList.contains("inactive");
    const isProdDetailClosed = productDetailContainer.classList.contains("inactive");

    if (!isAsideClosed) {
        shoppingCartContainer.classList.add("inactive");
    } if (!isProdDetailClosed) {
        productDetailContainer.classList.add("inactive");
    }

    mobileMenu.classList.toggle("inactive1");
}

function toggleCarritoAside() {
    const ismobileMenuClosed = mobileMenu.classList.contains("inactive1");
    const isDesktopClosed = desktopMenu.classList.contains("inactive");
    const isProdDetailClosed = productDetailContainer.classList.contains("inactive");

    if (!ismobileMenuClosed) {
        mobileMenu.classList.add("inactive1");
    } if (!isDesktopClosed) {
        desktopMenu.classList.add("inactive");
    } if (!isProdDetailClosed) {
        productDetailContainer.classList.add("inactive");
    }

    shoppingCartContainer.classList.toggle("inactive");
}

function openProdDetailAside() {
    const isDesktopClosed = desktopMenu.classList.contains("inactive");
    const isAsideClosed = shoppingCartContainer.classList.contains("inactive");
    const ismobileMenuClosed = mobileMenu.classList.contains("inactive1");

    if (!isDesktopClosed) {
        desktopMenu.classList.add("inactive");
    } if (!isAsideClosed) {
        shoppingCartContainer.classList.add("inactive");
    } if (!ismobileMenuClosed) {
        mobileMenu.classList.add("inactive1");
    }

    productDetailContainer.classList.remove("inactive");
}

function closeProdDetailAside() {
    productDetailContainer.classList.add("inactive");
}

const productList = [];
productList.push({
    name: "Bike",
    price: 120,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});

productList.push({
    name: "Screen",
    price: 420,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});

productList.push({
    name: "Laptop",
    price: 820,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});

productList.push({
    name: "Bike",
    price: 120,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});

productList.push({
    name: "Screen",
    price: 420,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});

productList.push({
    name: "Laptop",
    price: 820,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});

productList.push({
    name: "Bike",
    price: 120,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});

productList.push({
    name: "Screen",
    price: 420,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});

productList.push({
    name: "Laptop",
    price: 820,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});

productList.push({
    name: "Bike",
    price: 120,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});

productList.push({
    name: "Screen",
    price: 420,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});

productList.push({
    name: "Laptop",
    price: 820,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});

function renderProducts(arr) {
    for (product of arr) {
        const productCard = document.createElement("div");
        productCard.classList.add("product-card");
    
        const productImg = document.createElement("img");
        productImg.setAttribute("src", product.image);
        productImg.addEventListener("click", openProdDetailAside);
    
        const productInfo = document.createElement("div");
        productInfo.classList.add("product-info");
    
        const productInfoDiv = document.createElement("div");
    
        const productPrice = document.createElement("p");
        productPrice.innerText = "$" + product.price;
        const productName = document.createElement("p");
        productName.innerText = product.name;
    
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
    
        const productInfoFigure = document.createElement("figure");
        const productImgCart = document.createElement("img");
        productImgCart.setAttribute("src", "proyectoFront/icons/bt_add_to_cart.svg");
    
        productInfoFigure.appendChild(productImgCart);
    
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
    
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
    
        cardsContainer.appendChild(productCard);
    }
};

renderProducts(productList);