import React, { CSSProperties } from "react";

type Props = {
  alt: string;
  src: string;
  width: number;
  height: number;
  style?: CSSProperties;
  [key: string]: unknown;
};
export default function Image(props: Props) {
  return (
    <img
      {...props}
      alt={props.alt}
      src={props.src}
      width={props.width}
      height={props.height}
      style={{
        display: "block",
        outline: "none",
        border: "none",
        textDecoration: "none",
        ...props.style,
      }}
    />
  );
}
