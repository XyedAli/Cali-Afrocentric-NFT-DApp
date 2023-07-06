/** @format */

import React from "react";
import Wrapper from "./About.styled";

import AboutImg from "../../images/about.png";

// import images and icons

function About() {
  return (
    <Wrapper>
      <div className='about' id='about'>
        <div className='container'>
          <div className='row'>
            {/* single item start here */}
            <div className='col-md-5'>
              <div className='leftSIngleItem'>
                <div className='aboutImg'>
                  <img src={AboutImg} className='img-fluid' alt='img' />
                </div>
                <div className='boxShadow'></div>
              </div>
            </div>
            {/* single item end here */}
            {/* right item start here */}
            <div className='col-md-7 aboutCOl'>
              <div className='rigtContentSingleItem'>
                <div className='rightContent'>
                  <h2>About</h2>
                  <h4>
                    Cali-Afrocentric Volume 1 seeks to <br />
                    project authentic African/ world art
                  </h4>
                  <p>
                  “The project showcases the works of 11 amazing artistes from Africa and the Caribbean. Some of which live in Africa and a few in diaspora with each bringing to bear the influences of their various environments and societies.”
                  </p>
                  <p>
                    Thematic context varies from rural/ ethnic, urban/
                    cosmopolitan, pastoral, contemporary, abstract and
                    illusionist
                  </p>
                  <p>
                    Artworks displayed are of some of the very highest standards
                    created via different media such as oil, wax, wood, brass,
                    combs, plastic, rocks, cowries, coins and other metal works
                    etc
                  </p>
                  <p>
                    Cali-Afrocentric also has an educational arm which teaches a
                    wide range of individuals from little kids, grade school
                    students, high school students, under graduate and beyond.
                  </p>
                </div>
                <div className='boxShadow2'></div>
              </div>
            </div>
            {/* right item end here */}
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

export default About;
