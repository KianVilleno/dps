// Imports
import React from "react"
import styled from "@emotion/styled"

import { Link } from "gatsby"

import { Link as ThemeUIButton, useThemeUI } from "theme-ui"
// Components

const polygonBorders = (color, filled) => {
  let before = filled
    ? "M15.8965 0L4.20378 11.745L0.00102234 27.5L4.20378 43.255L15.8965 55H16.7266V0H15.8965Z"
    : "M6.09435 12.7776L17 2V0H16.1563L4.27172 11.745L-1.79451e-07 27.5L4.27172 43.255L16.1563 55H17V53L6.09435 42.2224L2.10259 27.5L6.09435 12.7776Z"
  let after = filled
    ? "M1.55667 0L13.2493 11.745L17.4521 27.5L13.2493 43.255L1.55667 55H0.726562V0H1.55667Z"
    : "M10.9057 12.7776L0 2V0H0.84373L12.7283 11.745L17 27.5L12.7283 43.255L0.84373 55H0V53L10.9057 42.2224L14.8974 27.5L10.9057 12.7776Z"
  return {
    "&:before": {
      left: "-16px",
      backgroundImage: `url("data:image/svg+xml,%3Csvg width='17' height='55' viewBox='0 0 17 55' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='${before}' fill='%23${color.substr(
        1
      )}'/%3E%3C/svg%3E%0A")`,
    },
    "&:after": {
      right: "-16px",
      backgroundImage: `url("data:image/svg+xml,%3Csvg width='17' height='55' viewBox='0 0 17 55' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='${after}' fill='%23${color.substr(
        1
      )}'/%3E%3C/svg%3E%0A")`,
    },
  }
}

export const Button = props => {
  const { theme, colorMode } = useThemeUI()
  const buttonVariant = props.variant ? props.variant : "primary"
  const color = theme.colors.modes[colorMode]
    ? theme.colors.modes[colorMode].button[buttonVariant].borderColor
    : theme.colors.button[buttonVariant].borderColor
  const filled = props.variant === "filled" ? true : false
  return <ThemeUIButton sx={polygonBorders(color, filled)} {...props} />
}

const TagLink = styled(Link)`
  display: block;
  height: 100px;
`

// export const NewButton = ({ variant = 'primary' }) => {
//   const { theme, colorMode } = useThemeUI()
//   const color = theme.colors.modes[colorMode]
//     ? theme.colors.modes[colorMode].button[variant].borderColor
//     : theme.colors.button[variant].borderColor
//   const filled = props.variant === "filled";
//   return <ThemeUIButton sx={polygonBorders(color, filled)} {...props} />
// }

// const Button = props => {
//   const { children, to, m, mt, mb, ml, mr } = props
//   return (
//     <StyledLink href={to} m={m} mt={mt} mb={mb} ml={ml} mr={mr}>
//       {children}
//     </StyledLink>
//   )
// }

// const StyledLink = styled.a`
//   display: inline-block;
//   padding: 14px 20px;
//   border: 1px solid #111111;
//   border-radius: 13px;
//   color: #000;
//   text-decoration: none;
//   margin: ${(props => props.m) ? props => props.m : "0"};
//   margin-top: ${(props => props.mt) ? props => props.mt : "0"};
//   margin-bottom: ${(props => props.mb) ? props => props.mb : "0"};
//   margin-left: ${(props => props.ml) ? props => props.ml : "0"};
//   margin-right: ${(props => props.mr) ? props => props.mr : "0"};

//   svg {
//     vertical-align: middle;
//   }
// `

// const ButtonLink = styled.a`
//   margin-right: calc(17px + 0.5em);
//   margin-left: calc(17px + 0.5em);
//   border-top-style: solid;
//   border-top-width: 2px;
//   border-bottom-style: solid;
//   border-bottom-width: 2px;
//   font-family: "GT America Mono";
//   text-transform: uppercase;
//   text-decoration: none;
//   height: 55px;
//   line-height: 55px;
//   display: inline-block;
//   padding: 0 10px 0 10px;
//   position: relative;
//   &:before,
//   &:after {
//     position: absolute;
//     top: -2px;
//     width: 17px;
//     height: 55px;
//     content: " ";
//   }
//   &:before {
//     left: -17px;
//   }
//   &:after {
//     right: -17px;
//   }
// `

