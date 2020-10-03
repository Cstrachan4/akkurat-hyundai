import Link from "next/link";
import { connect, useSelector, useDispatch } from "react-redux";
import { useViewportScroll, motion, useTransform, useMotionValue } from "framer-motion";
import * as indexActions from '../store/index/actions.js';

import HeadMeta from 'components/HeadMeta';
import LogoStart from 'components/LogoStart';
import LogoEnd from 'components/LogoEnd';
import Intro from 'components/Intro';
import Text from 'components/Text';
import FullImage from 'components/FullImage';
import InsetImage from 'components/InsetImage';
import ParallaxVideo from 'components/ParallaxVideo';
import Button from 'components/Button';
import Slideshow from 'components/Slideshow';
import Div100vh from 'react-div-100vh';

import { BTS_IMAGES, AMBER_IMAGES, PAPER_IMAGES } from 'lib/content.js';
import { fadeIn } from 'lib/animations.js';
import 'lib/styles.js';

function NamedPage({
  name
}) {
  const { index } = useSelector(state => state);
  const dispatch = useDispatch();

  const { scrollY } = useViewportScroll();
  const y1 = useTransform(scrollY, [0, 300], [0, 200]);
  const y2 = useTransform(scrollY, [0, 300], [0, -100]);

  return (
  	<React.Fragment>
	  	<HeadMeta title="Akkurat x Hyundai" description="xxx" />
      <motion.div initial="hidden" animate="show" exit="hidden" variants={fadeIn}>
	  	  <LogoStart />
        <Intro name={name} />
        <div className="section section--intro">
          <ParallaxVideo />
          <Text lineOne="Six shooting days during COVID-19 Kiev, " lineTwo="remote Kenya, here we go!" align="left"/>
          <Text lineOne="In collaboration with Jung Von Matt × Hyundai " lineTwo="and Director, Amber Grace Johnson." align="right"/>
          <Div100vh style={{width:'100%'}}/>
          <Button label="SHARE LINK" />
        </div>
        <div className="section section--bts">
          <div className="inset-images">
            {BTS_IMAGES.map((image,i)=>{
              return(
                <InsetImage key={`bts-${i}`} imageSrc={`assets/images/bts/${image}`} />
              )
            })}
          </div>
        </div>
        <div className="section section--amber">
          <FullImage imageSrc='assets/images/amber/amber_grace_johnson_cover.jpg' />
          <Text lineOne="We’re also happy to announce that Amber is now" lineTwo="exclusive with us for the German Market." align="left"/>
          <div className="inset-images">
            {AMBER_IMAGES.map((image,i)=>{
              return(
                <React.Fragment key={`amber-${i}`}>
                  {i === 1 &&
                    <Button label="SEE AMBER’S PORTFOLIO" href="https://akkurat.tv/directors/amber-grace-johnson" target="_blank"/>
                  }
                  <InsetImage imageSrc={`assets/images/amber/${image}`} portrait={i === 1} />
                </React.Fragment>
              )
            })}
          </div>
        </div>
        <div className="section section--paper">
          <Div100vh style={{width:'100%'}}/>
          <Slideshow images={PAPER_IMAGES} pathStart="assets/images/paper/" />
          <Button label="DOWNLOAD PDF" target="_blank"/>
        </div>

      </motion.div>
  	</React.Fragment>
  )
}

NamedPage.getInitialProps = async function (context) {
  // It's important to default the slug so that it doesn't return "undefined"
  const { name } = context.query;
  return {
    name
  };
}

export default connect(state => state)(NamedPage);

