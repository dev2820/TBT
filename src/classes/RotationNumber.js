const createRotator = (min, max) => {
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
  constructor(initNum, min, max) {
    this.num = initNum;
    this.min = min;
    this.max = max;
  }
  increase(value) {
    const rotator = createRotator(this.min, this.max);
    this.num = rotator(this.num, value);
  }
  decrease(value) {
    const rotator = createRotator(this.min, this.max);
    this.num = rotator(this.num, -value);
  }
}

export default RotationNumber;
