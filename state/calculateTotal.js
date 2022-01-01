let cartTotal = document.getElementById('cart-total').innerText;

const calculateTotal = () => {
  const listItemsCount = document.getElementsByTagName('list-item');
  let total = 0;

  for (let i = 0; i < listItemsCount.length; i++) {
    total += listItemsCount[i].state.count * listItemsCount[i].state.price.match(/[^$]?\d+/g)
  }

  document.getElementById('cart-total').innerText = total;
};

export default calculateTotal;