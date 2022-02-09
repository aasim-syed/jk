import React from "react";
import Navbar from "../Navbar/Navbar";
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";
import Image from "next/image";
import styled from "styled-components";
import Heroimg from "./Images/Mask_Group_7.png";
import Footer from "../Footer/Footer";
import G24 from "./Images/Group_24@2x.png";
import AOS from 'aos';
import 'aos/dist/aos.css';



const Home = () => {
  

  return (
    <>
    <head>
    <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
    
    </head>
    <body>
    <script src="https://unpkg.com/aos@next/dist/aos.js"></script>
  <script>
    AOS.init();
  </script>
    
     
      <Fade bottom>
        
        <Navbar />
        <Footer />
        <Hero1>
          <Fade bottom>
          <div
           data-aos="fade-up"  
           data-aos-duration="3100"             
           data-aos-easing="ease-in-sine"
           >
            <Img>
              <Image id="Mask_Group_7" src={Heroimg}></Image>
            </Img>
            </div>
          </Fade>
          <div
           data-aos="fade-up"  
           data-aos-duration="3100"             
           data-aos-easing="ease-in-sine"
           >
          <div id="Building_Homes_and__Commercial">
            <span>
              Building Homes and <br />
              Commercial projects
            </span>
          </div>
          </div>
          <div id="Our_promise_as_a_contractor_is">
            <span>
              Our promise as a contractor is to build community value
              <br />
              into every project while delivering professional expertise.
            </span>
          </div>

          <button id="OUR_SERVICES">
            <span>OUR SERVICES</span>
          </button>
          <div id="J_and_K_General_Contractors_wi">
            <span>
              J and K General Contractors, with all the engineering <br />
              and technical experience gained over years of proven <br />
              track records in the Raeford, NC area provides the optimum <br />
              solutions, with regards to cost-saving, high quality, <br />
              time-controlled, and durable performance products and services.
            </span>
          </div>

          <div id="Group_22">
            <svg class="Rectangle_1327">
              <rect
                id="Rectangle_1327"
                rx="8"
                ry="8"
                x="0"
                y="0"
                width="268"
                height="75"
              ></rect>
            </svg>
            <button id="KNOW_MORE">
              <span>KNOW MORE</span>
            </button>
          </div>
          <svg class="Path_1" viewBox="0 265.761 0.239 0.758">
            <path
              id="Path_1"
              d="M 0.2149897515773773 266.1502990722656 C 0.2237055450677872 266.1125793457031 0.2440423965454102 266.0863647460938 0.2382318824529648 266.0486450195312 C 0.232421338558197 266.0108032226562 0.2062739580869675 265.9847717285156 0.1859370917081833 265.9556579589844 C 0.1685054749250412 265.9295349121094 0.1656002104282379 265.8947143554688 0.1394528150558472 265.8714599609375 L 0.1307370066642761 265.8626708984375 L 0 265.760986328125 L 0 266.519287109375 L 0.1946528851985931 266.2432861328125 C 0.2149897515773773 266.2171630859375 0.2091792076826096 266.1822814941406 0.2149897515773773 266.1502990722656"
            ></path>
          </svg>
          <svg class="Path_2" viewBox="0 0 1596.522 837.1">
            <path
              id="Path_2"
            ></path>
          </svg>
          <svg class="Path_4" viewBox="524.24 287.604 4.489 1.534">
            <path
              id="Path_4"
              d="M 527.3341674804688 287.6705322265625 C 527.3226318359375 287.6589050292969 527.2993774414062 287.6617431640625 527.2817993164062 287.6502075195312 C 527.2645263671875 287.6356506347656 527.2499389648438 287.6182250976562 527.2266235351562 287.6094360351562 L 527.1771850585938 287.6066589355469 C 527.1511840820312 287.600830078125 527.1249389648438 287.6066589355469 527.0930786132812 287.6094360351562 C 527.07568359375 287.6094360351562 527.05517578125 287.603759765625 527.0349731445312 287.6094360351562 L 527.0233154296875 287.6210632324219 L 527.005859375 287.6210632324219 L 524.239990234375 289.1376647949219 L 525.3759155273438 289.1376647949219 L 527 288.2515869140625 L 527.357421875 289.1376647949219 L 527.9442749023438 289.1376647949219 L 527.921142578125 289.0824890136719 L 527.976318359375 289.1376647949219 L 528.7285766601562 289.1376647949219 L 527.3341674804688 287.6705322265625 Z"
            ></path>
          </svg>
          <svg class="Path_5" viewBox="223.337 96.687 53.129 104.27">
            <path
              id="Path_5"
              d="M 223.3491516113281 200.724609375 C 223.3549194335938 200.7565765380859 223.3519897460938 200.7914581298828 223.3694763183594 200.8205108642578 L 223.3752746582031 200.8437347412109 C 223.3869018554688 200.8582458496094 223.4129943847656 200.8553619384766 223.4275512695312 200.8669891357422 C 223.4566040039062 200.8960266113281 223.4769287109375 200.9279937744141 223.5146789550781 200.9425201416016 C 223.5437927246094 200.9483337402344 223.5699157714844 200.9570465087891 223.5960388183594 200.9570465087891 C 223.6541748046875 200.9570465087891 223.7093505859375 200.9395904541016 223.7587280273438 200.90185546875 L 251.8032531738281 180.4109802246094 C 251.8468627929688 180.3819427490234 251.8614196777344 180.3325653076172 251.8788146972656 180.2889556884766 C 251.8845825195312 180.2773590087891 251.9020690917969 180.2831420898438 251.9049377441406 180.2686309814453 L 276.466064453125 97.02691650390625 L 276.4632263183594 97.00657653808594 C 276.471923828125 96.97463226318359 276.4573669433594 96.94268035888672 276.4544372558594 96.91071319580078 C 276.4486694335938 96.87294769287109 276.4486694335938 96.83807373046875 276.4283142089844 96.80610656738281 L 276.4224548339844 96.78578948974609 C 276.4050598144531 96.76252746582031 276.3730773925781 96.75963592529297 276.3499145507812 96.7451171875 C 276.3266296386719 96.72476196289062 276.3120727539062 96.69572448730469 276.2801818847656 96.68699645996094 L 276.2626953125 96.68992614746094 C 276.2278747558594 96.68118286132812 276.1987609863281 96.69572448730469 276.1639404296875 96.7015380859375 C 276.1261901855469 96.70733642578125 276.09130859375 96.70733642578125 276.062255859375 96.72766876220703 L 276.0419311523438 96.73350524902344 L 250.3303527832031 115.8472213745117 C 250.3041687011719 115.8646774291992 250.3041687011719 115.8937149047852 250.2896728515625 115.9140701293945 C 250.2721862792969 115.9373092651367 250.2431640625 115.9518356323242 250.2315063476562 115.9808883666992 L 223.3375244140625 200.5996551513672 L 223.3403625488281 200.6200256347656 C 223.3316650390625 200.6549224853516 223.3403625488281 200.6868133544922 223.3491516113281 200.724609375 M 250.7254333496094 116.2307357788086 L 275.710693359375 97.65737152099609 L 251.4081726074219 180.0275115966797 L 224.1102905273438 199.96923828125 L 250.7254333496094 116.2307357788086 Z"
            ></path>
          </svg>
          <Why />
          {/* <svg class="Rectangle_1329">
		<rect id="Rectangle_1329" rx="0" ry="0" x="0" y="0" width="100%" height="1083">
		</rect>
	</svg> */}
          <div id="WHY_CHOOSE_US">
            <span>WHY CHOOSE US?</span>
          </div>
          <svg class="Rectangle_80">
            <rect
              id="Rectangle_80"
              rx="47"
              ry="47"
              x="0"
              y="0"
              width="424"
              height="469"
            ></rect>
          </svg>
          <svg class="Rectangle_1330">
            <rect
              id="Rectangle_1330"
              rx="47"
              ry="47"
              x="0"
              y="0"
              width="424"
              height="469"
            ></rect>
          </svg>
          <svg class="Rectangle_1331">
            <rect
              id="Rectangle_1331"
              rx="47"
              ry="47"
              x="0"
              y="0"
              width="424"
              height="469"
            ></rect>
          </svg>
          <svg class="Rectangle_1332">
            <rect
              id="Rectangle_1332"
              rx="47"
              ry="47"
              x="0"
              y="0"
              width="424"
              height="469"
            ></rect>
          </svg>
          <div id="We_are_passionate">
            <span>We are passionate</span>
          </div>
          <div id="Our_Team">
            <span>Our Team</span>
          </div>
          <div id="Honest__Efficient">
            <span>Honest & Efficient</span>
          </div>
          <div id="Always_Dependable">
            <span>Always Dependable</span>
          </div>
          <div id="US_Certified">
            <span>U.S. Certified</span>
          </div>
          <div id="Lorem_ipsum_dolor_sit__amet_co">
            <span>
              Lorem ipsum dolor sit <br />
              amet, consectetuer <br />
              adipiscing elit, sed diam
              <br />
              nonummy nibh euismod <br />
              tincidunt ut laoreet <br />
              dolore magna aliquam <br />
              erat volutpat.{" "}
            </span>
          </div>
          <div id="Lorem_ipsum_dolor_sit__amet_co_b">
            <span>
              Lorem ipsum dolor sit <br />
              amet, consectetuer <br />
              adipiscing elit, sed diam
              <br />
              nonummy nibh euismod <br />
              tincidunt ut laoreet <br />
              dolore magna aliquam <br />
              erat volutpat.{" "}
            </span>
          </div>
          <div id="Lorem_ipsum_dolor_sit__amet_co_ca">
            <span>
              Lorem ipsum dolor sit <br />
              amet, consectetuer <br />
              adipiscing elit, sed diam
              <br />
              nonummy nibh euismod <br />
              tincidunt ut laoreet <br />
              dolore magna aliquam <br />
              erat volutpat.{" "}
            </span>
          </div>
          <div id="Lorem_ipsum_dolor_sit__amet_co_cb">
            <span>
              Lorem ipsum dolor sit <br />
              amet, consectetuer <br />
              adipiscing elit, sed diam
              <br />
              nonummy nibh euismod <br />
              tincidunt ut laoreet <br />
              dolore magna aliquam <br />
              erat volutpat.{" "}
            </span>
          </div>
          <div id="KNOW_MORE_cd">
            <span>KNOW MORE</span>
          </div>
          <Yourbest>
            <Image src={G24}></Image>
            <div id="YOUR_BEST_GENERAL__CONTRACTOR_">
              <span>
                YOUR BEST GENERAL <br />
                CONTRACTOR COMPANY
              </span>
            </div>
            <div id="J_and_K_General_Contractors_is">
              <p>
                J and K General Contractors is one of the leading companies in
                the
                <br />
                Area of general contracting services in the State of North
                Carolina. <br />J and K have been able to become a pioneer in
                the development
                <br /> industry with extensive experience in commercial and
                residential <br />
                Projects for both Public and Private Sectors in the Region.
              </p>
            </div>
            <button id="Aboutus">ABOUT US</button>
          </Yourbest>
          <div id="Certified_Contractors">
            <span>Certified Contractors</span>
          </div>
        </Hero1>
      </Fade>
      </body>
    </>
  );
};

