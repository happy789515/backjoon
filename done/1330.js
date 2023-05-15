/*
1330번
시간 제한: 1초
메모리 제한: 512 MB
문제: 두 정수 A와 B가 주어졌을 때, A와 B를 비교하는 프로그램을 작성하시오.
입력: 첫째 줄에 A와 B가 주어진다. A와 B는 공백 한 칸으로 구분되어져 있다.
출력: 첫째 줄에 다음 세 가지 중 하나를 출력한다.
      - A가 B보다 큰 경우에는 '>'를 출력한다.
      - A가 B보다 작은 경우에는 '<'를 출력한다.
      - A와 B가 같은 경우에는 '=='를 출력한다.
*/

;() => {
  const [A, B] = require('fs')
    .readFileSync('/dev/stdin')
    .toString()
    .split(' ')
    .map(n => parseInt(n))
  
  if (A > B) console.log('>')
  else if (A < B) console.log('<')
  else console.log('==')
}
