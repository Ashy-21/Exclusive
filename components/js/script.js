const headerHTML = `
<header>

  <div class="top">
    <div class="wrapper">
      <div class="top-text">
        <span>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</span>
        <a href="/components/pages/products.html">ShopNow</a>
      </div>
      <div class="language-dropdown">
        <button id="langBtn">
          English
          <img src="/components/icons/short-arrow-down.svg" />
        </button>
        <ul id="langMenu">
          <li>English</li>
          <li>Hindi</li>
          <li>Spanish</li>
        </ul>
      </div>
    </div>
  </div>

  <div class="bottom">
    <div class="wrapper">
      <img src="/components/icons/Logo.svg" class="logo" />
      <ul class="nav-links">
        <li><a href="index.html" id="navHome">Home</a></li>
        <li><a href="#" id="navContact" style="width: 66px;">Contact</a></li>
        <li><a href="#" id="navAbout">About</a></li>
        <li><a href="#" id="navSignup" style="width: 61px;">SignUp</a></li>
      </ul>
      <div class="action">
        <div class="search-box">
          <input type="text" placeholder="What are you looking for?" />
          <img src="/components/icons/search.svg" />
        </div>
        <div class="action-btn">
          <img src="/components/icons/wishlist.svg" id="wishlist" class="icon-btn" />
          <img src="/components/icons/Cart.svg" id="cart" class="icon-btn" style="width: 24px; height: 24px;" />
        </div>
      </div>
    </div>
  </div>
</header>
<hr class="header-border">
`;

const footerHTML = `
<footer>
  <div class="wrapper">

    <div class="footer-col" style="width: 217px;">
      <h2>Exclusive</h2>
      <h3 class="footer-title">Subscribe</h3>
      <span class="footer-subtitle">Get 10% off your first order</span>
      <div class="subscribe-box">
        <input type="email" placeholder="Enter your email" />
        <img src="/components/icons/send.svg" />
      </div>
    </div>

    <div class="footer-col" style="width: 175px;">
      <h3 class="footer-title">Support</h3>
      <a href="https://www.google.com/maps" class="footer-text">111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</a>
      <a href="mailto:exclusive@gmail.com" class="footer-text">exclusive@gmail.com</a>
      <a href="tel:+88015888889999" class="footer-text">+88015-88888-9999</a>
    </div>

    <div class="footer-col" style="width: 123px;">
      <h3 class="footer-title">Account</h3>
      <ul class="footer-links">
        <li>My Account</li>
        <li>Login / Register</li>
        <li>Cart</li>
        <li>Wishlist</li>
        <li>Shop</li>
      </ul>
    </div>

    <div class="footer-col" style="width: 109px;">
      <h3 class="footer-title">Quick Link</h3>
      <ul class="footer-links">
        <li>Privacy Policy</li>
        <li>Terms Of Use</li>
        <li>FAQ</li>
        <li>Contact</li>
      </ul>
    </div>

    <div class="footer-col">
      <h3 class="footer-title">Download App</h3>
      <span class="small">Save $3 with App New User Only</span>
      <div class="app-download">
        <img src="/components/images/Qr-Code.png" alt="QR Code" />
        <div class="store-buttons">
          <img style="height: 30px;" src="/components/images/google-play-1.png" alt="Google Play" />
          <img src="/components/images/apple-appstore-1.png" alt="App Store" />
        </div>
      </div>
      <div class="social-icons">
        <img src="/components/icons/facebook.svg" />
        <img src="/components/icons/twitter.svg" />
        <img src="/components/icons/icon-instagram.svg" />
        <img src="/components/icons/Icon-Linkedin.svg" />
      </div>
    </div>
  </div>
  <div class="footer-bottom">
    <span>© Copyright Rimel 2022. All right reserved</span>
  </div>
</footer>
`;

