/** @format */

import styled from "styled-components";

const Wrapper = styled.div`
  padding: 50px 0px;

  .row {
    justify-content: center;
  }
  .artButton {
    padding: 40px 0px 60px 0px;
    position: relative;
    @media (max-width: 575.98px) {
      overflow: hidden;
    padding-left: 20px;
      
    }
  }
  .artButton::after {
    content: "";
    position: absolute;
    width: 30%;
    height: 1px;
    top: 0;
    left: 10%;
    background-color: white;
    -webkit-transform: translate(80%, 45px);
    -ms-transform: translate(80%, 45px);
    transform: translate(21%, 67px);
  }
  .artButton h3 {
    color: white;
    font-size: 25px;
  }
  .artButton h4 {
    color: #d8f802;
    font-weight: 500;
    font-size: 28px;
    margin-top: 20px;
  }

  .swiperImg {
  }
  .swiperImg img {
    border-radius: 8px;
    cursor: pointer;
    transition: 0.5s ease-in-out;
    overflow: visible;
    height: 280px;
    object-fit: cover;
  }
  .swiperImg img:hover {
    transform: scale(1.1);
  }
  @media (max-width: 575.98px) {
    .swiperSlider {
      padding: 0px 15px;
    }
    .swiperImg img {
      height: auto;
      object-fit: cover;
      width: 100%;
    }
    .artButton::after {
      content: "";

      left: 153px;

      transform: translate(20px, 67px);
    }
  }
  @media (min-width: 576px) and (max-width: 767.98px) {
    .artButton::after {
      content: "";

      transform: translate(80%, 67px);
    }
  }
  @media (min-width: 768px) and (max-width: 991.98px) {
    .swiperImg img {
      height: 210px;
      object-fit: cover;
    }
    .artButton::after {
      content: "";

      transform: translate(50%, 67px);
    }
  }
  @media (min-width: 992px) and (max-width: 1199.98px) {
    .artButton::after {
      content: "";

      transform: translate(31%, 67px);
    }
  }
`;

export default Wrapper;
