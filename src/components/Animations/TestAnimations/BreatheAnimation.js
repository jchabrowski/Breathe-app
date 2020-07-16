import React, {useEffect, useState} from 'react';
import InhaleAnimation from '../TestAnimations/InhaleAnimation';
import ExhaleAnimation from '../TestAnimations/ExhaleAnimation';

const BreatheAnimation = () => {

  const [currentAnimation, setAnimation] = useState();

  useEffect(() => {
    let currentAnimation= <InhaleAnimation/>
    setAnimation(currentAnimation);

    setTimeout(() => {
      let currentAnimation = <ExhaleAnimation/>
      setAnimation(currentAnimation)
    }, 3000)
  }, [])
  
  return (
    <React.Fragment>
      {currentAnimation}
    </React.Fragment>
  );
}

export default BreatheAnimation;

