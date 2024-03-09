const objects = [
  {
    id: 1,
    name: "Project 01.",
    date: "2035",
    city: "Madrid",
    size: "mural painting 500m x 500m",
    price: 360 + "$",
    url: "https://static.wixstatic.com/media/27af89_d2a79a4196ce47b38337a9f1538ba9ed~mv2_d_4418_2945_s_4_2.jpeg",
    shippingFee: 30 + "$",
  },
  {
    id: 2,
    name: "Project 02.",
    date: "2035",
    city: "New York",
    size: "mural painting 1000m x 200m",
    price: 500 + "$",
    url: "https://static.wixstatic.com/media/27af89_c1f38c39fb7c458c87e3ce983585b845~mv2_d_4272_2848_s_4_2.jpeg",
    shippingFee: 25 + "$",
  },
  {
    id: 3,
    name: "Project 03.",
    date: "2035",
    city: "Paris",
    size: "mural painting 500m x 500m",
    price: 775 + "$",
    url: "https://static.wixstatic.com/media/27af89_a1bf2be633bb4d6ab6e0757361726383~mv2_d_1801_1408_s_2.jpg",
    other:
      "https://static.wixstatic.com/media/27af89_9d5f6632688c49d299b404ca67bc26bd~mv2_d_3072_2304_s_2.jpg",
    shippingFee: 35 + "$",
  },
  {
    id: 4,
    name: "Project 04.",
    date: "2035",
    city: "Turin",
    size: " mural painting 900m x 500m",
    price: 1300 + "$",
    url: "https://static.wixstatic.com/media/27af89_9baf02741f5d4ecd844b9906cd9fd746~mv2_d_3089_2048_s_2.jpg",
    shippingFee: 20 + "$",
  },
  {
    id: 5,
    name: "Project 05.",
    date: "2035",
    city: "New York",
    size: "mural painting 900m x 500m",
    price: 2000 + "$",
    url: "https://static.wixstatic.com/media/27af89_a37a7062a810408591901e62bec817f5~mv2_d_3000_2123_s_2.jpg",
    shippingFee: 40 + "$",
  },
  {
    id: 6,
    name: "Project 06.",
    date: "2035",
    city: "Milano",
    size: "mural painting 500m x 500m",
    price: 430 + "$",
    url: "https://static.wixstatic.com/media/ad51fdddf71844458520f788bb999350.jpg",
    shippingFee: 15 + "$",
  },
  {
    id: 7,
    name: "Project 07.",
    date: "2035",
    city: "Zurich",
    size: "mural painting 500m x 500m",
    price: 980 + "$",
    url: "https://static.wixstatic.com/media/27af89_d1ddd2a95e5345c9b8854b0136b9e5c9~mv2_d_6000_4000_s_4_2.jpeg",
    shippingFee: 25 + "$",
  },
  {
    id: 8,
    name: "Project 08.",
    date: "2035",
    city: "Fienze",
    size: "mural painting 500m x 500m",
    price: 600 + "$",
    url: "https://static.wixstatic.com/media/27af89_c5c48ed711ae4f918aae71541e0bc462~mv2_d_3089_2048_s_2.jpg",
    shippingFee: 30 + "$",
  },
  {
    id: 9,
    name: "Project 09.",
    date: "2035",
    city: "Amsterdam",
    size: "mural painting 700m x 500m",
    price: 300 + "$",
    url: "https://static.wixstatic.com/media/5a2b73cfdfcafcbe47c3e15be8fbba16.jpg",
    shippingFee: 35 + "$",
  },
];

const projectsText = document.querySelector(".projects");
const aboutText = document.querySelector(".about");
const contactsText = document.querySelector(".contact");
const container = document.querySelector(".second_page");
const container4 = document.querySelector(".fourth_page");
const container6 = document.querySelector(".sixth_page");
const arrow = document.querySelector(".arrow");

