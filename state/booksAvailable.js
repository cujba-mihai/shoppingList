import idGenerator from "../utils/idGenerator.js";

const booksAvailable = [
  { name: 'Production-Ready Microservices', author: 'Susan J. Fowler', price: '$32', imageSrc: 'images/414CRjLjwgL._SX403_BO1,204,203,200_.jpg', id: idGenerator.next().value },
  { name: 'Release It!', author: 'Michael T. Nygard', price: '$45', imageSrc: 'images/41yJ75gpV-L._SX381_BO1,204,203,200_.jpg', id: idGenerator.next().value },
  { name: 'React-and-React-Native---Third-Edition', author: 'Adam Boduch , Roy Derks ', price: "$5", imageSrc: 'images/react_and_reactNative.png', id: idGenerator.next().value }
]

export default booksAvailable;
