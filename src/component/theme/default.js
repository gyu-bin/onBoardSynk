import { css } from "styled-components";

const theme = {
  p2r(px) {
    return (px / this.fontSet.Type_A10.fontSize).toFixed(2);
  },
  lh(sizePx, lineHeightPx) {
    if (sizePx && lineHeightPx) {
      return (lineHeightPx / sizePx).toFixed(3);
    }
    return "";
  },
};

theme.colorSet = {
  color_accent_ui_050: "rgba(224, 245, 252, 1)",
  color_accent_ui_100: "rgba(178, 230, 246, 1)",
  color_accent_ui_200: "rgba(129, 215, 239, 1)",
  color_accent_ui_300: "rgba(80, 198, 230, 1)",
  color_accent_ui_400: "rgba(47, 187, 222, 1)",
  color_accent_ui_500: "rgba(31, 176, 213, 1)",
  color_accent_ui_600: "rgba(27, 161, 194, 1)",
  color_accent_ui_700: "rgba(19, 139, 168, 1)",
  color_accent_ui: "rgba(10, 121, 143, 1)",
  color_text_accent_ui: "rgba(2, 96, 112, 1)",

  primary_text_default_material_light: "rgba(17, 17, 17, 1)",
  primary_text_default_material_light_15: "rgba(17, 17, 17, 0.15)",
  primary_text_default_material_light_20: "rgba(17, 17, 17, 0.2)",
  primary_text_default_material_light_v: "rgba(49, 49, 49, 1)",
  secondary_text_default_material_light: "rgba(98, 98, 98, 1)",
  secondary_text_default_material_light_v: "rgba(118, 118, 118, 1)",
  primary_text_default_material_dark: "rgba(255, 255, 255, 1)",
  background_material_light: "rgba(255, 255, 255, 1)",
  list_separator_background_color: "rgba(236, 236, 236, 1)",
  link_text_color: "rgba(0, 0, 204, 1)",
  color_warning_color: "rgba(194, 0, 34, 1)",
  sui_date_sun: "rgba(194, 0, 34, 1)",
  background_material_dark_40: "rgba(0, 0, 0, 0.4)",
  background_material_dark_30: "rgba(0, 0, 0, 0.3)",
  background_material_dark_10: "rgba(0, 0, 0, 0.1)",

  vector_drawable_progress_bar_stroke_color_start: "rgba(9, 139, 234, 1)",
  vector_drawable_progress_bar_stroke_color_center: "rgba(95, 247, 193, 1)",
  vector_drawable_progress_bar_stroke_color_end: "rgba(9, 139, 234, 1)",
  progress_horizontal_color_start: "rgba(9, 139, 234, 1)",
  progress_horizontal_color_center: "rgba(8, 211, 197, 1)",
  progress_horizontal_color_end: "rgba(150, 255, 182, 1)",
  list_divider_color_50: "rgba(230, 230, 230, 0.5)",
  list_divider_color: "rgba(230, 230, 230, 1)",
  color_ripple_material_light_20: "rgba(73, 73, 73, 0.2)",
  color_control_normal_ui_60: "rgba(136, 136, 136, 0.6)",
  color_control_normal_ui: "rgba(136, 136, 136, 1)",
  color_control_normal_ui_v: "rgba(211, 211, 211, 1)",
  tooltip_background_color: "rgba(178, 230, 246, 1)",
  tool_tip_background_color: "rgba(178, 230, 246, 1)", // 위 색상이 이걸로 이름이 변경됨
  popup_background_color: "rgba(255, 255, 255, 1)",
  toast_popup_background_stroke_60: "rgba(140, 140, 140, 0.6)",
  toast_popup_background_70: "rgba(38, 38, 38, 0.7)",

  color_graph_signal_red_25: "rgba(243, 57, 57, 0.25)",
  color_graph_signal_red: "rgba(243, 57, 57, 1)",
  color_graph_signal_orange_25: "rgba(255, 154, 5, 0.25)",
  color_graph_signal_orange: "rgba(255, 154, 5, 1)",
  color_graph_signal_yellow_25: "rgba(255, 199, 5, 0.25)",
  color_graph_signal_yellow: "rgba(255, 199, 5, 1)",
  color_graph_signal_green_25: "rgba(54, 188, 142, 0.25)",
  color_graph_signal_green: "rgba(54, 188, 142, 1)",
  color_graph_signal_blue_25: "rgba(93, 124, 224, 0.25)",
  color_graph_signal_blue: "rgba(93, 124, 224, 1)",
  color_graph_signal_purple_25: "rgba(85, 5, 225, 0.25)",
  color_graph_signal_purple: "rgba(85, 5, 225, 1)",
  color_graph_signal_magenta_25: "rgba(230, 78, 185, 0.25)",
  color_graph_signal_magenta: "rgba(230, 78, 185, 1)",

  color_accent_ui_light: "rgba(122, 203, 214, 1)",
  color_graph_black: "rgba(17, 17, 17, 1)",
  color_graph_brown: "rgba(196, 120, 30, 1)",
  color_graph_olivegreen: "rgba(94, 152,36, 1)",
  color_graph_cyanblue: "rgba(10, 121, 162, 1)",
  color_graph_violetred: "rgba(175, 74, 152, 1)",

  blue_color_accent_ui_050: "#E2EDFF",
  blue_color_accent_ui_100: "#BBD2FF",
  blue_color_accent_ui_200: "#90B7FF",
  blue_color_accent_ui_300: "#6B9BF9",
  blue_color_accent_ui_400: "#5D86F1",
  blue_color_accent_ui_500: "#5772E7",
  blue_color_accent_ui_600: "#5764D8",
  blue_color_accent_ui_700: "#5452C3",
  blue_color_accent_ui_800: "#453FAC",
  blue_color_accent_ui_900: "#3E34A0",

  deepblue_color_accent_ui_050: "#E3F3FE",
  deepblue_color_accent_ui_100: "#BBE1FE",
  deepblue_color_accent_ui_200: "#8ECEFF",
  deepblue_color_accent_ui_300: "#63BCFE",
  deepblue_color_accent_ui_400: "#3BA3FF",
  deepblue_color_accent_ui_500: "#1A93FF",
  deepblue_color_accent_ui_600: "#2284F9",
  deepblue_color_accent_ui_700: "#2572E5",
  deepblue_color_accent_ui_800: "#1751C7",
  deepblue_color_accent_ui_900: "#0E3AB2",

  green_color_accent_ui_050: "#EDFBF8",
  green_color_accent_ui_100: "#CEF4EE",
  green_color_accent_ui_200: "#99E6DC",
  green_color_accent_ui_300: "#57D4C4",
  green_color_accent_ui_400: "#01BFAB",
  green_color_accent_ui_500: "#00AF99",
  green_color_accent_ui_600: "#009F86",
  green_color_accent_ui_700: "#108E76",
  green_color_accent_ui_800: "#0C7F67",
  green_color_accent_ui_900: "#066F58",

  yellow_color_accent_ui_050: "#FFF8E1",
  yellow_color_accent_ui_100: "#FFECB3",
  yellow_color_accent_ui_200: "#FFE083",
  yellow_color_accent_ui_300: "#FFD650",
  yellow_color_accent_ui_400: "#FFCA2A",
  yellow_color_accent_ui_500: "#FFC20C",
  yellow_color_accent_ui_600: "#FFB407",
  yellow_color_accent_ui_700: "#FFA304",
  yellow_color_accent_ui_800: "#FF9100",
  yellow_color_accent_ui_900: "#DE6400",

  orange_color_accent_ui_050: "#FCEBE6",
  orange_color_accent_ui_100: "#FFD2B9",
  orange_color_accent_ui_200: "#FFB68C",
  orange_color_accent_ui_300: "#FF905D",
  orange_color_accent_ui_400: "#FF693D",
  orange_color_accent_ui_500: "#FF4C19",
  orange_color_accent_ui_600: "#F84615",
  orange_color_accent_ui_700: "#EA3F10",
  orange_color_accent_ui_800: "#DC3809",
  orange_color_accent_ui_900: "#C42800",

  red_color_accent_ui_050: "#FFE8EB",
  red_color_accent_ui_100: "#FFC5CA",
  red_color_accent_ui_200: "#FEA5AB",
  red_color_accent_ui_300: "#F8717C",
  red_color_accent_ui_400: "#EF4A55",
  red_color_accent_ui_500: "#F4353D",
  red_color_accent_ui_600: "#E52A3B",
  red_color_accent_ui_700: "#D32035",
  red_color_accent_ui_800: "#C6162E",
  red_color_accent_ui_900: "#B70022",

  magenta_color_accent_ui_050: "#F8E8FB",
  magenta_color_accent_ui_100: "#EDC4F5",
  magenta_color_accent_ui_200: "#E29CF0",
  magenta_color_accent_ui_300: "#D473E7",
  magenta_color_accent_ui_400: "#C854DE",
  magenta_color_accent_ui_500: "#BB37D5",
  magenta_color_accent_ui_600: "#AC33CE",
  magenta_color_accent_ui_700: "#962FC6",
  magenta_color_accent_ui_800: "#842ABE",
  magenta_color_accent_ui_900: "#6125B1",

  purple_color_accent_ui_050: "#F0E5FB",
  purple_color_accent_ui_100: "#D8C0F5",
  purple_color_accent_ui_200: "#BE96EF",
  purple_color_accent_ui_300: "#A368EA",
  purple_color_accent_ui_400: "#8E42E5",
  purple_color_accent_ui_500: "#7708DE",
  purple_color_accent_ui_600: "#6C00D8",
  purple_color_accent_ui_700: "#5C00D0",
  purple_color_accent_ui_800: "#4C00CB",
  purple_color_accent_ui_900: "#2C00C3",

  onboard_color_type1: "#7f574f",
  onboard_color_type3: "#757575",
  onboard_color_type4: "#626262",
};
const basicFontSet = {
  Type_A04: css`
    font-size: 11px;
  `,
  Type_A05: css`
    font-size: 12px;
  `,
  Type_A06: css`
    font-size: 13px;
  `,
  Type_A08: css`
    font-size: 15px;
  `,
  Type_A09: css`
    font-size: 17px;
  `,
  Type_A12: css`
    font-size: 20px;
  `,
  Type_A14: css`
    font-size: 22px;
  `,
  Type_A18: css`
    font-size: 28px;
  `,
  Type_A24: css`
    font-size: 34px;
  `,
};

