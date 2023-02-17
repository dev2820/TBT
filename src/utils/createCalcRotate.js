const createCalcRotate = (min, max) => {
  return (num, plus) => {
    plus = plus % (max - min + 1);
    num += plus;

    if (num > max) {
      num = num - max + min - 1;
    }
    if (num < min) {
      num = num + max - min + 1;
    }

    return num;
  };
};

export default createCalcRotate;
