import booksAvailable from '../state/booksAvailable.js';
import append from '../utils/append.js';
import BookItems from '../components/BookItems.js';
import calculateTotal from '../state/calculateTotal.js';
import initStore from '../state/initStore.js';

import CartItem from '../components/CartItem.js';
import BookPresentation from '../components/BookPresentation.js';

initStore();

const bookShelf = document.getElementById('book-shelf');
const addBooksOnShelf = () => booksAvailable.map(e => append(bookShelf, new BookItems(e.id, e.name, e.author, e.price, e.imageSrc)))

const cartItems = JSON.parse(window.localStorage.getItem('booksInCart'));
export const addItemsToCart = () => cartItems.map(e => {
  const cartDOM = document.getElementById('shopping_cart');
  cartDOM.appendChild(new CartItem(e.name, e.price, e.id, e.count))
})

addBooksOnShelf();
calculateTotal();
addItemsToCart();

window.onload = () => {


  history.pushState({}, "Home", "/shoppingList");


  window.addEventListener('popstate', e => {

    if (!window.location.hash) {
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
    <script src="scripts/index.js" type="module"></script>
  `
      setTimeout(() => {
        const bookShelf = document.getElementById('book-shelf');
        const addBooksOnShelf = () => booksAvailable.map(e => append(bookShelf, new BookItems(e.id, e.name, e.author, e.price, e.imageSrc)))

        const cartItems = JSON.parse(window.localStorage.getItem('booksInCart'));
        const addItemsToCart = () => cartItems.map(e => {
          const cartDOM = document.getElementById('shopping_cart');
          cartDOM.appendChild(new CartItem(e.name, e.price, e.id, e.count))
        })

        addBooksOnShelf();
        calculateTotal();
        addItemsToCart();
      }, 0);
    } else {
      const bookProps = booksAvailable.find(e => e.id === history.state.id);
      document.getElementById('root').innerHTML = '';
      document.getElementById('root').appendChild(new BookPresentation(bookProps.id, bookProps.imageSrc,
        bookProps.name, bookProps.author, bookProps.price, bookProps.description, bookProps.language,
        bookProps.pages, bookProps.publicationDate, bookProps.publisher, bookProps.rating, bookProps.readingAge));
    }

  });


}



