import React from 'react';
import Svg, { Path } from 'react-native-svg';
import { SVGComponentProps } from './types';

const HomeSVG: React.FC<SVGComponentProps> = ({
}) => {
    return (
        <Svg
            // xmlns="http://www.w3.org/2000/svg"
            width="26.041"
            height="26.068"
            viewBox="0 0 26.041 26.068">
            <Path
                id="home"
                d="M25.546,14.152a1.629,1.629,0,0,1-1.2.5,1.608,1.608,0,0,1-1.182-.483l-.382-.382V24.439a1.584,1.584,0,0,1-.471,1.144,1.552,1.552,0,0,1-1.157.483H16.276V18.742a.826.826,0,0,0-.814-.814H10.58a.826.826,0,0,0-.814.814v7.324H4.882a1.552,1.552,0,0,1-1.157-.483,1.582,1.582,0,0,1-.47-1.145V13.783l-.382.382a1.608,1.608,0,0,1-1.182.483,1.629,1.629,0,0,1-1.2-.5,1.629,1.629,0,0,1-.5-1.2,1.608,1.608,0,0,1,.483-1.182L11.774.483A1.611,1.611,0,0,1,13.02,0a1.611,1.611,0,0,1,1.246.483L25.558,11.774a1.608,1.608,0,0,1,.483,1.182,1.629,1.629,0,0,1-.5,1.2Z"
                transform="translate(0 0.002)"
                fill="#7a2e9a" />
        </Svg>

    );
};
export default HomeSVG;
