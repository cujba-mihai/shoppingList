import BookItems from "./BookItems.js";
import booksAvailable from "../state/booksAvailable.js";
import calculateTotal from "../state/calculateTotal.js";
import CartItem from "./CartItem.js";


export default class BookPresentation extends HTMLElement {
  constructor(id, imageSrc, title, author, price, description, language, pages, publicationDate, publisher, rating, readingAge) {
    super();
    this.shadow = this.attachShadow({ mode: "open" });
    this.id = id;
    this.imageSrc = imageSrc;
    this.title = title;
    this.author = author;
    this.price = price;

    this.description = description;
    this.language = language;
    this.pages = pages;
    this.publicationDate = publicationDate;
    this.publisher = publisher;
    this.rating = rating;
    this.readingAge = readingAge;
  }

  connectedCallback() {
    this.render();

    this.shadow.querySelector("#button__back").addEventListener("click", e => {
      e.preventDefault();
      history.pushState({}, 'Home', "/shoppingList/")

      document.body.innerHTML = `
      <div id="root">
      <div class="container" id="book-shelf"></div>
      <div class="shopping-cart-table">
        <h2>Your Order</h2>
        <ul class="shopping-header">
          <li>#</li>
          <li>item</li>
          <li>count</li>
          <li>price</li>
          <li>action</li>
        </ul>
        <div class="shopping-conatiner" id="shopping_cart"></div>
        <div class="total">Total: $ <span id="cart-total">100</span></div>
      </div>
    </div>
    `
      const bookShelf = document.getElementById('book-shelf');
      let addBooksOnShelf = () => booksAvailable.map(e => bookShelf.appendChild(new BookItems(e.id, e.name, e.author, e.price, e.imageSrc)))
      addBooksOnShelf();
      calculateTotal();

      const cartItems = JSON.parse(window.localStorage.getItem('booksInCart'));
      const addItemsToCart = () => cartItems.map(e => {
        const cartDOM = document.getElementById('shopping_cart');
        cartDOM.appendChild(new CartItem(e.name, e.price, e.id, e.count))
      })


      addItemsToCart();
    })
  }

  render() {
    this.shadow.innerHTML = `
    <link
    rel="stylesheet"
    href="https://use.fontawesome.com/releases/v5.5.0/css/all.css"
    integrity="sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU"
    crossorigin="anonymous"
  />

  <link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap" rel="stylesheet">
    <style>
      @import "/styles/book.css"
    </style>

    <div id="root">
    <nav class="navigation">
      <ul class="navigation__list">
        <li
          class="navigation__element"
          style="
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
          "
        >
          <a id="button__back" class="scroll-up">
            <span class="left-bar"></span>
            <span class="right-bar"></span>
            <svg width="40" height="40">
              <line class="top" x1="0" y1="0" x2="120" y2="0" />
              <line class="left" x1="0" y1="40" x2="0" y2="-80" />
              <line class="bottom" x1="40" y1="40" x2="-80" y2="40" />
              <line class="right" x1="40" y1="0" x2="40" y2="1200" />
            </svg>
          </a>
          <a href="/" style="margin-left: 1rem">BACK</a>
        </li>
      </ul>
    </nav>

    <main class="book">
      <section class="book__details">
        <aside class="book__image-container">
          <img
            src=${this.imageSrc}
            alt=""
            class="book__image"
          />
        </aside>

        <aside class="book__info-container">
          <h1 class="book__title">
            ${this.title}
          </h1>
          <em class="book__author">
            by <span class="book__author-name">${this.author}</span> (Author)
          </em>

          <div
            class="rating"
            style="margin-top: 0.5rem; margin-bottom: 0.5rem"
          >
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star"></span>
            <span class="fa fa-star"></span>
          </div>
          <hr />
          <main class="pricing" style="margin-top: 2rem">
            <section class="pricing__container">
              <div class="pricing__card pricing__card_isActive">
                <div class="pricing__title">
                  <img src="" alt="" class="pricing__image" />
                  <h5 class="pricing__platform">Kindle</h5>
                </div>

                <div class="pricing__price-container">
                  <p class="pricing__selling-price">${this.price}.00</p>
                </div>
              </div>

              <div class="pricing__card">
                <div class="pricing__title">
                  <img src="" alt="" class="pricing__image" />
                  <h5 class="pricing__platform">Audible</h5>
                </div>

                <div class="pricing__price-container">
                  <p class="pricing__selling-price">$9.49</p>
                </div>
              </div>

              <div class="pricing__card">
                <div class="pricing__title">
                  <img src="" alt="" class="pricing__image" />
                  <h5 class="pricing__platform">Paperback</h5>
                </div>

                <div class="pricing__price-container">
                  <p class="pricing__selling-price">$12.49</p>
                </div>
              </div>
            </section>
          </main>

          <main
            class="summary"
            style="margin-top: 3rem; padding-bottom: 20px"
          >
            <p class="summary__text">
              ${this.description}
            </p>
          </main>

          <hr />

          <main class="additional-info">
            <div class="additional-info__container">
              <div class="additional-info__element">
                <p class="additional-info__title">Print length</p>
                <div
                  class="additional-info__icon"
                  style="background-position: -184px -2px"
                ></div>
                <p class="additional-info__description">${this.pages} pages</p>
              </div>

              <div class="additional-info__element">
                <p class="additional-info__title">Language</p>
                <div
                  class="additional-info__icon"
                  style="background-position: -158px -2px"
                ></div>
                <p class="additional-info__description">${this.language}</p>
              </div>

              <div class="additional-info__element">
                <p class="additional-info__title">Publisher</p>
                <div
                  class="additional-info__icon"
                  style="background-position: -288px -2px"
                ></div>
                <p class="additional-info__description">${this.publisher}</p>
              </div>

              <div class="additional-info__element">
                <p class="additional-info__title">Publication date</p>
                <div
                  class="additional-info__icon"
                  style="background-position: -262px -2px"
                ></div>
                <p class="additional-info__description">${this.publicationDate}</p>
              </div>

              <div class="additional-info__element">
                <p class="additional-info__title">Reading age</p>
                <div
                  class="additional-info__icon"
                  style="background-position: -314px -2px"
                ></div>
                <p class="additional-info__description">${this.readingAge} years</p>
              </div>
            </div>
          </main>
        </aside>
      </section>
    </main>

    <footer>
      <div>
      <span>Cujba Mihai | January, 2022</span>
      </div>
    </footer>
  </div>

    `
  }
}


customElements.define('book-presentation', BookPresentation);
