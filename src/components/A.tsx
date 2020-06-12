import React, { CSSProperties, ReactNode } from "react";

type Props = Pick<CSSProperties, "color" | "textDecoration"> & {
  href: JSX.IntrinsicElements["a"]["href"];

  download?: string;
  style?: CSSProperties;
  [key: string]: unknown;

  children?: ReactNode;
};

export default function A({
  textDecoration = "underline",
  href,
  download,
  color,
  style,
  ...props
}: Props) {
  return (
    <a
      {...props}
      download={download}
      href={href}
      target="_blank"
      rel="noreferrer"
      style={{
        color,
        textDecoration,
        ...style,
      }}
    />
  );
}
