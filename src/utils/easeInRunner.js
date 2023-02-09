const easeInRunner = (f, startTiming) => {
  let timer = null;
  let timing = startTiming;
  const runner = () => {
    const newTimer = setTimeout(() => {
      f();
      if (timing > 50) {
        timing /= 1.5;
      }
      timer = runner();
    }, timing);
    return newTimer;
  };
  timer = runner();

  const stop = () => {
    clearTimeout(timer);
  };
  return stop;
};

export default easeInRunner;
