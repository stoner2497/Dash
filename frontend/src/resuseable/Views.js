import * as React from "react"
import Svg, { G, Ellipse, Circle, Rect, Path } from "react-native-svg"

function Views(props) {
  return (
    <Svg width={34.688} height={29} viewBox="0 0 34.688 29" {...props}>
      <G fill="#ffba0c">
        <G>
          <G stroke="#eda600">
            <Ellipse cx={7} cy={6.5} rx={7} ry={6.5} stroke="none" />
            <Ellipse cx={7} cy={6.5} rx={6.5} ry={6} fill="none" />
          </G>
          <Ellipse cx={1} cy={1.5} rx={1} ry={1.5} transform="translate(7 1)" />
          <Ellipse cx={1} cy={1.5} rx={1} ry={1.5} transform="translate(7 6)" />
          <Circle cx={1.5} cy={1.5} r={1.5} transform="translate(1 4)" />
          <Ellipse
            cx={2}
            cy={1.5}
            rx={2}
            ry={1.5}
            transform="translate(10 4)"
          />
          <Ellipse
            cx={2}
            cy={0.5}
            rx={2}
            ry={0.5}
            transform="translate(10 9)"
          />
          <Ellipse
            cx={1.5}
            cy={0.5}
            rx={1.5}
            ry={0.5}
            transform="translate(1 9)"
          />
          <Circle cx={1} cy={1} r={1} transform="translate(7 10)" />
        </G>
        <G transform="translate(18.711)">
          <G transform="translate(.289)" stroke="#eda600">
            <Ellipse cx={6} cy={6.5} rx={6} ry={6.5} stroke="none" />
            <Ellipse cx={6} cy={6.5} rx={5.5} ry={6} fill="none" />
          </G>
          <Ellipse
            cx={0.5}
            cy={1.5}
            rx={0.5}
            ry={1.5}
            transform="translate(4.289 1)"
          />
          <Ellipse
            cx={0.5}
            cy={1.5}
            rx={0.5}
            ry={1.5}
            transform="translate(4.289 6)"
          />
          <Ellipse
            cx={0.5}
            cy={1.5}
            rx={0.5}
            ry={1.5}
            transform="translate(1.289 4)"
          />
          <Ellipse
            cx={0.5}
            cy={1.5}
            rx={0.5}
            ry={1.5}
            transform="translate(10.289 4)"
          />
          <Circle cx={0.5} cy={0.5} r={0.5} transform="translate(10.289 9)" />
          <Circle cx={0.5} cy={0.5} r={0.5} transform="translate(1.289 9)" />
          <Ellipse
            cx={0.5}
            cy={1}
            rx={0.5}
            ry={1}
            transform="translate(4.289 10)"
          />
        </G>
        <G transform="translate(4 13)" stroke="#eda600">
          <Rect width={22} height={16} rx={3} stroke="none" />
          <Rect x={0.5} y={0.5} width={21} height={15} rx={2.5} fill="none" />
        </G>
        <Path d="M34.189 26.144l-5.938-2.31v-5.317l5.938-2.623v10.25z" />
        <Path
          d="M33.689 16.661l-4.938 2.182v4.648l4.938 1.922v-8.752m1-1.535v11.75l-6.938-2.7V18.19l6.938-3.065z"
          fill="#eda600"
        />
      </G>
    </Svg>
  )
}

export default Views
