// 숫자인지 체크
export const isNumber = (value: any) => {
  // // 타입 검사
  // if (typeof isNumber !== "number") {
  //   return false;
  // }
  // number - nan 인지 검사
  // if (Number.isNaN(value)) {
  //   return false;
  // }
  // 정수 판별
  if (!Number.isInteger(Math.floor(value))) {
    return false;
  }

  return true;
};
