import { useEffect, useRef } from 'react';
import { useRouter } from 'next/router'
import { connect, useSelector, useDispatch } from "react-redux";
import { useViewportScroll, motion, useTransform } from "framer-motion";
import * as indexActions from '../store/index/actions.js';
import clsx from "clsx";
import { useWindowSize } from 'lib/helpers.js';

import { Waypoint } from 'react-waypoint';
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
import Div100vh, { use100vh } from 'react-div-100vh';

import { BTS_IMAGES, AMBER_IMAGES, PAPER_IMAGES } from 'lib/content.js';
import { fadeIn } from 'lib/animations.js';
import 'lib/styles.js';

function NamedPage() {

  const router = useRouter();
  const { name } = router.query;
  const { index } = useSelector(state => state);
  const dispatch = useDispatch();

  const { amber, paper, logo, video, bts } = index;

  const onIndexChange = (key, value) => dispatch(indexActions.updateIndex(key, value));

  const scrollRef = useRef(null);
  const { scrollY } = useViewportScroll();
  const viewHeight = use100vh();
  const viewWidth = useWindowSize().width;
  const videoScrollStart = scrollRef.current ? (scrollRef.current.offsetTop - viewHeight) : 0;
  const videoScrollEnd = videoScrollStart + viewHeight;
  const aspectRatio = viewHeight / viewWidth;

  const videoWidthBelow = useTransform(scrollY, [videoScrollStart, videoScrollEnd], [viewWidth ? viewWidth : 0, 900]);
  const videoWidthAbove = useTransform(scrollY, [videoScrollStart, videoScrollEnd], [viewHeight? viewHeight * 1.7777777778 : 0, viewWidth > 900 ? 900 : viewWidth  - 72]);

  const videoWidth = aspectRatio < (9/16) ? videoWidthBelow : videoWidthAbove;

  const onBtsHeroEnter = () => {
    onIndexChange('bts', {...bts, displayHero: true});
  }
  const onBtsHeroExit = () => {
    onIndexChange('bts', {...bts, displayHero: false});
  }
  const onAmberHeroEnter = () => {
    onIndexChange('amber', {...amber, displayHero: true});
  }
  const onAmberHeroExit = () => {
    onIndexChange('amber', {...amber,displayHero: false});
  }
  const onPlayEnter = () => {
    onIndexChange('video', {...video, displayPlay: true});
  }
  const onPlayExit = () => {
    onIndexChange('video', {...video, displayPlay: false});
  }
  const onPaperEnter = () => {
    onIndexChange('paper', {...paper, display: true, displayHero: true});
  }
  const onPaperExit = ({ previousPosition, currentPosition }) => {
    if(previousPosition === 'inside' && currentPosition === 'above') {
      return;
    }
    onIndexChange('paper', {...paper, display: false, displayHero: false});
  }
  const onPaperHeroEnter = () => {
    onIndexChange('paper', {...paper, displayHero: true});
  }
  const onPaperHeroExit = () => {
    onIndexChange('paper', {...paper, displayHero: false});
  }
  const onLogoEnter = () => {
    onIndexChange('logo', { ...logo, display: true});
  }
  const onLogoExit = () => {
    onIndexChange('logo', {...logo, display: false});
  }

  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);

  return (
  	<React.Fragment>
	  	<HeadMeta title="Akkurat x Hyundai" description="xxx" />
      <motion.div initial="hidden" animate="show" exit="hidden" variants={fadeIn}>
	  	  <LogoStart />
        <Intro name={name} />
        <div className="section section--intro">
          <ParallaxVideo
            video={video}
            onChange={onIndexChange}
            width={videoWidth}
          />
          <Text lineOne="In collaboration with Jung von Matt and female " lineTwo="American director Amber Grace Johnson for Hyundai." align="left"/>
          <div ref={scrollRef} style={{height: viewHeight, width:'100%'}}/>
          <Button label="SHARE LINK" />
          <Waypoint onEnter={onPlayEnter} onLeave={onPlayExit} bottomOffset="-200px" />
        </div>
        <div className="section section--bts">
          <FullImage imageSrc='assets/images/bts/behind_the_scenes_hero.jpeg' inView={bts.displayHero} />
          <Waypoint onEnter={onBtsHeroEnter} onLeave={onBtsHeroExit} />
          <Text lineOne="6 shooting days during Covid-19. Production in " lineTwo="Kiev, remote-shoot in Kenya" align="right"/>
          <Waypoint onEnter={onBtsHeroExit} />
          <div className="inset-images">
            {BTS_IMAGES.map((image,i)=>{
              return(
                <InsetImage key={`bts-${i}`} imageSrc={`assets/images/bts/${image}`} />
              )
            })}
          </div>
        </div>
        <div className="section section--amber">
          <FullImage imageSrc='assets/images/amber/amber_grace_johnson_hero.jpg' inView={amber.displayHero} />
          <Waypoint onEnter={onAmberHeroEnter} onLeave={onAmberHeroExit} />
          <Text lineOne="We’re also happy to announce that Amber is now " lineTwo="exclusive with us for the German Market." align="left"/>
          <Waypoint onEnter={onAmberHeroExit} />
          <div className="inset-images">
            {AMBER_IMAGES.map((image,i)=>{
              return(
                <React.Fragment key={`amber-${i}`}>
                  {i === 1 &&
                    <Button label="SEE AMBER’S PORTFOLIO" href="https://akkurat.tv/directors/amber-grace-johnson" target="_blank"/>
                  }
                  <InsetImage imageSrc={`assets/images/amber/${image}`} portrait={i === 0} />
                </React.Fragment>
              )
            })}
          </div>
        </div>
        <div className={clsx(
          "section section--paper",
          paper.display && "section--blue"
        )}>
          <FullImage imageSrc='assets/images/paper/Paper_NEU-hero.jpg' inView={paper.displayHero} />
          <Waypoint onEnter={onPaperEnter} onLeave={onPaperExit} />
          <Text lineOne="Lastly, enjoy taking a look at the first " lineTwo="issue of our AKKURAT PAPER." align="left"/>
          <Waypoint onEnter={onPaperHeroExit} />
          <Slideshow images={PAPER_IMAGES} pathStart="assets/images/paper/" />
          <Button label="DOWNLOAD PDF" target="_blank"/>
          <LogoEnd display={logo.display} />
          <Waypoint onEnter={onLogoEnter} onLeave={onLogoExit} />
        </div>
      </motion.div>
  	</React.Fragment>
  )
}

export default connect(state => state)(NamedPage);

