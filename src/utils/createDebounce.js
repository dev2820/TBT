const createDebounce = (cb) => {
  let timer = null;

  return (param) => {
    if (timer) clearTimeout(timer);

    setTimeout(() => {
      cb(param);
    }, 300);
  };
};

export default createDebounce;
