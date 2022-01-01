import booksAvailable from '../state/booksAvailable.js';
import append from '../utils/append.js';
import BookItems from '../components/BookItems.js';
import calculateTotal from '../state/calculateTotal.js';


let bookShelf = document.getElementById('book-shelf');
let addBooksOnShelf = () => booksAvailable.map(e => append(bookShelf, new BookItems(e.id, e.name, e.author, e.price, e.imageSrc)))
addBooksOnShelf();

calculateTotal();


