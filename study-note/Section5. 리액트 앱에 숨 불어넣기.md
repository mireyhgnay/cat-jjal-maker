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
