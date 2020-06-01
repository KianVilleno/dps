// Imports
import React from "react"
import styled from "@emotion/styled"
// Components

const Button = props => {
  const { children, to, m, mt, mb, ml, mr } = props
  return (
    <StyledLink href={to} m={m} mt={mt} mb={mb} ml={ml} mr={mr}>
      {children}
    </StyledLink>
  )
}

const StyledLink = styled.a`
  display: inline-block;
  padding: 14px 20px;
  border: 1px solid #111111;
  border-radius: 13px;
  color: #000;
  text-decoration: none;
  margin: ${(props => props.m) ? props => props.m : "0"};
  margin-top: ${(props => props.mt) ? props => props.mt : "0"};
  margin-bottom: ${(props => props.mb) ? props => props.mb : "0"};
  margin-left: ${(props => props.ml) ? props => props.ml : "0"};
  margin-right: ${(props => props.mr) ? props => props.mr : "0"};

  svg {
    vertical-align: middle;
  }
`

export default Button
