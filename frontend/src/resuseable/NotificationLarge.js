import * as React from "react"
import Svg, { G, Path } from "react-native-svg"

function NotificationLarge(props) {
  return (
    <Svg
    width={156.427}
    height={118.352}
    viewBox="0 0 156.427 118.352"
    {...props}
  >
    <G data-name="Group 13">
      <G data-name="Path 26" fill="#eda600">
        <Path d="M155.927 116.126L.5 71.466V45.324L155.927.663v115.463z" />
        <Path
          d="M155.427 1.327L1 45.7V71.09l154.427 44.372V1.327m1-1.327v116.79L0 71.843V44.946L156.427 0z"
          fill="#ffba0c"
        />
      </G>
      <Path
        data-name="Path 27"
        d="M36.806 80.691v17.7l57.688 19.465h5.308l3.185-3.539v-13.453l-8.494-2.477v9.555l-46.716-13.8V83.523"
        fill="none"
        stroke="#ffba0c"
      />
      <Path
        data-name="Line 1"
        fill="none"
        stroke="#ffba0c"
        d="M25.849 37.931v39.695"
      />
    </G>
  </Svg>
  )
}

export default NotificationLarge
