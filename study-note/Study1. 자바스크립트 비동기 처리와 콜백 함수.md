# <div align="center">✏️ Study1. 자바스크립트 비동기 처리와 콜백 함수</div>

<br>

🔗 https://joshua1988.github.io/web-development/javascript/javascript-asynchronous-operation/

<br>

## 비동기처리란?

자바스크립트의 비동기 처리란 특정 코드의 연산이 끝날 때까지 코드의 실행을 멈추지 않고

다음 코드를 먼저 실행하는 자바스크립트의 특성을 의미합니다.

특정 로직의 실행이 끝날 때까지 기다려주지 않고 나머지 코드를 먼저 실행하는 것이 비동기 처리입니다.

만약 데이터 요청을 100개 보낸다고 생각해보면,

비동기처리가 아니고 동기 처리라면 코드 실행하고 기다리고, 실행하고 기다리고..

웹 애플리케이션을 실행하는데 수십분은 걸릴 것 입니다.

<br>

## 비동기처리 사례 :: setTimeout()

setTimeout()은 Web API의 한 종류입니다.

코드를 바로 실행하지 않고 지정한 시간만큼 기다렸다가 로직을 실행합니다.

```jsx
// #1
console.log("Hello");
// #2
setTimeout(function () {
  console.log("Bye");
}, 3000);
// #3
console.log("Hello Again");
```

- ‘Hello’ 출력
- ‘Hello Again’ 출력
- 3초 있다가 ‘Bye’ 출력

<br>

## 콜백 지옥

콜백 지옥은 비동기처리를 위해 콜백 함수를 연속해서 사용할 때 발생하는 문제입니다.

```jsx
$.get("url", function (response) {
  parseValue(response, function (id) {
    auth(id, function (result) {
      display(result, function (text) {
        console.log(text);
      });
    });
  });
});
```

웹 서비스를 개발하다 보면 서버에서 데이터를 받아와 화면에 표시하기까지 인코딩, 사용자 인증 등을 처리해야 하는 경우가 있습니다.

만약 이 모든 과정을 비동기로 처리해야 한다고 하면 위와 같이 콜백 안에 콜백을 계속 무는 형식으로 코딩을 하게 됩니다.

이러한 콜백 지옥의 코드 구조는 가독성도 떨어지고 로직을 변경하기도 어렵습니다.

<br>

## 콜백 지옥을 해결하는 방법

일반적으로 콜백 지옥을 해결하는 방법에는 Promise나 Async를 사용하는 방법이 있습니다.

```jsx
function parseValueDone(id) {
  auth(id, authDone);
}
function authDone(result) {
  display(result, displayDone);
}
function displayDone(text) {
  console.log(text);
}
$.get("url", function (response) {
  parseValue(response, parseValueDone);
});
```

위에 콜백 함수를 다 분리해서 작성해 개선한 코드입니다.

중첩해서 선언했던 콜백 익명 함수를 각각의 함수로 구분하였습니다.

1. ajax 통신으로 받은 데이터를 parseValue() 메서드로 파싱
2. parseValueDone()에 파싱 한 결과값인 id가 전달 → auth() 메서드가 실행
3. 콜백 함수 authDone()이 실행
4. 인증 결과 값인 result로 displayDone()를 호출
5. 마지막으로 displayDone() 메서드가 수행
6. text가 콘솔에 출력됨

<br>

위처럼 함수를 구분해서 개선해도 콜백 지옥을 해결할 수 있지만,

Promise 나 Async를 이용하면 더 편하게 구현할 수 있습니다.