const products = [
  {
    id: 1,
    name: "Breed Dry Dog Food",
    category: "Pet",
    oldPrice: null,
    price: 100,
    rating: 3,
    reviews: 35,
    image: "/components/images/dog-food.png",
    badge: null,
    colors: []
  },
  {
    id: 2,
    name: "CANON EOS DSLR Camera",
    category: "Camera",
    oldPrice: null,
    price: 360,
    rating: 4,
    reviews: 95,
    image: "/components/images/camera.png",
    badge: null,
    colors: []
  },
  {
    id: 3,
    name: "ASUS FHD Gaming Laptop",
    category: "Computers",
    oldPrice: null,
    price: 700,
    rating: 5,
    reviews: 325,
    image: "/components/images/laptop.png",
    badge: null,
    colors: []
  },
  {
    id: 4,
    name: "Curology Product Set ",
    category: "Fashion",
    oldPrice: null,
    price: 500,
    rating: 4,
    reviews: 145,
    image: "/components/images/facepack.png",
    badge: null,
    colors: []
  },
  {
    id: 5,
    name: "Kids Electric Car",
    category: "Toy",
    oldPrice: null,
    price: 960,
    rating: 5,
    reviews: 65,
    image: "/components/images/car.png",
    badge: "NEW",
    colors: ["#FB1314", "#DB4444"]
  },
  {
    id: 6,
    name: "Jr. Zoom Soccer Cleats",
    category: "Sports",
    oldPrice: null,
    price: 1160,
    rating: 5,
    reviews: 35,
    image: "/components/images/shoes.png",
    badge: null,
    colors: ["#EEFF61", "#DB4444"]
  },
  {
    id: 7,
    name: "GP11 Shooter USB Gamepad",
    category: "Gaming",
    oldPrice: null,
    price: 660,
    rating: 4.5,
    reviews: 55,
    image: "/components/images/gamepad-black.png",
    badge: "NEW",
    colors: ["#000", "#DB4444"]
  },
  {
    id: 8,
    name: "Quilted Satin Jacket",
    category: "Cloths",
    oldPrice: null,
    price: 660,
    rating: 4.5,
    reviews: 55,
    image: "/components/images/jacket.png",
    badge: null,
    colors: ["#184A48", "#DB4444"]
  },
  {
    id: 9,
    name: "HAVIT HV-G92 Gamepad",
    category: "Gaming",
    oldPrice: 160,
    price: 120,
    rating: 5,
    reviews: 88,
    image: "/components/images/gamepad-red.png",
    badge: "-40%",
    colors: []
  },
  {
    id: 10,
    name: "AK-900 Wired Keyboard",
    category: "Gaming",
    oldPrice: 1160,
    price: 960,
    rating: 4,
    reviews: 75,
    image: "/components/images/keyboard.png",
    badge: "-35%",
    colors: []
  },
  {
    id: 11,
    name: "IPS LCD Gaming Monitor",
    category: "Gaming",
    oldPrice: 400,
    price: 370,
    rating: 5,
    reviews: 99,
    image: "/components/images/monitor.png",
    badge: "-30%",
    colors: []
  },
  {
    id: 12,
    name: "RGB liquid CPU Cooler",
    category: "Gaming",
    oldPrice: 170,
    price: 160,
    rating: 4.5,
    reviews: 65,
    image: "/components/images/gpu.png",
    badge: null,
    colors: []
  },
  {
    id: 13,
    name: "Breed Dry Dog Food",
    category: "Pet",
    oldPrice: null,
    price: 100,
    rating: 3,
    reviews: 35,
    image: "/components/images/dog-food.png",
    badge: null,
    colors: []
  },
  {
    id: 14,
    name: "CANON EOS DSLR Camera",
    category: "Camera",
    oldPrice: null,
    price: 360,
    rating: 4,
    reviews: 95,
    image: "/components/images/camera.png",
    badge: null,
    colors: []
  },
  {
    id: 15,
    name: "ASUS FHD Gaming Laptop",
    category: "Computers",
    oldPrice: null,
    price: 700,
    rating: 5,
    reviews: 325,
    image: "/components/images/laptop.png",
    badge: null,
    colors: []
  },
  {
    id: 16,
    name: "Curology Product Set ",
    category: "Fashion",
    oldPrice: null,
    price: 500,
    rating: 4,
    reviews: 145,
    image: "/components/images/facepack.png",
    badge: null,
    colors: []
  },
  {
    id: 17,
    name: "Kids Electric Car",
    category: "Toy",
    oldPrice: null,
    price: 960,
    rating: 5,
    reviews: 65,
    image: "/components/images/car.png",
    badge: "NEW",
    colors: ["#FB1314", "#DB4444"]
  },
  {
    id: 18,
    name: "Jr. Zoom Soccer Cleats",
    category: "Sports",
    oldPrice: null,
    price: 1160,
    rating: 5,
    reviews: 35,
    image: "/components/images/shoes.png",
    badge: null,
    colors: ["#EEFF61", "#DB4444"]
  },
  {
    id: 19,
    name: "GP11 Shooter USB Gamepad",
    category: "Gaming",
    oldPrice: null,
    price: 660,
    rating: 4.5,
    reviews: 55,
    image: "/components/images/gamepad-black.png",
    badge: "NEW",
    colors: ["#000", "#DB4444"]
  },
  {
    id: 20,
    name: "Quilted Satin Jacket",
    category: "Cloths",
    oldPrice: null,
    price: 660,
    rating: 4.5,
    reviews: 55,
    image: "/components/images/jacket.png",
    badge: null,
    colors: ["#184A48", "#DB4444"]
  },
];

