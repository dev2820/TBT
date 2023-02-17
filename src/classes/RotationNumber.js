const calcRotation = (num, min, max, plus) => {
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
    this.num = calcRotation(this.num, this.min, this.max, value);
  }
  decrease(value) {
    this.num = calcRotation(this.num, this.min, this.max, -value);
  }
}

export default RotationNumber;