// export const ButtonDefault = styled(ButtonLink)`
//   border-top-color: ${props => props.theme.colors.button.default.borderColor};
//   border-bottom-color: ${props =>
//     props.theme.colors.button.default.borderColor};
//   background-color: ${props => props.theme.colors.button.default.background};
//   color: ${props => props.theme.colors.button.default.text};
//   &:before {
//     background-image: url("data:image/svg+xml,%3Csvg width='17' height='55' viewBox='0 0 17 55' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M6.09435 12.7776L17 2V0H16.1563L4.27172 11.745L-1.79451e-07 27.5L4.27172 43.255L16.1563 55H17V53L6.09435 42.2224L2.10259 27.5L6.09435 12.7776Z' fill='%23${props =>
//       props.theme.colors.button.default.borderColor.substr(
//         1
//       )}'/%3E%3C/svg%3E%0A");
//   }
//   &:after {
//     background-image: url("data:image/svg+xml,%3Csvg width='17' height='55' viewBox='0 0 17 55' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M10.9057 12.7776L0 2V0H0.84373L12.7283 11.745L17 27.5L12.7283 43.255L0.84373 55H0V53L10.9057 42.2224L14.8974 27.5L10.9057 12.7776Z' fill='%23${props =>
//       props.theme.colors.button.default.borderColor.substr(
//         1
//       )}'/%3E%3C/svg%3E%0A");
//   }
//   &:hover {
//     color: white;
//     background: ${props => props.theme.colors.button.default.borderColor};
//     &:before {
//       background-image: url("data:image/svg+xml,%3Csvg width='17' height='55' viewBox='0 0 17 55' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M16.1563 0L4.27172 11.745L0 27.5L4.27172 43.255L16.1563 55H17V0H16.1563Z' fill='%23${props =>
//         props.theme.colors.button.default.borderColor.substr(
//           1
//         )}'/%3E%3C/svg%3E%0A");
//     }
//     &:after {
//       background-image: url("data:image/svg+xml,%3Csvg width='17' height='55' viewBox='0 0 17 55' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0.843731 0L12.7283 11.745L17 27.5L12.7283 43.255L0.843731 55H0V0H0.843731Z' fill='%23${props =>
//         props.theme.colors.button.default.borderColor.substr(
//           1
//         )}'/%3E%3C/svg%3E%0A");
//     }
//   }
// `

// export const ButtonAlt = styled(ButtonLink)`
//   border-top-color: ${props =>
//     props.theme.colors.button.alternative.borderColor};
//   border-bottom-color: ${props =>
//     props.theme.colors.button.alternative.borderColor};
//   background-color: ${props =>
//     props.theme.colors.button.alternative.background};
//   color: ${props => props.theme.colors.button.alternative.text};
//   &:before {
//     background-image: url("data:image/svg+xml,%3Csvg width='17' height='55' viewBox='0 0 17 55' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M6.09435 12.7776L17 2V0H16.1563L4.27172 11.745L-1.79451e-07 27.5L4.27172 43.255L16.1563 55H17V53L6.09435 42.2224L2.10259 27.5L6.09435 12.7776Z' fill='%23${props =>
//       props.theme.colors.button.alternative.borderColor.substr(
//         1
//       )}'/%3E%3C/svg%3E%0A");
//   }
//   &:after {
//     background-image: url("data:image/svg+xml,%3Csvg width='17' height='55' viewBox='0 0 17 55' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M10.9057 12.7776L0 2V0H0.84373L12.7283 11.745L17 27.5L12.7283 43.255L0.84373 55H0V53L10.9057 42.2224L14.8974 27.5L10.9057 12.7776Z' fill='%23${props =>
//       props.theme.colors.button.alternative.borderColor.substr(
//         1
//       )}'/%3E%3C/svg%3E%0A");
//   }
//   &:hover {
//     color: white;
//     background: ${props => props.theme.colors.button.alternative.borderColor};
//     &:before {
//       background-image: url("data:image/svg+xml,%3Csvg width='17' height='55' viewBox='0 0 17 55' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M16.1563 0L4.27172 11.745L0 27.5L4.27172 43.255L16.1563 55H17V0H16.1563Z' fill='%23${props =>
//         props.theme.colors.button.alternative.borderColor.substr(
//           1
//         )}'/%3E%3C/svg%3E%0A");
//     }
//     &:after {
//       background-image: url("data:image/svg+xml,%3Csvg width='17' height='55' viewBox='0 0 17 55' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0.843731 0L12.7283 11.745L17 27.5L12.7283 43.255L0.843731 55H0V0H0.843731Z' fill='%23${props =>
//         props.theme.colors.button.alternative.borderColor.substr(
//           1
//         )}'/%3E%3C/svg%3E%0A");
//     }
//   }
// `

