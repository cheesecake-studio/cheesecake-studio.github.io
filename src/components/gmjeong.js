import React, {Component} from 'react';
import './artists.css';


class Gmjeong extends Component {
  constructor(props){
    super(props);
    this.state = {
    }
  }

  sectionTitle(){
    return(
      <div className="row">
        <div className="col-lg-12 text-center">
            <h2 className="section-heading subpageHeading">Author, Calumnist</h2>
        </div>
      </div>
    )
  }

  drawLectures(){
    var info_ = <div className="singleLectureContainer">
      <div className="singleWebsiteCard">
        <a href="https://needleworm.github.io" target="_blank"  rel="noreferrer">
          <img className="websiteImage" src="https://cdn.jsdelivr.net/gh/needleworm/cheesecake-studio.github.io/src/images/artists/gmjoeng.jpg" alt="projectimage"/>
        </a>
        <div className="projectText">
          <a href="https://needleworm.github.io" target="_blank"  rel="noreferrer">
            <p><h5>반병현 (Byunghyun Ban)</h5></p>
          </a>
          <p className="bookDescription">
            <strong>Style</strong><br/>
            - 정부검열로 작품을 파괴당한 적이 있습니다.<br/>
            - 날것 그대로의 감정을 다듬어지지 않은 문장으로 구현합니다.<br/>
            - 비문학과 문학의 경계에 대한 의문을 던집니다. 아름다움을 느낄 수 있는 작품이 정보전달력을 갖추었다는 이유만으로 비문학으로 분류되는 것에 대한 반발심을 작품에 투영합니다.
          </p><hr className="ln"/><br/>

          <p className="bookDescription">
            <strong>기고</strong><br/>
            - 고교독서평설 (지학사, 2022년도 연재분)<br/>
            - 마이크로소프트웨어 (IT조선)<br/>
            - POKAS ON
          </p><hr className="ln"/><br/>

          <p className="bookDescription">
            <strong>집필</strong><br/>
            - 6개월치 업무를 하루 만에 끝내는 업무 자동화 (생능출판사, 2020)<br/>
            - 공학자의 오경묵상 (부크크, 2020)<br/>
            - 공학자의 지혜묵상 (부크크, 2020)<br/>
            - 나는 아직 잊힐 준비가 되지 않았어요 (부크크, 2020)<br/>
            - 실전 민사소송법 (부크크, 2020)<br/>
            - 코딩하는 공익 (세창미디어, 2020)<br/>
            - 법대로 합시다 (지식과감성#, 2016)<br/>
            - 카이스트 공부벌레들 (살림FRIENDS, 2012)
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
      <section id="lectures" className="animated bounceInDown">
          {this.sectionTitle()}
          {this.drawLectures()}
      </section>
    );
  }
}
  
export default Gmjeong;