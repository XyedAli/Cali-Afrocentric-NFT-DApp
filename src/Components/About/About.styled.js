/** @format */

import styled from "styled-components";

const Wrapper = styled.div`
  .about {
    padding: 60px 0px;
  }
  .leftSIngleItem {
    position: relative;
  }
  .aboutImg {
  }
  .aboutImg img {
    height: 510px;
  }
  .leftContent {
  }
  .boxShadow {
    position: absolute;
    width: 190px;
    height: 170px;

    left: 0;
    -webkit-filter: blur(110px);
    filter: blur(90px);
    box-shadow: -7px -40px 102px 39px rgb(28 81 254 / 75%);
    -webkit-box-shadow: -7px -40px 102px 39px #a3b512;
    -moz-box-shadow: -7px -40px 102px 39px rgba(28, 81, 254, 0.75);
    z-index: -2;
  }
  .leftContent h2 {
    font-size: 49px;
    font-weight: 600;
  }
  .rigtContentSingleItem {
    position: relative;
  }
  .boxShadow2 {
    position: absolute;
    width: 190px;
    height: 200px;
    top: 50;
    right: 0;

    filter: blur(90px);
    box-shadow: -7px -40px 102px 39px rgb(28 81 254 / 75%);
    -webkit-box-shadow: -7px -40px 102px 39px #a3b512;
    -moz-box-shadow: -7px -40px 102px 39px rgba(28, 81, 254, 0.75);
    z-index: -2;
  }
  .rightContent {
    padding-left: 70px;
    position: relative;
  }
  .rightContent::after {
    content: "";
    position: absolute;
    width: 30%;
    height: 1px;
    top: 0;
    left: 10%;
    background-color: white;
    transform: translate(80%, 45px);
  }
  .aboutCOl {
    display: flex;
    align-items: center;
  }
  .rightContent h2 {
    font-size: 45px;
    letter-spacing: 1px;
    font-weight: 500;
  }
  .rightContent h4 {
    font-size: 29px;
    font-weight: 500;
    margin-bottom: 20px;
  }
  .rightContent p {
    margin-top: 9px;
    font-size: 15px;
    line-height: 28px;
  }
  @media (max-width: 575.98px) {
    .col-md-4 {
      flex: 0 0 100%;
      max-width: 100%;
    }
    .col-md-8 {
      flex: 0 0 100%;
      max-width: 100%;
    }
    .leftContent h2 {
      font-size: 42px;
      text-align: center;
    }
    .rightContent h2 {
      font-size: 35px;
      text-align: left;
    }
    .rightContent p {
      padding: 0px 15px;
    }
    .aboutImg {
      text-align: center;
    }
    .col-md-5,
    .col-md-7 {
      flex: 0 0 100%;
      max-width: 100%;
    }
    .rightContent {
      padding-left: 15px;
      padding-right: 15px;
      margin-top: 70px;
    }
    .aboutImg img {
      height: 300px;
    }
    .rightContent::after {
      content: "";
      position: absolute;

      left: 60px;

      transform: translate(70px, 37px);
    }
  }
  @media (min-width: 576px) and (max-width: 767.98px) {
    .col-md-4 {
      flex: 0 0 100%;
      max-width: 100%;
    }
    .col-md-8 {
      flex: 0 0 100%;
      max-width: 100%;
    }
    .leftContent h2 {
      font-size: 42px;
      text-align: center;
    }
    .rightContent h2 {
      font-size: 35px;
      text-align: left;
    }

    .rightContent p {
      padding: 0px 15px;
    }
    .aboutImg {
      text-align: center;
    }
    .col-md-5,
    .col-md-7 {
      flex: 0 0 100%;
      max-width: 100%;
    }
    .rightContent {
      padding-left: 0px;
      margin-top: 70px;
    }
    .aboutImg img {
      height: 300px;
    }
    .rightContent::after {
      content: "";
      left: 6%;

      transform: translate(52%, 40px);
    }
  }

  @media (min-width: 768px) and (max-width: 991.98px) {
    .leftContent h2 {
      font-size: 36px;
    }
    .rightContent h2 {
      font-size: 29px;
    }
    .col-md-5,
    .col-md-7 {
      flex: 0 0 100%;
      max-width: 100%;
      justify-content: center;
    }
    .rightContent {
      padding-left: 10px;
      margin-top: 70px;
    }
    .aboutImg {
      text-align: center;
    }
    .aboutImg img {
      height: 300px;
    }
    .rightContent::after {
      content: "";
      left: 0%;

      transform: translate(52%, 30px);
    }
  }
  @media (min-width: 992px) and (max-width: 1199.98px) {
    .rightContent::after {
      content: "";

      left: 12%;

      transform: translate(82%, 44px);
    }
    .rightContent h2 {
      font-size: 40px;
    }
    .aboutImg img {
      height: 420px;
    }
    .col-md-5 {
      display: flex;
      align-items: center;
    }
    .rightContent h4 {
      font-size: 26px;

      margin-bottom: 10px;
    }
  }
`;

export default Wrapper;
