/** @format */

import styled from "styled-components";

const Wrapper = styled.div`
  color: white;
  padding-top: 50px;
  .leader {
    @media (max-width:575.98px) {
   
      
    }
  }
 
  .swiper-slide {
    flex-shrink: 0;
    width: 100%;
    height: 100%;
    position: relative;
    transition-property: transform;
    display: flex;
    flex-wrap: wrap;
    padding-left: 15px;
    padding-right: 15px;
  }
  .col-md-4 {
    flex: 0 0 33.333333%;
    max-width: 28.333333%;
  }
  .col-md-8 {
    flex: 0 0 66.666667%;
    max-width: 71.666667%;
    padding: 0px 15px;
    margin-top:8%;
  }
  .swiper {
    padding: 0 20px;
    margin-bottom: 70px;
  }
  .img img {
    border: 2px solid white;
    width: 90%;
    height: 350px;
    margin-top: 30%;
    
    border-color: #d8f802;
    border-radius:20px;
  }
  .content {
    margin-top: 40px;
  }
  .commonTitle{
    @media (max-width:575.98px) {
      padding-left: 15px;
      
    }
  }
  .content h3 {
    font-size: 20px;
    color: #d8f802;
    font-weight: 600;
    margin-bottom: 20px;
  }
  .content p {
    font-size: 17px;
    font-weight: 400;
    line-height: 22px;
  }

  @media (max-width: 991px) {
    .content {
      margin-top: 0px;
    }
    .img img {
      width: 100%;
      margin-top: 10px;
    }
    .content h3 {
      font-size: 19px;
      margin-bottom: 0;
    }
    .content p {
      font-size: 14px;
    }
  }
  @media (max-width: 575.98px) {
    .col-md-4 {
      flex: 0 0 100%;
      max-width: 100%;
    }
    .col-md-8 {
      flex: 0 0 100%;
      max-width: 100%;
      padding: 0px 0px;
    }
    .content {
      margin-top: 30px;
    }
  }
  .swiper-wrapper {
    padding: 0 30px;
    @media (max-width: 575.98px) {
      padding: 0px;
    }
  }
 
  .swiper-button-prev:after, .swiper-container-rtl .swiper-button-next:after {
    content: 'prev';
    margin-right: 32px;
    font-size: 25px;
    color: #d8f802;
}
.swiper-button-next:after, .swiper-container-rtl .swiper-button-prev:after {
    content: 'next';
    font-size: 25px;
    color: #d8f802;
}
  .swiper-button-next,
  .swiper-button-prev {
    color: #dec263;
    margin-bottom: 591%;
  
  
    
    @media (max-width: 575.98px) {
      display: none;
    }
  }
`;

export default Wrapper;
