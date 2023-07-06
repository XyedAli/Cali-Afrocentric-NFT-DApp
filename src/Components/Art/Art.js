/** @format */

import React from "react";
import Wrapper from "./Art.styled";
// images
import Artimg from "../../images/artpic1.png";
import Artimg2 from "../../images/artpic.JPG";
import Artimg3 from "../../images/artpic3.png";
import Artimg4 from "../../images/artpic4.png";
import Artimg5 from "../../images/artpic5.png";
// swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";

import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
function Art() {
  return (
    <Wrapper>
      <div className="container">
      <div className="row">
        <div className="col-12">
        <div className="artButton">
          <h3 className="art">Art Collection</h3>
          <h4>Minting your first NFT is exciting</h4>
        </div>
        </div>
        
      </div>
      <div className="row swiperSlider">
          <Swiper
            slidesPerView={4}
            spaceBetween={30}
            loop={true}
            autoplay={{
              delay: 2500,
            }}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              120: {
                slidesPerView: 1,
              },
              390: {
                slidesPerView: 2,
              },
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 30,
              },
            }}
            modules={[Autoplay]}
            className="mySwiper"
          >
           
            <SwiperSlide>
              <div className="swiperImg">
                <img src={Artimg2} className="img-fluid" alt="" />
              </div>
            </SwiperSlide>
            
            <SwiperSlide>
              <div className="swiperImg">
                <img src={Artimg5} className="img-fluid" alt="" />
              </div>
            </SwiperSlide>
            
            <SwiperSlide>
              <div className="swiperImg">
                <img src={Artimg3} className="img-fluid" alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="swiperImg">
                <img src={Artimg} className="img-fluid" alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="swiperImg">
                <img src={Artimg4} className="img-fluid" alt="" />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
     
      </div>
    </Wrapper>
  );
}

export default Art;
