/** @format */

import React from "react";
import Wrapper from "./Roadmap.styled";

import RoadImg from "../../images/roadmap.png";
import RangeImg from "../../images/range.png";

// import images
// swiper react
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
function Roadmap() {
  return (
    <Wrapper>
      <div className='roadmap' id='roadmap'>
        <div className='container'>
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            loop={true}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Navigation]}
            className='mySwiper'>
            <SwiperSlide>
              <div className='col-md-12'>
                <div className='singleItem'>
                  <div className='imgRoad'>
                    <img src={RoadImg} className='img-fluid' alt='' />
                  </div>

                  <div className='roadContent'>
                    <h2>80% Mintable Reward</h2>
                    <p>
                      DAO is formed and rewards in a mintable for project
                      holders get established. DAO will start with an incentive
                      in rate of mint and distribution for active participation
                      and heavy followers and for influencers and large holders
                      with rarity. The DAO will start with an emphasis to add
                      value and to distribute tokens to follower to encourage
                      involvement in the ecosystem.
                    </p>
                  </div>
                  {/* road content end here */}
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='col-md-12'>
                <div className='singleItem'>
                  <div className='imgRoad'>
                    <img src={RoadImg} className='img-fluid' alt='' />
                  </div>

                  <div className='roadContent'>
                    <h2>80% Mintable Reward</h2>
                    <p>
                      DAO is formed and rewards in a mintable for project
                      holders get established. DAO will start with an incentive
                      in rate of mint and distribution for active participation
                      and heavy followers and for influencers and large holders
                      with rarity. The DAO will start with an emphasis to add
                      value and to distribute tokens to follower to encourage
                      involvement in the ecosystem.
                    </p>
                  </div>
                  {/* road content end here */}
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='col-md-12'>
                <div className='singleItem'>
                  <div className='imgRoad'>
                    <img src={RoadImg} className='img-fluid' alt='' />
                  </div>

                  <div className='roadContent'>
                    <h2>80% Mintable Reward</h2>
                    <p>
                      DAO is formed and rewards in a mintable for project
                      holders get established. DAO will start with an incentive
                      in rate of mint and distribution for active participation
                      and heavy followers and for influencers and large holders
                      with rarity. The DAO will start with an emphasis to add
                      value and to distribute tokens to follower to encourage
                      involvement in the ecosystem.
                    </p>
                  </div>
                  {/* road content end here */}
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='col-md-12'>
                <div className='singleItem'>
                  <div className='imgRoad'>
                    <img src={RoadImg} className='img-fluid' alt='' />
                  </div>

                  <div className='roadContent'>
                    <h2>80% Mintable Reward</h2>
                    <p>
                      DAO is formed and rewards in a mintable for project
                      holders get established. DAO will start with an incentive
                      in rate of mint and distribution for active participation
                      and heavy followers and for influencers and large holders
                      with rarity. The DAO will start with an emphasis to add
                      value and to distribute tokens to follower to encourage
                      involvement in the ecosystem.
                    </p>
                  </div>
                  {/* road content end here */}
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
          <div className='boxShadow'></div>

          <div className='range'>
            <div className='rangImg1'>
              <img src={RangeImg} className='img-fluid' alt='' />
              <p>10%</p>
            </div>
            <div className='rangImg1 rangImg2'>
              <img src={RangeImg} className='img-fluid' alt='' />
              <p>25%</p>
            </div>
            <div className='rangImg1 rangImg3'>
              <img src={RangeImg} className='img-fluid' alt='' />
              <p>45%</p>
            </div>
            <div className='rangImg1 rangImg4'>
              <img src={RangeImg} className='img-fluid' alt='' />
              <p>55%</p>
            </div>

            <div className='rangImg1 rangImg5'>
              <img src={RangeImg} className='img-fluid' alt='' />
              <p>70%</p>
            </div>
            <div className='rangImg1 rangImg6'>
              <img src={RangeImg} className='img-fluid' alt='' />
              <p>80%</p>
            </div>
            <div className='rangImg1 rangImg7'>
              <img src={RangeImg} className='img-fluid' alt='' />
              <p>100%</p>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

export default Roadmap;