function renderStars(rating) {
  let stars = "";
  for (let i = 1; i <= 5; i++) {
    if (rating >= i) {
      stars += `<img src="/components/icons/star-full.svg">`;
    } else if (rating >= i - 0.5) {
      stars += `<img src="/components/icons/star-half-filled.svg">`;
    } else {
      stars += `<img src="/components/icons/star-empty.svg">`;
    }
  }
  return stars;
}

function createProductCard(product) {
  return `
    <div class="product-card">
      <div class="product-image">
        ${
          product.badge
            ? `<span class="badge ${product.badge.includes('%') ? 'discount' : ''}">
                ${product.badge}
              </span>`
            : ""
        }
        <img src="${product.image}">
        <div class="icon wishlist">
          <img src="/components/icons/wishlist.svg" style="width: 16px; height: 14px;" />
        </div>
        <div class="icon view" onclick="viewProduct(${product.id})">
          <img src="/components/icons/Quick-View.svg">
        </div>
        <div class="add-cart" onclick="addToCart('${product.name}')">
          Add To Cart
        </div>
      </div>
      <div class="product-name">${product.name}</div>
      <div class="worth ${product.oldPrice ? 'has-old' : 'no-old'}">
        <div class="price">
          $${product.price}
          ${product.oldPrice ? `<span class="old-price">$${product.oldPrice}</span>` : ""}
        </div>
        <div class="rating">
          ${renderStars(product.rating)} (${product.reviews})
        </div>
      </div>
      ${
        product.colors.length
          ? `<div class="colors">
              ${product.colors.map(
                  (c, i) =>
                    `<span class="color-dot ${i === 0 ? "selected" : ""}" style="--dot-color:${c}"></span>`
                ).join("")}
            </div>`
          : ""
      }
    </div>
  `;
}

