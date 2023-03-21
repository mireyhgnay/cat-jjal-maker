# <div align="center">🐱 Section6-2. cra로 업데이트 한 것을 github pages로 재배포하기</div>

<br>

### Build

```bash
cd cat-jjal-maker-cra
npm build
```

build 폴더가 숨김폴더로 생성됨 → 요걸 올려줘야함

<br>

### github pages 라이브러리 설치

```bash
cd cat-jjal-maker-cra
npm install gh-pages
```

<br>

### package.json

```bash
"scripts" : {
	"deploy" : "gh-pages -d build"
}

"homepage": "https://mireyhgnay.github.io/cat-jjal-maker",
```

<br>

### 한번더 빌드 돌려준 후, deploy

- npm run build
- npm run deploy → github 페이지로 올라가게됨!

<br>

### github 에 가보면 브랜치가 새로 생성되어 있을 것임 (gh-pages)

- Settings → Pages → main브랜치를 gh-pages 로 변경 → save
- 1-2분 뒤 배포 성공
