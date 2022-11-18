// 숫자인지 체크
export const isNumber = (value: any) => {
  let result = false;

  if (Number.isInteger(Math.floor(value))) {
    result = true;
  }

  return result;
};
