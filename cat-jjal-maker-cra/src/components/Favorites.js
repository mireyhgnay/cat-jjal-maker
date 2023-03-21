import CatItem from "./CatItem";

function Favorites({ favorites }) {
  // 좋아하는 고양이 데이터가 없으면 해당 문구를 보여줘라 (찜을 안누른 상태일 때 보여주도록)
  if (favorites.length === 0) {
    return <div>사진 위 하트를 눌러 고양이 사진을 저장해봐요!</div>;
  }

  return (
    <ul className="favorites">
      {favorites.map((cat) => (
        <CatItem img={cat} key={cat} />
      ))}
    </ul>
  );
}

export default Favorites;