basicFontSet.Type_A07 = basicFontSet.Type_A06;

basicFontSet.Type_A10 = basicFontSet.Type_A09;
basicFontSet.Type_A11 = basicFontSet.Type_A09;

basicFontSet.Type_A13 = basicFontSet.Type_A12;

basicFontSet.Type_A15 = basicFontSet.Type_A14;
basicFontSet.Type_A17 = basicFontSet.Type_A14;

basicFontSet.Type_A19 = basicFontSet.Type_A18;
basicFontSet.Type_A20 = basicFontSet.Type_A18;
basicFontSet.Type_A21 = basicFontSet.Type_A18;
basicFontSet.Type_A22 = basicFontSet.Type_A18;

basicFontSet.Type_A25 = basicFontSet.Type_A24;
basicFontSet.Type_A26 = basicFontSet.Type_A24;
basicFontSet.Type_A27 = basicFontSet.Type_A24;
basicFontSet.Type_A28 = basicFontSet.Type_A24;

theme.fontSet = basicFontSet;

theme.fontWeight = {
  Thin: 100,
  Light: 300,
  Regular: 400,
  Medium: 500,
  Bold: 700,
};

theme.func = {
  getSafeArea: () => {
    const rootRef = getComputedStyle(document.querySelector("#root"));
    const safeAreaValue = (direction) => {
      const propertyValue = rootRef.getPropertyValue(direction);
      if (propertyValue) {
        return parseInt(propertyValue);
      }
      return 0;
    };
    return {
      right: safeAreaValue("--safe-area-right"),
      left: safeAreaValue("--safe-area-left"),
      top: safeAreaValue("--safe-area-top"),
      bottom: safeAreaValue("--safe-area-bottom"),
    };
  },
};

export {theme as defaultTheme};
