import clsx from 'clsx';

export default function Gtag({ 
	trackingId
}) {
 
  return (
  	<>
	    <script async src={`https://www.googletagmanager.com/gtag/js?id=${trackingId}`}/>
		<script
	        dangerouslySetInnerHTML={{
		        __html: `
		      		window.dataLayer = window.dataLayer || [];
			  		function gtag(){dataLayer.push(arguments);}
			  		gtag('js', new Date());
			  		gtag('config', '${trackingId}');');
		      	`,
	        }}
	    />
    </>
  )
}