import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset-advanced';

const mainBrandColor = '#33B760';
const lightShades = '#F9F9F9';
const darkAccent = '#726699';
const darkShades = '#1C1323';

export const theme = {
  // It can be liberally applied to your layout as its main identity.
  mainBrandColor,
  // Accent colors can be used to bring attention to design elements
  // by contrasting with the rest of the palette.
  lightAccent: '#EABE4A',
  // Use this color as the background for your dark-on-light designs,
  // or the text color of an inverted design.
  lightShades,
  // Another accent color to consider. Not all colors have to be used -
  // sometimes a simple color scheme works best.
  darkAccent,
  // Use as the text color for dark-on-light designs,
  // or as the background for inverted designs.
  darkShades,
  dangerColor: '#f44336',

  primaryColor: mainBrandColor,
  borderColor: '#e0e6ef',
  backgroundColor: '#FFFFFF',
  backgroundInputColor: lightShades,
  backgroundInputColorDark: darkShades,
  fontSize: 16,
  fontSizeSmall: 14,
  fontSizeExtraSmall: 12,
  fontSizeMedium: 18,
  fontSizeLarge: 22,
  textColor: darkShades, // '#0A0B11',
  textColorInverse: lightShades,
  textColorLite: '#8B8989',
  menuTintColor: darkAccent,
  primaryFontFamily: "'Nunito', sans-serif",
  secondaryFontFamily: "'Open Sans', sans-serif",
};

const GlobalStyle = createGlobalStyle`
  ${reset};

  body {
    font-family: ${theme.secondaryFontFamily};
  }
  .button.is-primary {
    background-color: ${theme.mainBrandColor};
  }
`;

export default GlobalStyle;
