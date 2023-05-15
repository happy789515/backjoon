/*
1000번
시간 제한: 2초 
메모리 제한: 128 MB
문제: 두 정수 A와 B를 입력받은 다음, A+B를 출력하는 프로그램을 작성하시오.
입력: 첫째 줄에 A와 B가 주어진다. (0 < A, B < 10)
출력: 첫째 줄에 A+B를 출력한다.
*/

;() => {
  const fs = require('fs')

  const inputNumList = fs
    .readFileSync('/dev/stdin')
    .toString()
    .split(' ')
    .map(num => parseInt(num))
  
  const [a,b] = inputNumList
  console.log(a+b)
}
