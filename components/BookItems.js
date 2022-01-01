import CartItem from "./CartItem.js";

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
      this.state.wasAdded ? null : document.getElementById('shopping_cart').appendChild(new CartItem(this.state.name, this.state.price, this.state.id))
      this.state.wasAdded = true;
    })
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
        <a href="#">${this.state.name}</a>
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