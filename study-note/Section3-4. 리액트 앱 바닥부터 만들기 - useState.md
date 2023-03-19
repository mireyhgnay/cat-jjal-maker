# <div align="center">🐱 Section2. 리액트 앱 바닥부터 만들기 - useState</div>

<br>

## 1. useState 상태로 만들기

값을 맘대로 변경하고 싶을 때 상태라는 것을 사용합니다.

상태는 리액트의 useState 라는 함수로 만들고 또 바꿀 수도 있습니다.

<br>

## 2. useState ‘생성’ 버튼 클릭할 때마다 ‘1’ 숫자값 증가시기 `React.useState()`

counterState 는 아래 counter, setCounter 두개로 나뉠 수 있다.

```jsx
const counterState = React.useState(1);

const counter = counterState[0];
const setCounter = counterState[1];
```

- counterState[0] : useState 의 첫번째 인자는 counter 그 자체이고,
- counterState[1] : useState 의 두번째 인자는 그 counter를 조작하는 인자이다
- `setCounter` 를 사용해서(= 두번째 인자를 통해서) 첫번째 인자를 자유롭게 바꿀 수 있다.

<br>

**Form 컴포넌트**

```jsx
const Form = () => {
        // 상태 변경하기
        const counterState = React.useState(1); // 초기값 1 설정
        const counter = counterState[0];
        const setCounter = counterState[1];

        console.log("카운터", counter); // 카운터 0

        // 생성 버튼(form태그) 클릭 시, 전송하도록 하는 함수
        function handleFormSubmit(event) {
          event.preventDefault();
					setCounter(counter + 1);
        }

        return (
          // 생략 ..
        );
      };
```

브라우저 시작되자 마자 콘솔에 기본적으로 출력되는 초기값은 ‘카운터 0’ 이고  
생성 버튼을 클릭하면 counter 에 1 씩 더해져 계속 찍혀 나옵니다.

<br>

**코드 간소화**

```jsx
const [counter, setCounter] = React.useState(1);
```

<br>

## 3. 상태 끌어 올리기(lifting state up)

자식 컴포넌트(Form)에서만 쓰이던 상태를 상위 컴포넌트에서 같이 쓸 수 있을 때 그 상태를 위로 끌어올리게 됩니다.

그것을 상태 끌어올리기라고한다.

**상태를 다른 컴포넌트에서 선언하도록 바꾸고 상위 컴포넌트에서 선언한 상태를 자식 컴포넌트에서 props로 넘겨준다!**

<br>

```
컴포넌트를 디자인 할 때 상태를 어디다가 써야할까?
props를 어디까지 내려보내느냐?
이런거엔 정답이 없다.
하지만 무엇이 더 깔끔하게 만드는지! 이후에 생각해야한다.
일단 처음엔 구현에 초점을 맞추고
이후 코드 실력을 쌓고 나서 클린코드에 대해서 생각하면 좋다.
```

<br>

## 4. 리스트 만들기

고양이 리스트를 하나하나 추가하지 않도록 리스트를 생성해준다.

- 고양이 이미지를 배열로 생성해서 map을 사용해서 리스트 생성해주기
- map() : 배열 인자들을 하나하나 순회하면서 함수를 수행해서 새로운 배열로 만들어준다

<br>

**EX)**

```jsx
["고양이1", "고양이2", "고양이3"].map((cat) => cat + "귀여워");
// ["고양이1귀여워", "고양이2귀여워", "고양이3귀여워"]
```

<br>

```jsx
function Favorites() {
  const CAT1 = "./images/cat.png";
  const CAT2 = "./images/cat2.jpeg";

  const cats = [CAT1, CAT2, CAT1, CAT2];

  return (
    <ul className="favorites">
      {cats.map((cat) => (
        <CatItem img={cat} key={cat} />
      ))}
    </ul>
  );
}
```

- 고유 key값이 없다는 콘솔에 에러가 떠서 key값을 추가해주면 된다.
- 리스트는 많이 사용되고, 그럴 때마다 map도 많이 사용되므로 잘 알고있어야 한다!

<br>

## 5. 상태, prop, 이벤트, 리스트 기능 사용해보기

```jsx
const [favorites, setFavorites] = React.useState([CAT1, CAT2]);

function handleHeartClick() {
  console.log("하트 눌렀음");
  // favorites 배열을 펼쳐서 쓰고, CAT3를 추가하도록 한다.
  setFavorites([...favorites, CAT3]);
}
```

1. favorites state를 추가하고
2. 초기값에 [CAT1, CAT2] 을 넣어주었고
3. MainCard 에 있는 하트를 눌렀을 때 handleHeartClick() 함수를 수행시킨다

   - 원래는 handleHeartClick() 이 MainCard 컴포넌트 내부에 있었는데
   - handleHeartClick 이벤트를 공유하기 위해서 함수를 위로 끌어올려줬다

4. setFavorites를 사용해서 하트 버튼을 클릭시(handleHeartClick 이벤트 실행시) favorites 배열을 펼쳐서 쓰고, CAT3를 추가하도록 한다.

<br>

## 6. form에서 소문자를 입력해도 대문자로 출력되도록 해보기

추가된 코드만 작성함

```jsx
const Form = ({ handleFormSubmit }) => {
  const [value, setValue] = React.useState("");

  function handleInputChange(e) {
    setValue(e.target.value.toUpperCase());
  }

  return (
    <form onSubmit={handleFormSubmit}>
      <input value={value} onChange={handleInputChange} />
    </form>
  );
};
```

1. value state 를 추가해준다. value, setValue 초기값은 “”
2. `handleInputChange` 이벤트 추가해서 form 의 입력값의 상태를 대문자로 바꿔준다
   - `input` 내장 이벤트 `onChange` : input 의 값이 체인지 될때마다 수행해준다
   - `String.prototype.toUpperCase()` : 문자열을 대문자로 변환해 반환합니다
3. input 의 value 를 상태의 value 로 설정해준다

<br>

## 7. Form 검증 : 사용자들이 폼을 사용할 때 만날 수 있는 에러 잡기

- 한글은 입력할 수 없습니다. (정규표현식 사용)
  ```jsx
  const includesHangul = (text) => /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/i.test(text);
  ```

<br>

- 에러메세지 상태 생성하기

  ```jsx
  // error message state
  const [errorMessage, setErrorMessage] = React.useState("");

  function handleInputChange(e) {
    const userValue = e.target.value;

    if (includesHangul(userValue)) {
      setErrorMessage("한글은 입력할 수 없습니다.");
    } else {
      setErrorMessage(""); // 에러메세지 초기화
    }
  }
  ```

  - input value 값을 한글인지 정규식으로 파악해서 한글을 입력할 경우, `setErrorMessage` 메세지가 뜨도록 한다.
  - 에러메세지가 나타난 후, 다시 한글을 지우고 영어만 잘 입력했는데도 에러메세지가 사라지지 않는 에러가 있어 `setErrorMessage("");` 로 값을 다시 초기화 시켜준다.
  - 에러 메세지는 버튼 하단에 p 태그를 추가해서 출력되도록 한다
    `<p *style*={{ color: "red" }}>{errorMessage}</p>`

<br>

- 빈값

  ```jsx
  function handleFormSubmit(e) {
    e.preventDefault();
    setErrorMessage("");

    if (value === "") {
      setErrorMessage("빈 값으로 만들 수 없습니다.");
    }
  }
  ```

  - 초기화 시킬 때 else문으로 넣지 않고, 최상위에 먼저 초기화를 시켜주고 if문을 실행해도 초기화가 잘 된다.
