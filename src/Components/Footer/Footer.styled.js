/** @format */

import styled from "styled-components";

const Wrapper = styled.div`
  footer {
    text-align: center;
    padding: 50px 0px;
    border-top: 1px solid #d8f802;
  }
  .img-logo{
    width:15%;
    height:10%;
  }
  .footer-title {
    p {
      font-size: 32px;
      font-weight: 500;
      color: #ffffff;
    }
  }
  .footer-social-icons {
    font-size: 35px;
    padding-top: 20px;
    a {
      margin: 0 8px;
      text-decoration: none;
      color: #ffffff;
      display: inline-block;
      transition: 0.5s ease-in-out;
      :hover {
        transform: translateY(-10px);
        color: #d8f802;
      }
    }
  }
  .copy {
  }
  .copy p {
    color: #babfbf;
  }
`;

export default Wrapper;
