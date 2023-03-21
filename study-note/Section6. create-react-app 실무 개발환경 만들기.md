# <div align="center">🐱 Section6. create-react-app 실무 개발환경 만들기</div>

<br>

## create-react-app

리액트 초기 개발에 필요한 모든 것을 자동으로 해준다.

- 지금까지 셋업해둔 것은 오로지 개인적으로만 셋팅해둔 것이고, (프로덕션 버전 리액트 라이브러리 사용)
  ```jsx
  <script
        src="https://unpkg.com/react@18/umd/react.development.js"
        crossorigin
      ></script>
      <script
        src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"
        crossorigin
      ></script>
  ```
- 바벨도 제거해 줄것이다. 브라우저에서 매번 바벨로 JS를 통역하지 않고 이미 통역된 JS 를 올리는 방법 사용
- 실무에서 작업한 것이라면 셋업을 변경해주어야한다.

<br>

1. 간단한 앱 껍데기
2. 리액트 라이브러리 셋업 (개발용 / 프로덕션용)
3. 웹팩 셋업
   1. 라이브 서버
   2. 저장할때마다 JSX → JS
4. 테스트 셋업
5. 빌드 셋업
   1. JS로 변환, 코드용량 최소화, 프로덕션 라이브러리 설정 등

<br>

## 변환, 최소화, 압축 등의 빌드는 웹팩에서 진행합니다.

[🔗 Webpack 이란?](https://joshua1988.github.io/webpack-guide/webpack/what-is-webpack.html)

[🔗 Webpack 강의](https://www.inflearn.com/course/%ED%94%84%EB%9F%B0%ED%8A%B8%EC%97%94%EB%93%9C-%EC%9B%B9%ED%8C%A9?inst=747606f7&utm_source=blog&utm_medium=githubio&utm_campaign=captianpangyo&utm_term=banner)

<br>

## 새로운 React 앱 만들기

🔗 https://ko.reactjs.org/docs/create-a-new-react-app.html

아래 명령어 세개 만으로 실행할 수 있다.

```bash
npx create-react-app [APP 이름]
cd [APP 이름]
npm start
```

**Terminal (root)**

```bash
npx create-react-app cat-jjal-maker-cra
```

👉 Happy hacking! 뜨면 설치 성공

<br>

```bash
cd cat-jjal-maker-cra
npm start
```

👉 http://localhost:3000/cat-jjal-maker 페이지가 뜨면서 리액트 앱이 뜨면 성공

<br>

## cat-jjal-maker-cra 폴더 내 구조 뜯어보기

- 메인이 되는건 src/App.js
- div#root 안에 앱 내용을 모두 그려준다
