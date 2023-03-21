import React from "react";
import Title from "./components/Title";
import Form from "./components/Form";
import Favorites from "./components/Favorites";
import MainCard from "./components/MainCard";

import "./App.css";

const jsonLocalStorage = {
  setItem: (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
  },
  getItem: (key) => {
    return JSON.parse(localStorage.getItem(key));
  },
};

// CAT API
// text를 인자로 받아서 사진에 문구를 text를 통해서 추가해준다
const fetchCat = async (text) => {
  const OPEN_API_DOMAIN = "https://cataas.com";
  const response = await fetch(`${OPEN_API_DOMAIN}/cat/says/${text}?json=true`);
  const responseJson = await response.json();
  return `${OPEN_API_DOMAIN}/${responseJson.url}`;
};

const App = () => {
  const CAT1 = "./cat.png";

  // 상태 변경하기
  // 앱이 처음 실행될때만 로컬스토리지에 접근하도록 성능 개선 (Section5)
  const [counter, setCounter] = React.useState(() => {
    return jsonLocalStorage.getItem("counter"); // 초기값을 저장된 counter 값으로 지정
  });

  // 생성버튼 클릭시, MainCard 고양이 이미지 변경하기
  const [mainCat, setMainCat] = React.useState(CAT1);

  // MainCard 하트 버튼 클릭시,
  const [favorites, setFavorites] = React.useState(() => {
    // 초기에는 저장된 favorites가 없기 때문에 빈 배열을 써라~
    return jsonLocalStorage.getItem("favorites") || [];
  });

  // 하트를 누른 애였는지 판별하기
  const alreadyFavorites = favorites.includes(mainCat); // favorites 배열안에 mainCat이 있냐

  // _번째 인 경우(null), 아예 번째 라는 것도 보여주지 말기
  const counterTitle = counter === null ? "" : counter + "번째 ";

  // 생성하기 전 맨 처음 생성되어있는 문구 설정해주기
  async function setInitialCat() {
    const newCat = await fetchCat("First Cat");
    setMainCat(newCat);
  }

  React.useEffect(() => {
    setInitialCat();
  }, []);

  // 생성 버튼(form태그) 클릭 시, 전송하도록 하는 함수
  async function updateMainCat(value) {
    // input value 값을 문구로 가져오도록 한다 (value useState 의 value를 가져온 것)
    const newCat = await fetchCat(value);

    setMainCat(newCat);

    // counter 숫자 연속으로 눌러도 잘 올라가도록
    setCounter((prev) => {
      const nextCounter = prev + 1;
      jsonLocalStorage.setItem("counter", nextCounter);
      return nextCounter;
    });
  }

  // 버튼을 클릭했을 때, 콘솔에 하트 눌렀음 을 출력한다
  function handleHeartClick() {
    const nextFavorites = [...favorites, mainCat];
    setFavorites(nextFavorites);
    jsonLocalStorage.setItem("favorites", nextFavorites);
  }

  return (
    <div>
      <Title>{counterTitle}고양이 가라사대</Title>
      <Form updateMainCat={updateMainCat} />
      <MainCard
        img={mainCat}
        onHeartClick={handleHeartClick}
        alreadyFavorites={alreadyFavorites}
      />
      <Favorites favorites={favorites} />
    </div>
  );
};

export default App;
