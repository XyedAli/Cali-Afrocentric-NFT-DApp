import React from "react";
import Wrapper from "./Leader.styled";
import { Swiper, SwiperSlide } from "swiper/react";

import Member from "../../images/1.png";
import wada from "../../images/wada.jpg";
import Member2 from "../../images/2.jpg";
import Member3 from "../../images/3.jpg";
import Member4 from "../../images/4.png";
import Member5 from "../../images/5.jpg";
import Member6 from "../../images/6.png";
import Member7 from "../../images/7.jpg";
import Member8 from "../../images/8.png";
import Member9 from "../../images/9.png";
import Member10 from "../../images/10.png";
import Member11 from "../../images/11.png";
import Member12 from "../../images/12.png";
import Member13 from "../../images/13.jpg";

import AOS from "aos";
import "aos/dist/aos.css";

// Import Swiper styles
import "swiper/swiper-bundle.min.css";
import {} from "swiper";
import { Autoplay } from "swiper";
import { Navigation } from "swiper";



import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
function Leader() {
  AOS.init({
    once: true,
  });
  return (
    <Wrapper>
      <div className="leader" id="leader">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h3 className="commonTitle" style={{fontSize:'20px',color:'#d8f802'}}>The Team</h3>
            </div>
            <Swiper
              spaceBetween={30}
              centeredSlides={true}
              loop={true}
              navigation={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              modules={[Autoplay, Navigation]}
              className="mySwiper"
            >
             
              <SwiperSlide >
                <div className="col-md-4">
                  <div className="img">
                    <img src={Member} className="img-fluid" alt="" />
                  </div>
                </div>
                <div className="col-md-8">
                  <div className="content">
                  <div className="title">
                  <h3>way + creative solutions</h3>
                
                        <p>Technial Partner</p>
                        <br/>
                      </div>
                    <p data-aos="fade-up" data-aos-duration="1500">
                    WayPlus Creative Solutions is a remote-first digital solutions and Digital Marketing Agency in the Netherlands helping organizations and businesses across Europe, North America, Asia, Africa, and Australia to create digital pathways that encourage true human connections through software development, marketing, and design.

At WayPlus Creative Solutions, we have put together a team of leading industry specialists in different digital fields, from different countries, under one organization, with one goal; “To provide top-notch services and results at cost-effective rates to businesses in the global market space.
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide >
                <div className="col-md-4">
                  <div className="img">
                    <img src={wada} className="img-fluid" alt="" />
                  </div>
                </div>
                <div className="col-md-8">
                  <div className="content">
                  <div className="title">
                        <h3>Stanley Dudu</h3>
                        <p>Artist</p>
                        <br/>
                      </div>
                    <p data-aos="fade-up" data-aos-duration="1500">
                    This is the first of the serial expressive portrait representations. It delineates an old man who in the heat of critical need for
 
 answers to some of life's unsolved riddles, offers some assurance in his glance. The brilliant orange around his head symbolises gaiety and hope with relation to the outcome of the consultation of his wisdom as well as his experience.
 
                    </p>
                  </div>
                </div>
              </SwiperSlide>
               <SwiperSlide >
                <div className="col-md-4">
                  <div className="img">
                    <img src={Member2} className="img-fluid" alt="" />
                  </div>
                </div>
                <div className="col-md-8">
                  <div className="content">
                  <div className="title">
                        <h3>Emmanuel Dudu</h3>
                        <p>Artist</p>
                        <br/>
                      </div>
                    <p data-aos="fade-up" data-aos-duration="1500">
                    Dudu Emmanuel was born in Benin City on the 5th of august 1974 to Itsekiri parents from Delta state, Nigeria, he had his early education there before proceeding to Auchi Polytechnic in 1995, graduating in 1999 with the award of higher national diploma (HND) after an initial award of ordinary national diploma (OND).He added a bachelors degree in Arts from the University of Lagos in 2007 and a masters degree in visual art history from the same school in 2012 , he is about rounding up his masters of fine art degree (MFA) in painting.
 

                    </p>
                  </div>
                </div>
              </SwiperSlide>
              
              <SwiperSlide>
                <div className="col-md-4">
                  <div className="img">
                    <img src={Member3} className="img-fluid" alt="" />
                  </div>
                </div>
                <div className="col-md-8">
                  <div className="content">
                  <div className="title">
                  <h3>Erikan Ekefrey</h3>
                        <p>Artist</p>
                        <br/>
                      </div>
                    <p data-aos="fade-up" data-aos-duration="1500">
                    Erikan is a Nigerian Artist from Akwa Ibom State. He studied art at the Federal College of Education in Akoka, Lagos. His works have been featured in museums and galleries around the world. Erikan uses acrylic and oil paint on canvas. He was trained by his father Emmanuel Ekefrey who is a renowned Artist in Nigeria and Europe. Their technique is unique in Nigeria and the world which depicts his cultural heritage.
                    </p>
                  </div>
                </div>
              </SwiperSlide>      
              <SwiperSlide>
                <div className="col-md-4">
                  <div className="img">
                    <img src={Member4} className="img-fluid" alt="" />
                  </div>
                </div>
                <div className="col-md-8">
                  <div className="content">
                  <div className="title">
                        <h3>Alao Luqman Omotayo</h3>
                        <p>Artist</p>
                        <br/>
                      </div>
                    <p data-aos="fade-up" data-aos-duration="1500">
                    The art work explain the importance of art in our society, looking at Taino and Yoruba totem both manifest the same images or items of worship and religious activities. They both believed in the existence of many deities, immortals who lived in heaven. Stylized depictions of the elements of nature, along with related icons, reflect their belief in magical forces in nature. In many cases, their artifacts correspond to ceremonial paraphernalia.
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="col-md-4">
                  <div className="img">
                    <img src={Member5} className="img-fluid" alt="" />
                  </div>
                </div>
                <div className="col-md-8">
                  <div className="content">
                  <div className="title">
                        <h3>Nduka Freeborn Onyia</h3>
                        <p>Artist</p>
                        <br/>
                      </div>
                    <p data-aos="fade-up" data-aos-duration="1500">
                    Nduka Freeborn Onyia works in a variety of media which includes painting, drawing, digital design and sculpture. His work is an ongoing investigation of the Black mass within post-colonial spaces like the Caribbean. The lingering of colonial residue within the environs of the contemporary Caribbean, perpetrates a confusing notion of self and space.Danforth Scholarship, CHASE Fund Scholarship and the Dawn Scott Memorial award.
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="col-md-4">
                  <div className="img">
                    <img src={Member6} className="img-fluid" alt="" />
                  </div>
                </div>
                <div className="col-md-8">
                  <div className="content">
                  <div className="title">
                        <h3>Bimbo Adenugba</h3>
                        <p>Artist</p>
                        <br/>
                      </div>
                    <p data-aos="fade-up" data-aos-duration="1500">
                    Samson Bimbo Adenugba  born in lagos Nigeria, now based in Houston Texas. 
He is a Painter, Muralist and Illustrator
He studied at the prestigious Yaba College of Technology and graduated with distinction in 1995. He is a recipient of several awards and
laurels both academic and corporate, which includes, 
1st prize National Academy Prize Award in Nigeria
 and 4th prize National Award from Windsor, Newton millennia art competition.etc.
   He has participated in several exhibitions all across the globe, in Europe and United States America.
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="col-md-4">
                  <div className="img">
                    <img src={Member7} className="img-fluid" alt="" />
                  </div>
                </div>
                <div className="col-md-8">
                  <div className="content">
                  <div className="title">
                        <h3>Syed M. Ali</h3>
                        <p>Block Chain Developer</p>
                        <br/>
                      </div>
                    <p data-aos="fade-up" data-aos-duration="1500">
                    Syed M. Ali is a professional software engineer with an emphasis in blockchain development. With 5+ years of blockchain experience, Ali enjoys developing streamlined minting websites and smart contracts to provide smoothing minting experiences for successful NFT projects in the space...
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="col-md-4">
                  <div className="img">
                    <img src={Member8} className="img-fluid" alt="" />
                  </div>
                </div>
                <div className="col-md-8">
                  <div className="content">
                  <div className="title">
                        <h3>Dr Bolaji Ogunwo Phd</h3>
                        <p>Artist</p>
                        <br/>
                      </div>
                    <p data-aos="fade-up" data-aos-duration="1500">
                    Bolaji Ogunwo (b.1978) obtained his B.A in 2000 from University of Benin, a Master's degree from University of Lagos and a Ph.D (Painting) from Delta State University, Abraka. In the course of his studio practice spanning over two decades, he has participated in over 50 local and international art exhibitions. He has 5 solo exhibitions to his credit, four in Nigeria and one in Manchester, UK in 2017. His works can be found in notable collections around the globe. Bolaji is currently a painting Lecturer at the Department of Creative arts, University of Lagos, Nigeria.
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="col-md-4">
                  <div className="img">
                    <img src={Member9} className="img-fluid" alt="" />
                  </div>
                </div>
                <div className="col-md-8">
                  <div className="content">
                  <div className="title">
                  <h3>Duke Asidere</h3>
                        <p>Artist</p>
                        <br/>
                      </div>
                    <p data-aos="fade-up" data-aos-duration="1500">
                    Duke Asidere is one of Nigeria's most celebrated contemporary artists with a keen following internationally and
in his native Nigeria. He was born in 1961 and obtained a Bachelor of Arts degree with first class honours in Fine Arts (painting) from Ahmadu Bello University, Zaria in 1988, and a Masters of Fine Arts in painting in 1996 from the same university. He taught painting, drawing and art history at the Federal Auchi Polytechnic for five years before starting full time studio work in Lagos. He was mentored by Prof. Bruce Onabrakpeya and taught by Gani Odutokun who had a profound impact on his life and artistic expression.

                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="col-md-4">
                  <div className="img">
                    <img src={Member10} className="img-fluid" alt="" />
                  </div>
                </div>
                <div className="col-md-8">
                  <div className="content">
                  <div className="title">
                  <h3>Greg Bailey</h3>
                        <p>Artist</p>
                        <br/>
                      </div>
                    <p data-aos="fade-up" data-aos-duration="1500">
                    Bailey works in a variety of media which includes painting, drawing, digital design and sculpture. His work is an ongoing investigation of the Black mass within post-colonial spaces like the Caribbean. The lingering of colonial residue within the environs of the contemporary Caribbean, perpetrates a confusing notion of self and space.Danforth Scholarship, CHASE Fund Scholarship and the Dawn Scott Memorial award.
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="col-md-4">
                  <div className="img">
                    <img src={Member11} className="img-fluid" alt="" />
                  </div>
                </div>
                <div className="col-md-8">
                  <div className="content">
                  <div className="title">
                  <h3>Jacob Nkpang</h3>
                        <p>Artist</p>

                        <br/>
                      </div>
                    <p data-aos="fade-up" data-aos-duration="1500">
                    Jacob Nkpang is an Artiste. His interest in Art, Music, Performing Arts goes back to his childhood days at school being creative with pencil works, crayons, raffia works and craft. He worked with his uncle a seasoned photographer in the 60s assistant in the darkroom. In 1982 he trained as Graphic Artist at LINTAS ADVERTISING Lagos. No sooner in 1983 picked up Photography as a profession while working with the Nigerian Ports Authority as a Graphic Artist. And retired in 2003. The Artist did a course in Graphic Arts in relation to Public Relations at Crown Agent Institute Worthing in 2000.  He has to his credit numerous portraits hanging on the walls or sitting on tables of clients
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="col-md-4">
                  <div className="img">
                    <img src={Member12} className="img-fluid" alt="" />
                  </div>
                </div>
                <div className="col-md-8">
                  <div className="content">
                  <div className="title">
                  <h3>Steven Adebanji</h3>
                        <p>Artist</p>
                        <br/>
                      </div>
                    <p data-aos="fade-up" data-aos-duration="1500">
                    Originally from Lagos, Nigeria, He presently resides in Los Angeles California.
He Earns a degree in civil engineering and Art new media. He is not only a Visual Art but also a prolific writer which he has combined in his work.
I was introduced to Steven and his vibrant, bold work. He Specializes in Portraits, but not just portraitures, his work captures the human essence and exhuming emotions.
Steven's pieces depict the mental state of his subjects at a moment in time.
They stare back at the viewer and challenge us to ponder some deeper philosophical questions about ourselves.

                    </p>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide >
                <div className="col-md-4">
                  <div className="img">
                    <img src={Member13} className="img-fluid" alt="" />
                  </div>
                </div>
                <div className="col-md-8">
                  <div className="content">
                  <div className="title">
                        <h3>Ini Dminstrel.</h3>
                        <p>Director</p>
                        <br/>
                      </div>
                    <p data-aos="fade-up" data-aos-duration="1500">
    
                    </p>
                  </div>
                </div>
              </SwiperSlide>




            </Swiper>
            <div className="col-md-12">
              <div className="border"></div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

export default Leader;
