import Head from 'next/head';
import FavIcon from 'assets/favicon/favicon.js';
import Gtag from '../Gtag';

import { SITE_URL } from 'lib/constants.js';

const HeadMeta = ({title, description, shareImage}) => {

return(
  <Head>
    <meta charSet="utf-8" />
    <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
    <FavIcon />
    <title>{ title || '' }</title>
    <meta key="description" name="description" content={description} />
    <meta property="og:title" content={title} />
    <meta property="og:url" content={SITE_URL} />
    <meta property="og:site_name" content={title || ''} />
    <meta property="og:type" content="website" />
    <meta property="og:description" content={description} />
    <meta property="og:image" content={shareImage} />
    <Gtag trackingId="G-00WYR5N8L1"/>
  </Head>
)}

export default HeadMeta
