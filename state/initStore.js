import booksAvailable from "./booksAvailable.js";


export default function initStore() {

  const books = JSON.parse(window.localStorage.getItem('booksAvailable')) ?? window.localStorage.setItem('booksAvailable', JSON.stringify(booksAvailable));
  const booksInCart = window.localStorage.getItem('booksInCart') ?? window.localStorage.setItem('booksInCart', JSON.stringify([]));


}