const idGenerator = (function* () {
  let i = 1;
  while (true) {
    yield i;
    i += 1;
  }
})();

export default idGenerator;