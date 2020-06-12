import React, { CSSProperties, ReactNode } from "react";

type Props = Pick<
  CSSProperties,
  "fontFamily" | "fontSize" | "fontWeight" | "color"
> & {
  style?: CSSProperties;
  lineHeight?: number;
  children?: ReactNode;
};
export default function Span({
  fontFamily = "sans-serif",
  fontSize = 14,
  color = "#000",
  fontWeight,
  lineHeight: lineHeightImpl,
  style,
  children,
  ...props
}: Props) {
  const lineHeight = lineHeightImpl ? `${lineHeightImpl}px` : fontSize;
  return (
    <span
      {...props}
      style={{
        fontFamily,
        fontSize,
        fontWeight,
        lineHeight,
        color,
        ...style,
      }}
    >
      {children}
    </span>
  );
}