document.addEventListener("DOMContentLoaded", () => {
  
  const headerContainer = document.getElementById("siteHeader");
  if (headerContainer) headerContainer.innerHTML = headerHTML;

  const footerContainer = document.getElementById("siteFooter");
  if (footerContainer) footerContainer.innerHTML = footerHTML;

  if (window.location.pathname.endsWith("product.html")) {
    const actionBox = document.querySelector("header .action-btn");

    if (actionBox && !document.getElementById("profile")) {
      const profileIcon = document.createElement("img");
      profileIcon.src = "/components/icons/user.svg";
      profileIcon.id = "profile";
      profileIcon.className = "icon-btn profile-btn";

      actionBox.appendChild(profileIcon);
    }
  }

  const breadcrumb = document.getElementById("breadcrumb");
  const path = window.location.pathname;

  if (breadcrumb && path.endsWith("products.html")) {
    breadcrumb.innerHTML = `
      <div class="breadcrumb">
        <a href="/index.html">Home</a>
        <span>/</span>
        <span class="active">Products</span>
      </div>
    `;
  }

  if (breadcrumb && path.endsWith("product.html")) {
    const params = new URLSearchParams(window.location.search);
    const id = Number(params.get("id"));
    const product = products.find(p => p.id === id);

    if (product) {
      breadcrumb.innerHTML = `
        <div class="breadcrumb">
          <a href="/index.html">Home</a>
          <span>/</span>
          <span>${product.category}</span>
          <span>/</span>
          <span class="active">${product.name}</span>
        </div>
      `;
    }
  }

  const btn = document.getElementById("langBtn");
  const menu = document.getElementById("langMenu");

  if (btn && menu) {
    btn.addEventListener("click", () => {
      menu.style.display = menu.style.display === "block" ? "none" : "block";
    });

    menu.querySelectorAll("li").forEach(item => {
      item.addEventListener("click", () => {
        btn.innerHTML = `
          ${item.textContent}
          <img src="/components/icons/short-arrow-down.svg" />
        `;
        menu.style.display = "none";
      });
    });

    document.addEventListener("click", e => {
      if (!e.target.closest(".language-dropdown")) {
        menu.style.display = "none";
      }
    });
  }

  const navHome = document.getElementById("navHome");
  const navContact = document.getElementById("navContact");
  const navAbout = document.getElementById("navAbout");
  const navSignup = document.getElementById("navSignup");

  if (
    navHome &&
    (path.endsWith("index.html") ||
      path.endsWith("products.html") ||
      path === "/" ||
      path === "")
  ) {
    navHome.classList.add("active");
  }

  if (navHome) {
    navHome.addEventListener("click", e => {
      e.preventDefault();
      window.location.href = "/index.html";
    });
  }

  if (navContact) navContact.onclick = e => (e.preventDefault(), alert("Clicked Contact"));
  if (navAbout) navAbout.onclick = e => (e.preventDefault(), alert("Clicked About"));
  if (navSignup) navSignup.onclick = e => (e.preventDefault(), alert("Clicked Sign Up"));

  const wishlist = document.getElementById("wishlist");
  const cart = document.getElementById("cart");

  if (wishlist) wishlist.onclick = () => alert("Clicked Wishlist");
  if (cart) cart.onclick = () => alert("Clicked Cart");


  const categoryCards = document.querySelectorAll(".category-card");

  categoryCards.forEach(card => {
    card.addEventListener("click", () => {
      const categoryName = card.dataset.name;

      alert(`Clicked: ${categoryName}`);

      const filteredProducts = products.filter(
        product => product.category === categoryName
      );

      if (filteredProducts.length === 0) {
        console.log(`No products available under ${categoryName}`);
      } else {
        console.log(`Products under ${categoryName}:`, filteredProducts);
      }
    });
  });

  const homeGrid = document.getElementById("homeProducts");
  const allGrid = document.getElementById("allProducts");

  if (homeGrid) {
    products.slice(0, 8).forEach(p => (homeGrid.innerHTML += createProductCard(p)));
  }

  if (allGrid) {
    products.forEach(p => (allGrid.innerHTML += createProductCard(p)));
  }

  const detail = document.getElementById("productDetail");
  if (detail) {
    const id = Number(new URLSearchParams(window.location.search).get("id"));
    const product = products.find(p => p.id === id);
    if (product) {
      detail.innerHTML = `
        <div class="product-detail-layout">

          <div class="product-detail-image">
            <img src="${product.image}">
          </div>

          <div class="product-detail-info">
            <h1>${product.name}</h1>
            <div class="rating">
              ${renderStars(product.rating)}
              <span style="margin: 0 16px;">(${product.reviews} Reviews)</span>
              <span class="green">In Stock</span>
            </div>
            <div class="price">
              ${product.oldPrice ? `<span class="old-price">$${product.oldPrice}</span>` : ""}
              $${product.price}
            </div>
            <p>PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive.</p>
            <hr class="product-detail-border">
            <div class="product-detail-color">
              <span class="text-detail-color">Colours:</span>
              ${
                product.colors.length
                  ? `<div class="colors">
                      ${product.colors
                        .map(
                          (c, i) =>
                            `<span class="color-dot ${i === 0 ? "selected" : ""}" style="--dot-color:${c}"></span>`
                        )
                        .join("")}
                    </div>`
                  : ""
              }
            </div>
            <div class="delivery-box">
              <div class="delivery-box-item" style="border-bottom: 1px solid #808080;">
                <img src="/components/icons/icon-delivery-dark.svg" />
                <div class="delivery-box-text">
                  <span class="delivery-text1">Free Delivery</span>
                  <a href="#" class="delivery-link">Enter your postal code for Delivery Availability</a>
                </div>
              </div>

              <div class="delivery-box-item">
                <img src="/components/icons/Icon-return.svg" />
                <div class="delivery-box-text">
                  <span class="delivery-text1">Return Delivery</span>
                  <span class="delivery-text">Free 30 Days Delivery Returns. <a href="#" class="delivery-link">Details</a></span>
                </div>
              </div>
            </div>
          </div>

        </div>
      `;
    }
  }
});

const related = document.getElementById("relatedProducts");

if (related) {
  related.innerHTML = `
    <div class="category-label" style="margin-bottom: 20px;">
      <span class="bar"></span>
      <span class="label-text">Related Item</span>
    </div>
    <div class="related-grid">
      ${products
        .filter(p => p.id >= 9 && p.id <= 12)
        .map(p => createProductCard(p))
        .join("")}
    </div>
  `;
}

function addToCart(name) {
  alert(name + " added to cart");
}

function viewProduct(id) {
  window.location.href = "/components/pages/product.html?id=" + id;
}
