/*

Some style props include default, fallback scales if not defined in the theme object.

// Default Breakpoints
const breakpoints = ['40em', '52em', '64em']
// @media screen and (min-width: 40em)
// @media screen and (min-width: 52em)
// @media screen and (min-width: 64em)

// default space for margin and padding
const space = [0, 4, 8, 16, 32, 64, 128, 256, 512]

*/

const theme = {
  // from the application theme, used in components
  colors: {
    primary: "#2266DD",
    primaryButton: "#124CB1",
    primaryButtonHover: "#0B3B8E",
    primaryButtonText: "#FFFFFF",
    primaryText: "#333333",
    secondary: "#999999",
    secondaryButton: "#EBEBEB",
    secondaryButtonHover: "#D9D9D9",
    secondaryButtonText: "#124CB1",
    secondaryText: "#666666",
    destructiveButton: "#B00000",
    destructiveButtonHover: "#8C0000",
    destructiveButtonHoverText: "#FFFFFF",
    background: "#FFFFFF",
    toolTipBackground: "#000",
    toolTipText: "#FFFFFF",
    overlay: "#000",
    mapNavBackground: "#333333",
    mapNavText: "#FFFFFF",
    mapNavSearchResults: "#9D3800",
    mapNavSearchResultsText: "#FFFFFF",
    widgetBackground: "#F9F9F9",
    widgetText: "#333333",
    widgetIcons: "#333333",
    myLocationPrimaryButton: "#2266DD",
    myLocationPrimaryButtonHover: "#124CB1",
    myLocationSecondaryButton: "#666666",
    myLocationSecondaryButtonHover: "#333333",
    adminMarkerText: "#4d4563",
    adminMarkerStroke: "#FFFFFF",
    programmaticPinMarkersText: "#4d4563",
    programmaticPinMarkersStroke: "#FFFFFF",
    miscBadgeIconColor: "#FFFFFF",
    miscBadgeIconStroke: "#FFFFFF",
    miscBadgeDynamicLabelColor: "#596FA3",
    miscBadgeDynamicLabelStroke: "#FFFFFF",
    miscBadgePinColor: "#215FEB",
    miscBadgePinStroke: "#18419C",
    miscWayfindingStartColor: "#404A59",
    miscWayfindingStartStroke: "#000000",
    miscWayfindingStartGhostColor: "#C1C1C1",
    miscWayfindingStartGhostStroke: "#404A59",
    statusAlertBackground: "#B00000",
    statusAlertText: "#FFFFFF",
    statusActiveBackground: "#00662B",
    statusActiveText: "#FFFFFF",
    statusInfoBackground: "#005B94",
    statusInfoText: "#FFFFFF",
    statusWarningBackground: "#9D3800",
    statusWarningText: "#FFFFFF",
    statusInactiveBackground: "#ebebeb",
    statusInactiveText: "#333333",
    statusSuccessBackground: "#00662B",
    statusSuccessText: "#FFFFFF",
    statusErrorBackground: "#B00000",
    statusErrorText: "#FFFFFF",
    categoryBadgeArt: "#525466",
    categoryBadgeBaggage: "#525466",
    categoryBadgeCheckin: "#525466",
    categoryBadgeConvention: "#60C28F",
    categoryBadgeEat: "#58C173",
    categoryBadgeEntertainment: "#A386DB",
    categoryBadgeEquipment: "#525466",
    categoryBadgeExit: "#2AA74B",
    categoryBadgeGambling: "#A386DB",
    categoryBadgeGate: "#596FA3",
    categoryBadgeInactive: "#909090",
    categoryBadgeHotel: "#525466",
    categoryBadgeMeeting: "#60C28F",
    categoryBadgeOffice: "#6C87BB",
    categoryBadgeParking: "#525466",
    categoryBadgePortal: "#525466",
    categoryBadgeRecreation: "#A386DB",
    categoryBadgeRelax: "#A386DB",
    categoryBadgeRestroom: "#FF9F48",
    categoryBadgeRoom: "#5C8BE0",
    categoryBadgeSecurity: "#DC4747",
    categoryBadgeServices: "#525466",
    categoryBadgeShop: "#59A6ED",
    categoryBadgeTicketing: "#525466",
    categoryBadgeTransport: "#525466",
    categoryBadgeWayfinding: "#E2611A",
    categoryBadgeWorkstation: "#85B0E2",
  },

  // Unique to components
  fonts: {
    default: "'Roboto', sans-serif",
  },
  radii: {
    none: "0",
    xs: "1px",
    sm: "2px",
    md: "4px",
    lg: "8px",
    full: "9999px",
  },

  borders: {
    none: 0,
    xs: "1px solid",
    sm: "2px solid",
    md: "4px solid",
    lg: "8px solid",
  },

  borderWidths: {
    sm: "1px",
    md: "2px",
  },

  letterSpacings: {
    sm: "0.5px",
    md: "1px",
    lg: "2px",
  },

  breakpoints: {
    xs: 0,
    sm: 480,
    md: 736,
    lg: 980,
    xl: 1280,
  },

  shadows: {
    md: "0px 2px 4px rgba(0, 0, 0, 0.2)",
    lg: "0px 6px 10px 0 rgba(0, 0, 0, 0.2)",
    xl: "0px 2px 12px 0 rgba(0, 0, 0, 0.2)",
    xxl: "0px 0px 20px 0 rgba(0, 0, 0, 0.2)",
  },

  fontSizes: {
    sm: "12px",
    md: "14px",
    lg: "16px",
    xl: "20px",
    xxl: "32px",
  },

  iconSizes: {
    sm: "24",
    md: "32",
    lg: "36",
    xl: "40",
    xxl: "48",
  },
};

export default theme;
