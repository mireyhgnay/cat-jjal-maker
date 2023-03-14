# <div align="center">🐱 Section2. 리액트 앱 바닥부터 만들기 - 컴포넌트 만들기</div>

<br>

## 컴포넌트

페이지에서 컴포넌트가 반복되는 경우들이 많다.  
오픈소스로 되어있는 컴포넌트 라이브러리도 존재한다.  
https://ant.design/components/overview/

<br>

## 컴포넌트 만들기

**수정 전**

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

**수정 후**

- 컴포넌트 이름은 CatItem 처럼 대문자로 시작해주어야 한다.
- 태그로 컴포넌트를 사용한다 `<CatItem />`

```jsx
function CatItem() {
  return (
    <li>
      <img src="./images/cat.png" />
    </li>
  );
}

const favorites = (
  <ul class="favorites">
    <CatItem />
    <CatItem />
    <CatItem />
  </ul>
);
```

<br>

## 첫번째 고양이 사진과 두번째 고양이 사진을 다르게 가지고 가고 싶다면?

```jsx
const favorites = (
  <ul class="favorites">
    <CatItem img="./images/cat.png" />
    <CatItem img="./images/cat2.jpeg" />
  </ul>
);
```

이렇게 컴포넌트에 img 로 설정해주면? 에러가 뜬다.  
CatItem에서 인자를 넘겨주지 않았기 때문에 설정되지 않는 것!

<br>

화살표 함수로 더 개선해 줄 수 있다.

```jsx
const Title = () => {
  return <h1>1번째 고양이 가라사대</h1>;
};

const MainCard = () => {
  return (
    <div class="main-card">
      <img src="./images/cat.png" alt="고양이" width="400" />
      <button>🤍</button>
    </div>
  );
};
```

<br>

넘겨주는 인자를 props라고 부른다.

```jsx
function CatItem(props) {
  return (
    <li>
      <img src={props.img} />
    </li>
  );
}
```

<br>

## ❓왜 props.img로 받아오는가?

<img width="288" alt="props_img" src="https://user-images.githubusercontent.com/111990266/225022378-89191257-449b-446e-a26b-63a21ae1f9bf.png">

`console.log(props);` 를 통해 확인해보면 인자가 오브젝트로 들어오고  
그 안에 img의 key값으로 이미지 경로가 지정되어있어 `props.img`를 불러줘야한다.

<br>

## ❓왜 props.children 으로 받아오는가?

```jsx
const Title = (props) => {
  console.log(props);
  return <h1>1번째 고양이 사진</h1>;
};

const app = (
  <div>
    <Title>1번째 고양이 사진</Title>
  </div>
);
```

<Title>1번째 고양이 사진</Title> 요 태그안에 있는 내용을 console.log 에 props를 넣어 확인해보면,

<img width="246" alt="props" src="https://user-images.githubusercontent.com/111990266/225022694-b6f3dc2f-a541-47b6-bb6a-e34ec420a9c9.png">
 
children 안에 title 내용이 들어있다.      
해당 타이틀의 내용은 children 이라는 애로 넘어온다~ 라고 생각하면 된다.     
그래서 props.children 을 사용해서 인자로 넘겨준다.

<br>

## 위에처럼 props.img 이렇게 넘겨주지 않고 간단한 방법으로는?

```jsx
const MainCard = ({ img }) => {
  return (
    <div class="main-card">
      <img src={img} alt="고양이" width="400" />
      <button>🤍</button>
    </div>
  );
};
```

props.img 를 안쓰고도 바로 props 에서 src를 가져와서 사용할 수 있습니다.
