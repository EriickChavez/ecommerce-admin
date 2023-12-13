import * as React from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';

const OkIcon = (props: SvgProps) => (
  <Svg width={94} height={69} viewBox="0 0 94 69" fill="none" {...props}>
    <Path
      d="M87 7L32 62L7 37"
      stroke="black"
      strokeWidth={13.7431}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    />
  </Svg>
);
export default OkIcon;
