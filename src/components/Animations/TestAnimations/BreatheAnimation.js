import React, {useEffect, useState} from 'react';
import InhaleAnimation from '../TestAnimations/InhaleAnimation';
import ExhaleAnimation from '../TestAnimations/ExhaleAnimation';

const BreatheAnimation = () => {

  const [currentAnimation, setAnimation] = useState();

  useEffect(() => {
    let currentAnimation= <InhaleAnimation/>
    setAnimation(currentAnimation);

    const ANIMATION_CHANGE_TIME = 3000;
    
    setTimeout(() => {
      let currentAnimation = <ExhaleAnimation/>
      setAnimation(currentAnimation)
    }, ANIMATION_CHANGE_TIME)
  }, [])
  
  return (
    <React.Fragment>
      {currentAnimation}
    </React.Fragment>
  );
}

export default BreatheAnimation;

