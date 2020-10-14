import Head from 'next/head';
import FavIcon from 'assets/favicon/favicon.js';

const HeadMeta = ({title, description, shareImage}) => {

return(
  <Head>
    <meta charSet="utf-8" />
    <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
    <FavIcon />
    <title>{ title || '' }</title>
    <meta key="description" name="description" content={description} />
    <meta property="og:title" content={title}>
    <meta property="og:description" content={description}>
    <meta property="og:image" content={shareImage}>
  </Head>
)}

export default HeadMeta
