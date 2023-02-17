const calcMinSec = (second) => {
  const min = Math.floor(second / 60);
  const sec = second % 60;

  return [min, sec];
};
export default calcMinSec;
