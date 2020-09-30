import Link from "next/link";
import { connect, useSelector, useDispatch } from "react-redux";
import { motion } from "framer-motion";
import * as indexActions from '../store/index/actions.js';

import HeadMeta from 'components/HeadMeta';
import Example from 'components/_refcomponent';

import { fadeIn } from 'lib/animations.js';
import 'lib/styles.js';

function IndexPage() {
  const { index } = useSelector(state => state);
  const dispatch = useDispatch();
  console.log(index, dispatch);
  return (
  	<React.Fragment>
	  	<HeadMeta title="Base repo" description="xxx" />
      <motion.div initial="hidden" animate="show" exit="hidden" variants={fadeIn}>
	  	  <Example />
      </motion.div>
  	</React.Fragment>
  )
}

export default connect(state => state)(IndexPage);

