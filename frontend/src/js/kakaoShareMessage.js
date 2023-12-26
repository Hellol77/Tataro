export function shareMessage() {
  Kakao.Share.sendDefault({
    objectType: "feed",
    itemContent: {
      profileText: "타로보는 타타로",
    },
    content: {
      title: "인공지능 타타로에게 타로를 봐보세요!",
      description: "타타로는 모든 질문에 대답합니다!",
      imageUrl: "https://ifh.cc/g/7hBLkx.jpg",
      link: {
        // [내 애플리케이션] > [플랫폼] 에서 등록한 사이트 도메인과 일치해야 함
        mobileWebUrl: "https://tataro.pages.dev/",
        webUrl: "https://tataro.pages.dev/",
      },
    },

    buttons: [
      {
        title: "타로보기",
        link: {
          mobileWebUrl: "https://tataro.pages.dev/",
          webUrl: "https://tataro.pages.dev/",
        },
      },
    ],
  });
}
