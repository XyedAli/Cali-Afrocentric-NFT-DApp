
/** @format */

import styled from "styled-components";

const Wrapper = styled.div`
overflow: hidden;
  padding: 50px 20px;
  .leftSIngleItem {
    position: relative;
  }
  .leftContent {
    position: relative;
  }
  .leftContent::after {
    content: "";
    position: absolute;
    width: 70%;
    height: 1px;
    top: 0;
    left: 100%;
    background-color: white;
    -webkit-transform: translate(80%, 45px);
    -ms-transform: translate(80%, 45px);
    -webkit-transform: translate(21%, 67px);
    -ms-transform: translate(21%, 67px);
    transform: translate(1%, 37px);
  }
  .boxShadow {
    position: absolute;
    width: 190px;
    height: 170px;
    top: 70;
    left: 0;
    -webkit-filter: blur(110px);
    filter: blur(90px);
    box-shadow: -7px -40px 102px 39px rgb(28 81 254 / 75%);
    -webkit-box-shadow: -7px -40px 102px 39px #a3b512;
    -moz-box-shadow: -7px -40px 102px 39px rgba(28, 81, 254, 0.75);
    z-index: -2;
  }
  .leftContent h2 {
    font-size: 35px;
    font-weight: 600;
  }
  .leftContent h3 {
    color: #d8f802;
    font-size: 28px;
    font-weight: 500;
    margin: 40px 0px;
  }
  .bloc-tabs {
    background-color: #3b3636;

    margin-bottom: 30px;
    border-radius: 10px;
  }
  .tabs {
    padding: 15px 20px;
    display: block;
    text-align: center;
    /* width: 50%; */
    background: transparent;
    cursor: pointer;
    /* border-bottom: 1px solid rgba(0,0,0,0.274); */
    box-sizing: content-box;
    position: relative;
    outline: none;
    color: white;
    color: white;

    border-radius: 5px;
    font-size: 22px;
    margin: 25px auto;
  }
  .bloc-tabs2 {
    position: relative;
    left: -60px;
  }
  .singleItemTabs {
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-content: center;
    column-gap: 110px;
  }
  .active-tabs {
    background: #d8f802;
    color: black;
  }

  button {
    border: none;
    transition: 0.5s ease-in-out;
  }
  button :hover {
    transform: translateY(-10px);
  }
  .content-tabs {
    flex-grow: 1;
    background: #3b3636;
    padding: 34px 38px;
    border-radius: 5px;
  }
  .content {
    padding: 0px;
    width: 100%;
    height: 100%;
    display: none;
  }
  .content h2 {
    padding: 0px 0 5px 0px;
  }

  .content p {
    width: 100%;
    height: 100%;
  }
  .active-content {
    display: block;
  }
  .top {
  }
  .top h2 {
    font-size: 22px;
    font-weight: 500;
    margin-bottom: 20px;
  }

  .singleItemTabs2 {
    display: grid;
    grid-template-columns: 1fr 2fr;
  }
  .tabImg {
  }
  .tabImg img {
    width: 100%;
  }
  .tabContent {
    padding-left: 40px;
  }
  .tabContent p {
  }
  @media (max-width: 575.98px) {
    .col-md-8,
    .col-md-4 {
      flex: 0 0 100%;
      max-width: 100%;

    }
    .leftContent h2 {
      font-size: 29px;
      text-align: left;
      padding-left: 20px;
    }
    .leftContent h3 {
      font-size: 16px;

      padding: 0px 20px;
    }

    .singleItemTabs {
      display: block;
    }
    .singleItemTabs2 {
      display: block;
    }
    .bloc-tabs2 {
      left: 0px;
    }
    .container {
      padding: 0px 20px;
    }
    .tabs {
      padding: 10px 14px;
      margin-bottom: 20px;
      font-size: 13px;
    }
    .bloc-tabs {
      margin-top: 40px;
      display: grid;
      grid-template-columns: 1fr 1fr;
      justify-content: center;
      column-gap: 9px;

      padding: 0px 15px;
    }
    .content-tabs {
      padding: 40px 15px;
    }
    .content {
      padding: 0px;
    }
    .tabContent {
      padding-left: 0px;
      padding-top: 40px;
    }
  }
  @media (max-width: 575px) {
    .leftContent{
      overflow: hidden;
    }
    .leftContent::after {
      content: "";
      width: 30%;
      left: 190px;
      -webkit-transform: translate(1%, 25px);
      -ms-transform: translate(1%, 25px);
      transform: translate(-10px, 74px);
    }
  }
  @media (min-width: 576px) and (max-width: 767.98px) {
    .col-md-8,
    .col-md-4 {
      flex: 0 0 100%;
      max-width: 100%;
      padding-left: 20px;
    padding-right: 20px;
    }
    .leftContent h2 {
      font-size: 25px;

      text-align: left;
    }
    .tabs {
      font-size: 17px;
    }
    .bloc-tabs {
      margin-top: 40px;
    }
    .leftContent::after {
      content: "";

      width: 30%;

      left: 70%;

      transform: translate(1%, 25px);
    }
  }
  @media (min-width: 768px) and (max-width: 991.98px) {
    .leftContent h2 {
      font-size: 32px;
    }
    .tabs {
      padding: 8px 14px;

      font-size: 17px;
    }
    .leftContent::after {
      content: "";
      width: 40%;
      left: 90%;
      -webkit-transform: translate(1%, 47px);
      -ms-transform: translate(1%, 47px);
      transform: translate(1%, 37px);
    }
  }
  @media (min-width: 992px) and (max-width: 1199.98px) {
    .leftContent::after {
      content: "";

      width: 50%;

      left: 100%;

      transform: translate(1%, 47px);
    }
    .leftContent h2 {
      font-size: 42px;
    }
  }
`;
export default Wrapper;
