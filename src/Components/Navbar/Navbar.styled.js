/** @format */

import styled from "styled-components";

const Wrapper = styled.nav`
  min-height: 80px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0;
  @media (max-width: 992px) {
    position: relative;
    justify-content: space-between;
    padding: 0 0px;
  }
  @media (max-width: 600px) {
    padding: 0 10px;
  }

  .nav-logo {
    cursor: pointer;
    
    display: flex;
    justify-content: left;
    transition: 0.5s ease-in-out;
    :hover{
      transform: scale(1.1);
    }
    p {
      font-size: 32px;
      font-weight: 300;
      font-family: "Poppins", sans-serif;
      cursor: pointer;
      
      @media (max-width: 1199.98px) { 
        font-size: 24px;
       }
    }
  }
  .nav-link-container {
    display: flex;

    @media (max-width: 992px) {
      position: absolute;
      left: 0%;
      top: 100%;
      width: 100%;
      height: 0;
      overflow: hidden;
      background: #151515;
      transition: 0.5s ease-out;
    }
    ul {
      list-style: none;
      display: flex;
      justify-content: space-around;
      align-items: center;
      @media (max-width: 992px) {
        flex-direction: column;
        margin-left: 50px;
        margin-right: 50px;
        width: 100%;
        padding-bottom: 20px;
      }
      li {
        margin: 0 15px;
        @media (max-width: 1199.98px) { 
          margin: 0 8px;
       }
    }
        @media (max-width: 992px) {
          width: 100%;
        }
        a {
          text-decoration: none;
          color: #ffffff;
          display: block;
          transition: 0.5s ease-in-out;
          :hover{
            transform: translateY(-5px);
            color: #d8f802;
          }
          @media (max-width: 992px) {
            text-align: center;
          }
        }
      }
      .nav-link-last-item {
        margin-right: 80px;
        @media (max-width: 992px) {
          margin: 0;
        }
      }
      .social-media-icon {
        display: flex;
        margin-top: 12px;
        @media (max-width: 992px) {
          justify-content: center;
        }
        a {
          margin: 0 10px;
          font-size: 30px;
        }
      }
      .nav-button {
        @media (max-width: 992px) {
          text-align: center;
        }
        a {
          background: #d8f802;
          color: black;
          padding: 9px 18px;
          border-radius: 8px;
          border: 1px solid #d8f802 ;
          box-shadow: 0px 4px 43px rgba(0, 0, 0, 0.25);
          transition: 0.5s ease-in-out;
          width: 120px;
          text-align: center;

          :hover{
            background-color: transparent;
            border: 1px solid #d8f802 ;
            
          
            
          }

        }
      }
    }
  
  .mobile-menu {
    display: none;
    @media (max-width: 992px) {
      display: flex;
      button {
        border: none;
        color: #ffffff;
        font-size: 30px;
        background: transparent;
      }
    }
  }
  .img-logo{
    width:35%;
    height:20%;
    padding:10px;
    @media (max-width: 992px) {
      width: 25%;
      
    }
    @media (max-width:575.98px) {
      width: 45%;
      
    }
  }
`;
export default Wrapper;