const scrollToSecondPage = () => {
  if (container) {
    container.scrollIntoView({ behavior: "smooth" });
  }
};

if (arrow) {
  arrow.addEventListener("click", scrollToSecondPage);
}

const scrollToFourthPage = () => {
  if (container4) {
    container4.scrollIntoView({ behavior: "smooth" });
  }
};

const scrollToSixthPage = () => {
  if (container6) {
    container6.scrollIntoView({ behavior: "smooth" });
  }
};

if (projectsText) {
  projectsText.addEventListener("click", scrollToSecondPage);
}

if (aboutText) {
  aboutText.addEventListener("click", scrollToFourthPage);
}

if (contactsText) {
  contactsText.addEventListener("click", scrollToSixthPage);
}
const inputs = document.querySelectorAll(".inp");
console.log(inputs);
if (inputs.length !== 0) {
  const handleInput = (input) => {
    if (input.value.trim()) {
      input.classList.remove("empty");
    } else {
      input.classList.add("empty");
    }
  };

  inputs.forEach((input) => {
    input.addEventListener("focus", () => {
      if (input.value.trim() === "") {
        input.classList.add("empty");
      }
    });

    input.addEventListener("input", () => {
      handleInput(input);
    });
  });
}

const textarea = document.querySelectorAll(".txtarea");

if (textarea.length !== 0) {
  const handleTextarea = (textarea) => {
    if (!textarea.value.trim()) {
      textarea.classList.add("empty");
    } else {
      textarea.classList.remove("empty");
    }
  };

  textarea.forEach((textarea) => {
    textarea.addEventListener("blur", () => {
      handleTextarea(textarea);
    });
  });
}
let i = 1;
let j = 1;
const numberOfPhotosPerRow = 3;

if (inputs.length !== 0) {
  objects.forEach((picture, index) => {
    if (index % numberOfPhotosPerRow === 0) {
      const photoFlex = document.createElement("div");
      photoFlex.setAttribute("class", "flexcont_pic" + j);
      container.appendChild(photoFlex);
      j++;
    }

    const photoDiv = document.createElement("div");
    photoDiv.setAttribute("class", "pic" + i + " photo");
    photoDiv.style.backgroundImage = `url(${picture.url})`;

    const overlayDiv = document.createElement("div");
    overlayDiv.setAttribute("class", "overlay" + i + " ov");
    overlayDiv.innerHTML = picture.name;

    photoDiv.appendChild(overlayDiv);

    const flexIndex = Math.ceil(i / numberOfPhotosPerRow);
    const flexContainer = document.querySelector(".flexcont_pic" + flexIndex);
    if (flexContainer) {
      flexContainer.appendChild(photoDiv);
    }

    photoDiv.addEventListener(
      "click",
      () => (window.location = `product.html#${picture.id}`)
    );

    i++;
  });
}
const idFromHref = window.location.hash.split("#")[1];
console.log(idFromHref);

const displayProduct = (id) => {
  const item = objects.find((obj) => obj.id === parseInt(id));

  if (!item) {
    console.error(`Item with ID ${id} not found.`);
    return;
  }

  const title = document.getElementById("title_number");
  if (title) {
    title.innerHTML += item.name;
  } else {
    console.error("Element with ID 'title_number' not found.");
  }

  const date = document.getElementById("date");
  if (date) {
    date.innerHTML += item.date;
  } else {
    console.error("Element with ID 'date' not found.");
  }

  const city = document.getElementById("city");
  if (city) {
    city.innerHTML += item.city;
  } else {
    console.error("Element with ID 'city' not found.");
  }

  const size = document.getElementById("size");
  if (size) {
    size.innerHTML += item.size;
  } else {
    console.error("Element with ID 'size' not found.");
  }

  const main = document.getElementById("main");
  if (main) {
    main.style.backgroundImage = `url(${item.url})`;
  } else {
    console.error("Element with ID 'main' not found.");
  }

  const main2 = document.getElementById("main2");
  const photoDiv2 = document.getElementById("photodiv2");
  if (main2 && photoDiv2) {
    if (item.hasOwnProperty("other")) {
      const newPhotoUrl =
        "https://static.wixstatic.com/media/27af89_9d5f6632688c49d299b404ca67bc26bd~mv2_d_3072_2304_s_2.jpg/v1/fill/w_912,h_662,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/27af89_9d5f6632688c49d299b404ca67bc26bd~mv2_d_3072_2304_s_2.jpg";
      main2.style.backgroundImage = `url(${newPhotoUrl})`;
    } else {
      main2.style.display = "none";
      photoDiv2.style.display = "none";
    }
  } else {
    console.error("One or more elements ('main2' or 'photodiv2') not found.");
  }
};

