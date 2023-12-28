import { tataroFirstAnswer, userFirstAnswer } from "./api";

export function shareMessage() {
  Kakao.Share.sendDefault({
    objectType: "text",
    text: `${userFirstAnswer}\n${tataroFirstAnswer}`,
    link: {
      // [내 애플리케이션] > [플랫폼] 에서 등록한 사이트 도메인과 일치해야 함
      mobileWebUrl: "https://www.tataro.net",
      webUrl: "https://www.tataro.net",
    },

    buttonTitle: "타로보기",
    buttons: [
      {
        title: "타로보기",
        link: {
          mobileWebUrl: "https://www.tataro.net",
          webUrl: "https://www.tataro.net",
        },
      },
    ],
  });
}
