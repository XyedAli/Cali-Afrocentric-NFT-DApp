/** @format */

import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { connect } from "../redux/blockchain/blockchainActions";
import { fetchData } from "../redux/data/dataActions";
import * as s from "../styles/globalStyles";
import styled from "styled-components";

const truncate = (input, len) =>
  input.length > len ? `${input.substring(0, len)}...` : input;


import Layout from "../Components/Layout/Layout";

import About from "../Components/About/About";
import Wrapper from "../Components/Banner/Banner.styled";
import Leader from "../Components/Leader/Leader";
import Art from "../Components/Art/Art";
import BannerImg from "../images/BannerImg.png";
import Ownership from "../Components/Ownership/Ownership";

import { Icon } from "@iconify/react";
import Team from "../Components/Team/Team";


  function Home() {
    const dispatch = useDispatch();
    const blockchain = useSelector((state) => state.blockchain);
    const data = useSelector((state) => state.data);
    const [claimingNft, setClaimingNft] = useState(false);
    const [feedback, setFeedback] = useState(`Click buy to mint your NFT.`);
    const [mintAmount, setMintAmount] = useState(1);
    const [CONFIG, SET_CONFIG] = useState({
      CONTRACT_ADDRESS: "",
      SCAN_LINK: "",
      NETWORK: {
        NAME: "",
        SYMBOL: "",
        ID: 0,
      },
      NFT_NAME: "",
      SYMBOL: "",
      MAX_SUPPLY: 1,
      WEI_COST: 0,
      DISPLAY_COST: 0,
      GAS_LIMIT: 0,
      MARKETPLACE: "",
      MARKETPLACE_LINK: "",
      SHOW_BACKGROUND: false,
    });
  
    const claimNFTs = () => {
      let cost = CONFIG.WEI_COST;
      let gasLimit = CONFIG.GAS_LIMIT;
      let totalCostWei = String(cost * mintAmount);
      let totalGasLimit = String(gasLimit * mintAmount);
      console.log("Cost: ", totalCostWei);
      console.log("Gas limit: ", totalGasLimit);
      setFeedback(`Minting your ${CONFIG.NFT_NAME}...`);
      setClaimingNft(true);
      blockchain.smartContract.methods
        .mint(mintAmount)
        .send({
          gasLimit: String(totalGasLimit),
          to: CONFIG.CONTRACT_ADDRESS,
          from: blockchain.account,
          value: totalCostWei,
        })
        .once("error", (err) => {
          console.log(err);
          setFeedback("Sorry, something went wrong please try again later.");
          setClaimingNft(false);
        })
        .then((receipt) => {
          console.log(receipt);
          setFeedback(
            `WOW, the ${CONFIG.NFT_NAME} is yours! go visit Opensea.io to view it.`
          );
          setClaimingNft(false);
          dispatch(fetchData(blockchain.account));
        });
    };
  
    const decrementMintAmount = () => {
      let newMintAmount = mintAmount - 1;
      if (newMintAmount < 1) {
        newMintAmount = 1;
      }
      setMintAmount(newMintAmount);
    };
  
    const incrementMintAmount = () => {
      let newMintAmount = mintAmount + 1;
      if (newMintAmount > 10) {
        newMintAmount = 10;
      }
      setMintAmount(newMintAmount);
    };
  
    const getData = () => {
      if (blockchain.account !== "" && blockchain.smartContract !== null) {
        dispatch(fetchData(blockchain.account));
      }
    };
  
    const getConfig = async () => {
      const configResponse = await fetch("/config/config.json", {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });
      const config = await configResponse.json();
      SET_CONFIG(config);
    };
  
    useEffect(() => {
      getConfig();
    }, []);
  
    useEffect(() => {
      getData();
    }, [blockchain.account]);
  
  

  const [counter, setCounter] = useState(1);
  function decrementCounter() {
    if (counter <= 1) {
      setCounter(1);
    } else {
      setCounter(counter - 1);
    }
  }
  return (
    <Layout>
      <Wrapper>
           <div className='homeBanner' id='home'>
          <div className='container'>
            <div className='row'>
              {/* first column start here */}
              <div className='col-md-6 bannerCol'>
                <div className='leftContentSingleItem'>
                  <div className='Content'>
                    <h4>
                     <span><b> Authenic African Art</b></span><br/>
                      Discover & Collect <br />
                      Extraordinary <br />
                      <span>Cali Afrocentric</span>
                      Nft’s
                    </h4>
                  </div>




                  {Number(data.totalSupply) >= CONFIG.MAX_SUPPLY ? (
                    <>
                      <p>
                        The sale has ended.
                      </p>
                      <p >
                        You can still find {CONFIG.NFT_NAME} on
                      </p>

                      {/* <StyledLink target={"_blank"} href={CONFIG.MARKETPLACE_LINK}>
                  {CONFIG.MARKETPLACE}
                </StyledLink> */}
                    </>
                  ) : (
                    <>
                      <p style={{color: "#e8bb28"}}>
                        1 {CONFIG.SYMBOL} costs {CONFIG.DISPLAY_COST}{" "}
                        {CONFIG.NETWORK.SYMBOL}.
                      </p>

                      {/* <p
                        className="Content"
                      >
                        Excluding gas fees.
                      </p> */}

                      {blockchain.account === "" ||
                        blockchain.smartContract === null ? (
                        <div >
                          <p style={{color: "#e8bb28"}}>
                            Connect to the {CONFIG.NETWORK.NAME} network
                          </p>
                          <div className="mintButton">
                            <button
                              onClick={(e) => {
                                e.preventDefault();
                                dispatch(connect());
                                getData();
                              }}
                            >
                              CONNECT
                            </button>
                          </div>
                          {blockchain.errorMsg !== "" ? (
                            <>

                              <p className="Content">
                                {blockchain.errorMsg}
                              </p>
                            </>
                          ) : null}
                        </div>
                      ) : (
                        <>
                          <p className="Content">
                            {feedback}
                          </p>
                          <div className='counter'>
                          <div className='buttonGroup'>
                           
                            <button
                              disabled={claimingNft ? 1 : 0}
                              onClick={(e) => {
                                e.preventDefault();
                                decrementMintAmount();
                              }} className='fButton minusBUtton'>
                              <Icon icon='akar-icons:minus' />
                            </button>
                            <p className="inputField">
                              {mintAmount}
                            </p>
                            <button
                              disabled={claimingNft ? 1 : 0}
                              onClick={(e) => {
                                e.preventDefault();
                                incrementMintAmount();
                              }}  className='plusButon'>
                              <Icon icon='ant-design:plus-outlined' />
                            </button>
                          </div>


                          <div className='mintButton'>
                            <button
                              disabled={claimingNft ? 1 : 0}
                              onClick={(e) => {
                                e.preventDefault();
                                claimNFTs();
                                getData();
                              }}
                            >
                              {claimingNft ? "BUSY" : "BUY"}
                            </button>
                          </div>
                          </div>

                        </>
                      )}
                    </>
                  )}
                  
                </div>
              </div>
              {/* first column end here */}

              {/* right column start here */}
              <div className='col-md-6'>
                <div className='rightColumn'>
                  <div className='bannerImges'>
                    <img src={BannerImg} className='img-fluid' alt='crypto' />
                  </div>

                  <div className=' boxshadow2'></div>
                </div>
              </div>

              {/* right column end here */}
            </div>
          </div>
        </div>
     
      </Wrapper>

      <About />
      <Art />
      <Team />
      <Ownership />
    </Layout>
  );
}

export default Home;
