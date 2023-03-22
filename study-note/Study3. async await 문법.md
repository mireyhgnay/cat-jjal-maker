# <div align="center">✏️ Study3. async await 문법</div>

<br>

🔗 https://joshua1988.github.io/web-development/javascript/js-async-await/

<br>

## async await 란?

자바스크립트의 비동기 처리 패턴 중 가장 최근에 나온 문법입니다.

기존의 비동기 처리방식인 콜백함수와 프로미스의 단점을 보완하고

개발자가 읽기 좋은 코드를 작성할 수 있게 도와줍니다.

<br>

**기본 문법**

```jsx
async function 함수명() {
  await 비동기_처리_메서드_명();
}
```

- 함수 앞에 async 라는 예약어를 붙입니다.
- 그리고나서 함수의 내부 로직중 HTTP 통신을 하는비동기 처리 코드 앞에 await 를 붙입니다.

<br>

## 간단한 예제

```jsx
function fetchItems() {
  return new Promise(function (resolve, reject) {
    var items = [1, 2, 3];
    resolve(items);
  });
}

async function logItems() {
  var resultItems = await fetchItems();
  console.log(resultItems); // [1,2,3]
}
```

먼저 `fetchItems()` 함수는 프로미스 객체를 반환하는 함수입니다.

`logItems()` 함수를 실행하면 `fetchItems()`함수의 결과 값인 `items` 배열이 `resultItems` 변수에 담깁니다.

따라서, 콘솔에는 `[1,2,3]`이 출력됩니다.

<br>

await를 사용하지 않았다면 데이터를 받아온 시점에 콘솔을 출력할 수 있게 콜백함수 or then()을 사용해야 했을 것입니다.

<br>

## async await 예외 처리

예외를 처리하는 방법은 try catch 입니다.

프로미스에서 에러처리할 때 catch를 사용했던 것처럼 async 에서는 catch {} 를 사용하시면 됩니다.

```jsx
async function logTodoTitle() {
  try {
    var user = await fetchUser();
    if (user.id === 1) {
      var todo = await fetchTodo();
      console.log(todo.title); // delectus aut autem
    }
  } catch (error) {
    console.log(error);
  }
}
```

위 코드를 실행하다가 발생한 네트워크 통신 오류 뿐만 아니라 간단한 타입 오류 등의

일반적인 오류까지도 catch로 잡아낼 수 있습니다.

발견된 에러는 error 객체에 담기기 때문에 에러의 유형에 맞게 에러코드를 처리해주면 됩니다.
