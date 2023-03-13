# <div align="center">🐱 Section1. 리액트가 왜 좋은가요?</div>

<br>

## 돔을 추가및 생성을하기 위해서 자바스크립트는 아래처럼 많은 코드를 작성해야한다.

즉, 번거롭다!

```jsx
// 1. 좋아요 버튼 찾기
const likeButton = document.querySelector(".main-card button");
// 2. 좋아요 버튼 눌렀을 때 이벤트
likeButton.addEventListener("click", function () {
  // 3. 하트 색 바꾸기
  likeButton.innerHTML = "❤️";

  // 4. 고양이 사진을 추가할 곳 찾기
  const favorites = document.querySelector(".favorites");
  // 5. 새로운 고양이 사진 만들기
  const newFavoriteImage = document.createElement("img");
  newFavoriteImage.src = "https://cataas.com/cat/HSENVDU4ZMqy7KQ0/says/react";
  // 6. 고양이 사진을 감싸는 li태그 만들기
  const li = document.createElement("li");
  // 7. li태그에 고양이 사진 넣기
  li.appendChild(newFavoriteImage);
  // 8. 방금 만든 요소 넣기
  favorites.appendChild(li);
});
```

그래서 리액트를 사용해서 간단하게 요소를 추가해보고자 한다~!

<br>

## HTML

```html
<body>
  <div id="app"></div>
</body>
```

<br>

## JAVASCRIPT

```jsx
const catItem = (
  <li>
    <img src="./images/cat.png" />
  </li>
);

const APP = document.querySelector("#app");
// catItem 을 React 를 사용해서 APP에 그려라
ReactDOM.render(catItem, APP);
```

`ReactDOM.render()`를 사용하기 위해서 리액트의 라이브러리가 필요하다.

🔗 [https://ko.reactjs.org/docs/add-react-to-a-website.html#add-react-in-one-minute](https://ko.reactjs.org/docs/add-react-to-a-website.html#add-react-in-one-minute)

<br>

```html
<!-- React를 실행하기 위한 라이브러리 -->
<script
  src="https://unpkg.com/react@18/umd/react.development.js"
  crossorigin
></script>
<script
  src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"
  crossorigin
></script>
<script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>
<script type="text/babel">
  // 생략
</script>
```

<br>

## 왜 Babel을 사용하는가?

> 🔗 바벨 공식 문서 https://babeljs.io/

- 리액트 코드를 브라우저가 이해할 수 있는 자바스크립트 코드로 변환해준다.
- 우리가 적은 리액트 코드를 어떻게 변환해주는지 확인할 수 있다.

<img width="968" alt="babel" src="https://user-images.githubusercontent.com/111990266/224699933-e7f3d91f-4fe4-462a-b9e9-01a16a85cd21.png">

<br>

index.html 에서 확인해보면 `head` 태그 안에 script 하나가 생성되어있을 것이다.

<br>

<img width="440" alt="script" src="https://user-images.githubusercontent.com/111990266/224700210-43c15a9e-17a7-4fd2-a1d2-eccc89c18bde.png">

- 바벨로 변환된 자바스크립트 코드가 있다.
- **브라우저는 아래 리액트코드를 실행하는게 아니라 위에 변환된 자바스크립트 코드를 읽어 실행하는 것!**

<br>

## React 안에서 자바스크립트 코드 사용하기 `{ }`

- catItem 의 내용이 ul안에서 3번 반복된다.
- `{ }` 중괄호를 사용하면 리액트 안에서 자바스크립트 코드를 사용할 수 있다.

```jsx
const catItem = (
  <li>
    <img src="./images/cat.png" />
  </li>
);
const favorites = (
  <ul class="favorites">
    {catItem}
    {catItem}
    {catItem}
  </ul>
);
```

<br>

## 여러개의 컴포넌트를 렌더링 하고 싶을때는?

ReactDOM.render(컴포넌트, 여기다가그려) 는 한가지 컴포넌트만 넣을 수 있다.  
그래서 app 변수 안에 두가지를 넣어주고, app하나를 그려주도록 한다.

```jsx
const app = (
  {mainCard}
  {favorites}
);

const domRender = document.querySelector("#app");
ReactDOM.render(app, domRender);
```

하지만, 이렇게 하면 오류가 난다!  
왜냐하면 리액트에서 최상위 코드는 하나여야한다.  
지금은 mainCard랑 favorites 두개가 모두 최상위 코드로 있기 때문에 오류가 나는 것!

<br>

**해결방안**

```jsx
const app = (
  <div>
    {mainCard}
    {favorites}
  </div>
);
```

div 태그로 하나 감싸주고 컴포넌트를 넣어준다.  
나머지 컴포넌트들도 동일하게 요소로 추가해주며 완료~🥳
