/** @format */

import React from "react";
import Wrapper from "./Footer.styled";
import { Icon } from "@iconify/react";
import logo from  "../../images/logo.png";
function Footer() {
  return (
    <Wrapper>
      <footer>
        <div className='footer-title'>
                <img src={logo} className='img-logo' alt='img' />

        </div>
        <div className='footer-social-icons'>
          <a href='#'>
            <Icon icon='ant-design:twitter-outlined' />
          </a>
          <a href='#'>
            <Icon icon='ant-design:instagram-outlined' />
          </a>
          <a href='#'>
            <Icon icon='ant-design:youtube-outlined' />
          </a>
        </div>
      </footer>
    </Wrapper>
  );
}

export default Footer;
