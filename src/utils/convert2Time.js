const convert2Time = (number) => {
  const min = ("00" + Math.floor(number / 60)).slice(-2);
  const sec = ("00" + (number % 60)).slice(-2);
  return `${min}:${sec}`;
};
export default convert2Time;
