const cartListIndex = () => {
  for (let i = 0; i < document.getElementsByTagName('list-item').length ?? 0; i++) {
    const element = document.getElementsByTagName('list-item')[i].shadow;

    setTimeout(() => {
      element.isConnected
        ? element.getElementById("list_index").innerText = i + 1
        : null;
    }, 0)
  }
};

export const setIndex = new CustomEvent("set_index", {
  detail: {},
  bubbles: true,
  cancelable: true,
  composed: false,
});

document.addEventListener('set_index', () => cartListIndex());

