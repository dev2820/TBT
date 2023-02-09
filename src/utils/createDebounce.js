const createDebounce = (cb) => {
  let timer = null;

  return (param) => {
    if (timer) clearTimeout(timer);

    setTimeout(() => {
      cb(param);
    }, 100);
  };
};

export default createDebounce;
