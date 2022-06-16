// import React, { Component } from "react";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import Slider from "react-slick";
import { TrendingCards } from "./TrendingCards";
import style from './Trending.module.css';

// export default class Trending extends Component {
//   render() {
//     const settings = {
//       dots: true,
//       infinite: true,
//       speed: 800,
//       slidesToShow: 4,
//       slidesToScroll: 4,
//       marginBottom: "25px",
//     };

export const Trending = () => {
    return (
      <div>
        <h1
          style={{
            fontSize: "32px",
            fontFamily: "sans-serif",
            fontWeight: "bold",
            margin: "auto",
            marginBottom: "25px",
            marginTop: "45px",
            marginLeft: "150px",
            textAlign: "center"
          }}
        >
          Trending on Naukri today
        </h1>

          <br />
        {/* <Slider {...settings} style={{ width: "70%", margin: "auto"}}> */}
        <div style={{display: "flex", gap: "20px", marginLeft: "100px"}}>
          <div className={style.cards} style={{width: "200px"}}>
            <TrendingCards
              image="https://static.naukimg.com/s/0/0/i/trending-naukri/remote.svg"
              title="Remote >"
              des="6.1K+ Jobs"
            />
          </div>
          <div style={{width: "200px"}}>
            <TrendingCards
              image="https://static.naukimg.com/s/0/0/i/trending-naukri/mnc.svg"
              title="MNC"
              des="60.9K+ Jobs"
            />
          </div>
          <div style={{width: "200px"}}>
            <TrendingCards
              image="https://static.naukimg.com/s/0/0/i/trending-naukri/hr.svg"
              title="HR"
              des="4K+ Jobs"
            />
          </div>
          <div style={{width: "200px"}}>
            <TrendingCards
              image="https://static.naukimg.com/s/0/0/i/trending-naukri/marketing.svg"
              title="Marketing"
              des="2.2K+ Jobs"
            />
          </div>
          <div style={{width: "200px"}}>
            <TrendingCards
              image="https://static.naukimg.com/s/0/0/i/trending-naukri/data-science.svg"
              title="Data Science"
              des="2K+ Jobs"
            />
          </div>
          <div style={{width: "200px"}}>
            <TrendingCards
              image="https://static.naukimg.com/s/0/0/i/trending-naukri/software.svg"
              title="Software & IT"
              des="29.9K+ Jobs"
            />
          </div>
          {/* <div>
            <TrendingCards
              image="https://static.naukimg.com/s/0/0/i/trending-naukri/sales.svg"
              title="Sales"
              des="9.2K+ Jobs"
            />
          </div> */}
          {/* <div>
            <TrendingCards
              image="https://static.naukimg.com/s/0/0/i/trending-naukri/freshers.svg"
              title="Fresher"
              des="55.1K+ Jobs"
            />
          </div>
          <div>
            <TrendingCards
              image="https://static.naukimg.com/s/0/0/i/trending-naukri/startup.svg"
              title="Startup"
              des="4.2K+ Jobs"
            />
          </div> */}
         {/* </Slider> */}
         </div>




         <h1
          style={{
            fontSize: "32px",
            fontFamily: "sans-serif",
            fontWeight: "bold",
            margin: "auto",
            marginBottom: "25px",
            marginTop: "45px",
            marginLeft: "150px",
            textAlign: "center"
          }}
        >
          Explore top companies hiring now
        </h1>

          <br />
        {/* <Slider {...settings} style={{ width: "70%", margin: "auto"}}> */}
        <div style={{display: "flex", gap: "20px", marginLeft: "100px"}}>
        <div style={{width: "200px"}}>
            <TrendingCards
              image="https://static.naukimg.com/s/0/0/i/trending-naukri/startup.svg"
              title="Startup"
              des="63 are actively hiring"
            />
          </div> 
          <div style={{width: "200px"}}>
            <TrendingCards
              image="https://static.naukimg.com/s/0/0/i/trending-naukri/mnc.svg"
              title="MNCs"
              des="420 are actively hiring"
            />
          </div>
          <div style={{width: "200px"}}>
            <TrendingCards
              image="https://static.naukimg.com/s/0/0/i/trending-naukri/fortune-500.svg"
              title="Fortune 500"
              des="91 are actively hiring"
            />
          </div>
          <div style={{width: "200px"}}>
            <TrendingCards
              image="https://static.naukimg.com/s/0/0/i/trending-naukri/finance.svg"
              title="Banking & Finance"
              des="314 are actively hiring"
            />
          </div>
          <div style={{width: "200px"}}>
            <TrendingCards
              image="https://static.naukimg.com/s/0/0/i/trending-naukri/data-science.svg"
              title="Data Science"
              des="98 are actively hiring"
            />
          </div>
          <div style={{width: "200px"}}>
            <TrendingCards
              image="https://static.naukimg.com/s/0/0/i/trending-naukri/software.svg"
              title="Software & IT"
              des="29.9K+ Jobs"
            />
          </div>
         </div>
        </div>
      
    );
  }
// }

