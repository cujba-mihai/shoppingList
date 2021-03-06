import { setIndex } from "../state/listIndex.js";
import calculateTotal from "../state/calculateTotal.js";

function updateCartItems(id, count, totalPrice) {
  const itemsInCart = JSON.parse(window.localStorage.getItem('booksInCart'));
  const currentItem = itemsInCart.find(e => e.id == id);
  const newState = {
    ...currentItem,
    count,
    totalPrice
  }
  const newArr = [
    ...itemsInCart.filter(e => e.id !== id),
    newState
  ]

  window.localStorage.setItem('booksInCart', JSON.stringify(newArr));
}


function STORAGE_REMOVE_ITEM(id) {
  const itemsInCart = JSON.parse(window.localStorage.getItem('booksInCart'));
  const newState = itemsInCart.filter(e => e.id !== id);

  window.localStorage.setItem('booksInCart', JSON.stringify(newState));
}

export default class CartItem extends HTMLElement {

  constructor(name, price, id, count = 1) {
    super();
    this.shadow = this.attachShadow({ mode: "open" });
    this.state = {
      id,
      name,
      price,
      count,
      totalPrice() {
        const total = this.price.match(/[^$]?\d+/g) * this.count
        return total;
      },
    }

  }

  connectedCallback() {
    this.render();

    if (this.isConnected) {
      this.shadowRoot.querySelector('#increment_count_btn').addEventListener('click', () => this._increase());
      this.shadowRoot.querySelector('#decrement_count_btn').addEventListener('click', () => this._decrease());
      this.shadowRoot.querySelector('#remove_item_btn').addEventListener('click', () => this._remove());
    }

  }

  _increase() {
    this.state.count >= 10 ? this.state.count = 10 : this.state.count += 1
    this.connectedCallback()
    calculateTotal();
    this._showError();

    updateCartItems(this.state.id, this.state.count, this.state.totalPrice());
  }

  _decrease() {
    this.state.count <= 1 ? this.state.count = 1 : this.state.count -= 1;
    this.connectedCallback();
    this._showError();
    calculateTotal();

    updateCartItems(this.state.id, this.state.count, this.state.totalPrice());
  }


  _remove() {
    const bookShelf = document.querySelector('#book-shelf');
    const thisIndex = Object.values(bookShelf.childNodes).find(e => e.state.id === this.state.id);
    thisIndex.state.wasAdded = false;
    this.remove();
    this.render();

    STORAGE_REMOVE_ITEM(this.state.id)
  }

  _showError() {
    const par = document.createElement('p');
    par.innerHTML = this.state.count === 1 ? '?????? Qty cannot be less than 1' : '?????? Qty cannot be higher than 10';
    par.style = "position: absolute;top: 0px;right: -50px;"
    const container = this.shadowRoot.querySelector('#shopping-item-container');

    if (this.state.count <= 1 || this.state.count >= 10) {
      container.appendChild(par);

      setTimeout(() => {
        container ? container.removeChild(par) : null;
      }, 2000)
    }
  }


  disconnectedCallback() {
    this.shadowRoot.querySelector('#increment_count_btn').removeEventListener('click', null);
    this.shadowRoot.querySelector('#decrement_count_btn').removeEventListener('click', null);
    this.shadowRoot.querySelector('#remove_item_btn').removeEventListener('click', null);
  }

  render() {
    document.body.dispatchEvent(setIndex);
    calculateTotal();

    this.shadow.innerHTML =
      `
      <link
      rel="stylesheet"
      href="https://use.fontawesome.com/releases/v5.5.0/css/all.css"
      integrity="sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU"
      crossorigin="anonymous"
    />
    <style>
    @import 'https://cujba-mihai.github.io/shoppingList/style.css'
    </style>
    <div style="position: relative;">
    <ul id="shopping-item-container" class="shopping-body">
    <li id="list_index"></li>
    <li class="title">${this.state.name}</li>
    <li value=${this.state.count}>${this.state.count}</li>
    <li>$${this.state.totalPrice()}</li>
    <li>
      <button   class="btn btn-warning" id="decrement_count_btn">
        <i class="fas fa-minus"></i>
      </button>
      <button class="btn btn-success" id="increment_count_btn">
        <i class="fas fa-plus"></i>
      </button>
      <button class="btn btn-danger" id="remove_item_btn">
        <i class="fas fa-trash-alt"></i>
      </button>
    </li>
  </ul >
  </div>
  `
  }
}

customElements.define('list-item', CartItem);
