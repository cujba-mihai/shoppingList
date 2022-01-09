import booksAvailable from '../state/booksAvailable.js';
import append from '../utils/append.js';
import BookItems from '../components/BookItems.js';
import calculateTotal from '../state/calculateTotal.js';
import initStore from '../state/initStore.js';

import CartItem from '../components/CartItem.js';



const bookShelf = document.getElementById('book-shelf');
const addBooksOnShelf = () => booksAvailable.map(e => append(bookShelf, new BookItems(e.id, e.name, e.author, e.price, e.imageSrc)))
addBooksOnShelf();
calculateTotal();




window.onload = () => {
  initStore();

  const cartItems = JSON.parse(window.localStorage.getItem('booksInCart'));
  const addItemsToCart = () => cartItems.map(e => {
    const cartDOM = document.getElementById('shopping_cart');
    cartDOM.appendChild(new CartItem(e.name, e.price, e.id, e.count))
  })

  history.pushState({}, "Home", "/shoppingList/");
  addItemsToCart();

  window.addEventListener('popstate', e => {
    console.log(e)
    if (!e.target.location.hash) {
      window.history.back();
      history.pushState({}, "Home", e.target.location);
    }
  });


}



