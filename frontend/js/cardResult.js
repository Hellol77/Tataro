// 프론트 버전 카드 뽑기
const cardArray = [
  [
    "바보",
    "https://upload.wikimedia.org/wikipedia/ko/thumb/9/90/RWS_Tarot_00_Fool.jpg/137px-RWS_Tarot_00_Fool.jpg",
  ],
  [
    "마술사",
    "https://upload.wikimedia.org/wikipedia/ko/thumb/d/de/RWS_Tarot_01_Magician.jpg/136px-RWS_Tarot_01_Magician.jpg",
  ],
  [
    "여교황",
    "https://upload.wikimedia.org/wikipedia/ko/thumb/8/88/RWS_Tarot_02_High_Priestess.jpg/138px-RWS_Tarot_02_High_Priestess.jpg",
  ],
  [
    "여제",
    "https://upload.wikimedia.org/wikipedia/ko/thumb/d/d2/RWS_Tarot_03_Empress.jpg/139px-RWS_Tarot_03_Empress.jpg",
  ],
  [
    "황제",
    "https://upload.wikimedia.org/wikipedia/ko/thumb/c/c3/RWS_Tarot_04_Emperor.jpg/140px-RWS_Tarot_04_Emperor.jpg",
  ],
  [
    "교황",
    "https://upload.wikimedia.org/wikipedia/ko/thumb/8/8d/RWS_Tarot_05_Hierophant.jpg/137px-RWS_Tarot_05_Hierophant.jpg",
  ],
  [
    "연인",
    "https://upload.wikimedia.org/wikipedia/ko/thumb/d/db/RWS_Tarot_06_Lovers.jpg/139px-RWS_Tarot_06_Lovers.jpg",
  ],
  [
    "전차",
    "https://upload.wikimedia.org/wikipedia/ko/thumb/9/9b/RWS_Tarot_07_Chariot.jpg/136px-RWS_Tarot_07_Chariot.jpg",
  ],
  [
    "힘",
    "https://upload.wikimedia.org/wikipedia/ko/thumb/f/f5/RWS_Tarot_08_Strength.jpg/133px-RWS_Tarot_08_Strength.jpg",
  ],
  [
    "은자",
    "https://upload.wikimedia.org/wikipedia/ko/thumb/4/4d/RWS_Tarot_09_Hermit.jpg/139px-RWS_Tarot_09_Hermit.jpg",
  ],
  [
    "운명의 바퀴",
    "https://upload.wikimedia.org/wikipedia/ko/thumb/3/3c/RWS_Tarot_10_Wheel_of_Fortune.jpg/139px-RWS_Tarot_10_Wheel_of_Fortune.jpg",
  ],
  [
    "정의",
    "https://upload.wikimedia.org/wikipedia/ko/thumb/e/e0/RWS_Tarot_11_Justice.jpg/138px-RWS_Tarot_11_Justice.jpg",
  ],
  [
    "매달린 남자",
    "https://upload.wikimedia.org/wikipedia/ko/thumb/2/2b/RWS_Tarot_12_Hanged_Man.jpg/136px-RWS_Tarot_12_Hanged_Man.jpg",
  ],
  [
    "죽음",
    "https://upload.wikimedia.org/wikipedia/ko/thumb/d/d7/RWS_Tarot_13_Death.jpg/136px-RWS_Tarot_13_Death.jpg",
  ],
  [
    "절제",
    "https://upload.wikimedia.org/wikipedia/ko/thumb/f/f8/RWS_Tarot_14_Temperance.jpg/138px-RWS_Tarot_14_Temperance.jpg",
  ],
  [
    "악마",
    "https://upload.wikimedia.org/wikipedia/ko/thumb/5/55/RWS_Tarot_15_Devil.jpg/137px-RWS_Tarot_15_Devil.jpg",
  ],
  [
    "탑",
    "https://upload.wikimedia.org/wikipedia/ko/thumb/5/53/RWS_Tarot_16_Tower.jpg/140px-RWS_Tarot_16_Tower.jpg",
  ],
  [
    "별",
    "https://upload.wikimedia.org/wikipedia/ko/thumb/d/db/RWS_Tarot_17_Star.jpg/139px-RWS_Tarot_17_Star.jpg",
  ],
  [
    "달",
    "https://upload.wikimedia.org/wikipedia/ko/thumb/7/7f/RWS_Tarot_18_Moon.jpg/136px-RWS_Tarot_18_Moon.jpg",
  ],
  [
    "태양",
    "https://upload.wikimedia.org/wikipedia/ko/thumb/1/17/RWS_Tarot_19_Sun.jpg/139px-RWS_Tarot_19_Sun.jpg",
  ],
  [
    "심판",
    "https://upload.wikimedia.org/wikipedia/ko/thumb/d/dd/RWS_Tarot_20_Judgement.jpg/139px-RWS_Tarot_20_Judgement.jpg",
  ],
  [
    "세계",
    "https://upload.wikimedia.org/wikipedia/ko/thumb/f/ff/RWS_Tarot_21_World.jpg/137px-RWS_Tarot_21_World.jpg",
  ],

  // 동전

  [
    "동전의 에이스",
    "https://upload.wikimedia.org/wikipedia/ko/thumb/9/94/RWS_Tarot_Pents01.jpg/137px-RWS_Tarot_Pents01.jpg",
  ],
  [
    "동전의 2",
    "https://upload.wikimedia.org/wikipedia/ko/thumb/2/24/RWS_Tarot_Pents02.jpg/138px-RWS_Tarot_Pents02.jpg",
  ],
  [
    "동전의 3",
    "https://upload.wikimedia.org/wikipedia/ko/thumb/b/b1/RWS_Tarot_Pents03.jpg/137px-RWS_Tarot_Pents03.jpg",
  ],
  [
    "동전의 4",
    "https://upload.wikimedia.org/wikipedia/ko/thumb/a/a8/RWS_Tarot_Pents04.jpg/136px-RWS_Tarot_Pents04.jpg",
  ],
  [
    "동전의 5",
    "https://upload.wikimedia.org/wikipedia/ko/thumb/8/83/RWS_Tarot_Pents05.jpg/137px-RWS_Tarot_Pents05.jpg",
  ],
  [
    "동전의 6",
    "https://upload.wikimedia.org/wikipedia/ko/thumb/1/1d/RWS_Tarot_Pents06.jpg/138px-RWS_Tarot_Pents06.jpg",
  ],
  [
    "동전의 7",
    "https://upload.wikimedia.org/wikipedia/ko/thumb/2/22/RWS_Tarot_Pents07.jpg/136px-RWS_Tarot_Pents07.jpg",
  ],
  [
    "동전의 8",
    "https://upload.wikimedia.org/wikipedia/ko/thumb/3/3b/RWS_Tarot_Pents08.jpg/137px-RWS_Tarot_Pents08.jpg",
  ],
  [
    "동전의 9",
    "https://upload.wikimedia.org/wikipedia/ko/thumb/1/1a/RWS_Tarot_Pents09.jpg/137px-RWS_Tarot_Pents09.jpg",
  ],
  [
    "동전의 10",
    "https://upload.wikimedia.org/wikipedia/ko/thumb/5/59/RWS_Tarot_Pents10.jpg/139px-RWS_Tarot_Pents10.jpg",
  ],
  [
    "동전의 시종",
    "https://upload.wikimedia.org/wikipedia/ko/thumb/e/e3/RWS_Tarot_Pents11.jpg/137px-RWS_Tarot_Pents11.jpg",
  ],
  [
    "동전의 기사",
    "https://upload.wikimedia.org/wikipedia/ko/thumb/9/9a/RWS_Tarot_Pents12.jpg/136px-RWS_Tarot_Pents12.jpg",
  ],
  [
    "동전의 여왕",
    "https://upload.wikimedia.org/wikipedia/ko/thumb/9/97/RWS_Tarot_Pents13.jpg/136px-RWS_Tarot_Pents13.jpg",
  ],
  [
    "동전의 왕",
    "https://upload.wikimedia.org/wikipedia/ko/thumb/9/96/RWS_Tarot_Pents14.jpg/138px-RWS_Tarot_Pents14.jpg",
  ],

  // 봉

  [
    "지팡이의 에이스",
    "https://upload.wikimedia.org/wikipedia/ko/thumb/a/a9/RWS_Tarot_Wands01.jpg/137px-RWS_Tarot_Wands01.jpg",
  ],
  [
    "지팡이의 2",
    "https://upload.wikimedia.org/wikipedia/ko/thumb/c/cb/RWS_Tarot_Wands02.jpg/138px-RWS_Tarot_Wands02.jpg",
  ],
  [
    "지팡이의 3",
    "https://upload.wikimedia.org/wikipedia/ko/thumb/7/75/RWS_Tarot_Wands03.jpg/136px-RWS_Tarot_Wands03.jpg",
  ],
  [
    "지팡이의 4",
    "https://upload.wikimedia.org/wikipedia/ko/thumb/9/91/RWS_Tarot_Wands04.jpg/136px-RWS_Tarot_Wands04.jpg",
  ],
  [
    "지팡이의 5",
    "https://upload.wikimedia.org/wikipedia/ko/thumb/1/19/RWS_Tarot_Wands05.jpg/137px-RWS_Tarot_Wands05.jpg",
  ],
  [
    "지팡이의 6",
    "https://upload.wikimedia.org/wikipedia/ko/thumb/5/56/RWS_Tarot_Wands06.jpg/138px-RWS_Tarot_Wands06.jpg",
  ],
  [
    "지팡이의 7",
    "https://upload.wikimedia.org/wikipedia/ko/thumb/a/aa/RWS_Tarot_Wands07.jpg/136px-RWS_Tarot_Wands07.jpg",
  ],
  [
    "지팡이의 8",
    "https://upload.wikimedia.org/wikipedia/ko/thumb/0/04/RWS_Tarot_Wands08.jpg/136px-RWS_Tarot_Wands08.jpg",
  ],
  [
    "지팡이의 9",
    "https://upload.wikimedia.org/wikipedia/ko/thumb/3/38/RWS_Tarot_Wands09.jpg/138px-RWS_Tarot_Wands09.jpg",
  ],
  [
    "지팡이의 10",
    "https://upload.wikimedia.org/wikipedia/ko/thumb/1/1d/RWS_Tarot_Wands10.jpg/139px-RWS_Tarot_Wands10.jpg",
  ],
  [
    "지팡이의 시종",
    "https://upload.wikimedia.org/wikipedia/ko/thumb/0/0a/RWS_Tarot_Wands11.jpg/136px-RWS_Tarot_Wands11.jpg",
  ],
  [
    "지팡이의 기사",
    "https://upload.wikimedia.org/wikipedia/ko/thumb/8/8f/RWS_Tarot_Wands12.jpg/136px-RWS_Tarot_Wands12.jpg",
  ],
  [
    "지팡이의 여왕",
    "https://upload.wikimedia.org/wikipedia/ko/thumb/4/43/RWS_Tarot_Wands13.jpg/137px-RWS_Tarot_Wands13.jpg",
  ],
  [
    "지팡이의 왕",
    "https://upload.wikimedia.org/wikipedia/ko/thumb/0/00/RWS_Tarot_Wands14.jpg/135px-RWS_Tarot_Wands14.jpg",
  ],

  // 잔

  [
    "잔의 에이스",
    "https://upload.wikimedia.org/wikipedia/ko/thumb/3/37/RWS_Tarot_Cups01.jpg/134px-RWS_Tarot_Cups01.jpg",
  ],
  [
    "잔의 2",
    "https://upload.wikimedia.org/wikipedia/ko/thumb/e/e5/RWS_Tarot_Cups02.jpg/135px-RWS_Tarot_Cups02.jpg",
  ],
  [
    "잔의 3",
    "https://upload.wikimedia.org/wikipedia/ko/thumb/e/e4/RWS_Tarot_Cups03.jpg/136px-RWS_Tarot_Cups03.jpg",
  ],
  [
    "잔의 4",
    "https://upload.wikimedia.org/wikipedia/ko/thumb/9/91/RWS_Tarot_Cups04.jpg/137px-RWS_Tarot_Cups04.jpg",
  ],
  [
    "잔의 5",
    "https://upload.wikimedia.org/wikipedia/ko/thumb/8/82/RWS_Tarot_Cups05.jpg/134px-RWS_Tarot_Cups05.jpg",
  ],
  [
    "잔의 6",
    "https://upload.wikimedia.org/wikipedia/ko/thumb/1/1c/RWS_Tarot_Cups06.jpg/135px-RWS_Tarot_Cups06.jpg",
  ],
  [
    "잔의 7",
    "https://upload.wikimedia.org/wikipedia/ko/thumb/e/ee/RWS_Tarot_Cups07.jpg/137px-RWS_Tarot_Cups07.jpg",
  ],
  [
    "잔의 8",
    "https://upload.wikimedia.org/wikipedia/ko/thumb/c/c0/RWS_Tarot_Cups08.jpg/137px-RWS_Tarot_Cups08.jpg",
  ],
  [
    "잔의 9",
    "https://upload.wikimedia.org/wikipedia/ko/thumb/5/58/RWS_Tarot_Cups09.jpg/136px-RWS_Tarot_Cups09.jpg",
  ],
  [
    "잔의 10",
    "https://upload.wikimedia.org/wikipedia/ko/thumb/8/82/RWS_Tarot_Cups10.jpg/136px-RWS_Tarot_Cups10.jpg",
  ],
  [
    "잔의 시종",
    "https://upload.wikimedia.org/wikipedia/ko/thumb/8/82/RWS_Tarot_Cups11.jpg/134px-RWS_Tarot_Cups11.jpg",
  ],
  [
    "잔의 기사",
    "https://upload.wikimedia.org/wikipedia/ko/thumb/f/f5/RWS_Tarot_Cups12.jpg/139px-RWS_Tarot_Cups12.jpg",
  ],
  [
    "잔의 여왕",
    "https://upload.wikimedia.org/wikipedia/ko/thumb/a/a6/RWS_Tarot_Cups13.jpg/139px-RWS_Tarot_Cups13.jpg",
  ],
  [
    "잔의 왕",
    "https://upload.wikimedia.org/wikipedia/ko/thumb/0/07/RWS_Tarot_Cups14.jpg/136px-RWS_Tarot_Cups14.jpg",
  ],

  // 검

  [
    "검의 에이스",
    "https://upload.wikimedia.org/wikipedia/ko/thumb/0/07/RWS_Tarot_Swords01.jpg/137px-RWS_Tarot_Swords01.jpg",
  ],
  [
    "검의 2",
    "https://upload.wikimedia.org/wikipedia/ko/thumb/4/45/RWS_Tarot_Swords02.jpg/138px-RWS_Tarot_Swords02.jpg",
  ],
  [
    "검의 3",
    "https://upload.wikimedia.org/wikipedia/ko/thumb/f/fb/RWS_Tarot_Swords03.jpg/135px-RWS_Tarot_Swords03.jpg",
  ],
  [
    "검의 4",
    "https://upload.wikimedia.org/wikipedia/ko/thumb/2/2c/RWS_Tarot_Swords04.jpg/135px-RWS_Tarot_Swords04.jpg",
  ],
  [
    "검의 5",
    "https://upload.wikimedia.org/wikipedia/ko/thumb/e/e9/RWS_Tarot_Swords05.jpg/136px-RWS_Tarot_Swords05.jpg",
  ],
  [
    "검의 6",
    "https://upload.wikimedia.org/wikipedia/ko/thumb/0/02/RWS_Tarot_Swords06.jpg/139px-RWS_Tarot_Swords06.jpg",
  ],
  [
    "검의 7",
    "https://upload.wikimedia.org/wikipedia/ko/thumb/8/80/RWS_Tarot_Swords07.jpg/138px-RWS_Tarot_Swords07.jpg",
  ],
  [
    "검의 8",
    "https://upload.wikimedia.org/wikipedia/ko/thumb/b/b8/RWS_Tarot_Swords08.jpg/139px-RWS_Tarot_Swords08.jpg",
  ],
  [
    "검의 9",
    "https://upload.wikimedia.org/wikipedia/ko/thumb/e/ea/RWS_Tarot_Swords09.jpg/138px-RWS_Tarot_Swords09.jpg",
  ],
  [
    "검의 10",
    "https://upload.wikimedia.org/wikipedia/ko/thumb/7/72/RWS_Tarot_Swords10.jpg/139px-RWS_Tarot_Swords10.jpg",
  ],
  [
    "검의 시종",
    "https://upload.wikimedia.org/wikipedia/ko/thumb/a/af/RWS_Tarot_Swords11.jpg/137px-RWS_Tarot_Swords11.jpg",
  ],
  [
    "검의 기사",
    "https://upload.wikimedia.org/wikipedia/ko/thumb/f/f8/RWS_Tarot_Swords12.jpg/137px-RWS_Tarot_Swords12.jpg",
  ],
  [
    "검의 여왕",
    "https://upload.wikimedia.org/wikipedia/ko/thumb/5/5f/RWS_Tarot_Swords13.jpg/134px-RWS_Tarot_Swords13.jpg",
  ],
  [
    "검의 왕",
    "https://upload.wikimedia.org/wikipedia/ko/thumb/2/22/RWS_Tarot_Swords14.jpg/137px-RWS_Tarot_Swords14.jpg",
  ],
];

const selectTaro = [];
while (cardArray.length > 75) {
  var taroCard = cardArray.splice(
    Math.floor(Math.random() * cardArray.length),
    1
  )[0];

  selectTaro.push(taroCard);
}

const firstTitle = document.querySelector("#card1_title");
const secondTitle = document.querySelector("#card2_title");
const thirdTitle = document.querySelector("#card3_title");

const firstImg = document.querySelector("#card1_img");
const secondImg = document.querySelector("#card2_img");
const thirdImg = document.querySelector("#card3_img");

firstTitle.innerText = selectTaro[0][0];
secondTitle.innerText = selectTaro[1][0];
thirdTitle.innerText = selectTaro[2][0];

firstImg.src = selectTaro[0][1];
secondImg.src = selectTaro[1][1];
thirdImg.src = selectTaro[2][1];
