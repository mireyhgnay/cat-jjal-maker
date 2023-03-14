# <div align="center">🐱 Section2. 리액트 앱 바닥부터 만들기 - 스타일링</div>

<br>

## 스타일링

CSS 로 작성되어있는 것을 일단 제거하고 컴포넌트에 style 로 설정해준다.

```jsx
function CatItem(props) {
  // console.log(props);
  return (
    <li>
      <img src={props.img} style={{ width: "150px" }} />
    </li>
  );
}
```

- style = {} : 중괄호로 묶어주는 이유 props 를 넘겨준다고 이해하면 된다
- 스타일을 객체로 써주어야한다. 그래서 style = {{ }} 중괄호로 두번 감싸는 것이다

<br>

### 리액트 스타일링 트렌드

- Emotion [https://emotion.sh/docs/introduction](https://emotion.sh/docs/introduction) (styled-components 방식) ⭐
- Tailwind CSS [https://tailwindcss.com/](https://tailwindcss.com/)
  - 토이프로젝트에서 많이 사용된다
  - 클래스만 추가해도 정렬이 자동으로 되어 편하긴 하지만, 정말 미니프로젝트일때만 유용할 것 같다
