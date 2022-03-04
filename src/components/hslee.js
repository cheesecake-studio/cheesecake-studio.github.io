import React, {Component} from 'react';
import './artists.css';


class Hslee extends Component {
  constructor(props){
    super(props);
    this.state = {
    }
  }

  sectionTitle(){
    return(
      <div className="row">
        <div className="col-lg-12 text-center">
            <h2 className="section-heading subpageHeading">Author, Illustrator</h2>
        </div>
      </div>
    )
  }

  drawLectures(){
    var info_ = <div className="singleLectureContainer">
      <div className="singleWebsiteCard">
        <a href="https://needleworm.github.io/hslee" target="_blank"  rel="noreferrer">
          <img className="websiteImage" src="https://cdn.jsdelivr.net/gh/cheesecake-studio/cheesecake-studio.github.io/src/images/artists/hslee.png" alt="projectimage"/>
        </a>
        <div className="projectText">
          <a href="https://needleworm.github.io/hslee" target="_blank"  rel="noreferrer">
            <p><h5>이효석 (Hyoseok Lee) <i class="fas fa-external-link-alt"></i></h5></p>
          </a>
          <p className="bookDescription">
            <strong>Comment</strong><br/>
            - 누군가에게 모든 것을 아는 동네 형이 되고 싶은 사람, 이효석입니다.
          </p><hr className="ln"/><br/>

          <p className="bookDescription">
            <strong>집필</strong><br/>
              - Cheesecake Vol.1 (봄 여름 가을 겨울 그리고 봄) (부크크, 2021)<br/>
              - 비전공자가 업무에서 자주 물어보는 101가지 컴퓨터 활용팁 (생능출판사, 2021)<br/>
              - 실전 민사소송법 (부크크, 2020) (디자인)<br/>
              - 오감 - 펜 끝에서 피어난 인간의 다섯 감각 (도서출판 이온, 2016)
          </p><hr className="ln"/><br/>

          <p className="bookDescription">
            <strong>Experiences</strong><br/>
            - 권도운 18집 '둘이서' 레코드 디렉팅 (2020)<br/>
            - "스타트업에서 주의할 것" (KAIST 교양필수 "리더십 III - 리스크 없는 학생창업" 초청강연, 2017)<br/>
            - 권혁민 2집 수록곡 참여 (2017)<br/>
            - 권혁민 7주년 공연 "With" 총괄감독 및 출연진 참여 (2017)<br/>
            - 제7회 서울센트럴남성합창단 정기공연 - 세종문화회관 (2017)<br/>
            - 서강대학교 Star Wars A cappella Tribute 편곡 및 지휘 (2015)<br/>
            - 제5회 서울센트럴남성합창단 정기공연 - 예술의 전당 (2014)<br/>
          </p><hr className="ln"/><br/>

          <p className="bookDescription">
            <strong>Career</strong><br/>
            - SKIA XR Specialist (2020. 08. ~)<br/>
            - 서강대학교 자연과학부 물리학과 졸업<br/>
            - 現 서울센트럴남성합창단 단원 (2014. 07. ~)<br/>
            - 前 루돌프 사회성 발달 연구소 보조교사 (2016. 12. ~ 2018. 02.)<br/>
            - 前 농업회사법인 상상텃밭(주) 웹디자이너 (2017. 12. ~ 2018. 03.)<br/>
            - 前 Cheesecake Studio CEO (2017. 03. ~ 2020. 06.)<br/>
            - 前 비법인사단 동행 CEO (2017. 03 ~ 2017. 06)<br/>
            - 前 도서출판 이온 CEO (2016. 08 ~ 2017. 02)
          </p><hr className="ln"/><br/>
          </div>
        </div>
      </div>


    return (
      <div className="websitesContainer">
        {info_}
      </div>
    )
  }

  render() {
    return (
      <section id="hslee" className="animated bounceInDown">
          {this.sectionTitle()}
          {this.drawLectures()}
      </section>
    );
  }
}
  
export default Hslee;