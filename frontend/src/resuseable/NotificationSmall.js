import * as React from "react"
import Svg, { G, Path } from "react-native-svg"

function NotificationSmall(props) {
  return (
    <Svg width={42.663} height={32.642} viewBox="0 0 42.663 32.642" {...props}>
      <G data-name="Group 158">
        <G data-name="Path 26" fill="#eda600">
          <Path d="M42.163 31.188L.5 19.218v-6.583L42.163.664v30.524z" />
          <Path
            d="M41.663 1.327L1 13.011v5.83l40.663 11.683V1.327m1-1.327v31.852L0 19.594v-7.336L42.663 0z"
            fill="#ffba0c"
          />
        </G>
        <Path
          data-name="Path 27"
          d="M10.039 22.007v4.826l15.734 5.309h1.448l.869-.965v-3.668l-2.316-.676v2.606l-12.741-3.764v-2.9"
          fill="none"
          stroke="#ffba0c"
        />
        <Path
          data-name="Line 1"
          fill="none"
          stroke="#ffba0c"
          d="M7.05 10.345v10.826"
        />
      </G>
    </Svg>
  )
}

export default NotificationSmall