// export const ButtonHighlight = styled(ButtonLink)`
//   border-top-color: ${props => props.theme.colors.button.highlight.borderColor};
//   border-bottom-color: ${props =>
//     props.theme.colors.button.highlight.borderColor};
//   color: ${props => props.theme.colors.button.highlight.text};
//   background-color: ${props => props.theme.colors.button.highlight.background};
//   &:before {
//     background-image: url("data:image/svg+xml,%3Csvg width='17' height='55' viewBox='0 0 17 55' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M6.09435 12.7776L17 2V0H16.1563L4.27172 11.745L-1.79451e-07 27.5L4.27172 43.255L16.1563 55H17V53L6.09435 42.2224L2.10259 27.5L6.09435 12.7776Z' fill='%23${props =>
//       props.theme.colors.button.highlight.borderColor.substr(
//         1
//       )}'/%3E%3C/svg%3E%0A");
//   }
//   &:after {
//     background-image: url("data:image/svg+xml,%3Csvg width='17' height='55' viewBox='0 0 17 55' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M10.9057 12.7776L0 2V0H0.84373L12.7283 11.745L17 27.5L12.7283 43.255L0.84373 55H0V53L10.9057 42.2224L14.8974 27.5L10.9057 12.7776Z' fill='%23${props =>
//       props.theme.colors.button.highlight.borderColor.substr(
//         1
//       )}'/%3E%3C/svg%3E%0A");
//   }
//   &:hover {
//     color: white;
//     background: ${props => props.theme.colors.button.highlight.borderColor};
//     &:before {
//       background-image: url("data:image/svg+xml,%3Csvg width='17' height='55' viewBox='0 0 17 55' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M16.1563 0L4.27172 11.745L0 27.5L4.27172 43.255L16.1563 55H17V0H16.1563Z' fill='%23${props =>
//         props.theme.colors.button.highlight.borderColor.substr(
//           1
//         )}'/%3E%3C/svg%3E%0A");
//     }
//     &:after {
//       background-image: url("data:image/svg+xml,%3Csvg width='17' height='55' viewBox='0 0 17 55' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0.843731 0L12.7283 11.745L17 27.5L12.7283 43.255L0.843731 55H0V0H0.843731Z' fill='%23${props =>
//         props.theme.colors.button.highlight.borderColor.substr(
//           1
//         )}'/%3E%3C/svg%3E%0A");
//     }
//   }
// `

// const StyledButtonFilled = styled(ButtonLink)`
//   border-top-color: ${props => props.theme.colors.button.filled.borderColor};
//   border-bottom-color: ${props => props.theme.colors.button.filled.borderColor};
//   color: ${props => props.theme.colors.button.filled.text};
//   background-color: ${props => props.theme.colors.button.filled.background};
//   &:before {
//     background-image: url("data:image/svg+xml,%3Csvg width='17' height='55' viewBox='0 0 17 55' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M16.1563 0L4.27172 11.745L0 27.5L4.27172 43.255L16.1563 55H17V0H16.1563Z' fill='%23${props =>
//       props.theme.colors.button.filled.borderColor.substr(
//         1
//       )}'/%3E%3C/svg%3E%0A");
//   }
//   &:after {
//     background-image: url("data:image/svg+xml,%3Csvg width='17' height='55' viewBox='0 0 17 55' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0.843731 0L12.7283 11.745L17 27.5L12.7283 43.255L0.843731 55H0V0H0.843731Z' fill='%23${props =>
//       props.theme.colors.button.filled.borderColor.substr(
//         1
//       )}'/%3E%3C/svg%3E%0A");
//   }
//   &:hover {
//     border-top-color: ${props => props.theme.colors.button.filled.text};
//     border-bottom-color: ${props => props.theme.colors.button.filled.text};
//     color: ${props => props.theme.colors.button.filled.background};
//     background: ${props => props.theme.colors.button.filled.text};
//     &:before {
//       background-image: url("data:image/svg+xml,%3Csvg width='17' height='55' viewBox='0 0 17 55' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M16.1563 0L4.27172 11.745L0 27.5L4.27172 43.255L16.1563 55H17V0H16.1563Z' fill='%23${props =>
//         props.theme.colors.button.filled.text.substr(1)}'/%3E%3C/svg%3E%0A");
//     }
//     &:after {
//       background-image: url("data:image/svg+xml,%3Csvg width='17' height='55' viewBox='0 0 17 55' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0.843731 0L12.7283 11.745L17 27.5L12.7283 43.255L0.843731 55H0V0H0.843731Z' fill='%23${props =>
//         props.theme.colors.button.filled.text.substr(1)}'/%3E%3C/svg%3E%0A");
//     }
//   }
// `

// export const ButtonFilled = props => {
//   const { href, children } = props
//   const context = useThemeUI()
//   const { theme } = context
//   return (
//     <ThemeProvider theme={theme}>
//       <StyledButtonFilled href={href}>{children}</StyledButtonFilled>
//     </ThemeProvider>
//   )
// }

export default Button
