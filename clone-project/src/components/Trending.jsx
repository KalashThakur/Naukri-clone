import { Component } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { TrendingCards } from "./TrendingCards";
import './Trending.module.css';

export default class MultipleItems extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 800,
      slidesToShow: 4,
      slidesToScroll: 4,
      marginBottom: "25px",
    };
    return (
      <div  >
        <h1
          style={{
            fontSize: "32px",
            fontFamily: "sans-serif",
            fontWeight: "bold",
            marginBottom: "25px",
          }}
        >
          Trending on Naukri today
        </h1>

<br />
        <Slider {...settings} style={{ width: "70%", margin: "auto"}}>
          <div>
            <TrendingCards
              image="https://static.naukimg.com/s/0/0/i/trending-naukri/remote.svg"
              title="Remote >"
              des="6.1K+ Jobs"
            />
          </div>
          <div>
            <TrendingCards
              image="https://static.naukimg.com/s/0/0/i/trending-naukri/mnc.svg"
              title="MNC"
              des="60.9K+ Jobs"
            />
          </div>
          <div>
            <TrendingCards
              image="https://static.naukimg.com/s/0/0/i/trending-naukri/hr.svg"
              title="HR"
              des="4K+ Jobs"
            />
          </div>
          <div>
            <TrendingCards
              image="https://static.naukimg.com/s/0/0/i/trending-naukri/marketing.svg"
              title="Marketing"
              des="2.2K+ Jobs"
            />
          </div>
          <div>
            <TrendingCards
              image="https://static.naukimg.com/s/0/0/i/trending-naukri/data-science.svg"
              title="Data Science"
              des="2K+ Jobs"
            />
          </div>
          <div>
            <TrendingCards
              image="https://static.naukimg.com/s/0/0/i/trending-naukri/software.svg"
              title="Software & IT"
              des="29.9K+ Jobs"
            />
          </div>
          <div>
            <TrendingCards
              image="https://static.naukimg.com/s/0/0/i/trending-naukri/sales.svg"
              title="Sales"
              des="9.2K+ Jobs"
            />
          </div>
          <div>
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
          </div>
        </Slider>
        </div>
      
    );
  }
}

// export const Trending = () => {
//   return (
//     <div>
//         <h1 style={{fontSize: "32px", fontFamily: "sans-serif", fontWeight: "bold"}}>Trending on Naukri today</h1>
//         <TrendingCards  image="https://static.naukimg.com/s/0/0/i/trending-naukri/remote.svg" title="Remote >" des="6.1K+ Jobs" />
//         <TrendingCards image="https://static.naukimg.com/s/0/0/i/trending-naukri/mnc.svg" title="MNC" des="60.9K+ Jobs" />
//         <TrendingCards image="https://static.naukimg.com/s/0/0/i/trending-naukri/hr.svg" title="HR" des="4K+ Jobs" />
//         <TrendingCards image="https://static.naukimg.com/s/0/0/i/trending-naukri/marketing.svg" title="Marketing" des="2.2K+ Jobs" />
//         <TrendingCards image="https://static.naukimg.com/s/0/0/i/trending-naukri/data-science.svg" title="Data Science" des="2K+ Jobs" />
//         <TrendingCards image="https://static.naukimg.com/s/0/0/i/trending-naukri/software.svg" title="Software & IT" des="29.9K+ Jobs" />
//         <TrendingCards image="https://static.naukimg.com/s/0/0/i/trending-naukri/sales.svg" title="Sales" des="9.2K+ Jobs" />
//         <TrendingCards image="https://static.naukimg.com/s/0/0/i/trending-naukri/freshers.svg" title="Fresher" des="55.1K+ Jobs" />
//         <TrendingCards image="https://static.naukimg.com/s/0/0/i/trending-naukri/startup.svg" title="Startup" des="4.2K+ Jobs" />

//     </div>
//   )
// }
