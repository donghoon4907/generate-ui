/**
 * 클립보드에 저장
 *
 * @param text 저장할 텍스트
 */
export const copyToClipboard = async (text: string) =>
  navigator.clipboard
    .writeText(text)
    .then(() => alert("Copied!"))
    .catch(err => alert("해당 브라우저에서는 지원하지 않는 기능입니다."));
