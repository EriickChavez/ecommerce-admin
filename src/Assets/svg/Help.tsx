import * as React from 'react';
import Svg, {Circle, Path, Line, SvgProps} from 'react-native-svg';
const HelpIcon: React.FC<SvgProps> = props => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}>
    <Circle cx={12} cy={12} r={10} />
    <Path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
    <Line x1={12} y1={17} x2={12.01} y2={17} />
  </Svg>
);
export default HelpIcon;