export default Home;

const Hero1 = styled.div`

margin: 0 auto;
width: 100%;
  position: absolute;
  width: 1920px;
  height: 9560px;
  background-color: rgba(252, 252, 250, 1);
  overflow: hidden;
  --web-view-name: HOME – 1;
  --web-view-id: HOME__1;
  --web-scale-on-resize: true;
  --web-enable-deep-linking: true;

  #Mask_Group_7 {
    position: absolute;
    width: 1786px;
    height: 906px;
    left: 67px;
    top: 168px;
    overflow: visible;
  }
  #Mask_Group_8 {
    position: absolute;
    width: 1532px;
    height: 777px;
    left: 67px;
    top: 6556px;
    overflow: visible;
  }
  #Mask_Group_9 {
    position: absolute;
    width: 1532px;
    height: 777px;
    left: 1652px;
    top: 6556px;
    overflow: visible;
  }
  #Rectangle_57 {
    fill: rgba(31, 82, 65, 1);
  }
  .Rectangle_57 {
    position: absolute;
    overflow: visible;
    width: 1920px;
    height: 1289px;
    left: 0px;
    top: 3329px;
  }
  #HOME {
    left: 980px;
    top: 79px;
    position: absolute;
    overflow: visible;
    width: 80px;
    white-space: nowrap;
    text-align: left;
    font-family: Numans;
    font-style: normal;
    font-weight: normal;
    font-size: 25px;
    color: rgba(31, 82, 65, 1);
  }
  #Our_promise_as_a_contractor_is {
    left: 138px;
    top: 698px;
    position: absolute;
    overflow: visible;
    width: 685px;
    white-space: nowrap;
    line-height: 32px;
    margin-top: -3.5px;
    text-align: left;
    font-family: Numans;
    font-style: normal;
    font-weight: normal;
    font-size: 25px;
    color: rgba(252, 252, 250, 1);
  }
  #J_and_K_General_Contractors_is {
    left: 831px;
    top: 4155px;
    position: absolute;
    overflow: visible;
    width: 815px;
    white-space: nowrap;
    line-height: 32px;
    margin-top: -3.5px;
    text-align: left;
    font-family: Numans;
    font-style: normal;
    font-weight: normal;
    font-size: 25px;
    color: rgba(252, 252, 250, 1);
  }
  #J_and_K_General_Contractors_wi {
    left: 138px;
    top: 1258px;
    position: absolute;
    overflow: visible;
    width: 784px;
    white-space: nowrap;
    line-height: 32px;
    margin-top: -3.5px;
    text-align: left;
    font-family: Numans;
    font-style: normal;
    font-weight: normal;
    font-size: 25px;
    color: rgba(31, 82, 65, 1);
  }
  #Building_Homes_and__Commercial {
    left: 138px;
    top: 501px;
    position: absolute;
    overflow: visible;
    width: 799px;
    white-space: nowrap;
    line-height: 85px;
    margin-top: -4px;
    text-align: left;
    font-family: Numans;
    font-style: normal;
    font-weight: bold;
    font-size: 77px;
    color: rgba(252, 252, 250, 1);
  }
  #WHY_CHOOSE_US {
    left: 606px;
    top: 2372px;
    position: absolute;
    overflow: visible;
    width: 736px;
    white-space: nowrap;
    line-height: 85px;
    margin-top: -4px;
    text-align: left;
    font-family: Numans;
    font-style: normal;
    font-weight: bold;
    font-size: 77px;
    color: rgba(255, 255, 255, 1);
  }
  #ABOUT_US {
    left: 1129px;
    top: 79px;
    position: absolute;
    overflow: visible;
    width: 133px;
    white-space: nowrap;
    text-align: left;
    font-family: Numans;
    font-style: normal;
    font-weight: normal;
    font-size: 25px;
    color: rgba(0, 0, 0, 1);
  }
  #SERVICES {
    left: 1330px;
    top: 79px;
    position: absolute;
    overflow: visible;
    width: 125px;
    white-space: nowrap;
    text-align: left;
    font-family: Numans;
    font-style: normal;
    font-weight: normal;
    font-size: 25px;
    color: rgba(0, 0, 0, 1);
  }
  #CONTACT {
    left: 1728px;
    top: 79px;
    position: absolute;
    overflow: visible;
    width: 126px;
    white-space: nowrap;
    text-align: left;
    font-family: Numans;
    font-style: normal;
    font-weight: normal;
    font-size: 25px;
    color: rgba(0, 0, 0, 1);
  }
  #Rectangle_3 {
    fill: rgba(31, 82, 65, 1);
  }
  .Rectangle_3 {
    position: absolute;
    overflow: visible;
    width: 268px;
    height: 75px;
    left: 138px;
    top: 809px;
  }
  #Rectangle_1329 {
    fill: rgba(31, 82, 65, 1);
  }
  .Rectangle_1329 {
    position: absolute;
    overflow: visible;
    width: 2029px;
    height: 1083px;
    left: 0px;
    top: 2249px;
    right: 0px;
    background: rgba(31, 82, 65, 1);
  }
  #Rectangle_1385 {
    fill: rgba(31, 82, 65, 1);
  }
  .Rectangle_1385 {
    position: absolute;
    overflow: visible;
    width: 2029px;
    height: 750px;
    left: -61px;
    top: 8869px;
  }
  #OUR_SERVICES {
    background: rgba(31, 82, 65, 1);
    left: 170px;
    top: 832px;
    position: absolute;
    overflow: visible;
    width: 268px;
    height: 75px;
    white-space: nowrap;
    text-align: center;
    font-family: Numans;
    font-style: normal;
    font-weight: normal;
    font-size: 25px;
    color: rgba(252, 252, 250, 1);
    letter-spacing: 0.6px;
    border-radius: 20px;
  }
  #Group_22 {
    position: absolute;
    width: 268px;
    height: 75px;
    left: 138px;
    top: 1465px;
    overflow: visible;
  }
  #Rectangle_1327 {
    fill: rgba(31, 82, 65, 1);
  }
  .Rectangle_1327 {
    position: absolute;
    overflow: visible;
    width: 268px;
    height: 75px;
    left: 0px;
    top: 0px;
  }
  #KNOW_MORE {
    position: absolute;
    overflow: visible;
    width: 268px;
    height: 75px;
    left: 0px;
    top: 0px;
    background: rgba(31, 82, 65, 1);
    white-space: nowrap;
    text-align: center;
    font-family: Numans;
    font-style: normal;
    font-weight: normal;
    font-size: 25px;
    color: rgba(252, 252, 250, 1);
    letter-spacing: 0.6px;
    border-radius: 20px;
  }
  #Path_1 {
    fill: rgba(46, 70, 204, 1);
  }
  .Path_1 {
    overflow: visible;
    position: absolute;
    width: 0.239px;
    height: 0.758px;
    left: 322.481px;
    top: 2189.006px;
    transform: matrix(1, 0, 0, 1, 0, 0);
  }
  #Path_2 {
    fill: rgba(0, 0, 0, 1);
  }
  .Path_2 {
    overflow: visible;
    position: absolute;
    width: 1596.522px;
    height: 837.1px;
    left: 322.481px;
    top: 1410.9px;
    transform: matrix(1, 0, 0, 1, 0, 0);
  }
  #Path_4 {
    fill: rgba(46, 70, 204, 1);
  }
  .Path_4 {
    overflow: visible;
    position: absolute;
    width: 4.489px;
    height: 1.534px;
    left: 1845.538px;
    top: 2252.466px;
    transform: matrix(1, 0, 0, 1, 0, 0);
  }
  #Path_5 {
    fill: rgba(46, 70, 204, 1);
  }
  .Path_5 {
    overflow: visible;
    position: absolute;
    width: 53.129px;
    height: 104.27px;
    left: 971.334px;
    top: 1697.801px;
    transform: matrix(1, 0, 0, 1, 0, 0);
  }
  #Restaurants {
    left: 70px;
    top: 598px;
    position: absolute;
    overflow: visible;
    width: 175px;
    white-space: nowrap;
    line-height: 33px;
    margin-top: -1.5px;
    text-align: left;
    font-family: Helvetica Neue;
    font-style: normal;
    font-weight: bold;
    font-size: 30px;
    color: rgba(252, 252, 250, 1);
  }
  #Rectangle_80 {
    fill: rgba(252, 252, 250, 1);
  }
  .Rectangle_80 {
    filter: drop-shadow(0px 5px 16px rgba(0, 0, 0, 0.302));
    position: absolute;
    overflow: visible;
    width: 472px;
    height: 517px;
    left: 59px;
    top: 2575px;
  }

  #Rectangle_1330 {
    fill: rgba(252, 252, 250, 1);
  }
  .Rectangle_1330 {
    filter: drop-shadow(0px 5px 16px rgba(0, 0, 0, 0.302));
    position: absolute;
    overflow: visible;
    width: 472px;
    height: 517px;
    left: 518px;
    top: 2575px;
  }
  #Rectangle_1331 {
    fill: rgba(252, 252, 250, 1);
  }
  .Rectangle_1331 {
    filter: drop-shadow(0px 5px 16px rgba(0, 0, 0, 0.302));
    position: absolute;
    overflow: visible;
    width: 472px;
    height: 517px;
    left: 977px;
    top: 2575px;
  }
  #Rectangle_1332 {
    fill: rgba(252, 252, 250, 1);
  }
  .Rectangle_1332 {
    filter: drop-shadow(0px 5px 16px rgba(0, 0, 0, 0.302));
    position: absolute;
    overflow: visible;
    width: 472px;
    height: 517px;
    left: 1438px;
    top: 2575px;
  }
  #We_are_passionate {
    left: 128px;
    top: 2650.5px;
    position: absolute;
    overflow: visible;
    width: 287px;
    white-space: nowrap;
    line-height: 81px;
    margin-top: -24.5px;
    text-align: center;
    font-family: Numans;
    font-style: normal;
    font-weight: normal;
    font-size: 32px;
    color: rgba(31, 82, 65, 1);
    transition-duration: 0.7s;
    :hover {
      margin-bottom: 30px;
    }
  }
  #Our_Team {
    left: 1049px;
    top: 7905px;
    position: absolute;
    overflow: visible;
    width: 151px;
    white-space: nowrap;
    line-height: 81px;
    margin-top: -24.5px;
    text-align: center;
    font-family: Numans;
    font-style: normal;
    font-weight: normal;
    font-size: 32px;
    color: rgba(31, 82, 65, 1);
  }
  #Honest__Efficient {
    left: 587px;
    top: 2650.5px;
    position: absolute;
    overflow: visible;
    width: 287px;
    white-space: nowrap;
    line-height: 81px;
    margin-top: -24.5px;
    text-align: center;
    font-family: Numans;
    font-style: normal;
    font-weight: normal;
    font-size: 32px;
    color: rgba(31, 82, 65, 1);
  }
  #Always_Dependable {
    left: 1034px;
    top: 2650.5px;
    position: absolute;
    overflow: visible;
    width: 311px;
    white-space: nowrap;
    line-height: 81px;
    margin-top: -24.5px;
    text-align: center;
    font-family: Numans;
    font-style: normal;
    font-weight: normal;
    font-size: 32px;
    color: rgba(31, 82, 65, 1);
  }
  #US_Certified {
    left: 1547px;
    top: 2650.5px;
    position: absolute;
    overflow: visible;
    width: 207px;
    white-space: nowrap;
    line-height: 81px;
    margin-top: -24.5px;
    text-align: center;
    font-family: Numans;
    font-style: normal;
    font-weight: normal;
    font-size: 32px;
    color: rgba(31, 82, 65, 1);
  }
  #Lorem_ipsum_dolor_sit__amet_co {
    left: 126px;
    top: 2757px;
    position: absolute;
    overflow: visible;
    width: 291px;
    white-space: nowrap;
    line-height: 32px;
    margin-top: -3.5px;
    text-align: center;
    font-family: Numans;
    font-style: normal;
    font-weight: normal;
    font-size: 25px;
    color: rgba(31, 82, 65, 1);
  }
  #Lorem_ipsum_dolor_sit__amet_co_b {
    left: 585px;
    top: 2757px;
    position: absolute;
    overflow: visible;
    width: 291px;
    white-space: nowrap;
    line-height: 32px;
    margin-top: -3.5px;
    text-align: center;
    font-family: Numans;
    font-style: normal;
    font-weight: normal;
    font-size: 25px;
    color: rgba(31, 82, 65, 1);
  }
  #Lorem_ipsum_dolor_sit__amet_co_ca {
    left: 1044px;
    top: 2757px;
    position: absolute;
    overflow: visible;
    width: 291px;
    white-space: nowrap;
    line-height: 32px;
    margin-top: -3.5px;
    text-align: center;
    font-family: Numans;
    font-style: normal;
    font-weight: normal;
    font-size: 25px;
    color: rgba(31, 82, 65, 1);
  }
  #Lorem_ipsum_dolor_sit__amet_co_cb {
    left: 1505px;
    top: 2757px;
    position: absolute;
    overflow: visible;
    width: 291px;
    white-space: nowrap;
    line-height: 32px;
    margin-top: -3.5px;
    text-align: center;
    font-family: Numans;
    font-style: normal;
    font-weight: normal;
    font-size: 25px;
    color: rgba(31, 82, 65, 1);
  }
  #KNOW_MORE_cd {
    left: 46px;
    top: 23px;
    position: absolute;
    overflow: visible;
    width: 178px;
    white-space: nowrap;
    text-align: left;
    font-family: Halcom;
    font-style: normal;
    font-weight: normal;
    font-size: 25px;
    color: rgba(252, 252, 250, 1);
    letter-spacing: 0.6px;
  }
  #Group_25 {
    position: absolute;
    width: 268px;
    height: 75px;
    left: 836px;
    top: 4375px;
    overflow: visible;
  }
  #Rectangle_1327_cf {
    fill: transparent;
    stroke: rgba(252, 252, 250, 1);
    stroke-width: 2px;
    stroke-linejoin: miter;
    stroke-linecap: butt;
    stroke-miterlimit: 4;
    shape-rendering: auto;
  }
  .Rectangle_1327_cf {
    position: absolute;
    overflow: visible;
    width: 268px;
    height: 75px;
    left: 0px;
    top: 0px;
  }
  #ABOUT_US_cg {
    left: 63px;
    top: 23px;
    position: absolute;
    overflow: visible;
    width: 144px;
    white-space: nowrap;
    text-align: left;
    font-family: Halcom;
    font-style: normal;
    font-weight: normal;
    font-size: 25px;
    color: rgba(252, 252, 250, 1);
    letter-spacing: 0.6px;
  }
  #Group_24 {
    position: absolute;
    width: 1983px;
    height: 1322px;
    left: 0px;
    top: 3326px;
    overflow: visible;
  }
  #Rectangle_1379_cj {
    fill: url(#Rectangle_1379_cj);
  }
  .Rectangle_1379_cj {
    position: absolute;
    overflow: visible;
    width: 2029px;
    height: 361px;
    left: -61px;
    top: 3245px;
  }
  #YOUR_BEST_GENERAL__CONTRACTOR_ {
    left: 836px;
    top: 542px;
    position: absolute;
    overflow: visible;
    width: 781px;
    white-space: nowrap;
    line-height: 85px;
    margin-top: -4px;
    text-align: left;
    font-family: Numans;
    font-style: normal;
    font-weight: bold;
    font-size: 77px;
    color: rgba(252, 252, 250, 1);
  }
`;
const Img = styled.div`
  position: absolute;
  width: 1786px;
  height: 906px;
  left: 67px;
  top: 168px;
  overflow: visible;
`;

