import "../styles/flipCard.css";

function Info() {
  return (
    <div className=" flex-col w-full max-w-[1000px] h-auto mb-20">
      <span className="font-bold text-bold">
        🗺️ 대회 장소
        <br />
      </span>

      <span className="font-medium text-light">
        경기도 용인시 수지구 죽전로 152 단국대학교 죽전캠퍼스 사범관 206호
      </span>

      <div className="card">
        <img
          className="card-front"
          src="/images/location.png"
          alt="location"
        />

        <img
          className="card-back"
          src="/images/placein.png"
          alt="place"
        />
      </div>
      

      <span className="font-medium text-light text-gray-500">
        ※ 찾아오시는 상세한 길은 공식 인스타그램을 통해 안내될 예정입니다!
      </span>
    </div>
  );
}

export default Info;
