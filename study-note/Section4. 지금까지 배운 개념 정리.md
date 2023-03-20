# <div align="center">🐱 Section4. 지금까지 배운 개념 정리</div>

<br>

> JSX, Babel, Components, Styling, Event, State, List, Form, localStorage

<br>

## JSX (JavaScript + XML)

- JavaScript에 HTML 태그를 끼얹은 문법이다.
- HTML 태그 안에선 중괄호`{}` 를 사용해서 JS를 쓸 수 있다.

```jsx
const count = 1;
const Title = <h1>{count}번째 고양이</h1>;
```

Title 변수에 담은 h1태그는 리액트 엘리먼트라고 부른다.

<br>

## Babel

“최신 문법을 브라우저가 이해할 수 있는 자바스크립트로 통역해준다.”

- JS 랑 HTML 을 짬뽕시킨 리액트문법 JSX는 브라우저가 이해하지 못한다.
- Babel 이라는 통영사로 JSX → JavaScript

<br>

## React 코드 Browser에 그리기

“빈 HTML 공간에 React 때려박기”

**HTML**

```html
<div id="#app"></div>
```

**React**

```jsx
const target = document.querySelector("#app");
const myButton = <button>버튼</button>;

// myButton을 target에다 React를 사용해서 그리겠다~
ReactDOM.render(myButton, target);
```

<br>

## Components

“여기저기 재사용 가능한 UI 코드 조각”

```jsx
<Card emoji={dog} title="멍멍" />
<Card emoji={cat} title="야옹" />

function Card(props) {
	return (
		<div>
			{props.emoji}
			<h2>{props.title}</h2>
		</div>
	)
}
```

<br>

## Styling

“React에 CSS 끼얹기”

- CSS 클래스 `className`
  ```jsx
  <div className="danger">위험</div>
  ```
- 인라인 스타일링 : `style = {{ 스타일속성 : 스타일값 }}`
  ```jsx
  <div style={{ color: "red" }}>위험</div>
  ```

<br>

## Event

“사용자 이벤트(클릭, 스크롤 등) 다루기”

- **일반 자바스크립트 이벤트 목록과 동일하지만** 중간을 대문자로 쓴다는 점만 차이가 있다.
  - onclick ➡️ onClick
  - onsubmit ➡️ onSubmit

```jsx
function handleClick(event) {
  console.log("클릭했습니다");
}

<button onClick={handleClick}>제출</button>;
```

<br>

## State(상태)

“컴포넌트 안에서 자유롭게 변경할 값이 필요할 때”

- useState 함수로 상태를 추가할 수 있다.
- const [상태명, 상태변경함수명] = React.useState(초기값);
- 컴포넌트 안에서 만들 수 있다.

```jsx
const [counter, setCounter] = useState(1);

function updateCounter() {
  setCounter(counter + 1);
}

return <button onClick={updateCounter}>카운터는 {counter}</button>;
```

<br>

## List(리스트) UI

“배열로 반복되는 UI 그리기”

- 웹사이트를 만들 때 정말 많이 쓴다.
- 배열에서 map을 돌면서 React UI를 반환한다.

```jsx
const favorites = ['이미지1', '이미지2', '이미지3'];

<ul>
	{favorites.map((image) => <img src={image} />}
</ul>
```

<br>

## Form

“사용자 입력 다루기”

- 사용자 입력값을 직접 다루기 위해 value를 상태로 관리한다.

```jsx
const [value, setValue] = React.useState("초기값이에요");

function onValueChange(e) {
  setValue(e.target.value);
}

<form onSubmit={handleSubmit}>
  // onChange : 사용자가 타이핑을 할 때마다 실행된다
  <input value={value} onChange={onValueChange} />
  <button type="submit">제출</button>
</form>;
```

<br>

## localStorage(로컬스토리지)

브라우저에 있는 기본 기능이다.

“브라우저에 데이터 저장하기”

- 간단한 데이터 저장이 필요할 땐 localStorage를 사용한다.
- 7일까지 저장 가능하다

```jsx
localStorage.setItem("name", "hyerim");
localStorage.getItem("name"); // hyerim
```
