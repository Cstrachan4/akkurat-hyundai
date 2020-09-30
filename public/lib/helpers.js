export const returnImageWidth = (inset) => {
  	if(!inset.left && !inset.right){
  		return '100vw';
  	} else if (!inset.left || !inset.right){
  		return 'calc(100% + 48px)';
  	} else {
  		return '100%';
  	}
  }