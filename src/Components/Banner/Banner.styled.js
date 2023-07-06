/** @format */
import styled from "styled-components";

const Wrapper = styled.div`
  .homeBanner {
    padding: 140px 0px 70px 0px;
  }
  .leftContentSingleItem {
    position: relative;
    z-index: 95;
  }


  .Content {
  }
  .Content h4 {
    font-size: 41px;
    line-height: 60px;
    font-weight: 400;
    color: white;
  }
  .Content h4 span {
    color: #d8f802;
    margin-right: 20px;
  }

  .counter {
    left: -15px;
    display: flex;
    margin: 30px 0px 20px 0px;
    position: relative;
    left: -15px;
  }
  .buttonGroup {
    display: flex;
  }
  .counter button {
    padding: 4px 15px;
    font-size: 19px;
    display: flex;
    align-items: center;
    background: transparent;
    color: white;
    border: 1px solid #000000;

    cursor: pointer;

    background-color: #000000;
    margin: 0px 0px 0px 0px;
    transition: 0.5s ease-in-out;

    height: 56px;
  }

  .inputField {
    width: 120px;
    text-align: center;
    /* padding: 0px 20px; */
    height: 56px;
    display: flex;
    align-items: center;
    justify-content: center;

    border: 1px solid #000000;
    background-color: #000000;
    border-left: 1px solid white;
    border-right: 1px solid white;
  }
  .mintButton {
  }
  .mintButton button {
    margin-left: 30px;
    padding: 30px 40px;
    font-size: 20px;
    color: black;
    background-color: #d8f802;
    cursor: pointer;
    border-radius: 0px;
    border: 1px solid #d8f802;
    border-radius: 5px;
    -webkit-transition: 0.5s ease-in-out;
    transition: 0.5s ease-in-out;

    font-weight: 700;
    border-radius: 40px;
  }
  .mintButton button:hover {
    background-color: transparent;
    border: 1px solid #d8f802;
    color: #d8f802;
  }
  .rightColumn {
    position: relative;
    z-index: 95;
  }
  .boxshadow2 {
    position: absolute;
    bottom: -20px;
    right: 0;
    box-shadow: -7px -40px 102px 39px rgb(28 81 254 / 75%);
    -webkit-box-shadow: -7px -40px 102px 39px #a3b512;
    -moz-box-shadow: -7px -40px 102px 39px rgba(28, 81, 254, 0.75);
    width: 160px;
    height: 240px;
    -webkit-filter: blur(111px);
    filter: blur(91px);
    z-index: -2;
  }
  .bannerImges {
    text-align: right;
  }
  .bannerImges img {
    cursor: pointer;
    transition: 0.5s ease-in-out;
    overflow: hidden;
    box-shadow: 1px 0px 40px 5px rgb(202 230 90 / 75%);
    -webkit-box-shadow: 1px 0px 40px 5px rgb(93 112 15 / 75%);
    -moz-box-shadow: 1px 0px 40px 5px rgba(202, 230, 90, 0.75);
  }
  .bannerImges img:hover {
    transform: translateY(-10px);
  }
  .bannerImges2 {
  }
  .bannerImges2 img {
    width: 80%;
    border-radius: 50%;
    cursor: pointer;
    transition: 0.5s ease-in-out;
    overflow: hidden;
  }
  .bannerImges2 img:last-child {
    border-radius: 80px;
    height: 230px;
    object-fit: cover;
  }
  .minusBUtton {
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
  }
  .plusButon {
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
  }
  .bannerImges2 img:hover {
    transform: translateX(10px);
  }
  @media (max-width: 575.98px) {
    .homeBanner {
      padding: 50px 0px;
    }
    .row {
      flex-direction: column-reverse;
    }
    .col-md-6 {
      flex: 0 0 100%;
      max-width: 100%;
    }
    .bannerImges {
      text-align: center;
      margin: 50px 0px;
    }
    .bannerImges img {
      width: 70%;
    }
    .Content {
      text-align: center;
    }
    .Content h4 {
      font-size: 29px;
      line-height: 36px;
      
  

    }

    .counter {
      display: block;
    }
    .mintButton {
      text-align: center;
    }
    .leftContentSingleItem {
      margin-top: 30px;
    }
    .leftContentSingleItem {
      overflow: auto;
      margin: 0 auto;
      .boxshadow2 {
        right: 0;

        width: 210px;
        height: 240px;
        bottom: -120px;
      }
      .bannerImges img {
        height: 220px;
      }
      .bannerImges2 img:last-child {
        height: 180px;
      }
      .buttonGroup {
        justify-content: center;
      }
      .mintButton {
        display: flex;
        justify-content: center;
        margin-top: 20px;
      }
    }
  }
  @media (min-width: 576px) and (max-width: 767.98px) {
    .row {
      flex-direction: column-reverse;
    }
    .col-md-6 {
      flex: 0 0 100%;
      max-width: 100%;
    }
    .bannerImges {
      text-align: center;
      margin-bottom: 170px;
    }
    .bannerImges img {
      width: 50%;
    }
    .Content h4 {
      font-size: 40px;
    }
    .counter {
      justify-content: center;
    }
    .mintButton {
      text-align: center;
    }
    .leftContentSingleItem {
      margin: 0 auto;
    }
    .Content h4 {
      font-size: 34px;
      line-height: 41px;
      text-align: center;
    }
    .boxshadow2 {
      right: 0px;
      bottom: -130px;
    }
    .counter {
      display: flex;
      justify-content: center;
    }
    .mintButton button {
      margin-left: 20px;
      margin-top: 0px;
      padding: 24px 40px;
      font-size: 17px;
    }

    .bannerImges2 img:last-child {
      border-radius: 80px;
      height: 190px;
      object-fit: cover;
    }
  }
  @media (min-width: 768px) and (max-width: 991.98px) {
    .bannerImges img {
      width: 80%;
    }
    .Content h4 {
      font-size: 29px;
      line-height: 47px;
    }
    .mintButton button {
      margin-left: 30px;
      padding: 30px 30px;
      font-size: 17px;
      width: 156px;
      text-align: center;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .bannerImges {
      text-align: center;
    }
    .boxshadow2 {
      right: 0px;
    }
    .counter {
      display: block;
    }
    .mintButton button {
      margin-left: 14px;
      margin-top: 30px;
    }
    .bannerImges img {
      height: 230px;
    }
    .bannerImges2 img:last-child {
      border-radius: 80px;
      height: 190px;
      object-fit: cover;
    }
  }
  @media (min-width: 992px) and (max-width: 1199.98px) {
    .boxshadow2 {
      right: 0px;
    }
  }
  .bannerCol {
  
    @media (max-width: 575.98px) {

      
    }
  }
`;

export default Wrapper;
