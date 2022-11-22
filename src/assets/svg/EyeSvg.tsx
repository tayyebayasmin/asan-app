import React from 'react';
import Svg, {Path} from 'react-native-svg';
import {SVGComponentProps} from './types';

const EyeSVG: React.FC<SVGComponentProps> = ({
  color = 'rgba(32,10,77,0.25)',
  height = 30,
  width = 15,
}) => {
  return (
    <Svg height={height} width={width} viewBox="0 0 18.785 11.847">
        <Path 
            id="Symbol" 
            d="M10.794,1c5.612,0,9.386-4.525,9.386-5.927s-3.787-5.92-9.386-5.92c-5.53,0-9.4,4.519-9.4,5.92S5.25,1,10.794,1Zm0-1.34c-4.361,0-7.813-3.63-7.813-4.587,0-.8,3.452-4.58,7.813-4.58,4.341,0,7.8,3.78,7.8,4.58C18.594-3.972,15.135-.342,10.794-.342Zm0-.916a3.685,3.685,0,0,0,3.671-3.671,3.648,3.648,0,0,0-3.671-3.664A3.647,3.647,0,0,0,7.109-4.929,3.7,3.7,0,0,0,10.794-1.258Zm-.007-2.488A1.189,1.189,0,0,1,9.6-4.929a1.189,1.189,0,0,1,1.189-1.183,1.189,1.189,0,0,1,1.189,1.183A1.189,1.189,0,0,1,10.787-3.746Z" 
            transform="translate(-1.395 10.849)" 
            fill={color}/>
    </Svg>
  );
};
export default EyeSVG;
