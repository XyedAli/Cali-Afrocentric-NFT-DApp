/** @format */

import React from "react";
import { useState } from "react";
import Wrapper from "./Ownership.styled";
import TabImage from "../../images/tab.png";

function Ownership() {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <Wrapper>
      <div className="container" id="faq">
        <div className="row">
          {/* single item start here */}
          <div className="col-md-12">
            <div className="row">
              <div className="col-md-12">
                <div className="leftSIngleItem">
                  <div className="leftContent">
                    <h2>Frequently Asked Questions</h2>
                    <h3>
                      Cali-Afrocentric Volume 1 seeks to <br />
                      project authentic African/ world art
                    </h3>
                  </div>
                  <div className="boxShadow"></div>
                </div>
              </div>
            </div>
         
    
        {/* single item end here */}
        {/* right item start here */}
        <div className="row">
          <div className="col-md-4 ">
            <div className="singleItemTabs">
              <div className="bloc-tabs">
                <button
                  className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
                  onClick={() => toggleTab(1)}
                >
                  Q1
                </button>
                <button
                  className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
                  onClick={() => toggleTab(2)}
                >
                  Q2
                </button>
                <button
                  className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
                  onClick={() => toggleTab(3)}
                >
                  Q3
                </button>
              </div>
              <div className="bloc-tabs2 bloc-tabs">
                <button
                  className={toggleState === 4 ? "tabs active-tabs" : "tabs"}
                  onClick={() => toggleTab(4)}
                >
                  Q4
                </button>
                <button
                  className={toggleState === 5 ? "tabs active-tabs" : "tabs"}
                  onClick={() => toggleTab(5)}
                >
                  Q5
                </button>
                <button
                  className={toggleState === 6 ? "tabs active-tabs" : "tabs"}
                  onClick={() => toggleTab(6)}
                >
                  Q6
                </button>
              </div>
            </div>
          </div>
          <div className="col-md-8">
            <div className="content-tabs ">
              <div
                className={
                  toggleState === 1 ? "content  active-content" : "content"
                }
              >
                <div className="top">
                  <h2>When can I buy an Cali-Afrocentric NFT?</h2>
                </div>

                <div className="singleItemTabs2">
                  <div className="tabImg">
                    <img src={TabImage} className="img-fluid" alt="" />
                  </div>
                  <div className="tabContent">
                    <p>
                    “Project will be launched officially in the first week of August however a ‘reveal’ would take place by the last week of July and public sale immediately after the launch”.
                    </p>
                  </div>
                </div>
              </div>

              {/* question2 */}

              <div
                className={
                  toggleState === 2 ? "content  active-content" : "content"
                }
              >
                <div className="top">
                  <h2>What will an Cali-Afrocentric NFT enable me to do as a holder?</h2>
                </div>
                <div className="singleItemTabs2">
                  <div className="tabImg">
                    <img src={TabImage} className="img-fluid" alt="" />
                  </div>
                  <div className="tabContent">
                    <p>
                      With a platinum membership you will be invited to request
                      many of the following concierge services. Sold out sports
                      events, VIP night clubs and bottle service, shoes you
                      cannot get? These are all outdated . Ultra Rare Collection
                      8 keys Super rare collection 4 keys Rare & uniq ue
                      collection 2 keys The Boys ( (*) keys Monthly use your
                      keys on select concierge services Limited Membership s
                      1000
                    </p>
                  </div>
                </div>
              </div>

              {/* question end here */}
              {/* question3 */}

              <div
                className={
                  toggleState === 3 ? "content  active-content" : "content"
                }
              >
                <div className="top">
                  <h2>Can I own more than one Cali-Afrocentric NFT?</h2>
                </div>
                <div className="singleItemTabs2">
                  <div className="tabImg">
                    <img src={TabImage} className="img-fluid" alt="" />
                  </div>
                  <div className="tabContent">
                    <p>
                       Yes you can own more than
                      one Cali-Afrocentric NFT, The long-term benefit is definitely
                      appreciation of valuation.
                    </p>
                  </div>
                </div>
              </div>

              {/* question end here */}
              {/* question4 */}

              <div
                className={
                  toggleState === 4 ? "content  active-content" : "content"
                }
              >
                <div className="top">
                  <h2>How much does it cost to buy one Cali-Afrocentric NFT?</h2>
                </div>
                <div className="singleItemTabs2">
                  <div className="tabImg">
                    <img src={TabImage} className="img-fluid" alt="" />
                  </div>
                  <div className="tabContent">
                    <p>
         it will be 0.7 ETH
                      per nft
                    </p>
                  </div>
                </div>
              </div>

              {/* question end here */}
              {/* question5 */}

              <div
                className={
                  toggleState === 5 ? "content  active-content" : "content"
                }
              >
                <div className="top">
                  <h2>Can I sell my Cali-AfrocentricNFT for a profit?</h2>
                </div>
                <div className="singleItemTabs2">
                  <div className="tabImg">
                    <img src={TabImage} className="img-fluid" alt="" />
                  </div>
                  <div className="tabContent">
                    <p>
                      Yes you can, but we recommend to hold and enjoy the true
                      benefits in the long run.
                    </p>
                  </div>
                </div>
              </div>

              {/* question end here */}

              {/* question2 */}

              <div
                className={
                  toggleState === 6 ? "content  active-content" : "content"
                }>
                <div className="top">
                  <h2>Are there additional fees, such as gas free?</h2>
                </div>
                <div className="singleItemTabs2">
                  <div className="tabImg">
                    <img src={TabImage} className="img-fluid" alt="" />
                  </div>
                  <div className="tabContent">
                    <p>
                    You have to pay a little gas fee on minting. It will be around $20-$30.
                    </p>
                  </div>
                </div>
              </div>

              {/* question end here */}

              {/* question7 */}

              <div
                className={
                  toggleState === 7 ? "content  active-content" : "content"
                }
              >
                <div className="top">
                  <h2>Question 7</h2>
                </div>
                <div className="singleItemTabs2">
                  <div className="tabImg">
                    <img src={TabImage} className="img-fluid" alt="" />
                  </div>
                  <div className="tabContent">
                    <p>
                      Amet minim mollit non deserunt ullamco est sit aliqua
                      dolor do amet sint. Velit officia consequat duis enim
                      velit mollit. Exercitation veniam consequat sunt nostrud
                      amet.Amet minim mollit non deserunt ullamco est sit aliqua
                      dolor do amet sint. Velit officia consequat duis enim
                      velit mollit. Exercitation veniam consequat sunt nostrud
                      amet.
                    </p>
                  </div>
                </div>
              </div>

              {/* question end here */}
              {/* question8*/}

              <div
                className={
                  toggleState === 8 ? "content  active-content" : "content"
                }
              >
                <div className="top">
                  <h2>Question 8</h2>
                </div>
                <div className="singleItemTabs2">
                  <div className="tabImg">
                    <img src={TabImage} className="img-fluid" alt="" />
                  </div>
                  <div className="tabContent">
                    <p>
                      Amet minim mollit non deserunt ullamco est sit aliqua
                      dolor do amet sint. Velit officia consequat duis enim
                      velit mollit. Exercitation veniam consequat sunt nostrud
                      amet.Amet minim mollit non deserunt ullamco est sit aliqua
                      dolor do amet sint. Velit officia consequat duis enim
                      velit mollit. Exercitation veniam consequat sunt nostrud
                      amet.
                    </p>
                  </div>
                </div>
              </div>

              {/* question end here */}
            </div>
          </div>
          {/* right item end here */}
          </div>
        </div>
        </div>
      </div>
    </Wrapper>
  );
}

export default Ownership;