const first_page1 = document.getElementById("first_page1");
if (first_page1) {
  displayProduct(idFromHref);
}

const addToCart = (id) => {
  const storage = JSON.parse(localStorage.getItem("cart"));
  console.log(storage);
  const object = objects.find((item) => item.id === parseInt(id));

  if (!storage) {
    object.count = 1;
    localStorage.setItem("cart", JSON.stringify([object]));
    console.log(JSON.parse(localStorage.getItem("cart")));
  } else {
    const existingItem = storage.find((item) => item.id === parseInt(id));
    if (existingItem) {
      existingItem.count = existingItem.count + 1;
      localStorage.setItem("cart", JSON.stringify([...storage]));
    } else {
      object.count = 1;
      localStorage.setItem("cart", JSON.stringify([...storage, object]));
      console.log(JSON.parse(localStorage.getItem("cart")));
    }
  }

  window.location = `cart.html`;
};

const addToCartButton = document.getElementById("butt");

if (addToCartButton) {
  addToCartButton.addEventListener("click", function () {
    addToCart(idFromHref);
  });
}

const mainCont = document.getElementById("mainCont");
const cartHolder = document.getElementById("cartHolder");
const subtotal = document.getElementById("subtotal");

function displayCartProducts() {
  const storage = JSON.parse(localStorage.getItem("cart"));
  console.log(storage);

  storage.forEach((item) => {
    console.log(item);

    const itemContainer = document.createElement("div");
    itemContainer.setAttribute("id", "flex_carItem");

    const motherDiv = document.createElement("div");
    motherDiv.setAttribute("class", "motherDiv");

    const imageDiv = document.createElement("div");
    imageDiv.setAttribute("id", "imageDiv");
    imageDiv.style.backgroundImage = `url(${item.url})`;

    const description = document.createElement("div");
    description.setAttribute("class", "description");

    const name = document.createElement("div");
    name.setAttribute("id", "name");
    name.innerHTML = "Name<span class='asterisk'>*</span>" + item.name;

    const price = document.createElement("div");
    price.setAttribute("id", "price");
    price.innerHTML = "Price<span class='asterisk'>*</span>" + item.price;

    const size = document.createElement("div");
    size.setAttribute("id", "size");
    size.innerHTML = "Size<span class='asterisk'>*</span>" + item.size;

    const count = document.createElement("div");
    count.setAttribute("id", "count");
    count.innerHTML = "Quantity<span class='asterisk'>*</span>";

    const incDecbuttons = document.createElement("div");

    const decrementButton = document.createElement("button");
    decrementButton.setAttribute("id", "decrement");
    decrementButton.textContent = "-";

    const quantityDiv = document.createElement("div");
    quantityDiv.setAttribute("id", "quantity");
    quantityDiv.innerHTML = item.count;

    const incrementButton = document.createElement("button");
    incrementButton.setAttribute("id", "increment");
    incrementButton.textContent = "+";

    incDecbuttons.appendChild(decrementButton);
    incDecbuttons.appendChild(quantityDiv);
    incDecbuttons.appendChild(incrementButton);

    const buttonHolder = document.createElement("div");
    buttonHolder.id = "just";
    buttonHolder.style.display = "flex";

    incrementButton.addEventListener("click", () => {
      item.count++;
      quantityDiv.textContent = item.count;
      updateLocalStorage();
      updateCartTotals();
    });

    decrementButton.addEventListener("click", () => {
      if (item.count > 1) {
        item.count--;
        quantityDiv.textContent = item.count;
        updateLocalStorage();
        updateCartTotals();
      }
    });

    function updateLocalStorage() {
      const cart = JSON.parse(localStorage.getItem("cart"));
      const index = cart.findIndex((cartItem) => cartItem.id === item.id);
      cart[index] = item;
      localStorage.setItem("cart", JSON.stringify(cart));
    }

    function updateCartTotals() {
      const storage = JSON.parse(localStorage.getItem("cart"));
      let totalPrice = 0;
      let totalShipping = 0;

      storage.forEach((item) => {
        totalPrice += parseFloat(item.count) * parseFloat(item.price);
        totalShipping += parseFloat(item.count) * parseFloat(item.shippingFee);
      });

      const subtotal = document.getElementById("subtotal");
      const shipping = document.getElementById("shipping");
      const total = document.getElementById("total");

      subtotal.innerHTML = `Subtotal<span class="asterisk">*</span>: $${totalPrice.toFixed(
        2
      )}`;

      shipping.innerHTML = `Shipping<span class="asterisk">*</span>: $${totalShipping.toFixed(
        2
      )}`;

      const totalItems = totalPrice + totalShipping;

      total.innerHTML = `Total<span class="asterisk">*</span>: $${totalItems.toFixed(
        2
      )}`;
    }

    updateCartTotals();

    buttonHolder.appendChild(incDecbuttons);
    count.appendChild(incDecbuttons);
    description.appendChild(count);
    description.appendChild(size);
    description.appendChild(price);
    description.appendChild(name);

    motherDiv.appendChild(imageDiv);
    itemContainer.appendChild(description);
    itemContainer.appendChild(motherDiv);

    if (mainCont) {
      cartHolder.appendChild(itemContainer);
    }
  });
}

