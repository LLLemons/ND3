const debounce = (fn, interval=300) =>　{
  console.log(1)
  let timeout = null;
  return function () {
    clearTimeout(timeout);
    timeout = setTimeout( () => {
      fn.apply(this, arguments)
    }, interval)
  }
}

export default debounce