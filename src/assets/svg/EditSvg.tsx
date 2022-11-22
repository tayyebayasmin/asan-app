import React from 'react';
import Svg, { G, Rect, Path } from 'react-native-svg';

const EditSvg = ({ color = 'black', height ="10", width = "10"}) => {
    return (
        <Svg id="Layer"
            // xmlns="http://www.w3.org/2000/svg" 
            width={width}
            height={height}
            viewBox="0 0 8.361 8.361"
        >
            <G id="Vrstva_142" data-name="Vrstva 142" transform="translate(0 0)">
                <Path id="Path_158" data-name="Path 158" d="M6.595,10.888,10.887,6.6a1.383,1.383,0,0,0,0-1.955l-1.3-1.3a1.383,1.383,0,0,0-1.955,0L3.336,7.629a1.383,1.383,0,0,0-.406.977v2.688H5.618a1.383,1.383,0,0,0,.977-.406Zm-2.766-2.3a.461.461,0,0,1,.134-.323l4.3-4.3a.461.461,0,0,1,.65,0l1.3,1.3a.461.461,0,0,1,0,.65L5.94,10.238a.461.461,0,0,1-.323.134H3.852Z" transform="translate(-2.93 -2.933)" fill="#fff" />
            </G>
        </Svg>

    );
};
export default EditSvg;
