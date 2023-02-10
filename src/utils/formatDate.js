const formatDate = (date) => {
  const yyyy = date.getFullYear();
  const mm = date.getMonth() + 1;
  const dd = date.getDate();
  const h = date.getHours();
  const m = date.getMinutes();

  return `${yyyy}년 ${mm}월 ${dd}일 ${h}시 ${m}분`;
};
export default formatDate;
