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

##
