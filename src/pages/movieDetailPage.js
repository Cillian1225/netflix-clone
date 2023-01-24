import React from "react";

const movieDetailPage = ({ item }) => {
  console.log("??", item);
  return (
    <div className="detail-cover">
      <div className="movie-detail-poster">
        <img src="https://www.themoviedb.org/t/p/w300_and_h450_bestv2/vUUqzWa2LnHIVqkaKVlVGkVcZIW.jpg" />
      </div>
      <div className="movie-detail-info">
        <div>카테고리</div>
        <div>
          <span>아나 ㅡ.ㅡ</span>
        </div>
        <div>설명</div>
        <div>평점,관객,19금여부</div>
        <div>간략한 설명</div>
        <div>예산</div>
        <div>수익</div>
        <div>개봉일</div>
        <div>Running time</div>
        <div>Watch Trailer</div>
      </div>
    </div>
  );
};

export default movieDetailPage;
