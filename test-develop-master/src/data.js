export const qnaList = [
  {
    id:1,
    q: '1. 아래의 색깔 그룹 중 마음에 드는 색깔 그룹을 고르세요',
    a: [
      { answer: 'A. 노랑,황토,카키', score: 2 },
      { answer: 'B. 파랑,연두,노랑', score: 3 },
      { answer: 'C. 남색,하늘,분홍', score: 4 },
      { answer: 'D. 검정,회색,갈색', score: 1 }
    ]
  },
  {
    id:2,
    q: '2. 좋아하는 음식은 무엇인가요?',
    a: [
      { answer: 'A. 해산물', score: 1 },
      { answer: 'B. 도시락', score: 3 },
      { answer: 'C. 패스트 푸드', score: 4 },
      { answer: 'D. 국/찌개', score: 2 }
    ]
  },
  {
    id:3,
    q: '3. 평소 좋아하는 음료는 무엇인가요?',
    a: [
      { answer: 'A. 탄산음료', score: 4 },
      { answer: 'B. 맥주', score: 2 },
      { answer: 'C. 물', score: 1 },
      { answer: 'D. 과일주스', score: 3 }
    ]
  },
  {
    id:4,
    q: '4. 좋아하는 TV 장르는 무엇인가요?',
    a: [
      { answer: 'A. 다큐', score: 1 },
      { answer: 'B. 만화', score: 4 },
      { answer: 'C. 액션 or 코미디', score: 3 },
      { answer: 'D. 드라마 or 스릴러', score: 2 },
    ]
  },
  {
    id:5,
    q: '5. 사탕에 대해 어떻게 생각하세요?',
    a: [
      { answer: 'A. 아주 좋아한다.', score: 4 },
      { answer: 'B. 좋아하는 편이다.', score: 3 },
      { answer: 'C. 사탕은 아이들을 위한 것이다.', score: 2 },
      { answer: 'D. 건강에 좋지 않아 먹지 않는다.', score: 1 }
    ]
  },
  {
    id:6,
    q: '6. 스마트폰에 대해 어떻게 생각하세요?',
    a: [
      { answer: 'A. 유용한 것 같다.', score: 3 },
      { answer: 'B. 무조건 필요하다.', score: 4 },
      { answer: 'C. 사용법이 어렵다.', score: 1 },
      { answer: 'D. 불필요하고 비싸다.', score: 2 }
    ]
  },
  {
    id:7,
    q: '7. SNS(ex.페이스북,인스타) 에 대해 어떻게 생각하세요?',
    a: [
      { answer: 'A. 유용한 것 같다.', score: 3 },
      { answer: 'B. 시간 낭비라고 생각한다.', score: 2 },
      { answer: 'C. 필수- 그것 없이는 살 수 없다.', score: 4 },
      { answer: 'D. 어렵다.', score: 1 }
    ]
  },
  {
    id:8,
    q: '8. 클래식 음악에 대해 어떻게 생각하세요?',
    a: [
      { answer: 'A. 편안함을 느낀다.', score: 2 },
      { answer: 'B. 싫어한다.', score: 4 },
      { answer: 'C. 너무 좋다.', score: 1 },
      { answer: 'D. 좋다', score: 3 }
    ]
  },
  {
    id:9,
    q: '9. 당신의 생일을 어떻게 축하하시겠습니까?',
    a: [
      { answer: 'A. 생일 축하할 나이는 지났다.', score: 1 },
      { answer: 'B.  가족과 함께 식사', score: 2 },
      { answer: 'C. 광란의 파티와 술', score: 3 },
      { answer: 'D. 생일 축하 게임과 케이크', score: 4 }
    ]
  },
  {
    id:10,
    q: '10. 다음 중 당신의 이상적인 휴가는?',
    a: [
      { answer: 'A. 놀이공원', score: 4 },
      { answer: 'B. 바다', score: 3 },
      { answer: 'C. 해외여행', score: 2 },
      { answer: 'D. 문화체험', score: 1 },
    ]
  }
]

export const infoList = [
  {
    from: 35,
    to: 40,
    name: '4~9세',
    desc: '당신은 무척 아이와 같은 본성을 가지고 있습니다. 아주 단순한 것에서도 기쁨과 즐거움을 찾아낼 수 있습니다.'
  },
  {
    from: 30,
    to: 34,
    name: '10~17세',
    desc: '당신의 정신연령은 10대입니다. 미성숙한 부분이 있으며,평범함에 거부감을 가지고 있습니다. 꽤 별난 캐릭터군요.'
  },
  {
    from: 25,
    to: 29,
    mLeft: '40%',
    name: '18세~21세',
    desc: '당신은 성숙해야 할 순간과 즐겨야 할 순간을 구분할 수 있습니다. 필요할 때는 진지하게 행동하지만 가끔은 약간 미성숙한 행동을 보이기도 합니다.'
  },
  {
    from: 20,
    to: 24,
    mLeft: '55%',
    name: '22~29세',
    desc: '당신의 정신연령은 20대입니다. 대부분 성숙한 모습을 보이고,또 언제 진지해져야 하는지도 잘 압니다. 당신은 똑똑하고 자기인식이 잘 되어있습니다.'
  },
  {
    from: 15,
    to: 19,
    mLeft: '70%',
    name: '30~55세',
    desc: '당신의 정신연령은 꽤 성숙한 편입니다. 겸손하고 고귀한 성품을 가지고 있습니다. 좋은 태도뿐만이 아니라 매너도 가지고 있는 사람입니다.'
  },
  {
    from: 10,
    to: 14,
    mLeft: '85%',
    name: '55세 이상',
    desc: '당신의 정신연령은 55세 이상으로 무척 높습니다. 삶의 작은 것에도 감사할 줄 아는 편인데요, 현대 기술에는 큰 관심이 없습니다.'
  }
]


