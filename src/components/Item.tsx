import React, { CSSProperties, ReactNode } from "react";

type Props = {
  className?: string;
  style?: CSSProperties;
  align?: JSX.IntrinsicElements["td"]["align"];
  valign?: JSX.IntrinsicElements["td"]["valign"];
  children?: ReactNode;
  bgcolor?: string;

  [key: string]: unknown;
};
export default function Item(props: Props) {
  return (
    <tr>
      <td
        {...props}
        className={props.className}
        align={props.align}
        valign={props.valign}
        style={{
          ...props.style,
          backgroundColor: props.bgcolor,
        }}
      >
        {props.children}
      </td>
    </tr>
  );
}
