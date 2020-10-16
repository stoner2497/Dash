import * as React from "react"
import Svg, { G, Path, Circle } from "react-native-svg"

function PopularityMeter(props) {
  return (
    <Svg width={31} height={24.513} viewBox="0 0 31 24.513" {...props}>
      <G data-name="Group 134">
        <G data-name="Rectangle 34" fill="#ffba0c" stroke="#ffba0c">
          <Path stroke="none" d="M0 5h4v16H0z" />
          <Path fill="none" d="M.5 5.5h3v15h-3z" />
        </G>
        <G data-name="Rectangle 35" fill="#ffba0c" stroke="#ffba0c">
          <Path stroke="none" d="M26 5h4v16h-4z" />
          <Path fill="none" d="M26.5 5.5h3v15h-3z" />
        </G>
        <G data-name="Ellipse 32" fill="#ffba0c" stroke="#ffba0c">
          <Circle cx={2.5} cy={2.5} r={2.5} stroke="none" />
          <Circle cx={2.5} cy={2.5} r={2} fill="none" />
        </G>
        <G
          data-name="Ellipse 33"
          transform="translate(26)"
          fill="#ffba0c"
          stroke="#ffba0c"
        >
          <Circle cx={2.5} cy={2.5} r={2.5} stroke="none" />
          <Circle cx={2.5} cy={2.5} r={2} fill="none" />
        </G>
        <G data-name="Path 32" fill="#ffba0c">
          <Path d="M24.52 24.013H5.382l4.523-9.498h11.137l3.478 9.498z" />
          <Path d="M10.22 15.015l-4.046 8.498h17.63l-3.112-8.498H10.22m-.631-1h11.802l3.844 10.498H4.59L9.59 14.015z" />
        </G>
        <Path
          data-name="Path 33"
          d="M4.283 2.827l.684.177.76.2.734.228.886.228.988.3.785.177.861.228 1.292.228h7.016l1.672-.228 1.241-.228 1.6-.481 1.393-.456 1.849-.735-.836 1.9-.659.481-.481.279-.557.228-.532.253-.481.3-.709.38-.583.228-.811.279-2.1.329h-7.016l-1.418-.2-.734-.127-1.115-.507-.659-.38-.886-.557-.734-.507-.76-.481-.684-.709z"
          fill="none"
          stroke="#ffba0c"
        />
      </G>
    </Svg>
  )
}

export default PopularityMeter
