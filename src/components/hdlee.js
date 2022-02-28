import React, {Component} from 'react';
import './artists.css';


class Hdlee extends Component {
  constructor(props){
    super(props);
    this.state = {
    }
  }

  sectionTitle(){
    return(
      <div className="row">
        <div className="col-lg-12 text-center">
            <h2 className="section-heading subpageHeading">Author</h2>
        </div>
      </div>
    )
  }

  drawLectures(){
    var info_ = <div className="singleLectureContainer">
      <div className="singleWebsiteCard">
        <a href="https://needleworm.github.io/hyundo" target="_blank"  rel="noreferrer">
          <img className="websiteImage" src="https://cdn.jsdelivr.net/gh/cheesecake-studio/cheesecake-studio.github.io/src/images/artists/hdlee.jpeg" alt="projectimage"/>
        </a>
        <div className="projectText">
          <a href="https://needleworm.github.io/hyundo" target="_blank"  rel="noreferrer">
            <p><h5>이현도 (Hyundo Lee) <i class="fas fa-external-link-alt"></i></h5></p>
          </a>
          <p className="bookDescription">
            <strong>Style</strong><br/>
            - 차갑고 삭막한 대상을 따뜻한 눈길로 바라보려 노력합니다.
          </p><hr className="ln"/><br/>

          <p className="bookDescription">
          <strong>Publication</strong><br/>
              - 법대로 합시다 (지식과감성#, 2016)
          </p>

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
  
export default Hdlee;