if (mainCont) {
  displayCartProducts();
}

const containerCont = document.querySelector(".container1");
if (containerCont) {
  const previous = document.getElementById("previous");

  previous.addEventListener("click", () => {
    let idFromHref = window.location.hash.split("#")[1];

    if (idFromHref) {
      idFromHref = parseInt(idFromHref);
      if (!isNaN(idFromHref)) {
        if (idFromHref > 1) {
          window.location.hash = `#${idFromHref - 1}`;
        } else {
          window.location.hash = `#9`;
        }
        resetPage();
      }
    }
  });
  const next = document.getElementById("next");
  next.addEventListener("click", () => {
    let idFromHref = window.location.hash.split("#")[1];

    if (idFromHref) {
      idFromHref = parseInt(idFromHref);
      if (!isNaN(idFromHref)) {
        if (idFromHref < 9) {
          window.location.hash = `#${idFromHref + 1}`;
        } else {
          window.location.hash = `#1`;
        }
        resetPage();
      }
    }
  });

  const logo = document.querySelector(".logo1");
  logo.addEventListener("click", () => {
    window.location.href = `index.html`;
  });
}

function resetPage() {
  location.reload();
}
const projectsBtn = document.querySelector(".projects");
const aboutBtn = document.querySelector(".about");
const contactBtn = document.querySelector(".contact");

if (containerCont) {
  projectsBtn.addEventListener("click", () => {
    window.location.href = `jsexam.html#second_page`;
  });
  aboutBtn.addEventListener("click", () => {
    window.location.href = `jsexam.html#fourth_page`;
  });
  contactBtn.addEventListener("click", () => {
    window.location.href = `jsexam.html#sixth_page`;
  });
}
