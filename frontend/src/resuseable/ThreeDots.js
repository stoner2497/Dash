import * as React from "react"
import Svg, { G, Circle } from "react-native-svg"

function ThreeDots(props) {
  return (
    <Svg width={6} height={22} viewBox="0 0 6 22" {...props}>
    <G fill="#ffba0c" stroke="#ffba0c">
      <G>
        <Circle cx={3} cy={3} r={3} stroke="none" />
        <Circle cx={3} cy={3} r={2.5} fill="none" />
      </G>
      <G transform="translate(0 8)">
        <Circle cx={3} cy={3} r={3} stroke="none" />
        <Circle cx={3} cy={3} r={2.5} fill="none" />
      </G>
      <G transform="translate(0 16)">
        <Circle cx={3} cy={3} r={3} stroke="none" />
        <Circle cx={3} cy={3} r={2.5} fill="none" />
      </G>
    </G>
  </Svg>
  )
}

export default ThreeDots