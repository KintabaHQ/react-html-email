import React, { CSSProperties, ReactNode } from "react";
import Box from "./Box";
import Item from "./Item";

type Props = {
  title: string;
  lang?: JSX.IntrinsicElements["html"]["lang"];
  bgcolor?: string;
  cellPadding?: number;
  cellSpacing?: number;
  style?: CSSProperties;
  headCSS?: string;
  bodyStyle?: CSSProperties;
  width?: string;
  align?: JSX.IntrinsicElements["td"]["align"];
  valign?: JSX.IntrinsicElements["td"]["valign"];
  children?: ReactNode;
};
// inspired by http://htmlemailboilerplate.com
export default function Email({
  lang = "en",
  width = "600",
  align = "center",
  valign = "top",
  cellPadding,
  cellSpacing,
  bgcolor,
  style,
  title,
  children,
  headCSS,
  bodyStyle,
}: Props) {
  // default nested 600px wide outer table container (see http://templates.mailchimp.com/development/html/)
  return (
    <html lang={lang} data-xmlns="http://www.w3.org/1999/xhtml">
      <head>
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{title}</title>
        {headCSS == null ? null : <style type="text/css">{headCSS}</style>}
      </head>
      <body
        style={{
          width: "100%",
          margin: 0,
          padding: 0,
          WebkitTextSizeAdjust: "100%",
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          ["msTextSizeAdjust" as any]: "100%",
          ...bodyStyle,
        }}
      >
        <Box width="100%" height="100%" bgcolor={bgcolor}>
          <Item align={align} valign={valign}>
            <Box
              width={width}
              align="center"
              cellPadding={cellPadding}
              cellSpacing={cellSpacing}
              style={style}
            >
              {children}
            </Box>
          </Item>
        </Box>
      </body>
    </html>
  );
}
