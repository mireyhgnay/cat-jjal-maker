# <div align="center">✏️ Study2. 자바스크립트 Promise 쉽게 이해하기</div>

<br>

🔗 https://joshua1988.github.io/web-development/javascript/promise-for-beginners/

<br>

## 프로미스란?

프로미스는 자바스크립트 비동기 처리에 사용되는 객체입니다.

```
✏️ 비동기 처리
특정 코드의 실행이 완료될 때까지 기다리지 않고 다음 코드를 먼저 수행하는 자바스크립트의 특성
```

프로미스는 주로 서버에서 받아온 데이터를 화면에 표시할 때 사용합니다.

<br>

## 프로미스 코드

**ajax 통신 코드 (콜백 함수 사용)**

```jsx
function getData(callbackFunc) {
  $.get("url 주소/products/1", function (response) {
    callbackFunc(response); // 서버에서 받은 데이터 response를 callbackFunc() 함수에 넘겨줌
  });
}

getData(function (tableData) {
  console.log(tableData); // $.get()의 response 값이 tableData에 전달됨
});
```

<br>

**위 코드에 프로미스를 적용하기**

```jsx
function getData(callback) {
  // new Promise() 추가
  return new Promise(function (resolve, reject) {
    $.get("url 주소/products/1", function (response) {
      // 데이터를 받으면 resolve() 호출
      resolve(response);
    });
  });
}

// getData()의 실행이 끝나면 호출되는 then()
getData().then(function (tableData) {
  // resolve()의 결과 값이 여기로 전달됨
  console.log(tableData); // $.get()의 reponse 값이 tableData에 전달됨
});
```

콜백함수 처리하던 구조에서 new Promise(), resolve(), then() 와 같은 프로미스 API를 사용한 구조로 바뀌었습니다.

<br>

## 프로미스의 3가지 상태

기본적으로 알아야하는 프로미스의 상태(states)

여기서 상태란 프로미스의 처리 과정을 의미합니다.

new Promise()로 프로미스를 생성하고 종료될 때까지 3가지 상태를 갖습니다.

- Pending(대기) : 비동기 처리 로직이 아직 완료되지 않은 상태
- Fulfilled(이행) : 비동기 처리가 완료되어 프로미스가 결과 값을 반환해준 상태
- Rejected(실패) : 비동기 처리가 실패하거나 오류가 발생한 상태

<br>

## Pending (대기)

new Promise() 메서드를 호출하면 대기상태가 됩니다.

new Promise() 메서드를 호출할 때 콜백 함수를 선언할 수 있고, 인자는 resolve , reject 입니다.

```jsx
new Promise(function (resolve, reject) {});
```

<br>

## Fulfilled (이행)

첫번째 인자 resolve 를 실행하면 이행 상태가 됩니다.

```jsx
new Promise(function (resolve, reject) {
  resolve();
});
```

<br>

이행 상태가 되면 then()을 이용해서 처리 결과 값을 받을 수 있습니다.

```jsx
function getData() {
  return new Promise(function (resolve, reject) {
    var data = 100;
    resolve(data);
  });
}

// resolve()의 결과 값 data를 resolvedData로 받음
getData().then(function (resolvedData) {
  console.log(resolvedData); // 100
});
```

<br>

## Rejected (실패)

두번째 인자인 reject를 호출하면 실패 상태가 됩니다.

```jsx
new Promise(function (resolve, reject) {
  reject();
});
```

<br>

그리고 실패 상태가 되면 실패한 이유를 (실패 처리의 결과값을) catch() 로 받을 수 있습니다.

```jsx
function getData() {
  return new Promise(function (resolve, reject) {
    reject(new Error("Request is failed"));
  });
}

// reject()의 결과 값 Error를 err에 받음
getData()
  .then()
  .catch(function (err) {
    console.log(err); // Error: Request is failed
  });
```

<br>

## 여러개의 프로미스 연결하기

프로미스의 또 다른 특징은 여러개의 프로미스를 연결하여 사용할 수 있다는 점입니다.

then()을 호출하면 새로운 프로미스 객체가 반환되는 것을 알 수 이씁니다.

```jsx
new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve(1);
  }, 2000);
})
  .then(function (result) {
    console.log(result); // 1
    return result + 10;
  })
  .then(function (result) {
    console.log(result); // 11
    return result + 20;
  })
  .then(function (result) {
    console.log(result); // 31
  });
```

- 위 코드는 프로미스 객체를 하나 생성하고 setTimeout() 을 이용해 2초 후에 resolve()를 호출하는 예제
  - resolve() 호출 → 프로미스 대기상태에서 이행 상태로 넘어감 → 첫번째 .then() 의 로직으로 넘어간다
  - 2초 후에
  - 첫번째 then() 이행 결과 값 반환 → 두번째 then으로 넘겨줌
  - 이전 프로미스 결과값 을 받아 두번째 then() 이행 결과 값 반환 → 마지막 then으로 넘겨줌
  - 두번째 프로미스 결과값을 받아 세번째 then() 이행 결과 값 반환
  - 최종결과값 31 반환

<br>

## 프로미스 에러처리는 가급적 catch()를 사용해라

```jsx
// catch()로 오류를 감지하는 코드
function getData() {
  return new Promise(function (resolve, reject) {
    resolve("hi");
  });
}

getData()
  .then(function (result) {
    console.log(result); // hi
    throw new Error("Error in then()");
  })
  .catch(function (err) {
    console.log("then error : ", err); // then error :  Error: Error in then()
  });
```
