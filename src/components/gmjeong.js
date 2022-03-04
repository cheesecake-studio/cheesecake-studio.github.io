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
            <h2 className="section-heading subpageHeading">Designer</h2>
        </div>
      </div>
    )
  }

  drawLectures(){
    var info_ = <div className="singleLectureContainer">
      <div className="singleWebsiteCard">
        <a href="https://needleworm.github.io" target="_blank"  rel="noreferrer">
          <img className="websiteImage" src="https://cdn.jsdelivr.net/gh/cheesecake-studio/cheesecake-studio.github.io/src/images/artists/gmjeong.png" alt="projectimage"/>
        </a>
        <div className="projectText">
          <a href="https://needleworm.github.io" target="_blank"  rel="noreferrer">
            <p><h5>정규민 (Gyumin Jeong) <i class="fas fa-external-link-alt"></i></h5> </p>
          </a>
          <p className="bookDescription">
            <strong>Introduction</strong><br/>
            - 아직은 다듬어지고 싶지 않은, 그러면서도 쉽게 흩어져 버리지 않고 싶은. 많은 것을 경험하고, 이해하며, 더욱 다채로운 색으로 물들어가고 싶은 디자이너 정규민 입니다.
          </p><hr className="ln"/><br/>

          <p className="bookDescription">
            <strong>Experience</strong><br/>
            - Frankfurt Ambiente 전시 참여 (SPEXTRUM), 2019<br/>
            - pureLONDON fashion show 전시 참여 (SPEXTRUM), 2019<br/>
            - 蛙小侠品牌简介 The Kungfu Froggy 굿즈 디자인, 2108<br/>
            - K-ECO 대한민국 친환경대전 전시 참여, 2017<br/>
          </p><hr className="ln"/><br/>

          <p className="bookDescription">
            <strong>Publication</strong><br/>
              - Cheesecake Vol.1 (봄 여름 가을 겨울 그리고 봄) (부크크, 2021)<br/>
              - 실전 민사소송법 (부크크, 2020) (표지 디자인)<br/>
              - 법대로 합시다 (지식과감성#, 2016) (표지 디자인)<br/>
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
      <section id="gmjeong" className="animated bounceInDown">
          {this.sectionTitle()}
          {this.drawLectures()}
      </section>
    );
  }
}
  
export default Gmjeong;