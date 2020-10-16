import * as React from "react"
import Svg, { G, Path, Circle } from "react-native-svg"

function Stalker(props) {
  return (
    <Svg width={22.598} height={15.007} viewBox="0 0 22.598 15.007" {...props}>
      <G data-name="Group 169" stroke="#707070">
        <Path
          data-name="Path 111"
          d="M2.618 1.766l.919-.681c0 .008.589-.333.589-.333l.5-.2h1.363l.791.2.821.542.635.589.5.666.558.914.48 1.069.279 1.131v2.48l-.137 1.689-.312.912-.311.813-.49.813-.737.875-.625.588-1.066.513-.926.1-1.219-.179-1.219-.617-1.528-2.089-.536-1.242-.211-.926-.179-1.43.179-2.3.54-1.794.6-1.15z"
          fill="#fff"
          strokeWidth={1.1}
        />
        <Path
          data-name="Path 112"
          d="M14.618 1.766l.919-.681c0 .008.589-.333.589-.333l.5-.2h1.363l.791.2.821.542.635.589.5.666.558.914.48 1.069.279 1.131v2.48l-.137 1.689-.312.912-.311.813-.49.813-.737.875a2.257 2.257 0 01-.625.588 3.29 3.29 0 01-1.066.513 1.675 1.675 0 01-.926.1 7.843 7.843 0 01-1.219-.179 1.922 1.922 0 01-1.219-.617 6.843 6.843 0 01-1.189-1.277 6.186 6.186 0 01-.925-1.787l-.161-1.193-.179-1.43.179-2.3.54-1.794.6-1.15z"
          fill="#fff"
          strokeWidth={1.1}
        />
        <G
          data-name="Ellipse 65"
          transform="translate(.586 4.721)"
          fill="#070707"
        >
          <Circle cx={3} cy={3} r={3} stroke="none" />
          <Circle cx={3} cy={3} r={2.5} fill="none" />
        </G>
        <G
          data-name="Ellipse 66"
          transform="translate(12.586 4.721)"
          fill="#070707"
        >
          <Circle cx={3} cy={3} r={3} stroke="none" />
          <Circle cx={3} cy={3} r={2.5} fill="none" />
        </G>
      </G>
    </Svg>
  )
}

export default Stalker