const Why = styled.div`
  position: absolute;
  overflow: visible;

  height: 1083px;
  left: 0px;
  top: 2249px;
  right: 0px;
  background: rgba(31, 82, 65, 1);

  #WHY_CHOOSE_US {
    left: 606px;
    top: 2372px;
    position: absolute;
    overflow: visible;
    width: 736px;
    white-space: nowrap;
    line-height: 85px;
    margin-top: -4px;
    text-align: left;
    font-family: Numans;
    font-style: normal;
    font-weight: bold;
    font-size: 77px;
    color: rgba(255, 255, 255, 1);
  }
  #ABOUT_US {
    left: 1129px;
    top: 79px;
    position: absolute;
    overflow: visible;
    width: 133px;
    white-space: nowrap;
    text-align: left;
    font-family: Numans;
    font-style: normal;
    font-weight: normal;
    font-size: 25px;
    color: rgba(0, 0, 0, 1);
  }
  #SERVICES {
    left: 1330px;
    top: 79px;
    position: absolute;
    overflow: visible;
    width: 125px;
    white-space: nowrap;
    text-align: left;
    font-family: Numans;
    font-style: normal;
    font-weight: normal;
    font-size: 25px;
    color: rgba(0, 0, 0, 1);
  }
  #CONTACT {
    left: 1728px;
    top: 79px;
    position: absolute;
    overflow: visible;
    width: 126px;
    white-space: nowrap;
    text-align: left;
    font-family: Numans;
    font-style: normal;
    font-weight: normal;
    font-size: 25px;
    color: rgba(0, 0, 0, 1);
  }
  #Rectangle_3 {
    fill: rgba(31, 82, 65, 1);
  }
  .Rectangle_3 {
    position: absolute;
    overflow: visible;
    width: 268px;
    height: 75px;
    left: 138px;
    top: 809px;
  }
  #Rectangle_1329 {
    fill: rgba(31, 82, 65, 1);
  }
  .Rectangle_1329 {
    position: absolute;
    overflow: visible;
    width: 2029px;
    height: 1083px;
    left: 0px;
    top: 2249px;
    right: 0px;
    background: rgba(31, 82, 65, 1);
  }
  #Rectangle_1385 {
    fill: rgba(31, 82, 65, 1);
  }
  .Rectangle_1385 {
    position: absolute;
    overflow: visible;
    width: 2029px;
    height: 750px;
    left: -61px;
    top: 8869px;
  }
  #OUR_SERVICES {
    background: rgba(31, 82, 65, 1);
    left: 170px;
    top: 832px;
    position: absolute;
    overflow: visible;
    width: 268px;
    height: 75px;
    white-space: nowrap;
    text-align: center;
    font-family: Numans;
    font-style: normal;
    font-weight: normal;
    font-size: 25px;
    color: rgba(252, 252, 250, 1);
    letter-spacing: 0.6px;
    border-radius: 20px;
  }
  #Group_22 {
    position: absolute;
    width: 268px;
    height: 75px;
    left: 138px;
    top: 1465px;
    overflow: visible;
  }
  #Rectangle_1327 {
    fill: rgba(31, 82, 65, 1);
  }
  .Rectangle_1327 {
    position: absolute;
    overflow: visible;
    width: 268px;
    height: 75px;
    left: 0px;
    top: 0px;
  }
  #KNOW_MORE {
    position: absolute;
    overflow: visible;
    width: 268px;
    height: 75px;
    left: 0px;
    top: 0px;
    background: rgba(31, 82, 65, 1);
    white-space: nowrap;
    text-align: center;
    font-family: Numans;
    font-style: normal;
    font-weight: normal;
    font-size: 25px;
    color: rgba(252, 252, 250, 1);
    letter-spacing: 0.6px;
    border-radius: 20px;
  }
  #Path_1 {
    fill: rgba(46, 70, 204, 1);
  }
  .Path_1 {
    overflow: visible;
    position: absolute;
    width: 0.239px;
    height: 0.758px;
    left: 322.481px;
    top: 2189.006px;
    transform: matrix(1, 0, 0, 1, 0, 0);
  }
  #Path_2 {
    fill: rgba(0, 0, 0, 1);
  }
  .Path_2 {
    overflow: visible;
    position: absolute;
    width: 1596.522px;
    height: 837.1px;
    left: 322.481px;
    top: 1410.9px;
    transform: matrix(1, 0, 0, 1, 0, 0);
  }
  #Path_4 {
    fill: rgba(46, 70, 204, 1);
  }
  .Path_4 {
    overflow: visible;
    position: absolute;
    width: 4.489px;
    height: 1.534px;
    left: 1845.538px;
    top: 2252.466px;
    transform: matrix(1, 0, 0, 1, 0, 0);
  }
  #Path_5 {
    fill: rgba(46, 70, 204, 1);
  }
  .Path_5 {
    overflow: visible;
    position: absolute;
    width: 53.129px;
    height: 104.27px;
    left: 971.334px;
    top: 1697.801px;
    transform: matrix(1, 0, 0, 1, 0, 0);
  }
  #Restaurants {
    left: 70px;
    top: 598px;
    position: absolute;
    overflow: visible;
    width: 175px;
    white-space: nowrap;
    line-height: 33px;
    margin-top: -1.5px;
    text-align: left;
    font-family: Helvetica Neue;
    font-style: normal;
    font-weight: bold;
    font-size: 30px;
    color: rgba(252, 252, 250, 1);
  }
  #Rectangle_80 {
    fill: rgba(252, 252, 250, 1);
  }
  .Rectangle_80 {
    filter: drop-shadow(0px 5px 16px rgba(0, 0, 0, 0.302));
    position: absolute;
    overflow: visible;
    width: 472px;
    height: 517px;
    left: 59px;
    top: 2575px;
  }

  #Rectangle_1330 {
    fill: rgba(252, 252, 250, 1);
  }
  .Rectangle_1330 {
    filter: drop-shadow(0px 5px 16px rgba(0, 0, 0, 0.302));
    position: absolute;
    overflow: visible;
    width: 472px;
    height: 517px;
    left: 518px;
    top: 2575px;
  }
  #Rectangle_1331 {
    fill: rgba(252, 252, 250, 1);
  }
  .Rectangle_1331 {
    filter: drop-shadow(0px 5px 16px rgba(0, 0, 0, 0.302));
    position: absolute;
    overflow: visible;
    width: 472px;
    height: 517px;
    left: 977px;
    top: 2575px;
  }
  #Rectangle_1332 {
    fill: rgba(252, 252, 250, 1);
  }
  .Rectangle_1332 {
    filter: drop-shadow(0px 5px 16px rgba(0, 0, 0, 0.302));
    position: absolute;
    overflow: visible;
    width: 472px;
    height: 517px;
    left: 1438px;
    top: 2575px;
  }
  #We_are_passionate {
    left: 128px;
    top: 2650.5px;
    position: absolute;
    overflow: visible;
    width: 287px;
    white-space: nowrap;
    line-height: 81px;
    margin-top: -24.5px;
    text-align: center;
    font-family: Numans;
    font-style: normal;
    font-weight: normal;
    font-size: 32px;
    color: rgba(31, 82, 65, 1);
    transition-duration: 0.7s;
    :hover {
      margin-bottom: 30px;
    }
  }
  #Our_Team {
    left: 1049px;
    top: 7905px;
    position: absolute;
    overflow: visible;
    width: 151px;
    white-space: nowrap;
    line-height: 81px;
    margin-top: -24.5px;
    text-align: center;
    font-family: Numans;
    font-style: normal;
    font-weight: normal;
    font-size: 32px;
    color: rgba(31, 82, 65, 1);
  }
  #Honest__Efficient {
    left: 587px;
    top: 2650.5px;
    position: absolute;
    overflow: visible;
    width: 287px;
    white-space: nowrap;
    line-height: 81px;
    margin-top: -24.5px;
    text-align: center;
    font-family: Numans;
    font-style: normal;
    font-weight: normal;
    font-size: 32px;
    color: rgba(31, 82, 65, 1);
  }
  #Always_Dependable {
    left: 1034px;
    top: 2650.5px;
    position: absolute;
    overflow: visible;
    width: 311px;
    white-space: nowrap;
    line-height: 81px;
    margin-top: -24.5px;
    text-align: center;
    font-family: Numans;
    font-style: normal;
    font-weight: normal;
    font-size: 32px;
    color: rgba(31, 82, 65, 1);
  }
  #US_Certified {
    left: 1547px;
    top: 2650.5px;
    position: absolute;
    overflow: visible;
    width: 207px;
    white-space: nowrap;
    line-height: 81px;
    margin-top: -24.5px;
    text-align: center;
    font-family: Numans;
    font-style: normal;
    font-weight: normal;
    font-size: 32px;
    color: rgba(31, 82, 65, 1);
  }
  #Lorem_ipsum_dolor_sit__amet_co {
    left: 126px;
    top: 2757px;
    position: absolute;
    overflow: visible;
    width: 291px;
    white-space: nowrap;
    line-height: 32px;
    margin-top: -3.5px;
    text-align: center;
    font-family: Numans;
    font-style: normal;
    font-weight: normal;
    font-size: 25px;
    color: rgba(31, 82, 65, 1);
  }
  #Lorem_ipsum_dolor_sit__amet_co_b {
    left: 585px;
    top: 2757px;
    position: absolute;
    overflow: visible;
    width: 291px;
    white-space: nowrap;
    line-height: 32px;
    margin-top: -3.5px;
    text-align: center;
    font-family: Numans;
    font-style: normal;
    font-weight: normal;
    font-size: 25px;
    color: rgba(31, 82, 65, 1);
  }
  #Lorem_ipsum_dolor_sit__amet_co_ca {
    left: 1044px;
    top: 2757px;
    position: absolute;
    overflow: visible;
    width: 291px;
    white-space: nowrap;
    line-height: 32px;
    margin-top: -3.5px;
    text-align: center;
    font-family: Numans;
    font-style: normal;
    font-weight: normal;
    font-size: 25px;
    color: rgba(31, 82, 65, 1);
  }
  #Lorem_ipsum_dolor_sit__amet_co_cb {
    left: 1505px;
    top: 2757px;
    position: absolute;
    overflow: visible;
    width: 291px;
    white-space: nowrap;
    line-height: 32px;
    margin-top: -3.5px;
    text-align: center;
    font-family: Numans;
    font-style: normal;
    font-weight: normal;
    font-size: 25px;
    color: rgba(31, 82, 65, 1);
  }
  #KNOW_MORE_cd {
    left: 46px;
    top: 23px;
    position: absolute;
    overflow: visible;
    width: 178px;
    white-space: nowrap;
    text-align: left;
    font-family: Halcom;
    font-style: normal;
    font-weight: normal;
    font-size: 25px;
    color: rgba(252, 252, 250, 1);
    letter-spacing: 0.6px;
  }
  #Group_25 {
    position: absolute;
    width: 268px;
    height: 75px;
    left: 836px;
    top: 4375px;
    overflow: visible;
  }
  #Rectangle_1327_cf {
    fill: transparent;
    stroke: rgba(252, 252, 250, 1);
    stroke-width: 2px;
    stroke-linejoin: miter;
    stroke-linecap: butt;
    stroke-miterlimit: 4;
    shape-rendering: auto;
  }
  .Rectangle_1327_cf {
    position: absolute;
    overflow: visible;
    width: 268px;
    height: 75px;
    left: 0px;
    top: 0px;
  }
  #ABOUT_US_cg {
    left: 63px;
    top: 23px;
    position: absolute;
    overflow: visible;
    width: 144px;
    white-space: nowrap;
    text-align: left;
    font-family: Halcom;
    font-style: normal;
    font-weight: normal;
    font-size: 25px;
    color: rgba(252, 252, 250, 1);
    letter-spacing: 0.6px;
  }
  #Group_24 {
    position: absolute;
    width: 1983px;
    height: 1322px;
    left: 0px;
    top: 3326px;
    overflow: visible;
  }
  #Rectangle_1379_cj {
    fill: url(#Rectangle_1379_cj);
  }
  .Rectangle_1379_cj {
    position: absolute;
    overflow: visible;
    width: 2029px;
    height: 361px;
    left: -61px;
    top: 3245px;
  }
  // #YOUR_BEST_GENERAL__CONTRACTOR_ {
  // 	left: 836px;
  // 	top: 3942px;
  // 	position: absolute;
  // 	overflow: visible;
  // 	width: 781px;
  // 	white-space: nowrap;
  // 	line-height: 85px;
  // 	margin-top: -4px;
  // 	text-align: left;
  // 	font-family: Halcom;
  // 	font-style: normal;
  // 	font-weight: bold;
  // 	font-size: 77px;
  // 	color: rgba(252,252,250,1);
  // }
`;
const Yourbest = styled.div`
  position: absolute;
  overflow: visible;
  width: 100%;
  height: 1289px;
  left: 0px;
  right: 0px;
  top: 3329px;
  background: rgba(31, 82, 65, 1);

  #J_and_K_General_Contractors_is {
    left: 831px;
    top: 800px;
    position: absolute;
    overflow: visible;
    width: 815px;
    // color:black;
    white-space: nowrap;
    line-height: 32px;
    margin-top: -3.5px;
    text-align: left;
    font-family: Numans;
    font-style: normal;
    font-weight: normal;
    font-size: 25px;
    color: rgba(252, 252, 250, 1);
  }
  #J_and_K_General_Contractors_wi {
    left: 138px;
    top: 1258px;
    position: absolute;
    overflow: visible;
    width: 784px;
    white-space: nowrap;
    line-height: 32px;
    margin-top: -3.5px;
    text-align: left;
    font-family: Numans;
    font-style: normal;
    font-weight: normal;
    font-size: 25px;
    color: rgba(31, 82, 65, 1);
  }
  #Aboutus {
    overflow: visible;
    width: 268px;
    height: 75px;
    position: absolute;
    width: 268px;
    height: 75px;
    left: 836px;
    top: 1025px;
    overflow: visible;
    font-family: Numans;
    font-style: normal;
    font-weight: normal;
    font-size: 25px;
    color: rgba(252, 252, 250, 1);
    background: transparent;

    // stroke-width: 2px;
    // stroke-linejoin: miter;
    // stroke-linecap: butt;
    // stroke-miterlimit: 4;
    // shape-rendering: auto;
  }
`;
const Cc = styled.div``;