# <div align="center">🐱 Section2. 리액트 앱 바닥부터 만들기 - 이벤트 다루기</div>

<br>

## 이벤트 다루기

버튼을 onClick 했을 때 handleHeartClick 함수가 실행 되어라~~ 라는 함수를 만들어보자

```jsx
const MainCard = ({ img }) => {
  // 버튼을 클릭했을 때, 콘솔에 하트 눌렀음 을 출력한다
  function handleHeartClick() {
    console.log("하트 눌렀음");
  }

  // 버튼을 마우스 오버 했을 때, 콘솔에 하트 스쳐 지나감 을 출력한다
  function handleHeartMouseOver() {
    console.log("하트 스쳐 지나감");
  }

  return (
    <div className="main-card">
      <img src={img} alt="고양이" width="400" />
      <button onClick={handleHeartClick} onMouseOver={handleHeartMouseOver}>
        🤍
      </button>
    </div>
  );
};
```

<br>

### React 의 관례

이벤트 핸들러를 사용했을 때 함수명은 handle어쩌구저쩌구 로 지어주는 것이 리액트에서의 관례이다.

- handleHeartClick
- handleHeartMouseOver
