export default class Store {
  constructor(cardArray) {
    if (!cardArray) throw "no cardArray";
    this.cardArray = cardArray;
  }
  getRandomCard() {
    const copiedArray = this.cardArray.slice();

    // 선택된 요소를 담을 빈 배열을 생성합니다.
    const randomElements = [];

    // 원하는 개수만큼 요소를 선택합니다.
    for (let i = 0; i < 3; i++) {
      // 무작위 인덱스 생성
      const randomIndex = Math.floor(Math.random() * copiedArray.length);

      // 배열에서 해당 인덱스의 요소를 선택하고 randomElements 배열에 추가
      randomElements.push(copiedArray[randomIndex]);

      // 선택한 요소를 배열에서 제거
      copiedArray.splice(randomIndex, 1);
    }

    return randomElements;
  }
}
