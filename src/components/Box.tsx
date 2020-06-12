import React, { CSSProperties, ReactNode } from "react";

type Props = {
  cellPadding?: number;
  cellSpacing?: number;
  border?: string;
  bgcolor?: string;
  width?: string;
  height?: string;
  align?: CSSProperties["textAlign"];
  valign?: CSSProperties["verticalAlign"];
  style?: CSSProperties;
  children: ReactNode;
};
export default function Box({
  cellPadding = 0,
  cellSpacing = 0,
  border = "0",
  align = "left",
  valign = "top",
  children,
  style,
  ...props
}: Props) {
  return (
    <table
      {...props}
      cellPadding={cellPadding}
      cellSpacing={cellSpacing}
      style={{
        ...style,
        border: `${border}px solid black`,
        textAlign: align,
        verticalAlign: valign,
        marginLeft: "auto",
        marginRight: "auto",
      }}
    >
      <tbody>{children}</tbody>
    </table>
  );
}
