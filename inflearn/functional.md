참고 - https://www.inflearn.com/course/%ED%95%A8%EC%88%98%ED%98%95-%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%B0%8D/

* 유인동님의 자바스크립트로 알아보는 함수형 프로그래밍 강의 코드를 따라쳐보고 개념을 적은 파일들입니다 *

/* 함수형 프로그래밍 사고 방식 */
객체보다 함수가 우선적으로 고려
함수를 먼저 생각하고 데이터 셋을 구성한다.

메서드는 함수가 아닌 객체의 메서드이다.
클래스에 의존적임. 클래스 내에 정의되기 때문에 해당 클래스의 인스턴스에서만 쓰일 수 있음
예를 들어, 아래의 map과 filter 메서드는 Array에서만 쓰일 수 있다.

console.log(
  [1, 2, 3, 4].map(function (val) {
    return val * 2;
  })
);

console.log(
  [1, 2, 3, 4].filter(function (val) {
    return val % 2;
  })
);

Array-like 객체
인수 혹은 $('div')과 같은 JQuery 객체
배열이 아님, 마치 배열과 같은 객체

Array 인스턴스가 아니기 때문에 map 메서드를 사용할 수 없음
NodeList 객체가 반환 됨
console.log(
  document.querySelectorAll('*').map(function (node) {
    return node.nodeName;
  })
);

//
console.log(
  _map(document.querySelector('*'), function (node) {
    return node.nodeName;
  })
);

3. 내부 다형성
predication : 어떤 조건을 리턴하는 함수
iteratee : 돌면서 반복적으로 실행되는 함수
mapper : 무언가와 무언가를 매핑하는 함수
즉, 콜백 함수는 무명 함수로 사용하는데,
함수를 정의할 때, 보조 함수의 명을 적절히 사용하고
보조 함수는 위임되며, 무언가 수행을 담당하는 역할은 보조 함수가 책임진다.