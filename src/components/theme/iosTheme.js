import { css } from "styled-components";

const fontSet = {
  Type_A04: css`
    font: -apple-system-caption2;
  `,
  Type_A05: css`
    font: -apple-system-caption1;
  `,
  Type_A06: css`
    font: -apple-system-footnote;
  `,
  Type_A08: css`
    font: -apple-system-subheadline;
  `,
  Type_A09: css`
    font: -apple-system-body;
  `,
  Type_A12: css`
    font: -apple-system-title3;
  `,
  Type_A14: css`
    font: -apple-system-title2;
  `,
  Type_A18: css`
    font: -apple-system-title1;
  `,
  Type_A24: css`
    font: -apple-system-title0;
  `,
};

fontSet.Type_A07 = fontSet.Type_A06;

fontSet.Type_A10 = fontSet.Type_A09;
fontSet.Type_A11 = fontSet.Type_A09;

fontSet.Type_A13 = fontSet.Type_A12;

fontSet.Type_A15 = fontSet.Type_A14;
fontSet.Type_A17 = fontSet.Type_A14;

fontSet.Type_A19 = fontSet.Type_A18;
fontSet.Type_A20 = fontSet.Type_A18;
fontSet.Type_A21 = fontSet.Type_A18;
fontSet.Type_A22 = fontSet.Type_A18;

fontSet.Type_A25 = fontSet.Type_A24;
fontSet.Type_A26 = fontSet.Type_A24;
fontSet.Type_A27 = fontSet.Type_A24;
fontSet.Type_A28 = fontSet.Type_A24;

export default {
  fontSet,
};
