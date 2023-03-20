# <div align="center">🐱 Section5. 리액트 앱에 숨 불어넣기</div>

<br>

## Open API

🔗 OPEN API https://github.com/public-apis/public-apis

🔗 우리가 사용할 오픈 API는 https://cataas.com/#/ 이고, 종류 중 **/cat/says/:text 를 사용한다.**

🔗 https://cataas.com/cat/says/reactiscool
이 주소 뒤에 있는 'reactiscool' 부분을 자유롭게 바꿔주면 사진에 있는 텍스트가 변경된다.

<br>

## Fetch API

🔗 [MDN : Fetch 사용하기](https://developer.mozilla.org/ko/docs/Web/API/Fetch_API/Using_Fetch)

Fetch API가 제공하는 전역 fetch() 메서드로 네트워크의 리소스를 쉽게 비동기적으로 가져올 수도 있습니다.  
(= 원하는 api의 결과값을 받아올 수 있다.)

```jsx
// json 의 형태로 가져온다
fetch("https://cataas.com/cat?json=true")
  .then((response) => response.json())
  .then((myJson) => console.log(JSON.stringify(myJson)));
```

<br>

## useEffect :: 생성하기 전 맨 처음 생성되어있는 문구 설정해주기

- 아래 코드처럼 첫 문구를 설정해주면, 콘솔에 무한으로 api가 찍히고 있을 것이다.

  ```jsx
  async function setInitialCat() {
    const newCat = await fetchCat("First Cat");
    setMainCat(newCat);
    console.log(newCat);
  }

  setInitialCat();
  ```

<br>

- useEffect 를 추가해서 함수를 그 안에서 실행시켜주면 정상적으로 잘 실행된다.
  ```jsx
  React.useEffect(() => {
    setInitialCat();
  }, []);
  ```

<br>

## 왜 useEffect 를 써줘야하는가?

APP 안에 그냥 `console.log('hello');` 라고 적어서 실행시키면,  
UI가 바뀔 때마다 (다시 브라우저가 렌더링 될 때마다) hello가 출력된다.

이렇듯 UI가 바뀔때마다 출력(호출)되도록 하지 말고, 원하는 시점에만 출력(호출)하고 싶은 경우가 많다.

```javascript
React.useEffect(() => {
  console.log("hello");
});
```

그래서 이렇게 코드를 작성해주면?  
hello가 ui가 새로 업데이트 될 때마다 호출되는 건 똑같다.

<br>

```javascript
React.useEffect(() => {
  console.log("hello");
}, []);
```

다시 위 코드처럼 두번째 인자에 빈배열을 추가해주면, 함수가 불릴 순간들을 제한해줄 수 있다.

- `[]`는 컴포넌트가 맨 처음에 나타날때만 불린다. 라는 뜻으로 쓰인다.
- 만약, [counter] 변수를 넣어주면, counter 가 바뀔 때마다 hello가 찍힌다

<br>

**✨ 총정리**

리액트 컴포넌트 안에 있는 코드는 기본적으로 UI가 새로 업데이트 될 때마다 불린다.  
특정 상태가 변경될 때만 불리도록 제한을 하고싶을 때는 두번째인자로 [] 를 넘기고,  
거기에 원하는 상태를 넘겨주면 되는 것이다!!!
