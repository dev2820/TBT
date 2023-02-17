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

class RotationNumber {
  num = 0;
  min = 0;
  max = 0;
  calcRotate = () => {};

  constructor(initNum, min, max) {
    this.num = initNum;
    this.min = min;
    this.max = max;
    this.calcRotate = createCalcRotate(this.min, this.max);
  }
  increase(value) {
    this.num = this.calcRotate(this.num, value);
  }
  decrease(value) {
    this.num = this.calcRotate(this.num, -value);
  }
}

export default RotationNumber;
