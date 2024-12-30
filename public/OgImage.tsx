import * as React from "react";
import type { SVGProps } from "react";
const SvgOgImage = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={1200}
    height={630}
    fill="none"
    {...props}
  >
    <path fill="#F8F7FF" d="M0 0h1200v630H0z" />
    <g transform="matrix(.8 0 0 .8 450 150)">
      <path
        fill="#4338CA"
        stroke="#312E81"
        strokeWidth={8}
        d="M400 50 300 200 200 50 100 200 0 50v200h400z"
      />
      <circle cy={50} r={20} fill="#312E81" />
      <circle cx={100} cy={200} r={20} fill="#312E81" />
      <circle cx={200} cy={50} r={20} fill="#312E81" />
      <circle cx={300} cy={200} r={20} fill="#312E81" />
      <circle cx={400} cy={50} r={20} fill="#312E81" />
    </g>
    <text
      x={600}
      y={400}
      fill="#1E1B4B"
      fontFamily="Inter"
      fontSize={64}
      fontWeight="bold"
      textAnchor="middle"
    >
      {"\n    Kingdom Name Generator\n  "}
    </text>
    <text
      x={600}
      y={460}
      fill="#4338CA"
      fontFamily="Inter"
      fontSize={32}
      textAnchor="middle"
    >
      {"\n    Create unique names for your fantasy kingdoms\n  "}
    </text>
  </svg>
);
export default SvgOgImage;
