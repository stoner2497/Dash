import * as React from 'react';
import Svg, {G, Circle, Path} from 'react-native-svg';

function SearchBig(props) {
  return (
    <Svg
      width={127.166}
      height={136.525}
      viewBox="0 0 127.166 136.525"
      {...props}>
      <G data-name="Group 110" fill="#ffba0c" stroke="#eda600">
        <G data-name="Ellipse 49">
          <Circle cx={48} cy={48} r={48} stroke="none" />
          <Circle cx={48} cy={48} r={47.5} fill="none" />
        </G>
        <G data-name="Rectangle 52">
          <Path
            stroke="none"
            d="M69.506 85.605l8.483-8.2 49.197 50.896-8.483 8.2z"
          />
          <Path
            fill="none"
            d="M70.213 85.617l7.764-7.505 48.502 50.177-7.764 7.505z"
            strokeWidth={0.99999}
          />
        </G>
      </G>
    </Svg>
  );
}

export default SearchBig;
