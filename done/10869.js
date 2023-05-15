/*
10869번
시간 제한: 1초
메모리 제한: 256 MB
문제: 두 자연수 A와 B가 주어진다. 이때, A+B, A-B, A*B, A/B(몫), A%B(나머지)를 출력하는 프로그램을 작성하시오. 
입력: 두 자연수 A와 B가 주어진다. (1 ≤ A, B ≤ 10,000)
출력: 첫째 줄에 A+B, 둘째 줄에 A-B, 셋째 줄에 A*B, 넷째 줄에 A/B, 다섯째 줄에 A%B를 출력한다.
*/

;(() => {
  const fs = require('fs')

  const inputList = fs
    .readFileSync('/dev/stdin')
    .toString()
    .split(' ')
    .map(num => parseInt(num))
  
  const [a,b] = inputList

  console.log(a+b)
  console.log(a-b)
  console.log(a*b)
  console.log(a/b | 0)
  console.log(a%b)
})