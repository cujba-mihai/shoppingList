import CartItem from "./CartItem.js";
import { slugify } from "../utils/slugify.js";
import BookPresentation from "./BookPresentation.js";
import booksAvailable from "../state/booksAvailable.js";


export default class BookItems extends HTMLElement {

  constructor(id, name, author, price, imageSrc) {
    super();
    this.shadow = this.attachShadow({ mode: 'open' });
    this.state = {
      name,
      author,
      price,
      imageSrc,
      id,
      wasAdded: false

    };

  }

  connectedCallback() {
    this.render();

    this.shadowRoot.querySelector('#add_item_to_cart').addEventListener('click', () => {
      const getItem = JSON.parse(window.localStorage.getItem('booksInCart'));

      if (this.state.wasAdded || getItem.find(e => e.id === this.state.id)) {
        return;
      } else {


        const newCartItem = {
          ...this.state,
          count: 1,
          price: this.state.price,
          totalPrice: +this.state.price.match(/[^$]\d+/g) || +this.state.price.match(/[^$]/g)
        }


        const cartArray = [...getItem, newCartItem];
        const setItem = () => { return window.localStorage.setItem('booksInCart', JSON.stringify(cartArray)) };
        (!getItem.find(e => e.id === this.state.id)) ? setItem() : null;

        document.getElementById('shopping_cart').appendChild(new CartItem(this.state.name, this.state.price, this.state.id))
      }
      this.state.wasAdded = true;
    })

    this.shadowRoot.querySelector("#book_item_link").addEventListener("click", e => {
      history.pushState({}, this.state.name, `#book/${slugify(this.state.name)}`);


      const bookProps = booksAvailable.find(e => e.id === this.state.id);
      document.getElementById('root').innerHTML = '';
      document.getElementById('root').appendChild(new BookPresentation(bookProps.id, bookProps.imageSrc,
        bookProps.name, bookProps.author, bookProps.price, bookProps.description, bookProps.language,
        bookProps.pages, bookProps.publicationDate, bookProps.publisher, bookProps.rating, bookProps.readingAge));
    });
  }

  render() {
    this.shadow.innerHTML = `
    <style>
    @import '../style.css'
    </style>
    <article class="book-item">
    <div class="book-item-cover">
      <img
        src=${this.state.imageSrc}
        alt="image"
      />
    </div>
    <article class="book-item-info">
    <ul class="book-item-list">
      <li class="book-item-list-name">
        <a title="${this.state.name}" id="book_item_link" >${this.state.name}</a>
      </li>
      <li class="book-item-list-author">${this.state.author}</li>
      <li class="book-item-list-price">${this.state.price}</li>
      <li class="book-item-list-btn"><button id='add_item_to_cart' >Add to cart</button></li>
    </ul>
  </article>

    `
  }
}

customElements.define('book-items', BookItems);